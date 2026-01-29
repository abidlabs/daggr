import subprocess
import tempfile

import gradio as gr

from daggr import FnNode, GradioNode, Graph

prompt1 = gr.Textbox(
    label="Scene 1",
    value="A serene mountain landscape at sunrise, golden light rays, photorealistic",
    lines=2,
)

prompt2 = gr.Textbox(
    label="Scene 2",
    value="A dense forest with mist and sunbeams filtering through trees, photorealistic",
    lines=2,
)

prompt3 = gr.Textbox(
    label="Scene 3",
    value="An ocean wave crashing on rocks at sunset, photorealistic",
    lines=2,
)

prompt4 = gr.Textbox(
    label="Scene 4",
    value="A starry night sky with the milky way over a desert, photorealistic",
    lines=2,
)

prompt5 = gr.Textbox(
    label="Scene 5",
    value="Northern lights dancing over a frozen lake, photorealistic",
    lines=2,
)

transition_prompt = gr.Textbox(
    label="Transition Style",
    value="Smooth cinematic morph transition, natural movement",
    lines=1,
)

image1 = GradioNode(
    space_or_url="Tongyi-MAI/Z-Image-Turbo",
    api_name="/generate",
    name="Image 1",
    inputs={
        "prompt": prompt1,
        "resolution": "1024x1024 ( 1:1 )",
        "steps": 8,
        "seed": 42,
        "shift": 3,
        "gallery_images": [],
        "random_seed": True,
    },
    postprocess=lambda images, seed_used, seed_number: images[0],
    outputs={
        "image": gr.Image(label="Scene 1"),
    },
)

image2 = GradioNode(
    space_or_url="Tongyi-MAI/Z-Image-Turbo",
    api_name="/generate",
    name="Image 2",
    inputs={
        "prompt": prompt2,
        "resolution": "1280x720 ( 16:9 )",
        "steps": 8,
        "random_seed": True,
    },
    outputs={
        "image": gr.Image(label="Scene 2"),
        "seed_str": None,
        "seed_int": None,
    },
)

image3 = GradioNode(
    space_or_url="Tongyi-MAI/Z-Image-Turbo",
    api_name="/generate",
    name="Image 3",
    inputs={
        "prompt": prompt3,
        "resolution": "1280x720 ( 16:9 )",
        "steps": 8,
        "random_seed": True,
    },
    outputs={
        "image": gr.Image(label="Scene 3"),
        "seed_str": None,
        "seed_int": None,
    },
)

image4 = GradioNode(
    space_or_url="Tongyi-MAI/Z-Image-Turbo",
    api_name="/generate",
    name="Image 4",
    inputs={
        "prompt": prompt4,
        "resolution": "1280x720 ( 16:9 )",
        "steps": 8,
        "random_seed": True,
    },
    outputs={
        "image": gr.Image(label="Scene 4"),
        "seed_str": None,
        "seed_int": None,
    },
)

image5 = GradioNode(
    space_or_url="Tongyi-MAI/Z-Image-Turbo",
    api_name="/generate",
    name="Image 5",
    inputs={
        "prompt": prompt5,
        "resolution": "1280x720 ( 16:9 )",
        "steps": 8,
        "random_seed": True,
    },
    outputs={
        "image": gr.Image(label="Scene 5"),
        "seed_str": None,
        "seed_int": None,
    },
)

transition_1_2 = GradioNode(
    space_or_url="multimodalart/wan-2-2-first-last-frame",
    api_name="/generate_video",
    name="Transition 1→2",
    inputs={
        "start_image_pil": image1.image,
        "end_image_pil": image2.image,
        "prompt": transition_prompt,
        "negative_prompt": "blurry, distorted, low quality",
        "duration_seconds": 2.5,
        "steps": 20,
        "guidance_scale": 5.0,
        "randomize_seed": True,
    },
    outputs={
        "video": gr.Video(label="Transition 1→2"),
    },
)

transition_2_3 = GradioNode(
    space_or_url="multimodalart/wan-2-2-first-last-frame",
    api_name="/generate_video",
    name="Transition 2→3",
    inputs={
        "start_image_pil": image2.image,
        "end_image_pil": image3.image,
        "prompt": transition_prompt,
        "negative_prompt": "blurry, distorted, low quality",
        "duration_seconds": 2.5,
        "steps": 20,
        "guidance_scale": 5.0,
        "randomize_seed": True,
    },
    outputs={
        "video": gr.Video(label="Transition 2→3"),
    },
)

transition_3_4 = GradioNode(
    space_or_url="multimodalart/wan-2-2-first-last-frame",
    api_name="/generate_video",
    name="Transition 3→4",
    inputs={
        "start_image_pil": image3.image,
        "end_image_pil": image4.image,
        "prompt": transition_prompt,
        "negative_prompt": "blurry, distorted, low quality",
        "duration_seconds": 2.5,
        "steps": 20,
        "guidance_scale": 5.0,
        "randomize_seed": True,
    },
    outputs={
        "video": gr.Video(label="Transition 3→4"),
    },
)

transition_4_5 = GradioNode(
    space_or_url="multimodalart/wan-2-2-first-last-frame",
    api_name="/generate_video",
    name="Transition 4→5",
    inputs={
        "start_image_pil": image4.image,
        "end_image_pil": image5.image,
        "prompt": transition_prompt,
        "negative_prompt": "blurry, distorted, low quality",
        "duration_seconds": 2.5,
        "steps": 20,
        "guidance_scale": 5.0,
        "randomize_seed": True,
    },
    outputs={
        "video": gr.Video(label="Transition 4→5"),
    },
)


def concat_videos(v1: str, v2: str, v3: str, v4: str) -> str:
    """Concatenate 4 transition videos into one slideshow."""
    list_file = tempfile.mktemp(suffix=".txt")
    output_path = tempfile.mktemp(suffix=".mp4")

    with open(list_file, "w") as f:
        for v in [v1, v2, v3, v4]:
            f.write(f"file '{v}'\n")

    cmd = [
        "ffmpeg",
        "-y",
        "-f",
        "concat",
        "-safe",
        "0",
        "-i",
        list_file,
        "-c",
        "copy",
        output_path,
    ]
    subprocess.run(cmd, check=True, capture_output=True)
    return output_path


combine_videos = FnNode(
    concat_videos,
    name="Combine Slideshow",
    inputs={
        "v1": transition_1_2.video,
        "v2": transition_2_3.video,
        "v3": transition_3_4.video,
        "v4": transition_4_5.video,
    },
    outputs={
        "final_video": gr.Video(label="Final Slideshow"),
    },
)

graph = Graph(
    name="AI Slideshow with Smooth Transitions",
    nodes=[
        image1,
        image2,
        image3,
        image4,
        image5,
        transition_1_2,
        transition_2_3,
        transition_3_4,
        transition_4_5,
        combine_videos,
    ],
)

graph.launch()
