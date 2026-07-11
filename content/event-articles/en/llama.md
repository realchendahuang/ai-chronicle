---
eventId: llama
form: History of distance collapsing around model weights
narrativeCenter: Research-licensed weights escaping the hosted-API relation and becoming material for quantization, fine-tuning, and local inference
emotionalSource: The intimacy of being able to touch a model file beside the disorder created when distribution outruns the intended license boundary
avoid:
  - Using democratization as a substitute for specific consequences
  - Collapsing open weights, open code, transparent training, and open-source licensing into one term
  - Portraying the community as a single anonymous heroic actor
---

A hosted model is always somewhere else. A request leaves the machine, an answer returns, and the weights remain at a distance.

Meta's LLaMA announcement in February 2023 changed that distance for a new class of capable language models. The family included 7B, 13B, 33B, and 65B parameter versions. The paper argued for training comparatively smaller models on more tokens when inference cost mattered, and reported competitive results across a range of benchmarks. Researchers could apply to obtain the weights.

Then the release escaped its intended choreography. The weights leaked and circulated beyond approved recipients. A rapidly expanding set of independent projects confronted practical questions: how far could precision be reduced without destroying capability, how could fine-tuning be made cheaper, what inference code would fit the model into consumer hardware? Quantization and adapter methods were not slogans about openness. They were answers to VRAM, throughput, and installation.

Local language-model use became plausible by accumulation. One person optimized a kernel, another documented a conversion, another produced a compact fine-tune, another built an interface. Their motives and standards varied. A research release became a wider ecosystem not through a single coordinated act but through many incompatible attempts to make the files useful.

The word “open” obscured as much as it explained. The first LLaMA was not issued under an open-source software license; access was governed by a research license. Llama 2 later expanded commercial permissions while retaining additional restrictions. Possessing weights, reading source code, knowing the training data, and receiving rights that satisfy an open-source definition are separate conditions. LLaMA's influence forced these distinctions into ordinary model discussion because a vague label no longer described what people were actually allowed to do.

Hosted APIs continued to offer important forms of order: managed hardware, stable endpoints, moderation, and centrally maintained versions. Downloadable weights offered another kind of power. They could remain inside an organization's data boundary, be inspected by researchers, run without a network service, or be altered in ways the publisher neither approved nor anticipated. The same transfer of control enabled adaptation and misuse.

Frontier APIs retained clear commercial advantages, while LLaMA established that a parallel technical culture could grow around possession rather than access. Afterward, every major model release invited a practical question before the benchmark debate had finished: can anyone get the weights?

Behind that question was no abstract manifesto. People wanted to know how much memory the model consumed, what happened if they changed it, and whether it could run on a machine they controlled. They wanted the faraway service to become an object on the desk.
