---
eventId: vllm
form: Serving-system cross-section
narrativeCenter: The KV cache rewritten from per-request contiguous reservation into a paged virtual-memory problem
emotionalSource: OOM at modest concurrency while the profiler shows empty reserved holes
avoid:
  - Treating throughput numbers as eternal load-independent multipliers
  - Ignoring that execution still depends on model and scheduling
  - Collapsing open-source release and later SOSP paper into one day
---

The bottleneck in large-model serving is often not written on a loss curve. It is written on whether the next second can admit another request. Night-shift complaints are less often about loss than about fragmentation, queue length, and timeout alerts.

Autoregressive decoding keeps a key and value for every new token. Longer sequences enlarge the KV cache; more concurrent sessions make the memory ledger harder than the parameter ledger. Conventional practice often reserved a contiguous slab per request, padded toward a possible maximum length. When length is unknown in advance, padding becomes holes: fragmentation and over-reservation coexist, GPUs still have arithmetic capacity, and new work queues or OOMs. After ChatGPT, open weights and self-hosted inference rose together, and the problem moved from lab scripts to production’s main complaint.

Around 20 June 2023, a team including UC Berkeley researchers open-sourced vLLM and introduced PagedAttention: split the KV cache into non-contiguously mapped pages, manage block tables in the spirit of OS virtual memory, and cut waste from fragmentation and reservation. A SOSP paper that year described the design systematically; blog and paper need not share a calendar day. Against baselines such as Hugging Face Transformers, authors reported order-of-magnitude throughput gains on their loads—numbers bound to model, batch, and hardware, not eternal multipliers. Continuous batching and page-level allocation together let the engine reserve fewer empty slabs for unknown lengths.

vLLM did not change the model equations. It changed how a serving engine arranges memory and batching. Execution still depends on model quality, scheduling, and networking; PagedAttention only fixes one glaring slice. Throughput numbers expire with load. Treating the KV cache as pageable resource rather than one rigid contiguous band per request is the idea that remains—until the next time the memory ledger fills again. Infrastructure papers often win by turning a reason that used to reject requests into something that can be tuned.

Open engines change the default question: when self-hosting inference, teams ask first whether something like PagedAttention manages memory, rather than accepting “scale GPUs when concurrency rises.” Throughput numbers expire; the problem reframing remains. In serving-system history, such wins are usually quiet—no launch countdown, only fewer OOMs and shorter queues.

After PagedAttention, KV-cache management became a core serving-engine subject rather than a corner optimization. Successors may change implementations, but it is hard to pretend contiguous max-length reservation is the only sane default. Quiet infrastructure wins often rewrite defaults this way.
