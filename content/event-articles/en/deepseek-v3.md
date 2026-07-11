---
eventId: deepseek-v3
form: marginalia on a cost table
narrativeCenter: a 671B-total / 37B-active MoE and the technical report’s 2.788 million H800 GPU-hour pretraining ledger
emotionalSource: frontier training cost entering public discussion as a citable table—while “not full project cost” must sit in the same sentence
avoid:
  - equating pretraining GPU-hours with total company R&D spend
  - drowning architecture in stock-price narrative
  - calling open weights unrestricted open source without checking the license
---

On 26 December 2024 DeepSeek released DeepSeek-V3 with a technical report. The model is a mixture-of-experts design: about 671 billion total parameters, about 37 billion activated per token, with Multi-Head Latent Attention and related choices aimed at training and inference bandwidth. Open weights allow download, deployment, and further study; the repository license governs use—open weights are not automatically the most permissive OSI definition.

The most quoted lines are not a single quiz score but the resource table. Final pretraining is counted at about 2.788 million H800 GPU-hours; at the GPU-hour price the report adopts, that is about $5.576 million. The sentence must be split. The figure describes the **compute ledger of the final pretraining run**, not data purchases, failed experiments, headcount, serving, or historical R&D. Reading $5.576 million as “a frontier model costs only five-and-a-half million end to end” swaps accounting categories. DeepSeek’s own framing is cooler: put the publishable slice of the compute bill on the table so the industry need not rely only on rumor.

Architecture explains why the efficiency story can hold. MoE levers total capacity against active FLOPs per step; latent attention compresses keys and values; stability techniques (auxiliary losses, load-balancing related design) appear in inspectable sections. Benchmark tables cover code, math, and general knowledge; publisher numbers are official evaluations. What changed industry talk is that cost structure became discussable. Closed labs’ full bills remain invisible, but at least one open-weight model offered order of magnitude and methodology.

For developers, V3 offered a then-rare combination: open weights near flagship chat quality with paths to local or private deploy. For infrastructure and investment debates, it put algorithm–systems co-design back beside “only stack GPUs.” R1 would later shift the story toward reinforcement-learned reasoning; V3’s own legacy is a cost table with footnotes and a high-profile MoE success on the open-weight side.

The best way to read DeepSeek-V3 is with the architecture figure and the expense table open together: how 37B active parameters support 671B capacity on one side, and exactly what 2.788 million GPU-hours measure—and omit—on the other. Public discussion that keeps only a dollar figure wastes the part of the report that chose to be public.

Report chapters on training stability—routing collapse, numerical issues, mitigations—show that “cheap” presupposes runs that finish. Active parameters govern latency and memory; total parameters govern disk and load. MoE splits those costs so deployers can choose quantization and expert-parallel strategies. Public ledgers invite comparison only inside stated meter bounds: final pretraining GPU-hours are not full R&D invoices. Architecture figure and cost table should be read together.
