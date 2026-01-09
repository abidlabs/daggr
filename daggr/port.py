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

    def __rshift__(self, other: Port | Node) -> Port:
        from daggr.edge import Edge
        if isinstance(other, Port):
            Edge(self, other)
            return other.node._default_output_port()
        else:
            target_port = other._default_input_port()
            Edge(self, target_port)
            return other._default_output_port()

    def _as_source(self) -> tuple[Node, str]:
        return (self.node, self.name)

    def _as_target(self) -> tuple[Node, str]:
        return (self.node, self.name)

