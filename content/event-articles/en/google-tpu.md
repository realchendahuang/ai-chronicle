---
eventId: google-tpu
form: a search company deciding to build its own chip
narrativeCenter: why Google gave up "just buy GPUs" in 2016 and built the TPU for deep learning
emotionalSource: the anxiety of data-center power bills and training scale, plus the excitement of AlphaGo
avoid:
  - inventing TPU's exact process node and compute numbers
  - claiming TPU wins in every scenario
  - reducing the competitive story to "disrupting Nvidia"
---

In May 2016, at Google I/O, a new piece of hardware appeared: the Tensor Processing Unit. Not a consumer chip, but a processor Google had built specifically for neural-network inference. To the audience it was one segment of a keynote; to the compute industry it was a signal—the largest internet company had started building its own AI chip.

Why would Google build its own chip? The answer sat in data-center bills. By around 2015 deep learning had moved from papers to production: speech recognition, search ranking, and Street View were all consuming GPU compute. General-purpose GPUs drew power and cost money, yet neural-network inference has a very fixed compute pattern—Google could design a chip that does only this one thing. The TPU was the product of that "custom silicon for a specific workload" mindset.

Nor was the TPU born in a vacuum. It had been running inside Google for a long time: much of the simulation behind AlphaGo's famous match against Lee Sedol ran on TPUs; search ranking and Street View text recognition already used it. By the time it was announced at I/O, it was not a lab prototype but a chip proven in production. Google claimed order-of-magnitude inference gains over contemporary GPUs with lower power.

The TPU's significance reaches far beyond one company. It proved to the whole industry that building specialized chips for AI is viable and worth it. Nvidia has since hardened its GPU moat, while Google, Amazon, Microsoft, and later Chinese vendors all walked down the custom-AI-chip path. The compute race stopped being "how many GPUs can you buy" and became "whose chip fits AI better."

Looking back at that 2016 chip, it is like a stone dropped into water. The ripples spread first to search and speech, then to the whole data center, and finally to the global AI-chip industry. Today large-model training runs on tens of thousands of cards and compute is among the scarcest resources; that small custom chip is one of the earliest footnotes to this arms race.
