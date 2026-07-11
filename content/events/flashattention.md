---
id: flashattention
title: FlashAttention 用 IO 感知重写精确注意力
titleEn: FlashAttention rewrites exact attention with IO-awareness
subtitle: 分块计算减少 HBM 读写，长序列训练与推理更快更省显存
subtitleEn: Tiling cuts HBM traffic so long-sequence training and inference get faster and leaner
date: '2022-05-27'
datePrecision: day
importance: A
eventType: [paper, infrastructure]
topics:
  - large-language-models
  - ai-infrastructure
  - deep-learning
  - model-efficiency
companies: []
models: []
products: []
papers: [flashattention]
people: [tri-dao, daniel-y-fu, stefano-ermon, atri-rudra, christopher-re]
concepts: [attention, transformer, gpu]
summary: Tri Dao 等人提出 FlashAttention：在 GPU 上按块计算精确 softmax 注意力，减少高带宽内存（HBM）读写，从而在不近似注意力数学的前提下加速并节省显存。
summaryEn: Tri Dao and coauthors introduced FlashAttention, computing exact softmax attention in tiles on GPUs to cut high-bandwidth memory (HBM) traffic, speeding up and shrinking memory use without approximating the attention math.
background: Transformer 自注意力的时间与激活内存随序列长度二次增长；朴素实现会把巨大中间矩阵写入 HBM，长上下文训练与推理常被内存带宽而非算力卡住。
backgroundEn: Self-attention in Transformers grows quadratically in sequence length for time and activation memory; naive implementations materialize huge intermediates in HBM, so long-context work is often memory-bandwidth bound rather than compute bound.
whatHappened: 2022 年 5 月 arXiv 论文描述用 SRAM 常驻的分块与在线 softmax 技巧，融合注意力内核、重计算反向传播所需统计量。作者在 BERT、GPT-2 等设置上报告端到端加速与更长上下文可行性。
whatHappenedEn: A May 2022 arXiv paper described tiling that keeps blocks in on-chip SRAM, online softmax, a fused attention kernel, and recomputation of statistics for the backward pass. Authors reported end-to-end speedups and longer feasible contexts on setups such as BERT and GPT-2.
whyImportant: 它把“精确注意力”从显存炸弹改写成可落地的 GPU 内核问题，成为长上下文训练、推理栈与后续 FlashAttention-2/3 的基础，也影响了服务端注意力内核生态。
whyImportantEn: It turned exact attention from a memory bomb into a practical GPU-kernel problem, underpinning long-context training and inference stacks, FlashAttention-2/3, and a broader ecosystem of serving kernels.
impact:
  developer: 同样硬件上可以训更长序列或堆更大 batch，而不必先改成稀疏/线性近似注意力。
  industry: 开源内核与框架集成使 IO 感知注意力成为默认基础设施，而不是论文附录技巧。
impactEn:
  developer: The same hardware could train longer sequences or larger batches without first switching to sparse or linear approximations.
  industry: Open kernels and framework integrations made IO-aware attention default infrastructure rather than a paper appendix.
beforeAfter:
  before: 长序列注意力常因中间矩阵占满 HBM 而被迫截断上下文或求助于近似。
  after: 精确注意力可通过分块与融合内核在更长序列上实用运行。
beforeAfterEn:
  before: Long-sequence attention often forced truncated contexts or approximations because intermediates filled HBM.
  after: Exact attention could run practically at longer lengths via tiling and fused kernels.
relatedEvents: [transformer, cuda, lstm, gpt-3, vllm]
visual:
  src: /assets/events/flashattention.webp
  width: 1280
  height: 720
  alt: "分块光带在快速片上内存与慢速大内存之间穿梭，汇成一条精确注意力流"
  altEn: "Tiled light bands shuttle between fast on-chip memory and slower bulk memory into one exact attention stream"
  caption: "AI Chronicle 原创插图：FlashAttention 用 IO 感知分块计算精确注意力。"
  captionEn: "Original illustration by AI Chronicle: FlashAttention computes exact attention with IO-aware tiling."
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial illustration for FlashAttention history, abstract GPU memory hierarchy: small glowing SRAM tiles vs large dim HBM plane, light beams of QKV tiles fuse into exact attention stream without approximation fog, cool blues and amber accents, technical diagram feel, no text no logos, 16:9"
sources:
  - title: 'FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness'
    url: "https://arxiv.org/abs/2205.14135"
    publisher: arXiv
    type: paper
  - title: Dao-AILab/flash-attention
    url: "https://github.com/Dao-AILab/flash-attention"
    publisher: GitHub
    type: official
status: verified
slug: flashattention
---
