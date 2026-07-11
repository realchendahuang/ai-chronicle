---
eventId: flashattention
form: Systems-kernel portrait
narrativeCenter: Exact attention rewritten from “materialize a huge intermediate matrix” into an IO problem on the GPU memory hierarchy
emotionalSource: Arithmetic units still idle while wall time is stuck on HBM traffic
avoid:
  - Classing FlashAttention with approximate or sparse attention
  - Replacing HBM/SRAM constraints with empty praise
  - Crediting later FA-2/FA-3 gains to the 2022 paper
---

In the spring of 2022, a small group of researchers around Stanford stared at an ugly profiler plot: arithmetic units still had headroom, yet wall time was already gone. The bottleneck was not “not enough compute,” but moving data—standard attention materializes a huge intermediate score table in GPU high-bandwidth memory, and long sequences fill that scratchpad before the model weights do.

They did not change the math of attention. On 27 May, arXiv carried *FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness* by Tri Dao, Daniel Y. Fu, Stefano Ermon, Atri Rudra, and Christopher Ré. The word *exact* is deliberate: not sparse patterns, not low-rank approximation—the result must match standard softmax attention. What changed was the implementation: the question shifted from “are there enough FLOPs?” to “can we cut HBM traffic?”

GPUs have tiny, very fast on-chip SRAM and much larger, slower HBM. Naive attention materializes a huge score matrix in HBM, spending the dearest bandwidth on scratch paper. FlashAttention tiles \(Q\), \(K\), and \(V\) into blocks that fit in SRAM, completes local scoring, normalization, and weighting on-chip, then writes output blocks back; the backward pass recomputes some statistics instead of storing every activation. Online-softmax-style tricks keep tiled normalization equal to global softmax. Remembering only “faster” misses the sharp claim: the bottleneck diagnosis moves from FLOPs to HBM accesses.

On BERT and GPT-2 settings the paper reports end-to-end speedups and longer contexts made feasible on the same hardware. Numbers bind to that era’s chips and kernels; read them as order-of-magnitude argument. Quadratic complexity’s shadow remains; “will it run on this card?” shifts from a frequent no to something engineers can tune with kernels and tile sizes. Open repositories then compiled the method into CUDA paths. FlashAttention-2 and -3 would later squeeze utilization further; the 2022 text nails the reframing: after Transformers already dominate sequence modeling, critical gains can also come from honest modeling of the memory hierarchy. Exact, differentiable, IO-aware fused kernels became a slice of long-context infrastructure.

For people around 2022 trying to push context hard past 2K, this was not abstract elegance but whether a training job would finish before the deadline. A kernel will not solve data quality or alignment; it does one narrower thing: make exact quadratic attention deployable again under commodity GPU bandwidth. Infrastructure progress often looks like that.
