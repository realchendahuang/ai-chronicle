---
eventId: flashattention
form: systems-kernel profile
narrativeCenter: how exact attention stopped being told as “materialize a huge score matrix” and was retold as an IO problem on the GPU memory hierarchy
emotionalSource: the engineering frustration of idle arithmetic units while HBM traffic owns the wall clock
avoid:
  - casting FlashAttention as sparse or approximate attention
  - replacing HBM/SRAM constraints with empty superlatives
  - stuffing later FA-2/FA-3 wins into the 2022 paper
---

Midway through a long-sequence Transformer training run, utilization charts often lie politely. Arithmetic units still have headroom; wall time is spent on memory traffic. The textbook formula for self-attention is clean—score queries against keys, weight the values—yet a direct matrix translation materializes \(N \times N\)-scale intermediates in GPU high-bandwidth memory (HBM). As sequences grow, those temporaries exhaust VRAM before the weights do; even when they fit, repeated round-trips spend cycles that should have been multiply-adds.

On 27 May 2022, Tri Dao, Daniel Y. Fu, Stefano Ermon, Atri Rudra, and Christopher Ré posted *FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness* on arXiv. The word “exact” is load-bearing: the method does not trade quality for speed via sparsity or low-rank approximation. It keeps the same softmax attention math and changes the implementation story—treating attention as an IO-sensitive schedule across the GPU memory hierarchy.

A GPU pairs a small, fast on-chip SRAM with a much larger, slower HBM. Naive attention writes a huge score matrix into HBM, spending scarce bandwidth on scratch paper. FlashAttention tiles \(Q\), \(K\), and \(V\) into blocks that fit in SRAM, finishes local scoring, normalization, and weighting on-chip, then writes output tiles back; the backward pass recomputes some statistics instead of storing every activation. Online-softmax-style bookkeeping keeps blockwise normalization equivalent to a global softmax. If the takeaway is only “faster,” the paper’s edge is missed: the bottleneck diagnosis moves from FLOPs to HBM accesses.

On BERT- and GPT-2-style settings the authors reported end-to-end speedups and longer feasible contexts on the same hardware. Those numbers bind to then-current silicon and kernels; read them as order-of-magnitude evidence that when implementations stop materializing full attention matrices, the engineering ceiling on sequence length moves. Quadratic cost does not vanish—longer sequences still cost more compute—but “can this card run it at all” becomes something you can tune with block sizes and kernels instead of an automatic no.

Open-source repositories soon turned the method into compilable CUDA paths; training frameworks and inference stacks followed. FlashAttention-2 and FlashAttention-3 would later wring more occupancy and new-architecture features from the same idea. What the 2022 text fixed in place is the reframing itself: after Transformers already dominated sequence modeling, the next material gain need not rewrite the model equation first—it can come from an honest model of the memory hierarchy. Sparse and linear attention still have their niches; FlashAttention proved another path—exact, differentiable, IO-aware fused kernels—could carry a stretch of long-context infrastructure.

On a whiteboard the arrows still run from every position to every other. In a profiler the arrows point at the HBM bus. FlashAttention made the second set of arrows the paper’s protagonist. For teams in 2022 trying to shove context past a 2K habit, that was not abstract elegance; it was whether a training job finished before the deadline. Kernels do not fix data quality or alignment. They do one narrower thing: make exact quadratic attention deployable again under the real bandwidth of commodity GPUs.
