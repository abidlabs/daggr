from __future__ import annotations

from typing import TYPE_CHECKING, Dict, Any, List

import gradio as gr

from daggr.executor import SequentialExecutor

if TYPE_CHECKING:
    from daggr.graph import Graph


class UIGenerator:
    def __init__(self, graph: Graph):
        self.graph = graph
        self.executor = SequentialExecutor(graph)
        self.current_state: Dict[str, Any] = {}
        self.completed_nodes: set = set()

    def _is_entry_or_interaction(self, node_name: str) -> bool:
        from daggr.node import InteractionNode

        node = self.graph.nodes[node_name]
        if isinstance(node, InteractionNode):
            return True
        return self.graph._nx_graph.in_degree(node_name) == 0

    def _create_node_input_ui(self, node_name: str) -> List[gr.Component]:
        from daggr.node import InteractionNode, GradioNode
        from daggr.ops import ChooseOne, TextInput, ImageInput

        node = self.graph.nodes[node_name]
        components = []

        if isinstance(node, ChooseOne):
            components.append(
                gr.Radio(
                    label=f"{node.name}: Select one",
                    choices=[],
                    interactive=True,
                )
            )
        elif isinstance(node, TextInput):
            components.append(
                gr.Textbox(
                    label=node.label,
                    interactive=True,
                )
            )
        elif isinstance(node, ImageInput):
            components.append(
                gr.Image(
                    label=node.label,
                    interactive=True,
                )
            )
        elif isinstance(node, InteractionNode):
            components.append(
                gr.Textbox(
                    label=f"{node.name}: Input",
                    interactive=True,
                )
            )
        elif isinstance(node, GradioNode):
            for port_name in node._input_ports:
                components.append(
                    gr.Textbox(
                        label=f"{node.name}: {port_name}",
                        interactive=True,
                    )
                )
        else:
            for port_name in node._input_ports:
                components.append(
                    gr.Textbox(
                        label=f"{node.name}: {port_name}",
                        interactive=True,
                    )
                )

        return components

    def _create_node_output_ui(self, node_name: str) -> gr.Component:
        return gr.JSON(
            label=f"{node_name} Output",
            value=None,
        )

    def _format_result(self, result: Any) -> Any:
        if result is None:
            return {"status": "No output"}
        if isinstance(result, (str, int, float, bool)):
            return {"result": result}
        if isinstance(result, (list, tuple)):
            return {"results": list(result)}
        if isinstance(result, dict):
            return result
        return {"result": str(result)}

    def _execute_workflow(self, *args) -> tuple:
        from daggr.node import InteractionNode

        execution_order = self.graph.get_execution_order()

        input_mapping = []
        for node_name in execution_order:
            node = self.graph.nodes[node_name]
            if self._is_entry_or_interaction(node_name):
                if isinstance(node, InteractionNode):
                    input_mapping.append((node_name, node._input_ports[0] if node._input_ports else "input"))
                else:
                    for port_name in node._input_ports:
                        input_mapping.append((node_name, port_name))

        input_values: Dict[str, Dict[str, Any]] = {}
        for idx, arg_value in enumerate(args):
            if idx < len(input_mapping):
                node_name, port_name = input_mapping[idx]
                if node_name not in input_values:
                    input_values[node_name] = {}
                input_values[node_name][port_name] = arg_value

        outputs = []
        self.executor.results = {}

        try:
            for node_name in execution_order:
                user_input = input_values.get(node_name, {})
                result = self.executor.execute_node(node_name, user_input)
                outputs.append(self._format_result(result))
        except Exception as e:
            remaining_count = len(execution_order) - len(outputs)
            outputs.append({"error": str(e)})
            for _ in range(remaining_count - 1):
                outputs.append({"status": "skipped"})

        while len(outputs) < len(execution_order):
            outputs.append({"status": "pending"})

        return tuple(outputs)

    def generate_ui(self) -> gr.Blocks:
        with gr.Blocks(title=self.graph.name) as demo:
            gr.Markdown(f"# {self.graph.name}")

            execution_order = self.graph.get_execution_order()
            input_components: List[gr.Component] = []
            output_components: List[gr.Component] = []

            with gr.Row():
                with gr.Column(scale=1):
                    gr.Markdown("### Inputs")
                    for node_name in execution_order:
                        if self._is_entry_or_interaction(node_name):
                            node_inputs = self._create_node_input_ui(node_name)
                            input_components.extend(node_inputs)

                with gr.Column(scale=2):
                    gr.Markdown("### Workflow Output")
                    for node_name in execution_order:
                        output_comp = self._create_node_output_ui(node_name)
                        output_components.append(output_comp)

            if input_components:
                run_btn = gr.Button("Run Workflow", variant="primary")
                run_btn.click(
                    fn=self._execute_workflow,
                    inputs=input_components,
                    outputs=output_components,
                )
            else:
                auto_run_btn = gr.Button("Run Workflow", variant="primary")
                auto_run_btn.click(
                    fn=self._execute_workflow,
                    inputs=[],
                    outputs=output_components,
                )

        return demo
