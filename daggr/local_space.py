from __future__ import annotations

import atexit
import hashlib
import json
import os
import re
import select
import shutil
import socket
import subprocess
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime
from pathlib import Path
from typing import TYPE_CHECKING, Any

if TYPE_CHECKING:
    from daggr.node import GradioNode

from daggr.state import get_daggr_cache_dir


def _get_spaces_cache_dir() -> Path:
    return get_daggr_cache_dir() / "spaces"


def _get_logs_dir() -> Path:
    return get_daggr_cache_dir() / "logs"


_running_processes: dict[str, subprocess.Popen] = {}


def _get_space_dir(space_id: str) -> Path:
    spaces_dir = _get_spaces_cache_dir()
    parts = space_id.split("/")
    if len(parts) == 2:
        owner, name = parts
        return spaces_dir / owner / name
    return spaces_dir / space_id.replace("/", "_")


def _get_metadata_path(space_dir: Path) -> Path:
    return space_dir / ".daggr_metadata.json"


def _hash_file(file_path: Path) -> str:
    if not file_path.exists():
        return ""
    return hashlib.sha256(file_path.read_bytes()).hexdigest()[:16]


def _find_free_port(start: int = 7861, end: int = 7960) -> int:
    for port in range(start, end):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            try:
                s.bind(("127.0.0.1", port))
                return port
            except OSError:
                continue
    raise RuntimeError(f"No free ports available in range {start}-{end}")


def _is_space_id(src: str) -> bool:
    if src.startswith("http://") or src.startswith("https://"):
        return False
    return "/" in src and not src.startswith("/")


