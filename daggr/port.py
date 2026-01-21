from __future__ import annotations

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from daggr.node import Node


class Port:
    def __init__(self, node: Node, name: str):
        self.node = node
        self.name = name

    def __repr__(self):
        return f"Port({self.node.name}.{self.name})"

    def _as_source(self) -> tuple[Node, str]:
        return (self.node, self.name)

    def _as_target(self) -> tuple[Node, str]:
        return (self.node, self.name)


class PortNamespace:
    def __init__(self, node: Node, port_names: list[str]):
        self._node = node
        self._names = set(port_names)

    def __getattr__(self, name: str) -> Port:
        if name.startswith("_"):
            raise AttributeError(name)
        return Port(self._node, name)

    def __dir__(self) -> list[str]:
        return list(self._names)

    def __repr__(self):
        return f"PortNamespace({list(self._names)})"
