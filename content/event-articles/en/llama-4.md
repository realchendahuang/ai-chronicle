---
eventId: llama-4
form: family-backstage narrative
narrativeCenter: when the community received Scout and Maverick, the much larger teacher remained backstage
emotionalSource: downloadable students had left the building; Behemoth, which helped teach them, had not
avoid:
  - treating ten million tokens as universal task competence
  - omitting that Behemoth did not ship beside the other models
  - reading vendor comparisons as an independent final
---

Meta released open weights for Llama 4 Scout and Maverick on 5 April 2025. The launch presented them as members of one “herd”: both used mixture-of-experts architectures, and both accepted text and images natively. The community could download those two models. It could not download the largest family member, Behemoth, which remained in preview or training while already supplying distillation signals behind the scenes.

Openness in Llama 4 was layered from the beginning. Scout had about 109 billion total parameters and sixteen experts, activating roughly 17 billion parameters per token. Maverick had about 400 billion total parameters and 128 experts, while activating about the same 17 billion. A router selected only part of the expert capacity for each step, so the size of the stored weights and the computation required to generate one token were no longer the same number. Developers gained access to greater capacity and inherited new complexity in expert parallelism, memory, and inference-framework support.

Scout’s loudest specification was a ten-million-token context window. Meta described training and post-training at shorter lengths, followed by techniques and specialized data intended to extend the model, and showed needle-in-a-haystack and long-code tests. This supported a bounded claim: under the publisher’s settings, the model could operate over extremely long inputs. It did not collapse three separate questions into one. Material may fit in the window; a passage may be retrievable; coherent judgment over the entire task may still fail. Fitting the equivalent of many thousands of pages does not guarantee reliable understanding of their contradictions, chronology, and unstated assumptions.

Maverick emphasized broader capability and used soft targets from Behemoth during distillation. Meta described Behemoth at roughly two trillion total parameters and 288 billion active, but did not release its usable weights alongside the students. The community therefore received not only two models but a new structure of openness: students available for deployment and fine-tuning, while the teacher, full training data, and production process remained inside the company. Open weights widened the surface for study without making the entire supply chain transparent.

The launch also compared the family with versions of GPT-4o, Gemini, DeepSeek, and other systems. Those were Meta’s selected models, prompts, and evaluation pipelines—useful for positioning, not an independent final across every setting. Deployment turned on less theatrical questions: whether ten million tokens justified the memory and latency, whether MoE routing ran efficiently in the chosen stack, whether image input met the actual task, and whether the license covered the intended use.

Llama 4 was therefore more specific than “open models now have multimodality and MoE.” It showed how a frontier model family could be delivered in layers. The largest teacher transferred capability backstage; smaller students entered the community. Scout and Maverick did cross the fence. The empty place where Behemoth might have stood reminded users that downloading a model and seeing the full process that produced it remain different degrees of openness.
