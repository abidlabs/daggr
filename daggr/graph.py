from __future__ import annotations

import difflib
from typing import Dict, List, Optional, Sequence

import networkx as nx

from daggr.edge import Edge
from daggr.node import Node
from daggr.port import Port


def _suggest_similar(invalid: str, valid_options: set) -> Optional[str]:
    matches = difflib.get_close_matches(invalid, valid_options, n=1, cutoff=0.6)
    return matches[0] if matches else None


class Graph:
    def __init__(self, name: str, nodes: Optional[Sequence[Node]] = None):
        """
        Create a new Graph.

        Args:
            name: A unique identifier for this graph. Required for persistence -
                  each daggr app needs a unique name so that saved data (sheets,
                  inputs, results) can be associated with the correct app.
            nodes: Optional list of nodes to add to the graph.
        """
        if not name or not isinstance(name, str):
            raise ValueError(
                "Graph requires a unique 'name' parameter. This is needed to persist "
                "data (sheets, inputs, results) uniquely across different daggr apps. "
                "Example: Graph(name='my-podcast-generator', nodes=[...])"
            )
        self.name = name
        self.nodes: Dict[str, Node] = {}
        self._nx_graph = nx.DiGraph()
        self._edges: List[Edge] = []

        if nodes:
            for node in nodes:
                self.add(node)

    def add(self, node: Node) -> Graph:
        self._add_node(node)
        self._create_edges_from_port_connections(node)
        return self

    def edge(self, source: Port, target: Port) -> Graph:
        edge = Edge(source, target)
        self._add_edge(edge)
        return self

    def _add_node(self, node: Node) -> None:
        if node._name in self.nodes:
            if self.nodes[node._name] is not node:
                raise ValueError(f"Node with name '{node._name}' already exists")
            return
        self.nodes[node._name] = node
        self._nx_graph.add_node(node._name)

    def _create_edges_from_port_connections(self, node: Node) -> None:
        for target_port_name, source_port in node._port_connections.items():
            source_node = source_port.node
            source_port_name = source_port.name

            if source_port_name not in source_node._output_ports:
                available = set(source_node._output_ports)
                suggestion = _suggest_similar(source_port_name, available)
                available_str = ", ".join(available) or "(none)"
                msg = (
                    f"Output port '{source_port_name}' not found on node "
                    f"'{source_node._name}'. Available outputs: {available_str}"
                )
                if suggestion:
                    msg += f" Did you mean '{suggestion}'?"
                raise ValueError(msg)

            self._add_node(source_node)
            target_port = Port(node, target_port_name)
            edge = Edge(source_port, target_port)
            self._add_edge(edge)

    def _add_edge(self, edge: Edge) -> None:
        self._add_node(edge.source_node)
        self._add_node(edge.target_node)

        self._edges.append(edge)
        self._nx_graph.add_edge(edge.source_node._name, edge.target_node._name)

        if not nx.is_directed_acyclic_graph(self._nx_graph):
            self._nx_graph.remove_edge(edge.source_node._name, edge.target_node._name)
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

    def _validate_edges(self) -> None:
        errors = []
        for edge in self._edges:
            source_node = edge.source_node
            target_node = edge.target_node
            source_port = edge.source_port
            target_port = edge.target_port

            if source_port not in source_node._output_ports:
                available = set(source_node._output_ports)
                available_str = ", ".join(available) or "(none)"
                suggestion = _suggest_similar(source_port, available)
                msg = (
                    f"Output port '{source_port}' not found on node "
                    f"'{source_node._name}'. Available outputs: {available_str}"
                )
                if suggestion:
                    msg += f" Did you mean '{suggestion}'?"
                errors.append(msg)

            if target_port not in target_node._input_ports:
                available = set(target_node._input_ports)
                available_str = ", ".join(available) or "(none)"
                suggestion = _suggest_similar(target_port, available)
                msg = (
                    f"Input port '{target_port}' not found on node "
                    f"'{target_node._name}'. Available inputs: {available_str}"
                )
                if suggestion:
                    msg += f" Did you mean '{suggestion}'?"
                errors.append(msg)

        if errors:
            raise ValueError("Invalid port connections:\n  - " + "\n  - ".join(errors))

    def launch(
        self, host: str = "127.0.0.1", port: int = 7860, share: bool = False, **kwargs
    ):
        from daggr.server import DaggrServer

        server = DaggrServer(self)
        server.run(host=host, port=port, share=share, **kwargs)

    def __repr__(self):
        return f"Graph(name={self.name}, nodes={len(self.nodes)}, edges={len(self._edges)})"
