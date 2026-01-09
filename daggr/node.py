from __future__ import annotations

import inspect
from typing import Any, Callable, Dict, List, Optional
from abc import ABC, abstractmethod

from daggr.context import Context
from daggr.port import Port


class Node(ABC):
    _id_counter = 0

    def __init__(self, name: Optional[str] = None):
        self._id = Node._id_counter
        Node._id_counter += 1
        self._name = name
        self._input_ports: List[str] = []
        self._output_ports: List[str] = []
        self._api_info: Optional[Dict[str, Any]] = None

    @property
    @abstractmethod
    def name(self) -> str:
        pass

    def __getitem__(self, port_name: str) -> Port:
        return Port(self, port_name)

    def __rshift__(self, other: Port | Node) -> Port:
        from daggr.edge import Edge
        source_port = self._default_output_port()
        if isinstance(other, Port):
            Edge(source_port, other)
            return other.node._default_output_port()
        else:
            target_port = other._default_input_port()
            Edge(source_port, target_port)
            return other._default_output_port()

    def _default_port(self) -> Port:
        return self._default_output_port()

    def _default_output_port(self) -> Port:
        if self._output_ports:
            return Port(self, self._output_ports[0])
        return Port(self, "output")

    def _default_input_port(self) -> Port:
        if self._input_ports:
            return Port(self, self._input_ports[0])
        return Port(self, "input")

    def __repr__(self):
        return f"{self.__class__.__name__}(name={self.name})"


class GradioNode(Node):
    def __init__(
        self,
        src: str,
        name: Optional[str] = None,
        inputs: Optional[List[str]] = None,
    ):
        super().__init__(name)
        self.src = src
        self._inputs_override = inputs
        self._discovered = False

    @property
    def name(self) -> str:
        if self._name:
            return self._name
        return self.src.split("/")[-1]

    def discover_api(self):
        if self._discovered:
            return
        try:
            from gradio_client import Client
            client = Client(self.src)
            api_info = client.view_api(return_format="dict")
            self._api_info = api_info

            if isinstance(api_info, dict):
                endpoints = api_info.get("named_endpoints", {})
                predict_info = None
                for key, value in endpoints.items():
                    if "/predict" in key or key == "predict":
                        predict_info = value
                        break
                if not predict_info and endpoints:
                    predict_info = list(endpoints.values())[0]

                if predict_info:
                    params = predict_info.get("parameters", [])
                    returns = predict_info.get("returns", [])
                    self._input_ports = [
                        p.get("parameter_name") or p.get("label") or f"input_{i}"
                        for i, p in enumerate(params)
                    ]
                    self._output_ports = [
                        r.get("label") or f"output_{i}"
                        for i, r in enumerate(returns)
                    ]
        except Exception as e:
            print(f"Warning: Could not discover API for {self.name}: {e}")

        if self._inputs_override:
            self._input_ports = self._inputs_override

        if not self._output_ports:
            self._output_ports = ["output"]
        if not self._input_ports:
            self._input_ports = ["input"]

        self._discovered = True


class InferenceNode(Node):
    def __init__(
        self,
        model: str,
        name: Optional[str] = None,
    ):
        super().__init__(name)
        self.model = model
        self._input_ports = ["input"]
        self._output_ports = ["output"]

    @property
    def name(self) -> str:
        if self._name:
            return self._name
        return self.model.split("/")[-1]


class FnNode(Node):
    def __init__(
        self,
        fn: Callable,
        name: Optional[str] = None,
        outputs: Optional[List[str]] = None,
    ):
        super().__init__(name)
        self.fn = fn
        self._outputs_override = outputs
        self._discover_signature()

    @property
    def name(self) -> str:
        if self._name:
            return self._name
        return self.fn.__name__

    def _discover_signature(self):
        sig = inspect.signature(self.fn)
        self._input_ports = list(sig.parameters.keys())
        if self._outputs_override:
            self._output_ports = self._outputs_override
        else:
            self._output_ports = ["output"]


class InteractionNode(Node):
    def __init__(
        self,
        name: Optional[str] = None,
        interaction_type: str = "generic",
    ):
        super().__init__(name)
        self.interaction_type = interaction_type
        self._input_ports = ["input"]
        self._output_ports = ["output"]

    @property
    def name(self) -> str:
        if self._name:
            return self._name
        return f"interaction_{self._id}"
