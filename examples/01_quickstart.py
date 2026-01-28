import random

import gradio as gr

from daggr import GradioNode, Graph

glm_image = GradioNode(
    "hf-applications/Z-Image-Turbo",
    api_name="/generate_image",
    inputs={
        "prompt": gr.Textbox(  # An input node is created for the prompt
            label="Prompt",
            value="A cheetah the grassy savanna.",
            lines=3,
        ),
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
        "images": gr.ImageSlider(
            label="Final Image"  # Display original and final image in an ImageSlider
        ),
    },
)

graph = Graph(
    name="Transparent Background Image Generator", nodes=[glm_image, background_remover]
)

graph.launch()
