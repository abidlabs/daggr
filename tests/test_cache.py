"""Tests for cache directory resolution."""

import os
import tempfile
from unittest import mock


def test_cache_directories_respect_hf_home_env_var():
    """Test that daggr and spaces cache directories respect HF_HOME env var."""
    with tempfile.TemporaryDirectory() as custom_hf_home:
        with mock.patch.dict(os.environ, {"HF_HOME": custom_hf_home}):
            # Reload huggingface_hub.constants to pick up the new env var
            import importlib

            import huggingface_hub.constants

            importlib.reload(huggingface_hub.constants)

            from daggr.local_space import _get_spaces_cache_dir
            from daggr.state import get_daggr_cache_dir

            daggr_cache = get_daggr_cache_dir()
            spaces_cache = _get_spaces_cache_dir()

            assert str(daggr_cache).startswith(custom_hf_home)
            assert str(spaces_cache).startswith(custom_hf_home)
            assert daggr_cache.name == "daggr"
            assert spaces_cache.name == "spaces"

            # Reload to restore original state
            importlib.reload(huggingface_hub.constants)
