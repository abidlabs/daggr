import random

import gradio as gr

from daggr import GradioNode, Graph

glm_image = GradioNode(
    "hf-applications/Z-Image-Turbo",
    api_name="/generate_image",
    inputs={
        "prompt": gr.Textbox(label="Prompt"),  # An input node is created for the prompt
        "height": 1024,  # Fixed value (does not appear in the canvas)
        "width": 1024,  # Fixed value (does not appear in the canvas)
        "seed": random.random,  # Functions are rerun every time the workflow is run (not shown in the canvas)
    },
    outputs={
        "image": gr.Image(
            label="Image"  # Display in an Image component
        ),
    },
)

background_remover = GradioNode(
    "hf-applications/background-removal",
    api_name="/image",
    inputs={
        "image": glm_image.image,  # Connect the output of the GLM Image node to the input of the background remover node
    },
    outputs={
        "image": gr.Image(label="Final Image"),  # Display output in an Image component
    },
)

graph = Graph(
    name="Transparent Background Image Generator", nodes=[glm_image, background_remover]
)

graph.launch()
