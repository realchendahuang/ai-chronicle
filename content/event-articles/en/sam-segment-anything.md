---
eventId: sam-segment-anything
form: an attempt to turn segmentation into a general capability
narrativeCenter: how Meta trained a model on a billion masks that can segment anything, turning image segmentation from "a model per task" into "one model for everything"
emotionalSource: wonder that the foundation-model paradigm extended from text to vision
avoid:
  - claiming SAM understands image semantics
  - ignoring that it only works with a prompt
  - assuming segmentation is all of vision
---

Before ChatGPT, "foundation model" was still a text-world concept; in early 2023 people began asking whether vision could have a model that "does everything." Image segmentation—circling every object in an image—is among the most basic and most tedious tasks in vision. Meta put its bet there.

In April 2023, Meta AI released the Segment Anything Model, SAM. Its usage is oddly reminiscent of ChatGPT: give the model a prompt—a click, a box, even a line of text—and it outputs a precise segmentation, zero-shot, without retraining for a specific task. The data behind it is equally staggering: 11 million images and over 1 billion masks.

What made SAM remarkable was its generality. In the past, segmentation nearly always required a dedicated model per task and per object class; SAM handles all prompts with one model. It turned segmentation from expert, custom work into something as simple as filling in a blank. The model and data were fully open-sourced and quickly integrated into countless tools.

Of course, SAM has boundaries. It is excellent at "circling things" but does not understand what it circles; it depends on prompts and cannot work without one. It is not the whole of visual intelligence, just the "segmentation" piece of the puzzle. But that piece lifted the efficiency of the entire vision ecosystem.

Looking back, SAM's most precious contribution was validating a paradigm: foundation model plus prompting can be replicated beyond text. It convinced researchers that vision had its own "ChatGPT moment." When later multimodal models pushed visual understanding higher, SAM had already laid, at the very bottom of image processing, a net that everyone could use.
