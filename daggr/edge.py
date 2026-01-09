from __future__ import annotations

from typing import TYPE_CHECKING

from daggr.context import get_graph_context

if TYPE_CHECKING:
    from daggr.node import Node
    from daggr.port import Port


class Edge:
    def __init__(self, source: Port | Node, target: Port | Node):
        from daggr.node import Node
        from daggr.port import Port

        if isinstance(source, Node):
            source = source._default_port()
        if isinstance(target, Node):
            target = target._default_port()

        self.source_node = source.node
        self.source_port = source.name
        self.target_node = target.node
        self.target_port = target.name

        graph = get_graph_context()
        if graph is None:
            raise RuntimeError(
                "Cannot create edge outside of a Graph context. "
                "Use 'with Graph() as graph:' to create a graph context."
            )
        graph._add_edge(self)

    def __repr__(self):
        return (
            f"Edge({self.source_node.name}[{self.source_port}] >> "
            f"{self.target_node.name}[{self.target_port}])"
        )

    def as_tuple(self) -> tuple[str, str, str, str]:
        return (
            self.source_node.name,
            self.source_port,
            self.target_node.name,
            self.target_port,
        )

