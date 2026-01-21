from __future__ import annotations

import inspect
from abc import ABC, abstractmethod
from typing import Any, Callable, List, Optional

from daggr.port import Port, PortNamespace


class Node(ABC):
    _id_counter = 0

    def __init__(self, name: Optional[str] = None, outputs: Optional[List[Any]] = None):
        self._id = Node._id_counter
        Node._id_counter += 1
        self._name = name
        self._input_ports: List[str] = []
        self._output_ports: List[str] = []
        self._output_components: List[Any] = outputs or []

    @property
    @abstractmethod
    def name(self) -> str:
        pass

    @property
    def inputs(self) -> PortNamespace:
        return PortNamespace(self, self._input_ports)

    @property
    def outputs(self) -> PortNamespace:
        return PortNamespace(self, self._output_ports)

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
        outputs: Optional[List[Any]] = None,
    ):
        super().__init__(name, outputs)
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
                        r.get("label") or f"output_{i}" for i, r in enumerate(returns)
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
        outputs: Optional[List[Any]] = None,
    ):
        super().__init__(name, outputs)
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
        outputs: Optional[List[Any]] = None,
    ):
        super().__init__(name, outputs)
        self.fn = fn
        self._discover_signature()

    @property
    def name(self) -> str:
        if self._name:
            return self._name
        return self.fn.__name__

    def _discover_signature(self):
        sig = inspect.signature(self.fn)
        self._input_ports = list(sig.parameters.keys())
        if self._output_components:
            self._output_ports = [
                self._get_component_label(c, i)
                for i, c in enumerate(self._output_components)
            ]
        else:
            self._output_ports = ["output"]

    def _get_component_label(self, component: Any, index: int) -> str:
        if hasattr(component, "label") and component.label:
            return component.label
        return f"output_{index}"


class InteractionNode(Node):
    def __init__(
        self,
        name: Optional[str] = None,
        interaction_type: str = "generic",
        outputs: Optional[List[Any]] = None,
    ):
        super().__init__(name, outputs)
        self.interaction_type = interaction_type
        self._input_ports = ["input"]
        self._output_ports = ["output"]

    @property
    def name(self) -> str:
        if self._name:
            return self._name
        return f"interaction_{self._id}"


class InputNode(Node):
    _instance_counter = 0

    def __init__(
        self,
        inputs: List[Any],
        name: Optional[str] = None,
    ):
        super().__init__(name)
        InputNode._instance_counter += 1
        self._input_components = inputs
        self._input_ports = []
        self._output_ports = []
        for i, component in enumerate(inputs):
            label = self._get_component_label(component, i)
            self._output_ports.append(label)

    @property
    def name(self) -> str:
        if self._name:
            return self._name
        return f"input_{InputNode._instance_counter}"

    def _get_component_label(self, component: Any, index: int) -> str:
        if hasattr(component, "label") and component.label:
            return component.label
        return f"input_{index}"


class MapNode(Node):
    _instance_counter = 0

    def __init__(
        self,
        fn: Callable,
        item_output: Any,
        name: Optional[str] = None,
    ):
        super().__init__(name)
        MapNode._instance_counter += 1
        self.fn = fn
        self.item_output = item_output
        self._discover_signature()

    @property
    def name(self) -> str:
        if self._name:
            return self._name
        return f"map_{MapNode._instance_counter}"

    def _discover_signature(self):
        sig = inspect.signature(self.fn)
        params = list(sig.parameters.keys())
        self._item_param = params[0] if params else "item"
        self._context_params = params[1:] if len(params) > 1 else []
        self._input_ports = ["items"] + self._context_params
        self._output_ports = ["results"]
