---
eventId: gpt-2
form: product history of release and refusal
narrativeCenter: a 1.5B-parameter zero-shot demo on WebText bound to a staged weight release and public argument
emotionalSource: a model that began to look task-capable while the company first shipped smaller checkpoints
avoid:
  - casting staged release as pure hype or pure heroism
  - treating zero-shot demos as uniformly reliable
  - mixing in GPT-3’s API distribution model
---

In February 2019 OpenAI presented GPT-2: a Transformer language model with about 1.5 billion parameters, trained on WebText—roughly eight million web documents gathered from outbound links, deliberately avoiding a Wikipedia-heavy crawl to reduce overlap with some downstream evaluations. Smaller variants at 117M, 345M, and 762M parameters accompanied the largest model, which demonstrated basic question answering, summarization, translation, and continuation without task-specific fine-tuning.

Zero-shot here has an operational meaning: no weight updates, no gradient steps—only a task description and input in context, with the model continuing the text. Results were uneven. Some samples were fluently unsettling; others fabricated freely. The direction was clear enough: large-scale general language modeling can fold some work that once required labeled sets and fine-tuning scripts into prompting. Relative to GPT-1, emphasis slid from “pretrain then fine-tune” toward “pretrain then try directly.”

OpenAI also chose not to release the largest weights immediately, citing misuse risks such as malicious generation and disinformation. Smaller models and the paper came first; the full 1.5B checkpoint followed in stages, completing around November 2019 about nine months later. The decision turned a technical release into a public argument. Some called it responsible disclosure; others called it marketing by scarcity; still others noted that capability remained far from “total forgery of reality.” The lasting value of the fight is less any slogan than the fact that “should powerful language-model weights ship immediately?” became a broad question for the first time.

GPT-2 also left a felt texture of text: newsy continuations, stylistic mimicry, format switching inside a prompt. Those behaviors later became products; at the time they mostly traveled as research-blog samples. Web training data carried bias, abusive content, and factual error into the distribution—the model can be wrong fluently. Full weights did eventually open, enabling reproduction, distillation, and further fine-tuning, and setting up the next contrast: open weights versus hosted APIs as forkable paths.

1.5 billion parameters did not stay rare for long. What was rare was the coincidence of two events in one year: language modeling shown as a multi-task interface, and weight release itself treated as an action that required argument.

WebText’s construction was part of the method: outbound links from high-quality sources, filtered into tens of gigabytes of text, deliberately reducing overlap with common benchmarks. Context length was 1,024 with a BPE vocabulary. After the full 1.5B weights opened in November 2019, fine-tunes, distillations, and prompt experiments exploded. Risk debate shifted from whether to release toward how to monitor. Capability demos, staged release, and community reproduction must be read as one event, not three isolated headlines.
