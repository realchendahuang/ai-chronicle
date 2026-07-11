---
eventId: mixtral
form: sparse capacity datasheet
narrativeCenter: top-2 of 8 experts, 46.7B total and 12.9B active per token, packaged as Apache 2.0 downloadable MoE
emotionalSource: the thrifty pleasure of costing inference like ~13B dense while capacity spans an expert pool
avoid:
  - treating vendor benchmarks as independent final judgment
  - ignoring dual bookkeeping of total vs active parameters
  - backfilling later larger MoE details into launch day
---

On 11 December 2023 Mistral AI titled a post *Mixtral of experts*. The artifact was concrete: Mixtral 8x7B, a sparse mixture of experts (SMoE), weights under Apache 2.0—a genuine open-source software license allowing commercial use, modification, and redistribution, not a research-only sheet or a custom monthly-active-user gate.

Two ledgers describe the structure. Total parameters ≈ 46.7B: each feed-forward block holds eight expert parameter groups inside a decoder-only stack. Active parameters per token ≈ 12.9B: a router picks two experts per layer for that token and adds their outputs. Experts and routers train together; at inference cost and latency track closer to a ~13B dense model than to a fully activated 47B. Context length is 32k; release notes stress English, French, Italian, German, Spanish, and code. The same day shipped an Instruct variant via supervised fine-tuning and DPO; Mistral reported MT-Bench 8.3.

Benchmark sentences need a subject. Mistral reported that Mixtral beats Llama 2 70B on most standard benchmarks with faster inference (about 6× in their writeup) and matches or exceeds GPT-3.5 on most items; the instruct model was described among the best open models and comparable to GPT-3.5. Those are publisher tables—task sets, prompts, and versions as in the blog—not a third-party blind final. The fair reading: here is an open-weight candidate trading sparse activation for value, worth re-measuring on your latency and business set—not a chart to paste into procurement as verdict.

For engineering teams Apache 2.0 and MoE matter equally. Legal review is relatively short; deployment must handle expert parallelism, memory layout, and routing, with stacks such as vLLM adding efficient kernels soon after. Builders using it for multilingual assistants, code completion, or RAG get commercially usable high-capacity open weights, not another research-only checkpoint. Bias and hallucination probes (BBQ/BOLD in the post) remind that base models still want preference and safety post-training.

Historically the day continues a European lab line. September’s Mistral 7B showed small models plus permissive licensing can claim space; December’s Mixtral showed sparse experts can push the open-tier cost curve another notch. Deeper, later MoE systems—including other labs’ much larger expert models—are later chapters, not inflated footnotes to 11 December. The datasheet that day is short: write total and active separately; write Apache on the license line; write “vendor-reported” on the scores. Anyone who can read all three lines is harder to fool with a parameter table alone.
