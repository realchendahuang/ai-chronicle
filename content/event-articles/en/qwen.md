---
eventId: qwen
form: dual-hub release narrative
narrativeCenter: how Chinese-focused 7B weights moved beyond a cloud service into places developers could download, modify, and deploy
emotionalSource: the same checkpoint appearing on ModelScope and Hugging Face, giving a Chinese model family a public address people could keep returning to
avoid:
  - backfilling later Qwen2 and Qwen2.5 releases into day one
  - calling conditional commercial terms unrestricted open source
  - replacing technical and distribution detail with nationalist rhetoric
---

On 3 August 2023, Alibaba Cloud’s team placed Qwen-7B and Qwen-7B-Chat on ModelScope and Hugging Face. For developers, the important event was not another chat page. The model moved from behind a service into a local directory: code and weights could be downloaded, the base model could be further trained, and the chat model could be tested inside a private environment. A Chinese large language model was no longer available only through a vendor API. It had a public checkpoint that a community could point to together.

The first Qwen-7B release reported pretraining on more than 2.2 trillion tokens spanning Chinese, English, code, and other multilingual material. The base model learned general continuation and representations; the Chat version received additional instruction and alignment training. Chinese support was not simply a matter of including Chinese pages in the corpus. Tokenizer choices determined how many characters and phrases fit into a fixed context and how much each prompt cost in tokens. Teams accustomed to translated English tone, thin Chinese knowledge, or inefficient segmentation encountered those choices in every interaction.

Distribution mattered as much as model design. ModelScope provided an entry point well connected to Chinese networks and Alibaba’s ecosystem; Hugging Face placed the weights inside the tooling already used by a global developer community. The repository supplied examples for Transformers and later added paths for quantization and fine-tuning. Day one did not deliver every adapter at once, but it established a loop: weights were downloaded, failures appeared in issues, code was updated, and a recognizable user base remained in place for the next release.

The license drew a clear boundary around that loop. Research use was allowed. Under the terms at the time, commercial entities below 100 million monthly active users could use the model, while those at or above the threshold needed separate permission. This was open-weight distribution with conditional commercial terms, not unrestricted Apache-style open source. The threshold left room for most individuals, universities, and startups to experiment; for the largest platforms, the license itself became part of the adoption decision.

Publisher benchmarks covered Chinese and English understanding, code, and mathematics. They showed what the team intended to demonstrate, not a substitute for independent evaluation. A more durable shift appeared in how the model could be used: companies could bring a Chinese base model inside their networks, researchers could repeat experiments on the same checkpoint, and developers could report failures against a public version. First place on a table would age quickly. A continuing distribution relationship meant that later releases no longer arrived as isolated pieces of news.

Qwen would expand into more sizes, vision, audio, code, and mathematics, while its licensing evolved. Those events should not be poured backward into 3 August. What happened that day was specific enough: a pair of 7B checkpoints trained with Chinese and English at the center landed on two model hubs at once. From then on, “the next Qwen” was not only a cloud-product update. It became a public event that developers would wait for, download, and compare on their own machines.
