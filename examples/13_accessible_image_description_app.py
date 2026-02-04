# Showcases accessible content creation: generate an image, describe it with a vision model, then convert to speech for visually impaired users.
import gradio as gr

from daggr import GradioNode, Graph


def postprocess_flux(result, seed):
    """Normalize FLUX output to consistent dict format."""
    if isinstance(result, str):
        return {
            "path": result,
            "url": None,
            "size": None,
            "orig_name": None,
            "mime_type": None,
            "is_stream": False,
            "meta": {},
        }, seed
    return result, seed


def preprocess_moondream(inputs):
    """Convert image dict to filepath for Moondream API."""
    img = inputs.get("img")
    if isinstance(img, dict) and "path" in img:
        inputs["img"] = img["path"]
    return inputs


# Node 1: Image Generation (FLUX.1-schnell)
image_generator = GradioNode(
    "black-forest-labs/FLUX.1-schnell",
    api_name="/infer",
    inputs={
        "prompt": gr.Textbox(
            label="Image Prompt",
            value="A serene Japanese garden with a koi pond and cherry blossoms",
            lines=2,
        ),
        "seed": 0,
        "randomize_seed": True,
        "width": 1024,
        "height": 1024,
        "num_inference_steps": 4,
    },
    postprocess=postprocess_flux,
    outputs={
        "result": gr.Image(label="Generated Image"),
        "seed": gr.Number(visible=False),
    },
)

# Node 2: Image Description (Moondream2 vision-language model)
image_describer = GradioNode(
    "vikhyatk/moondream2",
    api_name="/answer_question",
    preprocess=preprocess_moondream,
    inputs={
        "img": image_generator.result,
        "prompt": "Describe this image in detail, including colors, mood, and composition.",
    },
    outputs={
        "response": gr.Textbox(label="Image Description", lines=5),
    },
)

# Node 3: Text-to-Speech (Edge-TTS) for audio description
description_tts = GradioNode(
    "innoai/Edge-TTS-Text-to-Speech",
    api_name="/tts_interface",
    inputs={
        "text": image_describer.response,
        "voice": gr.Dropdown(
            label="Voice",
            choices=[
                "en-US-AriaNeural - en-US (Female)",
                "en-US-GuyNeural - en-US (Male)",
                "en-GB-SoniaNeural - en-GB (Female)",
                "en-GB-RyanNeural - en-GB (Male)",
            ],
            value="en-US-AriaNeural - en-US (Female)",
        ),
        "rate": 0,
        "pitch": 0,
    },
    outputs={
        "generated_audio": gr.Audio(label="Audio Description"),
        "warning": gr.Markdown(visible=False),
    },
)

graph = Graph(
    name="Accessible Image Description",
    nodes=[image_generator, image_describer, description_tts],
)

if __name__ == "__main__":
    graph.launch()
