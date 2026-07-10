---
id: stable-diffusion
title: Stable Diffusion 开放文生图权重
titleEn: Stable Diffusion releases open text-to-image weights
subtitle: 消费级 GPU 也能运行并改造生成模型
subtitleEn: A generative image model can run and be modified on consumer GPUs
date: '2022-08-22'
datePrecision: day
importance: S
eventType: [model, open-source]
topics: [multimodal-ai, open-source-models, ai-applications]
models: [stable-diffusion]
concepts: [diffusion, open-weight, multimodal]
summary: Stability AI 与 CompVis 发布 Stable Diffusion 1.4 权重和代码，允许用户在本地硬件上生成、微调和改造文生图模型。
summaryEn: Stability AI and CompVis released Stable Diffusion 1.4 weights and code, allowing users to generate, fine-tune, and modify text-to-image models on local hardware.
background: DALL·E 2 和 Imagen 已展示强大的文本生成图像能力，但主要通过封闭服务或研究演示提供，开发者无法查看权重或自由修改推理流程。
backgroundEn: DALL·E 2 and Imagen had demonstrated strong text-to-image generation, but access was mainly through closed services or research demos. Developers could not inspect weights or freely modify inference.
whatHappened: 模型在压缩后的潜空间运行扩散过程，显著降低显存和计算需求。发布后社区迅速制作 Web UI、ControlNet、LoRA、模型合并与大量领域微调。
whatHappenedEn: The model ran diffusion in a compressed latent space, reducing memory and compute requirements. The community quickly built web interfaces, ControlNet, LoRA, model merging, and many domain fine-tunes.
whyImportant: 它把生成图像从少数实验室控制的能力变成可下载的软件生态。开放同时带来创作自由、版权争议、非自愿图像和模型安全问题。
whyImportantEn: It turned image generation from a capability controlled by a few labs into a downloadable software ecosystem, bringing creative freedom alongside copyright, non-consensual imagery, and safety disputes.
impact:
  user: 普通用户可以在本地反复生成和编辑图像，不必把提示与素材上传到单一服务。
  developer: 插件、微调、工作流和模型社区围绕开放权重快速形成。
  industry: 商业文生图服务必须面对开放生态的低成本竞争。
impactEn:
  user: People could generate and edit images locally without sending prompts and assets to one service.
  developer: Plugins, fine-tunes, workflows, and model communities formed rapidly around downloadable weights.
  industry: Commercial text-to-image services faced low-cost competition from an open ecosystem.
beforeAfter:
  before: 高质量文生图主要由封闭实验室和托管产品提供。
  after: 生成模型可以在本地运行、分叉并被社区持续重组。
beforeAfterEn:
  before: High-quality text-to-image generation was mainly available through closed labs and hosted products.
  after: Generative models could run locally, be forked, and be continuously recombined by a community.
relatedEvents: [diffusion-models, llama, sora]
sources:
  - title: Stable Diffusion Public Release
    url: https://stability.ai/news/stable-diffusion-public-release
    publisher: Stability AI
    type: official
status: verified
slug: stable-diffusion
---
