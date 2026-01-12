<div align="center">
<img src="https://github.com/user-attachments/assets/973811ad-e657-43b5-acd6-e7506ab2810e" alt="daggr" width="75%">
</div>

`daggr` is a Python package for building resilient DAG-based workflows that connect Gradio apps, ML models via inference providers, and custom functions.

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

daggr allows you to build complex pipelines using a clean, intuitive syntax inspired by Airflow.

### Basic Example

```python
from daggr import Graph, GradioNode, FnNode, ops

# Create nodes
text_generator = GradioNode(src="gradio/gpt2", name="Text Generator")
text_summarizer = GradioNode(src="gradio/distilbart-cnn-12-6", name="Summarizer")

# Build the graph using context manager and >> operator
with Graph(name="Text Pipeline") as graph:
    text_generator["output"] >> text_summarizer["text"]

# Launch the generated UI
graph.launch()
```


### Complete Example

```python
from daggr import Graph, GradioNode, FnNode, ops

def enhance_prompt(text: str) -> dict:
    return {"enhanced": f"High quality, detailed: {text}"}

# Create nodes
prompt_input = ops.TextInput(label="Enter your prompt")
enhancer = FnNode(fn=enhance_prompt)
image_gen = GradioNode(src="stabilityai/stable-diffusion", name="Image Generator")
chooser = ops.ChooseOne()
upscaler = GradioNode(src="nightmareai/real-esrgan", name="Upscaler")

# Build the workflow
with Graph(name="Image Generation Pipeline") as graph:
    prompt_input >> enhancer["text"]
    enhancer["enhanced"] >> image_gen["prompt"]
    image_gen["images"] >> chooser["options"]
    chooser["selected"] >> upscaler["image"]

graph.launch()
```

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
