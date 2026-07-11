---
eventId: qwen
form: family origin note
narrativeCenter: August 2023 Qwen-7B / 7B-Chat weights and code, 2.2T+ token pretraining turning Chinese open models into a maintainable product line
emotionalSource: a license with a monthly-active threshold that still gave local deploy and Chinese instruction-following a stable public checkpoint
avoid:
  - backfilling later Qwen2/2.5 family drops into day one
  - calling conditional commercial terms unrestricted open source
  - replacing technical and distribution detail with nationalist rhetoric
---

On 3 August 2023 Alibaba Cloud’s Tongyi team released code and weights for Qwen-7B and Qwen-7B-Chat on ModelScope and Hugging Face. The base model was reported pretrained on more than 2.2 trillion tokens spanning Chinese, English, code, and multilingual text; the Chat variant continued on instruction and alignment data. For developers still dependent on closed Chinese APIs or English models with a translation accent, this was a 7B checkpoint that could land on disk, fine-tune, and run inside a private network.

The license was not Apache-style unrestricted. Research use was allowed; commercial entities under 100 million monthly active users could use the model under the stated terms, while larger scale required separate permission—exact wording as in the LICENSE of the day. The accurate description is open weights with conditional commercial terms, not “unrestricted open source.” Even so the bar was low enough for startups, universities, and individuals to form a default: Chinese tokenization and instruction following no longer had to be fully outsourced to a cloud endpoint. For enterprise on-prem deploys, keeping data in-domain can fit those conditional commercial terms—a practical reason many buyers choose an open-weight Chinese base.

A technical report (later on arXiv) put data mixture, tokenizer, context length, and benchmark tables into citable form rather than product copy alone. Benchmarks covered Chinese and English understanding, code, and math; publisher numbers should be labeled as official evaluations. Distribution posture mattered as much: weights on two hubs the global model community already used, docs written for reproducible experiments rather than console demos only. Tokenizer efficiency on Chinese text changes effective context and training cost under a fixed token budget—an often-hidden competitive axis. Chat alignment data shape politeness, safety, and tool-use tone in local products; uneven quality shows up as product voice.

Qwen’s historical weight is not whether the first 7B topped a particular leaderboard. It is that “Chinese open model” moved from a press release toward a maintainable family commitment. Later size tiers, vision and audio variants, code and math lines, and license tweaks belong to continuous iteration with their own dates; they should not all be written into 3 August 2023. Day one left large-scale Chinese-heavy pretraining, downloadable weights, an explicit (if conditional) commercial path—and an anchor so later weight drops would have people to catch them, fine-tune them, complain, and wait for the next version.

More than 2.2 trillion tokens claimed, 7 billion parameters, dual-hub distribution, and a monthly-active license threshold form the day-one fact ledger. Family stories beyond that ledger belong to their own release dates.
