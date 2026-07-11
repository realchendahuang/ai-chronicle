---
eventId: llama
form: weight-access history
narrativeCenter: multi-size models under non-commercial research licenses, trillion-plus token training, and the tool-chain boom after the leak
emotionalSource: requestable weights are not the same word as unrestricted open source
avoid:
  - calling the first generation open-source software
  - ignoring how the leak actually drove the ecosystem
  - backfilling later license terms into the first drop
---

In February 2023 Meta published the Llama paper and four parameter sizes: 7B, 13B, 33B, and 65B. The largest trained on about 1.4 trillion tokens; the paper argued for training relatively smaller models on more tokens as another path between inference cost and quality, and reported competitive results against larger dense models on multiple benchmarks. Training mixtures included public web, code, encyclopedia, and books categories. Weights did not hang under a click-to-download, unrestricted commercial open-source license: approved researchers could obtain them under non-commercial terms, with application and compliance gates. Requestable is not open source in the Open Source Initiative sense of unrestricted redistribution and commercial use.

Then the weights leaked. Seed files circulated; quantization recipes, low-rank fine-tunes, local chat UIs, and data-cleaning guides exploded within weeks. Four- and five-bit weights fit consumer GPUs, putting smaller tiers on personal machines; ports of inference engines to CPUs and Apple silicon widened the audience further. Technical fact and legal fact need two columns: a model that runs on disk is not automatically a license that permits commercial products to use it that way. The industry was forced to separate open weights, open code, and open-source licenses as the OSI defines them—three phrases marketing copy often kneads into one. Fine-tune data quality varied wildly, producing many homogeneous chat clones and a few useful domain adapters; the real inheritance was a standardized tool-chain.

Method contribution and distribution accident entangled. Methodologically, the paper wrote small models plus ample tokens into the open-weight narrative, challenging pure parameter stacking; distributionally, a research license plus a leak became an involuntary global deployment experiment. University labs, startups, and hobbyists touched near-product dialogue models on their own hardware at scale, rather than only observing outputs through APIs. For closed-API vendors, a local ecosystem meant price and feature references suddenly downloadable; for safety and regulatory discussion, capability diffusion no longer depended only on one company’s release button. Broader commercial terms arrived only with later generations, still with caveats—that is the next chapter, not February 2023 as it stood.

From lab to startup, runnable local weights also rewrote fundraising and compliance stories: data could stay on-prem, demos could run offline, customers need not ship logs to a third-party endpoint. At the same time, the license crack required legal work early, or products stalled on proof of weight provenance.

This is not a clean open-source victory speech. It is a cracked opening: gates on the official path, a flood on the unofficial one, and from the flood the modern default toolbox of quantization and fine-tuning. Requestable research weights and copyable leaked files should not be written as one word. Vocabulary correction is institutional inheritance; the tool-chain is engineering inheritance; benchmark scores were only the ticket of the moment. After that spring, people still used inference and quantization habits the leak accelerated—habits outlive any single checkpoint, and license awareness must last as long.
