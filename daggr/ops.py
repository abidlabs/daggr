from __future__ import annotations

from daggr.node import InteractionNode


class ChooseOne(InteractionNode):
    _instance_counter = 0

    def __init__(self, name: str | None = None):
        ChooseOne._instance_counter += 1
        super().__init__(
            name=name or f"choose_one_{ChooseOne._instance_counter}",
            interaction_type="choose_one",
        )
        self._input_ports = ["options"]
        self._output_ports = ["selected"]


class Approve(InteractionNode):
    _instance_counter = 0

    def __init__(self, name: str | None = None):
        Approve._instance_counter += 1
        super().__init__(
            name=name or f"approve_{Approve._instance_counter}",
            interaction_type="approve",
        )
        self._input_ports = ["input"]
        self._output_ports = ["output"]


class TextInput(InteractionNode):
    _instance_counter = 0

    def __init__(self, name: str | None = None, label: str = "Input"):
        TextInput._instance_counter += 1
        super().__init__(
            name=name or f"text_input_{TextInput._instance_counter}",
            interaction_type="text_input",
        )
        self.label = label
        self._input_ports = []
        self._output_ports = ["text"]


class ImageInput(InteractionNode):
    _instance_counter = 0

    def __init__(self, name: str | None = None, label: str = "Image"):
        ImageInput._instance_counter += 1
        super().__init__(
            name=name or f"image_input_{ImageInput._instance_counter}",
            interaction_type="image_input",
        )
        self.label = label
        self._input_ports = []
        self._output_ports = ["image"]

