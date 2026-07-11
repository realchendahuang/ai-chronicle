---
eventId: llama
form: history of weight access
narrativeCenter: 7B–65B models under noncommercial research terms, 1.4T-token training, and the post-leak explosion of quantization and fine-tunes
emotionalSource: “weights you can apply for” is not “open source for any commercial use”—the leak nailed the difference to everyone’s forehead
avoid:
  - calling LLaMA 1 open-source software
  - ignoring how the leak actually drove the ecosystem
  - backfilling Llama 2/3 terms onto the first generation
---

In February 2023 Meta published the LLaMA paper and offered four sizes: 7B, 13B, 33B, and 65B parameters. The 65B model trained on about 1.4 trillion tokens. The paper stressed training comparatively smaller models on more tokens as another path between inference cost and quality, and reported competitive benchmarks against larger dense models. Weights did not hang under a click-to-download, arbitrary-commercial-use open-source license. Approved researchers could obtain them under noncommercial terms; application and compliance gates were real.

Then the weights leaked. Torrents circulated, and quantization (GPTQ, llama.cpp, and kin), LoRA fine-tunes, local chat UIs, and dataset-cleaning guides exploded within weeks. Technical fact and legal fact must be written in two columns: being able to run 7B and 13B on disk does not automatically mean a license allows your commercial product to do so. The industry was forced to distinguish open weights, open code, and OSI open-source licenses—three phrases marketing copy often kneads into one.

LLaMA’s methodological contribution and distribution accident are entangled. Methodologically it wrote “smaller model + enough tokens” into the open-weight narrative, challenging parameter-stacking as the only story. On distribution, research licensing plus a leak became an involuntary global deployment experiment. University labs, startups, and hobbyists touched model internals near chat-product quality on their own GPUs—or even CPUs—rather than only through APIs. Llama 2 later offered broader commercial terms with remaining restrictions; that is the next chapter, not February 2023 as-was.

For closed API vendors, the LLaMA ecosystem suddenly localized a price and feature reference. For safety and policy debates, capability diffusion no longer depended only on one company’s release button. Benchmark tables in the paper age; the observation that “once weights can be copied, community toolchains grow on a weekly clock” still applies.

LLaMA is not a clean open-source victory speech. It is an openness with a crack: formal channels had gates, informal channels had a flood, and the flood carved the modern default toolbox of quantization and fine-tuning. Reading the history means seeing Meta’s paper numbers and the overnight `.cpp` commits on GitHub at once.

From research licenses to torrent floods to later broader commercial terms, Meta’s openness strategy itself became an object of study. Startups gained offline demos and on-prem narratives; counsel had to enter early or launch would stall on provenance. Quantization habits born that spring still structure local inference. The vocabulary correction—open weights versus open-source licenses—is institutional residue as durable as any single checkpoint.
