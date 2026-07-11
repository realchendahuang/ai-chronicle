---
eventId: gpt-4o
form: Essay on conversational time
narrativeCenter: "GPT-4o treats the delay and information loss in multimodal conversation as consequences of a fragmented model pipeline"
emotionalSource: "Conversation can be damaged before any word is wrong, simply by a response arriving after the human rhythm has moved on"
avoid:
  - "Presenting launch demonstrations as capabilities available to every user on release day"
  - "Confusing expressive synthetic speech with emotion or consciousness"
  - "Reducing the article to a list of text, vision, and audio modalities"
---

A voice assistant can reveal its machinery without making a factual mistake. It waits.

In the familiar pipeline, speech is first transcribed. A language model reads the transcription and composes a reply. Another model turns the reply back into sound. Each component may perform well, yet the sequence discards information and spends time. Laughter, tone, background sound, and the manner of speaking may be flattened before reasoning begins. By the time the answer arrives, an ordinary conversational pause has become a reminder that several systems have been passing a message along.

“Omni” is easy to misread as omnipotence; better as unified training across signals. Text and images reached the widely available layer first; audio output and realtime voice advanced as preview—engineering and safety tempo did not obey the demo script. Humanlike voice, laughter, and interruption raise persuasiveness and raise fraud and emotional-manipulation risk; vendor discussion of detection and policy admits that modality progress changes the threat model. Latency figures are vendor measurements; availability is split by modality; risk and capability arrived in the same release wave.

On 13 May 2024, OpenAI released GPT-4o. The “o” stood for omni. Rather than routing text, images, and audio through separate models, the company described one end-to-end neural network trained to receive and produce across those forms. Its reported audio response time could be as low as 232 milliseconds and averaged about 320 milliseconds—within the range in which human conversation recognizes an answer as a turn rather than a delayed transaction. Milliseconds matter because speech is negotiated while it happens. People interrupt, hesitate, restart, or stress the wrong word. A system quick enough to inhabit that timing can be corrected mid-turn and can respond to cues that never survive a transcript.

The demonstrations joined a camera view, handwritten arithmetic, spoken requests, and on-screen text inside a continuous interaction. Multimodal looked less like a menu of capabilities and more like one interface through which attention could move. It was also easy to mistake the demonstration for a release checklist. Availability was staged. OpenAI drew the line clearly: text and image capabilities entered ChatGPT—including free-tier access under rate limits—and the API; the new real-time audio output and voice experience were tested and introduced on a different schedule. Not every account could reproduce every turn from the demo on day one. The presentation showed product direction, not an immediate universal feature inventory.

Nor did a unified model create unified reliability. GPT-4o could still identify an object incorrectly, misread a cue, or answer with false confidence. Expressive speech complicated the old problem. A warm voice, well-timed interruption, or audible change in tone can make an error feel socially convincing in a way that text seldom does. The system had gained access to more of the signal; the listener had gained more reasons to overestimate the mind behind it. Launch materials also discussed safety, voice misuse, and boundaries around anthropomorphic interaction—vendor mitigations and plans, not a closed case.

For product designers, a boundary had moved. Multimodal interaction had previously meant drawing arrows between specialized services and repairing losses at their joins. GPT-4o made continuity itself a property of the base model. Engineering partly shifted from “how do we chain transcription, reasoning, and synthesis” toward “how do we manage permissions, modalities, and latency on one model.”

GPT-4o's historical weight is not that it mentioned text, images, and sound in the same press release. It is that “being able to take a turn” became a structural goal of a general-purpose model—and that the record must still separate what shipped on 13 May from what remained on the audio-preview path.
