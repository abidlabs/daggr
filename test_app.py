import gradio as gr

from daggr import FnNode, Graph, InputNode, MapNode


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
    inputs=[gr.Textbox(label="Host Voice", placeholder="Warm, professional...")],
    name="Host Voice Description",
)

guest_voice_input = InputNode(
    inputs=[gr.Textbox(label="Guest Voice", placeholder="Energetic, friendly...")],
    name="Guest Voice Description",
)

topic_input = InputNode(
    inputs=[gr.Textbox(label="Topic", placeholder="AI in healthcare...")],
    name="Podcast Topic",
)

host_voice_gen = FnNode(
    fn=mock_maya1_voice_gen,
    outputs=[gr.Audio(label="Host Voice")],
    name="Generate Host Voice",
)

guest_voice_gen = FnNode(
    fn=mock_maya1_voice_gen,
    outputs=[gr.Audio(label="Guest Voice")],
    name="Generate Guest Voice",
)

dialogue_gen = FnNode(
    fn=mock_generate_dialogue,
    outputs=[gr.JSON(label="Dialogue")],
    name="Generate Dialogue",
)

tts_map = MapNode(
    fn=mock_tts,
    item_output=gr.Audio(),
    name="TTS Per Segment",
)

combine_test = FnNode(
    fn=lambda segments: combine_audio(segments, "test"),
    outputs=[gr.Audio(label="Test Preview")],
    name="Test Run",
)

combine_full = FnNode(
    fn=lambda segments: combine_audio(segments, "full"),
    outputs=[gr.Audio(label="Full Podcast")],
    name="Full Run",
)


graph = Graph(name="Podcast Generator")

graph.edge(
    host_voice_input.outputs.Host_Voice, host_voice_gen.inputs.text_description
).edge(
    guest_voice_input.outputs.Guest_Voice, guest_voice_gen.inputs.text_description
).edge(topic_input.outputs.Topic, dialogue_gen.inputs.topic).edge(
    dialogue_gen.outputs.dialogue, tts_map.inputs.items
).edge(host_voice_gen.outputs.voice, tts_map.inputs.host_voice).edge(
    guest_voice_gen.outputs.voice, tts_map.inputs.guest_voice
).edge(tts_map.outputs.results, combine_test.inputs.segments).edge(
    tts_map.outputs.results, combine_full.inputs.segments
)


graph.launch()
