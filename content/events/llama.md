---
id: llama
title: Meta 发布 LLaMA
titleEn: Meta releases LLaMA
subtitle: 高性能权重离开 API，开放模型社区迅速成形
subtitleEn: Capable weights move beyond APIs and an open-model community forms
date: '2023-02-24'
datePrecision: day
importance: A
eventType:
  - model
  - open-source
topics:
  - open-source-models
  - large-language-models
companies:
  - meta
models:
  - llama
concepts:
  - open-weight
  - model-distillation
  - quantization
summary: Meta 发布 7B、13B、33B 和 65B 参数的 LLaMA 论文，并向获批研究者提供非商业许可权重；其中 65B 模型用 1.4 万亿 token 训练。权重随后外泄，社区迅速开发量化、微调和本地推理工具。
summaryEn: Meta published LLaMA at 7B, 13B, 33B, and 65B parameters and offered noncommercial weights to approved researchers; the 65B model was trained on 1.4 trillion tokens. After the weights leaked, the community rapidly built quantization, fine-tuning, and local-inference tools.
background: GPT-3.5 与 PaLM 等高能力模型主要通过封闭 API 提供。研究者难以检查权重、修改训练流程，或在自己的硬件和数据边界内运行模型。
backgroundEn: Capable models such as GPT-3.5 and PaLM were mainly available through closed APIs. Researchers could not inspect weights, modify training, or run them within their own hardware and data boundaries.
whatHappened: LLaMA 强调用更多 token 训练相对较小模型，在多项基准上以较少参数达到竞争表现。初版不是开源软件许可；Llama 2 之后才提供更广商业使用条款，仍带有额外限制。
whatHappenedEn: LLaMA emphasized training smaller models on more tokens and achieved competitive benchmarks with fewer parameters. The first release was not under an open-source software license; Llama 2 later allowed broader commercial use while retaining restrictions.
whyImportant: 可获得权重让社区能量化、微调和研究模型内部，形成独立于托管 API 的部署路线。它也迫使行业更准确地区分开放权重、开放代码和开源许可。
whyImportantEn: Available weights let the community quantize, fine-tune, and study models internally, creating a deployment path independent of hosted APIs. It also forced clearer distinctions among open weights, open code, and open-source licensing.
impact:
  developer: 开源模型让开发者可以在本地运行和定制大模型。
  industry: 改变了 AI 行业由少数闭源公司主导的格局。
beforeAfter:
  before: 大语言模型主要由 OpenAI 和 Google 等闭源公司掌控。
  after: 开源大模型生态蓬勃发展，全球 AI 能力开始民主化。
relatedEvents:
  - chatgpt-launch
  - gpt-4-release
  - deepseek-v3
  - deepseek-r1
  - qwen
  - mistral
visual:
  src: /assets/events/llama.webp
  width: 1400
  height: 1980
  alt: '《LLaMA: Open and Efficient Foundation Language Models》论文首页'
  altEn: First page of the paper LLaMA Open and Efficient Foundation Language Models
  caption: LLaMA 论文首页，作者在摘要中强调用更多公开数据训练较小模型。
  captionEn: The first page of the LLaMA paper, whose abstract emphasizes training smaller models on more public data.
  credit: Hugo Touvron 等 / arXiv
  sourceUrl: https://arxiv.org/abs/2302.13971
  rights: official-editorial
sources:
  - title: LLaMA — Open and Efficient Foundation Language Models
    url: https://arxiv.org/abs/2302.13971
    publisher: Meta AI
    type: paper
status: verified
slug: llama
---
