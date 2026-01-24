import tempfile

import gradio as gr
from pydub import AudioSegment

from daggr import FnNode, GradioNode, Graph

host_voice = GradioNode(
    space_or_url="abidlabs/tts",  # Currently mocked. But this would be a call to e.g. Qwen/Qwen3-TTS
    api_name="/generate_voice_design",
    inputs={
        "voice_description": gr.Textbox(
            label="Host Voice Description",
            value="Deep British voice that is very professional and authoritative...",
            lines=3,
        ),
        "language": "Auto",
        "text": "Hi! I'm the host of podcast. It's going to be a great episode!",
    },
    outputs={
        "audio": gr.Audio(label="Host Voice"),
        "status": gr.Text(visible=False),
    },
)


guest_voice = GradioNode(
    space_or_url="abidlabs/tts",
    api_name="/generate_voice_design",
    inputs={
        "voice_description": gr.Textbox(
            label="Guest Voice Description",
            value="Energetic, friendly young voice with American accent...",
            lines=3,
        ),
        "language": "Auto",
        "text": "Hi! I'm the guest of podcast. Super excited to be here!",
    },
    outputs={
        "audio": gr.Audio(label="Guest Voice"),
        "status": gr.Text(visible=False),
    },
)


# Currently mocked. But this would be an LLM call.
def generate_dialogue(
    topic: str, host_voice: str, guest_voice: str
) -> tuple[list, str]:
    dialogue = [
        {"voice": host_voice, "text": "Hello, how are you?"},
        {"voice": guest_voice, "text": "I'm fine, thank you!"},
    ]
    html = "<strong>Host</strong>: Hello, how are you?<br><strong>Guest</strong>: I'm fine, thank you!"
    return dialogue, html


dialogue = FnNode(
    fn=generate_dialogue,
    inputs={
        "topic": gr.Textbox(label="Topic", value="AI in healthcare..."),
        "host_voice": host_voice.audio,
        "guest_voice": guest_voice.audio,
    },
    outputs={
        "json": gr.JSON(label="Dialogue", visible=False),
        "html": gr.HTML(label="Dialogue"),
    },
)


def chatterbox(text: str, audio: str) -> str:
    # Currently mocked. But this would be a call to e.g. ResembleAI/chatterbox-turbo
    return audio


samples = FnNode(
    fn=chatterbox,
    inputs={
        "text": dialogue.json.each["text"],
        "audio": dialogue.json.each["voice"],
    },
    outputs={
        "audio": gr.Audio(label="Sample"),
    },
)


def combine_audio_files(audio_files: list[str]) -> str:
    if not audio_files:
        return None
    if len(audio_files) == 1:
        return audio_files[0]

    combined = AudioSegment.empty()
    for audio_path in audio_files:
        if audio_path:
            segment = AudioSegment.from_file(audio_path)
            combined += segment

    output_path = tempfile.mktemp(suffix=".mp3")
    combined.export(output_path, format="mp3")
    return output_path


full_audio = FnNode(
    fn=combine_audio_files,
    inputs={
        "audio_files": samples.audio.all(),
    },
    outputs={
        "audio": gr.Audio(label="Full Audio"),
    },
)

graph = Graph(
    name="Podcast Generator",
    nodes=[host_voice, guest_voice, dialogue, samples, full_audio],
)

graph.launch()
