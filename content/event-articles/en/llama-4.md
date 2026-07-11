---
eventId: llama-4
form: Anatomy of a model family
narrativeCenter: "Scout, Maverick, and the unreleased Behemoth are divided by activated parameters, expert routing, long context, and teacher distillation rather than a simple size ladder"
emotionalSource: "Enormous total capacity sits behind a small set of experts chosen for each token, while the family's most powerful member remains backstage as a teacher"
avoid:
  - "Turning Meta's benchmark claims into objective conclusions"
  - "Using open source as an unconditional synonym for released weights"
  - "Citing the ten-million-token context without its training length and official evaluation boundary"
---

Scout, Maverick, and Behemoth were not three points on an ordinary size chart.

Scout contained 109 billion parameters across sixteen experts and activated roughly 17 billion for each token. Maverick expanded to 400 billion total parameters and 128 experts while activating about the same 17 billion. The weights still had to exist in memory, but they did not all have to participate in every computation. A token passed through shared capacity and was routed toward selected experts. Mixture of experts was not an ornamental acronym on the release page; it was the condition that allowed the family to store much more capacity than one inference used.

The two released models also brought images and text into the same model backbone from pretraining. Meta's “native multimodality” referred to early fusion across text, images, and video frames, rather than attaching a vision component after a language model had been built. Maverick was positioned as the broad general assistant. Scout spent more of its identity on distance.

Ten million tokens was Scout's irresistible figure. The boundary was easy to omit. Meta said pretraining and post-training used a 256K context, followed by length-generalization techniques and specialized data to extend operation to 10M. The release showed provider-run perplexity and needle-in-a-haystack retrieval tests over long code sequences. These measurements supported long-distance processing under those official tests. They did not show that any arbitrary ten-million-token collection would be understood as a whole. Fitting material, finding a planted fragment, and sustaining reliable judgment over it remain different achievements.

Behemoth made the family stranger still. The teacher approached two trillion total parameters and activated 288 billion, but remained in training when Scout and Maverick were released. Meta used its soft outputs to distill Maverick jointly during pretraining and compared it with other flagship systems on STEM benchmarks. The community received the students; an unreleased model had helped define what they learned.

Meta published comparisons in which Llama 4 models led GPT-4o, Gemini 2.0, DeepSeek V3, and others on selected evaluations. Those results expressed the provider's positioning under particular versions and protocols. Deployment precision, prompts, context length, and application data can change the comparison. Claims that an Int4 Scout could fit on one H100 or Maverick on an H100 host likewise described memory feasibility at a specific quantization, not effortless operation.

Llama 4 brought released weights into the same architectural conversation as closed multimodal flagships: early-fusion vision, mixture-of-experts routing, and very long context. It also made the word “open” visibly layered. Developers could download weights, inspect the architecture, fine-tune, and deploy the released models. The teacher, training data, and complete production history remained inside Meta.

The release boundary ran through the family. Scout and Maverick became files others could deploy and alter. Behemoth remained an internal teacher whose outputs had already shaped one of those files. Llama 4 made access part of the architecture diagram: the students were public artifacts, while the largest source of supervision stayed inside Meta.
