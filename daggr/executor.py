from __future__ import annotations

from typing import TYPE_CHECKING, Dict, Any, Optional

if TYPE_CHECKING:
    from daggr.graph import Graph


class SequentialExecutor:
    def __init__(self, graph: Graph):
        self.graph = graph
        self.clients: Dict[str, Any] = {}
        self.results: Dict[str, Any] = {}

    def _get_client(self, node_name: str):
        from daggr.node import GradioNode

        if node_name not in self.clients:
            node = self.graph.nodes[node_name]
            if isinstance(node, GradioNode):
                from gradio_client import Client
                self.clients[node_name] = Client(node.src)
        return self.clients.get(node_name)

    def _prepare_inputs(self, node_name: str) -> Dict[str, Any]:
        inputs = {}
        connections = self.graph.get_connections()

        for source_name, source_output, target_name, target_input in connections:
            if target_name == node_name:
                if source_name in self.results:
                    source_result = self.results[source_name]
                    if isinstance(source_result, dict) and source_output in source_result:
                        inputs[target_input] = source_result[source_output]
                    elif isinstance(source_result, (list, tuple)):
                        try:
                            output_idx = int(source_output.replace("output_", "").replace("output", "0"))
                            if 0 <= output_idx < len(source_result):
                                inputs[target_input] = source_result[output_idx]
                        except (ValueError, TypeError):
                            if len(source_result) > 0:
                                inputs[target_input] = source_result[0]
                    else:
                        inputs[target_input] = source_result

        return inputs

    def execute_node(
        self,
        node_name: str,
        user_inputs: Optional[Dict[str, Any]] = None
    ) -> Any:
        from daggr.node import GradioNode, FnNode, InferenceNode, InteractionNode

        node = self.graph.nodes[node_name]
        inputs = self._prepare_inputs(node_name)

        if user_inputs:
            if isinstance(user_inputs, dict):
                inputs.update(user_inputs)
            else:
                if node._input_ports:
                    inputs[node._input_ports[0]] = user_inputs
                else:
                    inputs["input"] = user_inputs

        try:
            if isinstance(node, GradioNode):
                client = self._get_client(node_name)
                if client:
                    if inputs:
                        result = client.predict(**inputs)
                    else:
                        result = client.predict()
                else:
                    result = None

            elif isinstance(node, FnNode):
                fn_kwargs = {}
                for port_name in node._input_ports:
                    if port_name in inputs:
                        fn_kwargs[port_name] = inputs[port_name]
                result = node.fn(**fn_kwargs)

            elif isinstance(node, InferenceNode):
                from huggingface_hub import InferenceClient
                client = InferenceClient(model=node.model)
                input_value = inputs.get("input", inputs.get(node._input_ports[0]) if node._input_ports else None)
                result = client.text_generation(input_value) if input_value else None

            elif isinstance(node, InteractionNode):
                result = inputs.get("input", inputs.get(node._input_ports[0]) if node._input_ports else None)

            else:
                result = None

            self.results[node_name] = result
            return result

        except Exception as e:
            raise RuntimeError(f"Error executing node '{node_name}': {e}")

    def execute_all(self, entry_inputs: Dict[str, Dict[str, Any]]) -> Dict[str, Any]:
        execution_order = self.graph.get_execution_order()
        self.results = {}

        for node_name in execution_order:
            user_input = entry_inputs.get(node_name, {})
            self.execute_node(node_name, user_input)

        return self.results
