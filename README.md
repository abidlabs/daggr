<h3 align="center">
  <div style="display:flex;flex-direction:row;">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="daggr/assets/logo_dark.png">
      <source media="(prefers-color-scheme: light)" srcset="daggr/assets/logo_light.png">
      <img width="75%" alt="Trackio Logo" src="daggr/assets/logo_light.png">
    </picture>
    <p>DAG-based Gradio workflows!</p>
  </div>
</h3>


`daggr` is a Python package for building resilient AI workflows that connect Gradio apps, ML models via inference providers, and custom functions.

<img width="1301" height="761" alt="image" src="https://github.com/user-attachments/assets/18e343ec-5c3b-4981-ad00-2173db7d3d4f" />


## Installation

This package requires [Python 3.10 or higher](https://www.python.org/downloads/). Install with `pip`:

```bash
pip install daggr
```

or with `uv`:

```bash
uv pip install daggr
```

## Usage

daggr allows you to build complex pipelines with type-safe port connections and explicit edge definitions.

### Basic Example: Connecting Two Nodes

```python
from daggr import Graph, GradioNode

text_generator = GradioNode(src="gradio/gpt2", name="Text Generator")
summarizer = GradioNode(src="gradio/distilbart-cnn-12-6", name="Summarizer")

graph = Graph(name="Text Pipeline")

graph.edge(text_generator.output, summarizer.text)

graph.launch()
```

### Chaining Multiple Edges

Use backslash continuation for clean, readable edge chains:

```python
from daggr import Graph, FnNode

def step_a(text: str) -> dict:
    return {"result": text.upper()}

def step_b(data: str) -> dict:
    return {"result": data + "!"}

def step_c(value: str) -> dict:
    return {"result": f"Final: {value}"}

node_a = FnNode(fn=step_a)
node_b = FnNode(fn=step_b)
node_c = FnNode(fn=step_c)

graph = Graph(name="Chain Example")

graph \
    .edge(node_a.result, node_b.data) \
    .edge(node_b.result, node_c.value)

graph.launch()
```

### Using FnNode with Python Functions

`FnNode` automatically discovers input ports from function parameters:

```python
from daggr import Graph, FnNode, InputNode
import gradio as gr

def process_text(text: str, count: int) -> dict:
    return {"result": text * count}

text_input = InputNode(inputs=[gr.Textbox(label="Text")])
count_input = InputNode(inputs=[gr.Number(label="Count")])
processor = FnNode(fn=process_text, outputs=[gr.Textbox(label="Result")])

graph = Graph()

graph \
    .edge(text_input.Text, processor.text) \
    .edge(count_input.Count, processor.count)

graph.launch()
```

### Complete Example: Podcast Generator

```python
import gradio as gr
from daggr import FnNode, Graph, InputNode, scatter, gather


def mock_maya1_voice_gen(text_description: str) -> dict:
    return {"voice": f"generated_voice_{hash(text_description) % 1000}.wav"}


def mock_generate_dialogue(topic: str) -> dict:
    return {
        "dialogue": [
            {"speaker": "host", "text": f"Welcome! Today we discuss {topic}."},
            {"speaker": "guest", "text": "Thanks for having me."},
            {"speaker": "host", "text": "Let's dive in."},
            {"speaker": "guest", "text": "Absolutely, let's do it."},
        ]
    }


def mock_tts(segment: dict, host_voice: str, guest_voice: str) -> dict:
    voice = host_voice if segment["speaker"] == "host" else guest_voice
    return {"audio": f"tts_{segment['speaker']}_{voice[:20]}.wav"}


def combine_audio(segments: list, mode: str = "full") -> dict:
    count = 3 if mode == "test" else len(segments)
    return {"combined": f"podcast_{mode}_{count}_segments.wav"}


host_voice_input = InputNode(
    inputs=[gr.Textbox(label="host_voice", placeholder="Warm, professional...")],
    name="Host Voice Description",
)

guest_voice_input = InputNode(
    inputs=[gr.Textbox(label="guest_voice", placeholder="Energetic, friendly...")],
    name="Guest Voice Description",
)

topic_input = InputNode(
    inputs=[gr.Textbox(label="topic", placeholder="AI in healthcare...")],
    name="Podcast Topic",
)

host_voice_gen = FnNode(
    fn=mock_maya1_voice_gen,
    outputs=[gr.Audio(label="voice")],
    name="Generate Host Voice",
)

guest_voice_gen = FnNode(
    fn=mock_maya1_voice_gen,
    outputs=[gr.Audio(label="voice")],
    name="Generate Guest Voice",
)

dialogue_gen = FnNode(
    fn=mock_generate_dialogue,
    outputs=[gr.JSON(label="dialogue")],
    name="Generate Dialogue",
)

tts = FnNode(
    fn=mock_tts,
    outputs=[gr.Audio(label="audio")],
    name="TTS Per Segment",
)

combine_test = FnNode(
    fn=lambda segments: combine_audio(segments, "test"),
    outputs=[gr.Audio(label="combined")],
    name="Test Run",
)

combine_full = FnNode(
    fn=lambda segments: combine_audio(segments, "full"),
    outputs=[gr.Audio(label="combined")],
    name="Full Run",
)


graph = Graph(name="Podcast Generator")

graph \
    .edge(host_voice_input.host_voice, host_voice_gen.text_description) \
    .edge(guest_voice_input.guest_voice, guest_voice_gen.text_description) \
    .edge(topic_input.topic, dialogue_gen.topic) \
    .edge(scatter(dialogue_gen.dialogue, item_output=gr.Audio()), tts.segment) \
    .edge(host_voice_gen.voice, tts.host_voice) \
    .edge(guest_voice_gen.voice, tts.guest_voice) \
    .edge(tts.audio, gather(combine_test.segments)) \
    .edge(tts.audio, gather(combine_full.segments))


graph.launch()
```

produces:

<img width="1301" height="761" alt="image" src="https://github.com/user-attachments/assets/70d48a8e-5482-4532-8452-93f9445aaaa9" />


### Test App

Run the included test app:

```bash
python test_app.py
```

## Development

To set up the package for development, clone this repository and run:

```bash
pip install -e ".[dev]"
```

## Testing

Run tests with:

```bash
pytest
```

## Code Formatting

Format code using Ruff:

```bash
ruff check --fix --select I && ruff format
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License
