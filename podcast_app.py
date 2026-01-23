import gradio as gr

from daggr import FnNode, InferenceNode, GradioNode

host_voice_desc = InputNode(inputs=[gr.Textbox(label="Host Voice Description", value="Warm, professional...")])
guest_voice_desc = InputNode(inputs=[gr.Textbox(label="Guest Voice Description", value="Energetic, friendly...")])
topic = InputNode(inputs=[gr.Textbox(label="Topic", value="AI in healthcare...")])

host_voice_gen = GradioNode("qwen3tts/qwen3tts-v1-0", api_name="generate_voice")
guest_voice_gen = GradioNode("qwen3tts/qwen3tts-v1-0", api_name="generate_voice")

dialogue_script = FnNode(call_llm, outputs=[gr.JSON(visible=False), gr.Markdown()])


def call_llm(topic: str) -> dict:
    result = call_api("Create a dialogue script for a podcast episode about the topic: {topic}. It should be a conversation between a host and a guest. Return the script as a JSON list with the following structure: [{'speaker': 'host', 'text': '...'}, {'speaker': 'guest', 'text': '...'}, ...]")
    return result, result

def sentence_voice(sentence: dict, guest_voice: str, host_voice: str) -> str:
    if sentence["speaker"] == "host":
        return Client("qwen3tts/qwen3tts-v1-0", api_name="generate_voice", inputs=[host_voice])
    else:
        return Client("qwen3tts/qwen3tts-v1-0", api_name="generate_voice", inputs=[guest_voice])

def combine_audio(segments: list, mode: str = "full") -> dict:
    count = 3 if mode == "test" else len(segments)
    return {"combined": f"podcast_{mode}_{count}_segments.wav"}

graph = Graph(name="Podcast Generator")





