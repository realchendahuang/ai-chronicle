---
id: mixtral
title: Mistral 发布 Mixtral 8x7B 混合专家模型
titleEn: Mistral releases Mixtral 8x7B mixture-of-experts
subtitle: 总参约 467 亿、每 token 激活约 129 亿的稀疏开放权重
subtitleEn: Sparse open weights with ~46.7B total and ~12.9B active parameters per token
date: '2023-12-11'
datePrecision: day
importance: A
eventType: [model, open-source]
topics:
  - open-source-models
  - model-efficiency
  - large-language-models
companies: [mistral]
models: [mixtral-8x7b]
concepts: [moe, open-weight, llm]
summary: Mistral AI 以 Apache 2.0 发布 Mixtral 8x7B 稀疏混合专家模型：每层 8 组专家、每 token 路由 2 个，总参数约 46.7B、每 token 约 12.9B 激活。厂商报告在多数基准上超过 Llama 2 70B、推理更快，并匹配或超过 GPT-3.5；这些比较由发布方给出。
summaryEn: Mistral AI released Mixtral 8x7B under Apache 2.0—a sparse MoE with 8 expert groups per layer and top-2 routing, about 46.7B total and 12.9B active parameters per token. The company reported beating Llama 2 70B on most benchmarks with faster inference and matching or exceeding GPT-3.5; those comparisons are vendor-reported.
background: Mistral 7B 已用小参数与宽松许可切入开放生态；市场仍需要在 70B 级能力与可部署成本之间的中间档。稠密大模型推理贵，稀疏 MoE 把容量与激活量拆开。
backgroundEn: Mistral 7B had entered the open ecosystem with small parameters and a permissive license; the market still wanted a middle tier between 70B-class capability and deploy cost. Dense giants were expensive to serve; sparse MoE separates capacity from activated compute.
whatHappened: Mixtral 为解码器架构，前馈层从 8 专家中选 2 个处理每个 token；上下文 32k，强调英、法、意、德、西与代码。同日发布 Instruct 变体（SFT + DPO），厂商称 MT-Bench 8.3。推理侧推动 vLLM 等开源栈支持。
whatHappenedEn: Mixtral is decoder-only; each feed-forward block picks 2 of 8 experts per token. Context is 32k, with emphasis on English, French, Italian, German, Spanish, and code. An Instruct variant (SFT + DPO) shipped the same day; Mistral reported MT-Bench 8.3. The release pushed support in open stacks such as vLLM.
whyImportant: 它把稀疏 MoE 写成可商用的开放权重产品形态，证明“有效容量大于激活量”可以进入默认下载列表，并影响后续 DeepSeek 等更大规模 MoE 叙事。
whyImportantEn: It packaged sparse MoE as a commercially usable open-weight product, showing that “effective capacity above activated parameters” can land in default download lists and shaping later larger MoE stories such as DeepSeek’s.
impact:
  developer: 可用接近 13B 稠密模型的推理成本换取更大总容量的开放权重。
  industry: 开放模型竞争从“参数表第一”扩展到激活效率与许可友好度。
impactEn:
  developer: Teams could buy larger total capacity at roughly 13B-dense inference cost under open weights.
  industry: Open-model competition expanded from parameter-table rank to activation efficiency and licensing friendliness.
beforeAfter:
  before: 高能力开放档主要由稠密 70B 级模型占据。
  after: 稀疏专家成为开放权重高性价比路线的公开选项。
beforeAfterEn:
  before: The capable open tier was dominated by dense ~70B models.
  after: Sparse experts became a public high value-for-cost option among open weights.
relatedEvents: [mistral, llama-2, deepseek-v3]
visual:
  src: /assets/events/mixtral.webp
  width: 1280
  height: 720
  alt: "昏暗实验室里多张专家工作台，只有少数被琥珀光点亮"
  altEn: "Dim lab with specialist workstations, only a few lit in amber"
  caption: "AI Chronicle 原创插图：Mixtral 用稀疏专家路由在激活参数有限时提高容量。"
  captionEn: "Original illustration by AI Chronicle: Mixtral routes sparse experts to grow capacity with limited active parameters."
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial illustration for Mixtral mixture of experts, specialist workstations amber light path, charcoal amber, no logos, 16:9"
sources:
  - title: Mixtral of experts
    url: https://mistral.ai/news/mixtral-of-experts
    publisher: Mistral AI
    type: official
  - title: Mixtral of Experts (technical report)
    url: https://arxiv.org/abs/2401.04088
    publisher: arXiv
    type: paper
status: verified
slug: mixtral
---
