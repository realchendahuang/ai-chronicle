---
eventId: llama
form: Community history around a weight leak
narrativeCenter: How research-licensed LLaMA weights, once leaked, ignited quantization, fine-tuning, and local inference tooling
emotionalSource: Liberation at downloadable checkpoints—and sobriety that this was not open-source software
avoid:
  - Calling LLaMA unrestricted open source
  - Romanticizing the leak as official release strategy
  - Ignoring noncommercial terms versus later Llama 2
---

On 24 February 2023, Meta published the LLaMA paper and four sizes—7B, 13B, 33B, 65B—with the 65B model trained on about 1.4 trillion tokens. Weights went to approved researchers under a noncommercial research license: not open-source software in the OSI sense, and not something most product contracts could absorb directly. Application, approval, and research use were the official distribution gates.

The paper stressed training relatively smaller models on more tokens to reach competitive benchmarks with fewer parameters. For researchers still blocked by closed APIs, the appeal was concrete: inspect weights, change training, run inside one’s own hardware boundary—suddenly plausible. Smaller models with longer data also left a gap for labs with less compute.

Then the weights leaked. The leak was not official release strategy, yet it quickly rewrote the map of facts: the community built quantization, fine-tuning, and local inference tools overnight; LLaMA derivatives and tutorials spread in weeks. Capability talk and compliance talk were forced to run in parallel—being able to run is not being allowed to ship. Some called the leak a victory for openness; the license still said noncommercial. Both statements can be true and both incomplete.

LLaMA left a clearer boundary than any single score: open weights, open code, and open-source licenses are three different things. The first generation pushed “weights obtainable” of the first two to the front; the third waited for Llama 2’s different community license to answer in part. The leak sped the toolchain and sped the industry’s education in writing legal terms into technical stories. Later debates over “open-source large models” almost always return to the three lines drawn this day.

In the weeks after the leak, Hugging Face and assorted scripts pushed quantization, GGUF, LoRA, and local UIs onto ordinary machines. A research license could not stop spread; spread could not rewrite the license text. Meta later answered commercial needs with Llama 2’s community license, but the first generation’s lesson was already in the industry lexicon: when speaking of “open-source models,” ask first whether weights, code, or the license is open. Until those three lines are clear, debate collapses into slogan combat.

Research distribution under a noncommercial license meant to control use; the leak partly moved control to community facts. Any later “research-only weights” strategy must design both against leaks and for post-leak narrative. LLaMA was not the first leak, but it was among the most exemplary in the large-model era.
