from daggr import Graph, GradioNode, FnNode, ops


def process_text(text: str) -> dict:
    return {"processed": text.upper(), "length": len(text)}


if __name__ == "__main__":
    print("Creating nodes...")
    text_generator = GradioNode(
        src="gradio/gpt2",
        name="Text Generator"
    )

    text_summarizer = GradioNode(
        src="gradio/distilbart-cnn-12-6",
        name="Text Summarizer"
    )

    print("Building graph with new syntax...")
    with Graph(name="Simple Text Processing Pipeline") as graph:
        text_generator["output"] >> text_summarizer["text"]

    print(f"Graph created: {graph}")
    print(f"Nodes: {list(graph.nodes.keys())}")
    print(f"Edges: {graph.get_connections()}")

    print("Launching workflow UI...")
    graph.launch()
