---
eventId: mixtral
form: sparse-capacity datasheet
narrativeCenter: how 8 experts choose 2, 46.7B total parameters, and 12.9B active per token made MoE an Apache 2.0 download
emotionalSource: the shrewd pleasure of roughly 13B inference cost with capacity that scales with the expert pool
avoid:
  - treating vendor benchmarks as independent final judgment
  - ignoring the double ledger of total vs active parameters
  - backfilling later, larger MoE systems into this day
---

On 11 December 2023 Mistral AI titled a blog post *Mixtral of experts*. The release was concrete: Mixtral 8x7B, a sparse mixture of experts (SMoE), weights under Apache 2.0—true open-source software terms allowing commercial use, modification, and redistribution, not a research-only or monthly-active gated custom license. For teams still reading restriction lists in Llama 2’s community license, the first draw on the page was sometimes not a score but an SPDX-friendly license string.

Structure needs two ledgers. Total parameters about 46.7 billion: eight expert feed-forward blocks per decoder layer. Active parameters about 12.9 billion per token: a router picks two experts per layer for that token and sums their outputs. Experts and routing train together; at inference cost and latency sit nearer a dense 13B model than a fully activated 47B. Context length 32k; release materials emphasize English, French, Italian, German, Spanish, and code. The same day shipped an Instruct variant via supervised fine-tuning and DPO; Mistral reported MT-Bench 8.3. Write only total parameters and you overestimate per-forward compute; write only active and you underestimate VRAM and checkpoint size—ops must keep both lines.

Benchmark sentences need a subject. Mistral reported that Mixtral beats Llama 2 70B on most standard benchmarks with faster inference (about 6× in their writeup) and matches or exceeds GPT-3.5 on most items; the instruct model was described among the best open models and comparable to GPT-3.5. Those are publisher tables—not a third-party blind final. The fair reading: here is an open-weight candidate trading sparse activation for value, worth re-measuring on your latency and business set. Batching, memory fragmentation, and routing implementation still move “paper 13B” relative to wall-clock time.

For engineering teams Apache 2.0 and MoE matter equally. Legal review is relatively short; deployment must handle expert parallelism, memory layout, and routing, with stacks such as vLLM adding efficient kernels soon after. Builders using it for multilingual assistants, code completion, or RAG get commercially usable high-capacity open weights. Bias and hallucination probes (BBQ/BOLD in the post) remind that base models still want preference and safety post-training. A permissive license is not a waiver: training-data provenance, output compliance, and content filters remain the deployer’s problem.

Historically the day continues a European lab line. September’s Mistral 7B showed small models plus permissive licensing can claim space; December’s Mixtral showed sparse experts can push the open-tier cost curve another notch. Deeper, later MoE systems are later chapters, not inflated footnotes to 11 December. The datasheet that day is short: write total and active separately; write Apache on the license line; write “vendor-reported” on the scores. Anyone who can read all three lines is harder to fool with a parameter table alone—the expert pool is capacity, the router is the bill; sparse does not automatically mean cheap, but once the books are right the knobs become clear.
