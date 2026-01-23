import gradio as gr

from daggr import Graph, FnNode, GradioNode

host_voice = GradioNode(
    space_or_url="Qwen/Qwen3-TTS",
    api_name="/generate_voice_design",
    inputs={
        "voice_description": gr.Textbox(
            label="Host Voice Description",
            value="Deep British voice that is very professional and authoritative...",
            lines=3,
        ),
        "language": "auto",
        "text": "Hi! I'm the host of podcast. It's going to be a great episode!",
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
        "voice_description": gr.Textbox(
            label="Guest Voice Description",
            value="Energetic, friendly young voice with American accent...",
            lines=3,
        ),
        "language": "auto",
        "text": "Hi! I'm the guest of podcast. Super excited to be here!",
    },
    outputs={
        "audio": gr.Audio(label="Gues Voice"),
        "status": gr.Text(visible=False),
    },
)


def generate_dialogue(topic: str, host_voice: str, guest_voice: str) -> list[dict]:
    json = {
        "topic": topic,
        "host_voice": host_voice,
        "guest_voice": guest_voice,
    }
    return json, json


dialogue = FnNode(
    fn=generate_dialogue,
    inputs={
        "topic": gr.Textbox(label="Topic", value="AI in healthcare..."),
        "host_voice": host_voice.audio,
        "guest_voice": guest_voice.audio,
    },
    outputs={
        "dialogue": gr.JSON(label="Dialogue", visible=False),
        "markdown": gr.Markdown(label="Dialogue"),
    },
)

graph = Graph(name="Podcast Generator", nodes=[host_voice, guest_voice, dialogue])

graph.launch()
