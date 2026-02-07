"""Edge module for connecting ports between nodes."""

from __future__ import annotations

from typing import TYPE_CHECKING

from daggr.port import GatheredPort, ScatteredPort

if TYPE_CHECKING:
    from daggr.port import PortLike


class Edge:
    """Represents a connection between two ports in a graph.

    Edges connect an output port of one node to an input port of another,
    defining how data flows through the graph.

    Attributes:
        source_node: The node providing the output.
        source_port: Name of the output port.
        target_node: The node receiving the input.
        target_port: Name of the input port.
        is_scattered: True if this edge scatters a list to multiple executions.
        is_gathered: True if this edge gathers results back into a list.
        item_key: For scattered edges, the key to extract from each item.
    """

    def __init__(self, source: PortLike, target: PortLike):
        self.is_scattered = isinstance(source, ScatteredPort)
        self.is_gathered = isinstance(source, GatheredPort)
        self.item_key: str | None = None

        if self.is_scattered:
            self.item_key = source.item_key

        self.source_node = source.node
        self.source_port = source.name
        self.target_node = target.node
        self.target_port = target.name

    def __repr__(self):
        prefix = ""
        if self.is_scattered:
            key_info = f"['{self.item_key}']" if self.item_key else ""
            prefix = f"scatter{key_info}:"
        elif self.is_gathered:
            prefix = "gather:"
        return (
            f"Edge({prefix}{self.source_node._name}.{self.source_port} -> "
            f"{self.target_node._name}.{self.target_port})"
        )

    def as_tuple(self) -> tuple[str, str, str, str]:
        return (
            self.source_node._name,
            self.source_port,
            self.target_node._name,
            self.target_port,
        )
