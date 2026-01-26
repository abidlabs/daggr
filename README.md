<h3 align="center">
  <div style="display:flex;flex-direction:row;">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="daggr/assets/logo_dark.png">
      <source media="(prefers-color-scheme: light)" srcset="daggr/assets/logo_light.png">
      <img width="75%" alt="daggr Logo" src="daggr/assets/logo_light.png">
    </picture>
    <p>DAG-based Gradio workflows!</p>
  </div>
</h3>

`daggr` is a Python library for building AI workflows that connect [Gradio](https://github.com/gradio-app/gradio) apps, ML models (through [Hugging Face Inference Providers](https://huggingface.co/docs/inference-providers/en/index)), and custom Python functions. It automatically generates a visual canvas for your workflow allowing you to inspect intermediate outputs, rerun any step any number of times, and also preserves state for complex or long-running workflows.



https://github.com/user-attachments/assets/2cfe49c0-3118-4570-b2bd-f87c333836b5


## Installation

```bash
pip install daggr
```

## Quick Start

```python
import random

import gradio as gr

from daggr import GradioNode, Graph

glm_image = GradioNode(
    "hf-applications/Z-Image-Turbo",
    api_name="/generate_image",
    inputs={
        "prompt": gr.Textbox(  # An input node is created for the prompt
            label="Prompt",
            value="A cheetah sprints across the grassy savanna.",
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
        "original_image": None,  # Original image is returned but not displayed
        "final_image": gr.Image(
            label="Final Image"
        ),  # Transparent bg image is displayed
    },
)

graph = Graph(
    name="Transparent Background Image Generator", nodes=[glm_image, background_remover]
)

graph.launch()
```

## When to (Not) Use Daggr

Use Daggr when:
* You want to define an AI workflow in Python involving Gradio Spaces, inference providers, or custom functions
* The workflow is complex enough that inspecting intermediate outputs or rerunning individual steps is useful
* You need a fixed pipeline that you or others can run with different inputs

**Why not... ComfyUI?** ComfyUI is a visual node editor where you build workflows by dragging and connecting nodes. Daggr takes a code-first approach: you define workflows in Python and the visual canvas is generated automatically. If you prefer writing code over visual editing, Daggr may be a better fit.

**Why not... Airflow/Prefect?** Daggr was inspired by Airflow/Prefect, but whereas the focus of these orchestration platforms is scheduling, monitoring, and managing pipelines at scale, Daggr is built for interactive AI/ML workflows with real-time visual feedback and immediate execution, making it ideal for prototyping, demos, and workflows where you want to inspect intermediate outputs and rerun individual steps on the fly.

**Why not... Gradio?** Gradio creates web UIs for individual ML models and demos. While complex workflows can be built in Gradio, they often fail in ways that are hard to debug when using the Gradio app. Daggr tries to provide a transparent, easily-inspectable way to chain multiple Gradio apps, custom Python functions, and inference providers through a visual canvas.


## How It Works

### Input Types

Each node's `inputs` dict accepts three types of values:

| Type | Example | Result |
|------|---------|--------|
| **Gradio component** | `gr.Textbox(label="Topic")` | Creates UI input |
| **Port reference** | `other_node.output_name` | Connects nodes |
| **Fixed value** | `"Auto"` or `42` | Constant, no UI |

### Node Types

- **`GradioNode`**: Calls a Gradio Space API endpoint
- **`FnNode`**: Runs a Python function

## Scatter / Gather (Map over lists)

When a node outputs a list and you want to process each item individually, use `.each` to scatter and `.all()` to gather:

```python
def generate_script(topic: str) -> list[dict]:
    # Returns a list of dialogue lines
    return [
        {"speaker": "host", "text": "Welcome!"},
        {"speaker": "guest", "text": "Thanks for having me!"},
    ]

script = FnNode(
    fn=generate_script,
    inputs={"topic": gr.Textbox(label="Topic")},
    outputs={"lines": gr.JSON()},
)

def text_to_speech(text: str, speaker: str) -> str:
    # Process single item
    return f"audio_for_{speaker}.mp3"

# .each["key"] - scatter: run once per item, extracting "key" from each
tts = FnNode(
    fn=text_to_speech,
    inputs={
        "text": script.lines.each["text"],      # Each item's "text" field
        "speaker": script.lines.each["speaker"], # Each item's "speaker" field
    },
    outputs={"audio": gr.Audio()},
)

def combine_audio(audio_files: list[str]) -> str:
    # Combine all audio files
    return "combined.mp3"

# .all() - gather: collect all outputs back into a list
final = FnNode(
    fn=combine_audio,
    inputs={"audio_files": tts.audio.all()},  # Gathers all audio outputs
    outputs={"audio": gr.Audio(label="Final Audio")},
)

graph = Graph(nodes=[script, tts, final])
```

**Visual indicator**: Scatter edges show as forked lines (→⟨) and gather edges show as converging lines (⟩→) in the canvas UI.

## Full Example: Podcast Generator

```python
import gradio as gr
from daggr import FnNode, GradioNode, Graph

# Generate voice profiles
host_voice = GradioNode(
    space_or_url="abidlabs/tts",
    api_name="/generate_voice_design",
    inputs={
        "voice_description": gr.Textbox(label="Host Voice", value="Deep British voice..."),
        "language": "Auto",
        "text": "Hi! I'm the host.",
    },
    outputs={"audio": gr.Audio(label="Host Voice")},
)

guest_voice = GradioNode(
    space_or_url="abidlabs/tts",
    api_name="/generate_voice_design",
    inputs={
        "voice_description": gr.Textbox(label="Guest Voice", value="Friendly American voice..."),
        "language": "Auto",
        "text": "Hi! I'm the guest.",
    },
    outputs={"audio": gr.Audio(label="Guest Voice")},
)

# Generate dialogue (would be an LLM call in production)
def generate_dialogue(topic: str, host_voice: str, guest_voice: str):
    dialogue = [
        {"voice": host_voice, "text": "Hello, how are you?"},
        {"voice": guest_voice, "text": "I'm great, thanks!"},
    ]
    html = "<b>Host:</b> Hello!<br><b>Guest:</b> I'm great!"
    return dialogue, html

dialogue = FnNode(
    fn=generate_dialogue,
    inputs={
        "topic": gr.Textbox(label="Topic", value="AI"),
        "host_voice": host_voice.audio,
        "guest_voice": guest_voice.audio,
    },
    outputs={
        "json": gr.JSON(visible=False),
        "html": gr.HTML(label="Script"),
    },
)

# Generate audio for each line (scatter)
def text_to_speech(text: str, audio: str) -> str:
    return audio  # Would call TTS model in production

samples = FnNode(
    fn=text_to_speech,
    inputs={
        "text": dialogue.json.each["text"],
        "audio": dialogue.json.each["voice"],
    },
    outputs={"audio": gr.Audio(label="Sample")},
)

# Combine all audio (gather)
def combine_audio(audio_files: list[str]) -> str:
    from pydub import AudioSegment
    combined = AudioSegment.empty()
    for path in audio_files:
        combined += AudioSegment.from_file(path)
    combined.export("output.mp3", format="mp3")
    return "output.mp3"

final = FnNode(
    fn=combine_audio,
    inputs={"audio_files": samples.audio.all()},
    outputs={"audio": gr.Audio(label="Full Podcast")},
)

graph = Graph(name="Podcast Generator", nodes=[host_voice, guest_voice, dialogue, samples, final])
graph.launch()
```

## Sharing

Create a public URL to share your workflow with others:

```python
graph.launch(share=True)
```

This generates a temporary public URL (expires in 1 week) using Gradio's tunneling infrastructure.

## Hugging Face Authentication

Daggr automatically uses your local Hugging Face token for both `GradioNode` and `InferenceNode`. This enables:

- **ZeroGPU quota tracking**: Your HF token is sent to Gradio Spaces running on ZeroGPU, so your usage is tracked against your account's quota
- **Private Spaces access**: Connect to private Gradio Spaces you have access to
- **Gated models**: Use gated models on Hugging Face that require accepting terms of service

To log in with your Hugging Face account:

```bash
pip install huggingface_hub
hf auth login
```

You'll be prompted to enter your token, which you can find at https://huggingface.co/settings/tokens. 

Once logged in, the token is saved locally and daggr will automatically use it for all `GradioNode` and `InferenceNode` calls—no additional configuration needed.

Alternatively, you can set the `HF_TOKEN` environment variable directly:

```bash
export HF_TOKEN=hf_xxxxx
```

## LLM-Friendly Error Messages

Daggr is designed to be LLM-friendly, making it easy for AI coding assistants to generate and debug workflows. When you (or an LLM) make a mistake, Daggr provides detailed, actionable error messages with suggestions:

**Invalid API endpoint:**
```
ValueError: API endpoint '/infer' not found in 'hf-applications/background-removal'. 
Available endpoints: ['/image', '/text', '/png']. Did you mean '/image'?
```

**Typo in parameter name:**
```
ValueError: Invalid parameter(s) {'promt'} for endpoint '/generate_image' in 
'hf-applications/Z-Image-Turbo'. Did you mean: 'promt' -> 'prompt'? 
Valid parameters: {'width', 'height', 'seed', 'prompt'}
```

**Missing required parameter:**
```
ValueError: Missing required parameter(s) {'prompt'} for endpoint '/generate_image' 
in 'hf-applications/Z-Image-Turbo'. These parameters have no default values.
```

**Invalid output port reference:**
```
ValueError: Output port 'img' not found on node 'Z-Image-Turbo'. 
Available outputs: image. Did you mean 'image'?
```

**Invalid function parameter:**
```
ValueError: Invalid input(s) {'toppic'} for function 'generate_dialogue'. 
Did you mean: 'toppic' -> 'topic'? Valid parameters: {'topic', 'host_voice', 'guest_voice'}
```

**Invalid model name:**
```
ValueError: Model 'meta-llama/nonexistent-model' not found on Hugging Face Hub. 
Please check the model name is correct (format: 'username/model-name').
```

These errors make it easy for LLMs to understand what went wrong and fix the generated code automatically, enabling a smoother AI-assisted development experience.

## Development

```bash
pip install -e ".[dev]"
ruff check --fix --select I && ruff format
```

## License

MIT License
