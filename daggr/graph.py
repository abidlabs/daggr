from __future__ import annotations

from typing import Dict, List, Optional, Any

import networkx as nx

from daggr.context import Context, get_graph_context, set_graph_context
from daggr.node import Node, GradioNode


class Graph:
    def __init__(self, name: str = "daggr-workflow"):
        self.name = name
        self.nodes: Dict[str, Node] = {}
        self._nx_graph = nx.DiGraph()
        self._edges: List[Any] = []
        self._parent: Optional[Graph] = None

    def __enter__(self) -> Graph:
        self._parent = get_graph_context()
        Context.root_graph = self
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        Context.root_graph = self._parent
        self._parent = None
        return False

    def _add_node(self, node: Node) -> None:
        if node.name in self.nodes:
            if self.nodes[node.name] is not node:
                raise ValueError(f"Node with name '{node.name}' already exists")
            return
        self.nodes[node.name] = node
        self._nx_graph.add_node(node.name)

        if isinstance(node, GradioNode):
            node.discover_api()

    def _add_edge(self, edge: Any) -> None:
        from daggr.edge import Edge

        self._add_node(edge.source_node)
        self._add_node(edge.target_node)

        self._edges.append(edge)
        self._nx_graph.add_edge(edge.source_node.name, edge.target_node.name)

        if not nx.is_directed_acyclic_graph(self._nx_graph):
            self._nx_graph.remove_edge(edge.source_node.name, edge.target_node.name)
            self._edges.pop()
            raise ValueError("Connection would create a cycle in the DAG")

    def get_entry_nodes(self) -> List[Node]:
        entry_nodes = []
        for node_name in self.nodes:
            if self._nx_graph.in_degree(node_name) == 0:
                entry_nodes.append(self.nodes[node_name])
        return entry_nodes

    def get_execution_order(self) -> List[str]:
        return list(nx.topological_sort(self._nx_graph))

    def get_connections(self) -> List[tuple]:
        return [edge.as_tuple() for edge in self._edges]

    def launch(self, **kwargs):
        from daggr.ui import UIGenerator

        ui_generator = UIGenerator(self)
        demo = ui_generator.generate_ui()
        return demo.launch(**kwargs)

    def __repr__(self):
        return f"Graph(name={self.name}, nodes={len(self.nodes)}, edges={len(self._edges)})"

