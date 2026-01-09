from __future__ import annotations

from contextvars import ContextVar
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from daggr.graph import Graph


class Context:
    root_graph: Graph | None = None
    id: int = 0


class LocalContext:
    graph: ContextVar[Graph | None] = ContextVar("graph", default=None)


def get_graph_context() -> Graph | None:
    local_graph = LocalContext.graph.get(None)
    if local_graph is not None:
        return local_graph
    return Context.root_graph


def set_graph_context(graph: Graph | None):
    if LocalContext.graph.get(None) is not None:
        LocalContext.graph.set(graph)
    else:
        Context.root_graph = graph

