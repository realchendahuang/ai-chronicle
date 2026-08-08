---
eventId: gpt-live
form: An interaction-protocol update
narrativeCenter: Full-duplex turns interruption from an error into normal operation; the experience boundary of voice AI shifts from faster to more natural
emotionalSource: A conversation that can be spoken over says more about this release than any latency figure
avoid:
  - Framing full-duplex as a mere speed improvement over the old voice mode
  - Ignoring the split between free and paid model tiers
  - Replacing the interaction change with preference-rate numbers
---

On July 8, 2026, OpenAI released GPT-Live-1 and GPT-Live-1 mini. Both are full-duplex voice models: they can listen and speak at the same time. Since Advanced Voice Mode arrived in July 2024, ChatGPT's voice assistant has worked under a turn-based protocol—you speak, then I speak. These models end that. GPT-Live-1 drives voice by default for paid users, the mini variant for free users, with a gradual rollout across iOS, Android, and the web.

"Listening while speaking" sounds like a product detail; it is a change in interaction protocol. Under turn-based voice, interruption is an exception to handle: the model is talking, the user speaks, and the system either cuts off or fights it. Full-duplex makes interruption ordinary—the model can stop when spoken over, wait, continue, and can offer a natural backchannel during a pause without feeling mechanical. For real-time settings like customer service, interpretation, and driving, this changes the experience boundary earlier than a longer context window would.

The engineering numbers show the cost of this path. For sub-second response, the team redesigned stateful reasoning, dynamic context management, and asynchronous delegation; the media frontend was rewritten in Go; and the WARP protocol cut startup network round trips from six to one. Complex tasks can be delegated in the background to models such as GPT-5.5, and answers can include visual cards. This release is a rebuild of the voice pipeline, not a parameter bump.

OpenAI reports that blind-test preference exceeded the previous voice mode—vendor data, worth reading skeptically. The verifiable part is product behavior: starting July 31, generated audio carries a SynthID watermark, making "this voice is synthetic" machine-detectable metadata. With synthetic-media labeling rules arriving in multiple jurisdictions, this line moves voice products into the compliance queue ahead of schedule.

Full-duplex voice matters to the industry the way multimodality mattered to chat: interaction naturalness stops being decoration and becomes a precondition for entering real scenarios. For developers, the voice-agent stack shifts from turns to streams, and latency and interruption handling become the new engineering test. For ordinary users, the change is simpler—talking to an AI now feels like talking to a person: you can interrupt whenever you like.
