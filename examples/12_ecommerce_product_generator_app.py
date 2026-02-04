# Showcases e-commerce product content automation: image generation → parallel processing (background removal, enhancement, depth map, object detection) → description → multi-language audio.
import gradio as gr

from daggr import GradioNode, Graph


def ensure_image_path(inputs, key="image"):
    """Convert image dict to filepath for APIs that expect paths."""
    img = inputs.get(key)
    if isinstance(img, dict) and "path" in img:
        inputs[key] = img["path"]
    return inputs


def ensure_image_dict(inputs, key="f"):
    """Convert image path to ImageData dict for APIs that expect dicts."""
    img = inputs.get(key)
    if isinstance(img, str):
        inputs[key] = {
            "path": img,
            "url": None,
            "size": None,
            "orig_name": None,
            "mime_type": None,
            "is_stream": False,
            "meta": {},
        }
    return inputs


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


# Node 1: Product Image Generation (FLUX.1-schnell)
product_image_gen = GradioNode(
    "black-forest-labs/FLUX.1-schnell",
    api_name="/infer",
    inputs={
        "prompt": gr.Textbox(
            label="Product Description",
            value="Professional product photo of sleek wireless Bluetooth headphones, matte black finish, floating on white background, studio lighting, 8k, commercial photography",
            lines=3,
        ),
        "seed": 0,
        "randomize_seed": True,
        "width": 1024,
        "height": 1024,
        "num_inference_steps": 4,
    },
    postprocess=postprocess_flux,
    outputs={
        "result": gr.Image(label="Generated Product Image"),
        "seed": gr.Number(visible=False),
    },
)

# Node 2: Background Removal for clean product shots
bg_removal = GradioNode(
    "hf-applications/background-removal",
    api_name="/png",
    preprocess=lambda x: ensure_image_dict(x, "f"),
    inputs={"f": product_image_gen.result},
    outputs={"output_png_file": gr.File(label="Transparent PNG")},
)

# Node 3: Image Enhancement/Upscaling for high-res product images
image_enhance = GradioNode(
    "finegrain/finegrain-image-enhancer",
    api_name="/process",
    preprocess=lambda x: ensure_image_dict(x, "input_image"),
    inputs={
        "input_image": product_image_gen.result,
        "prompt": "high quality product photo, sharp details, professional lighting",
        "negative_prompt": "blurry, low quality, noise, artifacts",
        "seed": 42,
        "upscale_factor": 2,
        "controlnet_scale": 0.6,
        "controlnet_decay": 1.0,
        "condition_scale": 6,
        "tile_width": 112,
        "tile_height": 144,
        "denoise_strength": 0.35,
        "num_inference_steps": 18,
        "solver": "DDIM",
    },
    outputs={"before__after": gr.Image(label="Enhanced Image")},
)

# Node 4: Depth Map Generation for AR/3D product visualization
depth_map = GradioNode(
    "depth-anything/Depth-Anything-V2",
    api_name="/on_submit",
    preprocess=lambda x: ensure_image_path(x, "image"),
    inputs={"image": product_image_gen.result},
    outputs={
        "depth_map_with_slider_view": gr.Image(label="Depth Map"),
        "grayscale_depth_map": gr.File(label="Grayscale Depth"),
        "16bit_raw_output_can_be_considered_as_disparity": gr.File(visible=False),
    },
)

# Node 5: Object Detection (Florence-2)
object_detection = GradioNode(
    "gokaygokay/Florence-2",
    api_name="/process_image",
    preprocess=lambda x: ensure_image_path(x, "image"),
    inputs={
        "image": product_image_gen.result,
        "task_prompt": "Object Detection",
        "text_input": None,
        "model_id": "microsoft/Florence-2-large",
    },
    outputs={
        "output_text": gr.Textbox(label="Detected Objects"),
        "output_image": gr.Image(label="Detection Visualization"),
    },
)

# Node 6: AI Product Description (Moondream2)
product_description = GradioNode(
    "vikhyatk/moondream2",
    api_name="/answer_question",
    preprocess=lambda x: ensure_image_path(x, "img"),
    inputs={
        "img": product_image_gen.result,
        "prompt": "You are a professional e-commerce copywriter. Describe this product in detail for an online store listing. Include key features, design elements, and potential use cases. Be specific and persuasive.",
    },
    outputs={"response": gr.Textbox(label="Product Description", lines=5)},
)

# Node 7: Short Marketing Caption (Florence-2)
marketing_caption = GradioNode(
    "gokaygokay/Florence-2",
    api_name="/process_image",
    preprocess=lambda x: ensure_image_path(x, "image"),
    inputs={
        "image": product_image_gen.result,
        "task_prompt": "Caption",
        "text_input": None,
        "model_id": "microsoft/Florence-2-large",
    },
    outputs={
        "output_text": gr.Textbox(label="Marketing Caption"),
        "output_image": gr.Image(visible=False),
    },
)

# Node 8: US English Audio (Edge-TTS)
audio_us_english = GradioNode(
    "innoai/Edge-TTS-Text-to-Speech",
    api_name="/tts_interface",
    inputs={
        "text": product_description.response,
        "voice": "en-US-AriaNeural - en-US (Female)",
        "rate": 0,
        "pitch": 0,
    },
    outputs={
        "generated_audio": gr.Audio(label="US English Audio"),
        "warning": gr.Markdown(visible=False),
    },
)

# Node 9: UK English Audio (Edge-TTS)
audio_uk_english = GradioNode(
    "innoai/Edge-TTS-Text-to-Speech",
    api_name="/tts_interface",
    inputs={
        "text": product_description.response,
        "voice": "en-GB-SoniaNeural - en-GB (Female)",
        "rate": 0,
        "pitch": 0,
    },
    outputs={
        "generated_audio": gr.Audio(label="UK English Audio"),
        "warning": gr.Markdown(visible=False),
    },
)

# Node 10: Spanish Audio for international markets (Edge-TTS)
audio_spanish = GradioNode(
    "innoai/Edge-TTS-Text-to-Speech",
    api_name="/tts_interface",
    inputs={
        "text": product_description.response,
        "voice": "es-ES-ElviraNeural - es-ES (Female)",
        "rate": 0,
        "pitch": 0,
    },
    outputs={
        "generated_audio": gr.Audio(label="Spanish Audio"),
        "warning": gr.Markdown(visible=False),
    },
)

graph = Graph(
    name="E-Commerce Product Content Generator",
    nodes=[
        product_image_gen,
        bg_removal,
        image_enhance,
        depth_map,
        object_detection,
        product_description,
        marketing_caption,
        audio_us_english,
        audio_uk_english,
        audio_spanish,
    ],
)

if __name__ == "__main__":
    graph.launch()
