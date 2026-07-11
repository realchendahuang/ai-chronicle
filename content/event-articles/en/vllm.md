---
eventId: vllm
form: serving-systems cross-section
narrativeCenter: how the KV cache stopped being “reserve one contiguous slab per request” and became a paging problem
emotionalSource: OOM as soon as concurrency rises, while the profiler shows empty reserved holes for unknown lengths
avoid:
  - treating throughput multipliers as eternal and workload-free
  - ignoring that execution still depends on model and scheduler pieces
  - collapsing the open-source launch and later SOSP paper into one day
---

The bottleneck in large-model serving is often not written on a loss curve. It is written on whether one more request fits in the next second.

Autoregressive decoding keeps a key and a value for every generated token so later attention steps can read them. Longer sequences grow the KV cache; more concurrent sessions unbalance the memory ledger faster than the parameter ledger. Classical practice often reserved a contiguous slab per request and left headroom for a possible maximum length. When length is unknown, headroom becomes holes: fragmentation and over-reservation coexist. The GPU still has FLOPs; new requests queue or OOM. After ChatGPT, open weights and self-hosted inference heated up together, and the failure mode moved from lab scripts to the night shift in the machine room.

On 20 June 2023, Woosuk Kwon, Zhuohan Li, and coauthors announced vLLM in a blog post and named the core mechanism PagedAttention. The inspiration was classical virtual memory: a logically continuous KV need not be physically continuous. Fixed-size pages (blocks) map onto scattered physical VRAM through a page table. When a request ends or a branch copies state, pages can be reclaimed or copy-on-written instead of moving whole slabs. Official materials reported up to roughly 24× higher throughput than baselines such as Hugging Face Transformers on their evaluated workloads, without model-architecture changes—figures that bind to those workloads and comparisons, best read as concurrency unlocked by memory utilization, not a universal accelerator card.

Later that year a SOSP paper, *Efficient Memory Management for Large Language Model Serving with PagedAttention* (arXiv:2309.06180), wrote the design as systems research: near-zero-waste KV management, cache sharing within and across requests, and a high-throughput engine on top. Shipping as an open-source library turned paged KV from a lab scheduling trick into something you could `pip install`. Self-hosting of open-weight models (LLaMA-class and beyond), bulk generation for eval platforms, and startup API gateways quickly put the name in dependency lists.

PagedAttention does not cancel the cost of attention itself, nor does it replace operator-level work such as FlashAttention. It attacks another layer—how cache layout and multi-request scheduling share finite VRAM. Serving stacks gained a clean split: kernels wring IO out of one attention pass; paging wrings memory shape across a batch. Later engines absorbing similar ideas shows that summer 2023 fixed a problem statement more than a brand: LLM serving is a memory system first and “buy another GPU” second.

For operators the change shows up on dashboards. Concurrent sessions on the same A100/H100 rise; prefix sharing and parallel sampling fit page-level sharing more naturally than full-cache copies. For researchers, evaluation throughput no longer only means shrinking the batch or truncating length. Boundaries remain: wrong page sizes, fragmentation policy, and scheduling priority still hurt tail latency; multi-tenant isolation and model quality are out of scope. vLLM’s gift was to lift “where the KV lives” from an implicit habit into a discussable, reproducible systems layer—so high-concurrency generation became something you could check against a paper and a repository, not only against luck.