class LocalSpaceManager:
    def __init__(self, node: GradioNode):
        self.node = node
        self.space_id = node._src
        self.space_dir = _get_space_dir(self.space_id)
        self.repo_dir = self.space_dir / "repo"
        self.venv_dir = self.space_dir / ".venv"
        self.metadata_path = _get_metadata_path(self.space_dir)
        self.process: subprocess.Popen | None = None
        self.local_url: str | None = None

    def ensure_ready(self) -> str:
        if not _is_space_id(self.space_id):
            raise ValueError(
                f"Cannot run locally: '{self.space_id}' is not a valid Space ID. "
                "Local mode only works with Hugging Face Spaces (format: 'owner/space-name')."
            )

        try:
            self._ensure_cloned()
            self._ensure_venv()
            url = self._launch_app()
            return url
        except Exception as e:
            self._log_error(e)
            raise

    def _ensure_cloned(self) -> None:
        metadata = self._load_metadata()

        if self.repo_dir.exists() and metadata:
            should_update = os.environ.get("DAGGR_UPDATE_SPACES") == "1"
            if not should_update:
                return

        self.space_dir.mkdir(parents=True, exist_ok=True)

        from huggingface_hub import snapshot_download

        print(f"  Cloning Space '{self.space_id}'...")

        if self.repo_dir.exists():
            shutil.rmtree(self.repo_dir)

        snapshot_download(
            repo_id=self.space_id,
            repo_type="space",
            local_dir=self.repo_dir,
        )

        requirements_path = self.repo_dir / "requirements.txt"
        metadata = {
            "cloned_at": datetime.now().isoformat(),
            "space_id": self.space_id,
            "requirements_hash": _hash_file(requirements_path),
            "python_version": f"{sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}",
        }
        self._save_metadata(metadata)
        print(f"  Cloned to {self.repo_dir}")

    def _get_sdk_version(self) -> str | None:
        readme_path = self.repo_dir / "README.md"
        if not readme_path.exists():
            return None

        try:
            content = readme_path.read_text()
            if not content.startswith("---"):
                return None

            parts = content.split("---", 2)
            if len(parts) < 3:
                return None

            match = re.search(r"sdk_version:\s*['\"]?([^\s'\"]+)", parts[1])
            if match:
                return match.group(1)
        except Exception:
            pass

        return None

    def _ensure_venv(self) -> None:
        requirements_path = self.repo_dir / "requirements.txt"
        current_hash = _hash_file(requirements_path)
        metadata = self._load_metadata()

        venv_python = self.venv_dir / "bin" / "python"
        if sys.platform == "win32":
            venv_python = self.venv_dir / "Scripts" / "python.exe"

        needs_reinstall = False
        if not self.venv_dir.exists() or not venv_python.exists():
            needs_reinstall = True
        elif metadata and metadata.get("requirements_hash") != current_hash:
            needs_reinstall = True

        if not needs_reinstall:
            return

        print(f"  Setting up virtual environment for '{self.space_id}'...")

        if self.venv_dir.exists():
            shutil.rmtree(self.venv_dir)

        subprocess.run(
            [sys.executable, "-m", "venv", str(self.venv_dir)],
            check=True,
            capture_output=True,
        )

        pip_path = self.venv_dir / "bin" / "pip"
        if sys.platform == "win32":
            pip_path = self.venv_dir / "Scripts" / "pip.exe"

        subprocess.run(
            [str(pip_path), "install", "--upgrade", "pip"],
            check=True,
            capture_output=True,
        )

        sdk_version = self._get_sdk_version()
        if sdk_version:
            gradio_pkg = f"gradio=={sdk_version}"
            print(f"  Installing {gradio_pkg}...")
        else:
            gradio_pkg = "gradio"
            print("  Installing gradio (latest)...")

        result = subprocess.run(
            [str(pip_path), "install", gradio_pkg],
            capture_output=True,
            text=True,
        )
        if result.returncode != 0:
            error_msg = result.stderr or result.stdout
            self._log_to_file("pip_install_gradio", error_msg)
            print(f"    Warning: Failed to install {gradio_pkg}")

        if requirements_path.exists():
            print(f"  Installing dependencies from {requirements_path}...")
            print("  (this may take a few minutes)")

            process = subprocess.Popen(
                [str(pip_path), "install", "-r", str(requirements_path)],
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
                bufsize=1,
            )

            output_lines = []
            for line in iter(process.stdout.readline, ""):
                output_lines.append(line)
                line_stripped = line.strip()
                if line_stripped.startswith("Collecting "):
                    pkg = line_stripped.replace("Collecting ", "").split()[0]
                    print(f"    Installing {pkg}...")
                elif (
                    line_stripped.startswith("ERROR:")
                    or "error" in line_stripped.lower()
                ):
                    print(f"    {line_stripped}")

            process.wait()

            if process.returncode != 0:
                error_msg = "".join(output_lines)
                self._log_to_file("pip_install", error_msg)
                print("\n  ❌ Dependency installation failed!")
                print(f"  Full log: {self._get_log_path('pip_install')}")
                raise RuntimeError(
                    f"Failed to install dependencies for '{self.space_id}'.\n"
                    f"See logs at: {self._get_log_path('pip_install')}\n"
                    f"You can try installing manually:\n"
                    f"  {pip_path} install -r {requirements_path}"
                )

        if metadata:
            metadata["requirements_hash"] = current_hash
            self._save_metadata(metadata)

        print("  Virtual environment ready")

    def _launch_app(self) -> str:
        global _running_processes

        if self.space_id in _running_processes:
            proc = _running_processes[self.space_id]
            if proc.poll() is None:
                metadata = self._load_metadata()
                if metadata and metadata.get("local_url"):
                    return metadata["local_url"]

        app_file = self._find_app_file()
        if not app_file:
            raise RuntimeError(
                f"No app.py or main.py found in '{self.space_id}'. "
                "Cannot determine how to launch this Space."
            )

        port = _find_free_port()
        local_url = f"http://127.0.0.1:{port}"

        venv_python = self.venv_dir / "bin" / "python"
        if sys.platform == "win32":
            venv_python = self.venv_dir / "Scripts" / "python.exe"

        timeout = int(os.environ.get("DAGGR_LOCAL_TIMEOUT", "120"))

        env = os.environ.copy()
        env["GRADIO_SERVER_PORT"] = str(port)
        env["GRADIO_SERVER_NAME"] = "127.0.0.1"
        env["PYTHONUNBUFFERED"] = "1"

        print(f"  Launching '{self.space_id}' on port {port}...")
        print(f"  Waiting for app to start (timeout: {timeout}s)...")

        log_file = self._get_log_path("launch")
        log_file.parent.mkdir(parents=True, exist_ok=True)

        self.process = subprocess.Popen(
            [str(venv_python), str(app_file)],
            cwd=str(self.repo_dir),
            env=env,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
        )

        _running_processes[self.space_id] = self.process

        ready, error_output = self._wait_for_ready(local_url, timeout, verbose=True)
        if not ready:
            self._log_to_file("launch", error_output)
            if self.process.poll() is None:
                self.process.terminate()

            print("\n  ❌ Space failed to start!")
            if error_output:
                error_lines = error_output.strip().split("\n")
                relevant_lines = [ln for ln in error_lines if ln.strip()][-10:]
                if relevant_lines:
                    print("  Last output:")
                    for line in relevant_lines:
                        print(f"    {line}")

            print(f"  Full log: {log_file}")
            raise RuntimeError(
                f"Space '{self.space_id}' failed to start.\n"
                f"See logs at: {log_file}\n"
                "Suggestions:\n"
                "  1. Some Spaces require GPU hardware\n"
                "  2. Check the Space's README for requirements\n"
                "  3. Set DAGGR_LOCAL_VERBOSE=1 to see all output"
            )

        metadata = self._load_metadata() or {}
        metadata["local_url"] = local_url
        metadata["last_successful_launch"] = datetime.now().isoformat()
        self._save_metadata(metadata)

        print(f"  Space running at {local_url}")
        return local_url

    def _find_app_file(self) -> Path | None:
        for name in ["app.py", "main.py", "demo.py"]:
            path = self.repo_dir / name
            if path.exists():
                return path
        return None

    def _wait_for_ready(
        self, url: str, timeout: int, verbose: bool = False
    ) -> tuple[bool, str]:
        output_lines: list[str] = []
        start = time.time()
        last_status_time = start
        saw_error = False

        while time.time() - start < timeout:
            if self.process and self.process.stdout:
                while True:
                    if sys.platform == "win32":
                        line = self.process.stdout.readline()
                        if not line:
                            break
                    else:
                        ready, _, _ = select.select([self.process.stdout], [], [], 0)
                        if not ready:
                            break
                        line = self.process.stdout.readline()

                    if line:
                        output_lines.append(line)
                        line_lower = line.lower()
                        if (
                            "traceback" in line_lower
                            or "modulenotfounderror" in line_lower
                        ):
                            saw_error = True
                        if verbose:
                            print(f"    [app] {line.rstrip()}")

            exit_code = self.process.poll() if self.process else None
            if exit_code is not None:
                if self.process and self.process.stdout:
                    remaining = self.process.stdout.read()
                    if remaining:
                        output_lines.append(remaining)
                        if verbose:
                            for rem_line in remaining.strip().split("\n"):
                                if rem_line.strip():
                                    print(f"    [app] {rem_line}")
                print(f"  App process exited with code {exit_code}")
                return False, "".join(output_lines)

            if saw_error:
                time.sleep(0.5)
                if self.process and self.process.poll() is not None:
                    if self.process.stdout:
                        remaining = self.process.stdout.read()
                        if remaining:
                            output_lines.append(remaining)
                    print("  App crashed during startup")
                    return False, "".join(output_lines)

            elapsed = time.time() - start
            if elapsed - (last_status_time - start) >= 10:
                print(f"    Still waiting... ({int(elapsed)}s elapsed)")
                last_status_time = time.time()

            try:
                with urllib.request.urlopen(url, timeout=2) as response:
                    if response.status == 200:
                        return True, "".join(output_lines)
            except (urllib.error.URLError, OSError):
                pass

            time.sleep(0.3)

        return False, "".join(output_lines)

    def _load_metadata(self) -> dict[str, Any] | None:
        if not self.metadata_path.exists():
            return None
        try:
            return json.loads(self.metadata_path.read_text())
        except (json.JSONDecodeError, OSError):
            return None

    def _save_metadata(self, metadata: dict[str, Any]) -> None:
        self.metadata_path.parent.mkdir(parents=True, exist_ok=True)
        self.metadata_path.write_text(json.dumps(metadata, indent=2))

    def _get_log_path(self, log_type: str) -> Path:
        logs_dir = _get_logs_dir()
        logs_dir.mkdir(parents=True, exist_ok=True)
        safe_name = self.space_id.replace("/", "_")
        timestamp = datetime.now().strftime("%Y-%m-%d")
        return logs_dir / f"{safe_name}_{log_type}_{timestamp}.log"

    def _log_to_file(self, log_type: str, content: str) -> None:
        log_path = self._get_log_path(log_type)
        log_path.parent.mkdir(parents=True, exist_ok=True)
        with open(log_path, "w") as f:
            f.write(f"Timestamp: {datetime.now().isoformat()}\n")
            f.write(f"Space: {self.space_id}\n")
            f.write(f"Type: {log_type}\n")
            f.write("=" * 50 + "\n")
            f.write(content)

    def _log_error(self, error: Exception) -> None:
        self._log_to_file("error", str(error))


