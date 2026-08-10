---
id: deepseek-v2
title: DeepSeek-V2 发布
titleEn: DeepSeek-V2 is released
subtitle: MLA 架构与超低价 API 引爆中国大模型价格战
subtitleEn: MLA architecture and ultra-low pricing ignite China's LLM price war
date: '2024-05-06'
datePrecision: day
importance: A
eventType:
  - product
  - open-source
topics:
  - china-ai
  - model-efficiency
  - moe
  - ai-history
companies:
  - deepseek
concepts:
  - moe
  - open-weight
  - context-window
summary: DeepSeek 发布 V2，采用 MLA（多头潜在注意力）+ DeepSeekMoE 稀疏架构，以远低于同行的价格开放 API。推理成本约为 Llama 3 的 1/100，直接引爆了中国大模型的价格战。
summaryEn: DeepSeek released V2 with MLA (Multi-head Latent Attention) plus DeepSeekMoE sparse architecture, opening API access at prices far below peers. Inference cost was about 1/100 of Llama 3 70B, directly igniting China's LLM price war.
background: 2024 年 5 月中国大模型厂商密集发布新模型，竞争进入白热化。DeepSeek 一直以技术先行著称，此前发布过 DeepSeek-Coder 与 V1。
backgroundEn: In May 2024 Chinese LLM vendors released models in rapid succession and competition grew fierce. DeepSeek had a reputation for technical firsts, having shipped DeepSeek-Coder and V1 earlier.
whatHappened: V2 用 MLA 大幅压缩 KV 缓存，用稀疏 MoE 提升效率，在多项中文基准上追平或超越 Llama 3 70B。API 定价低至每百万 token 1 元，约为同行的百分之一。模型权重开源，代码仓库同步公开。
whatHappenedEn: V2 used MLA to shrink KV cache dramatically and sparse MoE for efficiency, matching or beating Llama 3 70B on many Chinese benchmarks. API pricing fell to about 1 yuan per million tokens—roughly 1/100 of peers. Weights were open-sourced and code repositories made public.
whyImportant: V2 以「架构创新+极致低价」的组合证明了中国团队能做出世界级高效模型，同时把大模型从「贵」推向「白菜价」，重塑了整个行业的价格预期。
whyImportantEn: V2 combined architectural innovation with extreme low pricing, proving Chinese teams could build world-class efficient models, and pushed LLMs from "expensive" toward "dirt cheap," resetting industry price expectations.
impact:
  user: 普通开发者的模型调用成本骤降。
  industry: 引发全行业价格战，多家厂商跟进降价，推理效率成为核心竞争力。
impactEn:
  user: Model-call costs for ordinary developers collapsed.
  industry: A full-industry price war followed; efficiency became a core competitive lever.
beforeAfter:
  before: 使用大模型 API 的成本对个人开发者仍偏高。
  after: 价格降到个人与创业团队都能承受的水平。
beforeAfterEn:
  before: LLM API costs were still high for individual developers.
  after: Prices fell within reach of individuals and startups.
relatedEvents:
  - deepseek-v3
  - deepseek-r1
  - mixtral
  - deepseek-v4
visual:
  src: /assets/events/deepseek-v2.webp
  width: 1672
  height: 941
  alt: 蓝色鲸鱼游弋在数据电路海洋中的插画
  altEn: Illustration of a blue whale swimming through a sea of data circuits
  caption: DeepSeek-V2 用 MLA 与 MoE 架构引爆了 2024 年的模型价格战。
  captionEn: DeepSeek-V2 ignited the 2024 model price war with its MLA and MoE architecture.
  credit: AI Chronicle
  rights: generated
  prompt: DeepSeek-V2 用 MLA 与 MoE 架构引爆了 2024 年的模型价格战。
sources:
  - title: "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model"
    url: "https://arxiv.org/abs/2405.04434"
    publisher: DeepSeek / arXiv
    type: paper
status: verified
slug: deepseek-v2
---
