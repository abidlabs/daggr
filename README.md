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

`daggr` is a Python library for building AI workflows that connect Gradio Spaces, ML models, and custom functions.

## Installation

```bash
pip install daggr
```

## Usage

Define nodes with `inputs` and `outputs` dicts. Inputs can be Gradio components (for UI), port references (for connections), or fixed values.

### Basic Example

```python
import gradio as gr
from daggr import Graph, FnNode, GradioNode

host_voice = GradioNode(
    space_or_url="Qwen/Qwen3-TTS",
    api_name="/generate_voice_design",
    inputs={
        "voice_description": gr.Textbox(label="Host Voice", value="Professional British voice..."),
        "language": "auto",
        "text": "Hello, welcome to the show!",
    },
    outputs={
        "audio": gr.Audio(label="Host Voice"),
        "status": gr.Text(visible=False),
    },
)

guest_voice = GradioNode(
    space_or_url="Qwen/Qwen3-TTS",
    api_name="/generate_voice_design",
    inputs={
        "voice_description": gr.Textbox(label="Guest Voice", value="Friendly American voice..."),
        "language": "auto",
        "text": "Thanks for having me!",
    },
    outputs={
        "audio": gr.Audio(label="Guest Voice"),
        "status": gr.Text(visible=False),
    },
)

def generate_dialogue(topic: str, host_voice: str, guest_voice: str) -> dict:
    return {"dialogue": f"Topic: {topic}", "metadata": {"host": host_voice, "guest": guest_voice}}

dialogue = FnNode(
    fn=generate_dialogue,
    inputs={
        "topic": gr.Textbox(label="Topic", value="AI in healthcare"),
        "host_voice": host_voice.audio,
        "guest_voice": guest_voice.audio,
    },
    outputs={
        "dialogue": gr.JSON(label="Dialogue"),
        "metadata": gr.Markdown(label="Metadata"),
    },
)

graph = Graph(name="Podcast Generator", nodes=[host_voice, guest_voice, dialogue])
graph.launch()
```

### Input Types

- **Gradio component**: Creates a UI input (e.g., `gr.Textbox(label="Topic")`)
- **Port reference**: Connects to another node's output (e.g., `other_node.output_name`)
- **Fixed value**: Constant value, no UI (e.g., `"auto"`)

### Node Types

- **`GradioNode`**: Calls a Gradio Space API
- **`FnNode`**: Runs a Python function
- **`InferenceNode`**: Calls HuggingFace Inference API

## Development

```bash
pip install -e ".[dev]"
```

## Code Formatting

```bash
ruff check --fix --select I && ruff format
```

## License

MIT License