def prepare_local_node(node: GradioNode) -> None:
    if node._local_failed or node._local_url:
        return

    if not _is_space_id(node._src):
        return

    no_fallback = os.environ.get("DAGGR_LOCAL_NO_FALLBACK") == "1"

    try:
        manager = LocalSpaceManager(node)
        url = manager.ensure_ready()
        node._local_url = url
    except Exception as e:
        node._local_failed = True
        safe_name = node._src.replace("/", "_")

        print(f"\n  ⚠️  Local setup failed for '{node._src}'")
        print(f"  Reason: {e}")
        print(f"  Logs: {_get_logs_dir()}/{safe_name}_*.log")

        if no_fallback:
            raise RuntimeError(
                f"Local execution failed for '{node._src}' and fallback is disabled. "
                f"Error: {e}"
            ) from e

        print("  Will fall back to remote API at execution time.\n")


def get_local_client(node: GradioNode) -> Any:
    if node._local_failed:
        return None

    if node._local_url:
        from gradio_client import Client

        return Client(node._local_url, download_files=False, verbose=False)

    return None


def cleanup_local_processes() -> None:
    global _running_processes
    for space_id, proc in list(_running_processes.items()):
        if proc.poll() is None:
            proc.terminate()
            try:
                proc.wait(timeout=5)
            except subprocess.TimeoutExpired:
                proc.kill()
    _running_processes.clear()


atexit.register(cleanup_local_processes)
