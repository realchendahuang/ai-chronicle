---
id: meta-muse-glimmer
title: Meta 发布并开源 Muse Glimmer
titleEn: Meta releases and open-sources Muse Glimmer
subtitle: 30B 稠密端侧智能体模型，Apache 2.0，单张消费级 GPU 可跑
subtitleEn: A 30B dense on-device agent model under Apache 2.0, runnable on a single consumer GPU
date: '2026-08-10'
datePrecision: day
importance: B
eventType:
  - model
  - open-source
topics:
  - open-source-models
  - small-language-models
  - ai-agent
  - model-efficiency
companies:
  - meta
models:
  - muse-glimmer
concepts:
  - llm
  - open-weight
  - distillation
  - small-language-model
  - tool-calling
summary: Meta 超级智能实验室发布 Muse Glimmer：约 30B 参数的稠密多模态智能体模型，由闭源基座 Muse Spark 逻辑蒸馏而来，Apache 2.0 开源，可在 24GB 显存消费级 GPU 或 M4/M5 Max MacBook 上完全本地运行；扎克伯格同日发文宣布 Meta 重返开源。
summaryEn: Meta Superintelligence Labs released Muse Glimmer, a ~30B dense multimodal agent model distilled from the closed Muse Spark base, open under Apache 2.0 and fully runnable on a 24GB consumer GPU or M4/M5 Max MacBook. Zuckerberg published a manifesto the same day declaring Meta's return to open source.
background: Meta 在 Llama 系列之后一度转向闭源旗舰 Muse Spark，开源社区对其路线反复摇摆多有批评；同时 Gemma 4、Qwen3.6-27B 等中型开源模型在端侧 Agent 场景竞争激烈。Meta 需要一款「闭源基座 + 开源中型」的组合产品回应社区，并守住开发者生态。
backgroundEn: After the Llama line, Meta had turned to the closed flagship Muse Spark, drawing criticism over its wavering open-source course; meanwhile Gemma 4, Qwen3.6-27B, and other mid-size open models competed fiercely in on-device agent scenarios. Meta needed a closed-base-plus-open-mid-size combination to answer the community and hold its developer ecosystem.
whatHappened: Muse Glimmer 于 8 月 10 日发布：约 30B 参数（296 亿）的稠密多模态模型，由 Muse Spark 逻辑蒸馏训练而来，Apache 2.0 开源；上下文 128K，可在 24GB/32GB 显存消费级 GPU 或 M4/M5 Max MacBook 上完全本地运行。提供两套 4bit 量化（K Quant 约 17GB、Dynamic K Quant 约 20GB），配套 DFlash 区块并行推测解码（RTX 5090 上生成速度从 74.9 提升到 233.4 token/s）。在 MCP Atlas、DeepSearch QA、Gaia2 等多个 Agent 基准上优于 Gemma4-31B 与 Qwen3.6-27B。扎克伯格同日发表《The Future Is for Everyone》，批评「限制开源」路线，并预告 Muse Spark 1.2 的开放权重版本。
whatHappenedEn: "Muse Glimmer launched on August 10: a ~30B (29.6B) dense multimodal model distilled from Muse Spark via logit distillation, open under Apache 2.0 with a 128K context, fully runnable on a 24GB/32GB consumer GPU or M4/M5 Max MacBook. Two 4-bit quantizations ship (K Quant ~17GB, Dynamic K Quant ~20GB), with DFlash block-parallel speculative decoding lifting RTX 5090 generation from 74.9 to 233.4 tokens/s. It beats Gemma4-31B and Qwen3.6-27B on MCP Atlas, DeepSearch QA, and Gaia2. The same day Zuckerberg published \"The Future Is for Everyone,\" criticizing the restrict-open-source path and teasing open weights for Muse Spark 1.2."
whyImportant: 它把 Meta 的开源路线从「Llama 时代」重新接上，用「闭源基座蒸馏 + 开源中型」的组合回应社区；同时把端侧 Agent 模型的能力门槛抬到 30B 档，本地运行成为可交付的产品形态。
whyImportantEn: It reconnected Meta's open-source course after the Llama era with a closed-base-distilled, open-mid-size combination; it also raised the on-device agent bar to the 30B tier, making local operation a deliverable product form.
impact:
  developer: 获得一个可完全本地运行、Apache 2.0 的 30B 智能体模型，隐私与成本可控。
  industry: 端侧 Agent 模型的能力门槛被抬到 30B 档，闭源基座 + 开源中型成为新组合打法。
  product: 本地推理与量化部署成为标准交付物，消费级硬件即可承载。
impactEn:
  developer: A fully local, Apache 2.0 30B agent model with privacy and cost under control.
  industry: The on-device agent bar rose to the 30B tier, with closed-base-plus-open-mid-size as the new playbook.
  product: Local inference and quantized deployment became standard deliverables on consumer hardware.
beforeAfter:
  before: Meta 的开源路线在 Llama 之后摇摆，端侧 Agent 由 Gemma 4 与 Qwen3.6 主导。
  after: Muse Glimmer 以 30B 稠密 + Apache 2.0 回归开源，端侧 Agent 门槛上移。
beforeAfterEn:
  before: Meta's open-source course wavered after Llama, with on-device agents led by Gemma 4 and Qwen3.6.
  after: Muse Glimmer returned Meta to open source at 30B dense under Apache 2.0, raising the on-device bar.
relatedEvents:
  - llama
  - gemini-3-6-flash
  - qwen-3-8
visual:
  src: /assets/events/meta-muse-glimmer.webp
  width: 1280
  height: 720
  alt: 编辑插图：一台发光的笔记本电脑上立着一尊小型雕像，雕像手中托着打开的锁
  altEn: Editorial illustration of a small statue standing on a glowing laptop, holding an open lock in its hands
  caption: AI Chronicle 原创插图：本地设备上的雕像与打开的锁，对应 Muse Glimmer 的端侧开源定位。
  captionEn: AI Chronicle original illustration of a statue on a local device holding an open lock, for Muse Glimmer's on-device open stance.
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial 16:9 museum poster, a small minimalist statue standing on a glowing open laptop, holding a tiny open padlock, soft violet and cream palette, no logos, no readable text, clean, precise"
sources:
  - title: Meta Muse Glimmer 模型页
    url: "https://huggingface.co/meta-models/Muse-Glimmer-30B"
    publisher: Hugging Face
    type: official
  - title: The Future Is for Everyone
    url: "https://www.facebook.com/zuck/posts/the-future-is-for-everyone/"
    publisher: Mark Zuckerberg
    type: official
  - title: "TechCrunch: Meta open-sources Muse Glimmer"
    url: "https://techcrunch.com/"
    publisher: TechCrunch
    type: report
status: verified
slug: meta-muse-glimmer
---
