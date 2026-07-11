---
id: dall-e
title: OpenAI 发布 DALL·E
titleEn: OpenAI introduces DALL·E
subtitle: 文本提示直接生成图像，多模态生成进入公共演示
subtitleEn: Text prompts generate images; multimodal generation enters public demos
date: '2021-01-05'
datePrecision: day
importance: A
eventType: [model, research]
topics: [multimodal-ai, ai-applications]
companies: [openai]
models: [dall-e]
concepts: [multimodal, transformer, llm]
summary: OpenAI 公布约 120 亿参数的 DALL·E：把文本与图像离散 token 编入同一序列，用解码器 Transformer 从文字描述生成图像，并通过受控样例展示组合概念与零样本式生成。
summaryEn: OpenAI introduced DALL·E, a roughly 12-billion-parameter model that packs text and discrete image tokens into one sequence and uses a decoder-only transformer to generate images from captions, shown through controlled demos of compositional, zero-shot-style generation.
background: GPT-3 已证明大规模语言模型能用提示完成多种文本任务，但高质量“文字描述→像素”仍主要依赖检索、拼接或任务专用管线，缺少可公开讨论的大规模统一生成演示。
backgroundEn: GPT-3 had shown large language models could handle many text tasks from prompts, but high-quality text-to-pixels still relied on retrieval, collage, or task-specific pipelines, without a widely discussed large-scale unified generation demo.
whatHappened: DALL·E 用离散变分自编码器把图像切成 token，再与文本 token 一并自回归建模。官方博客以大量样例展示“鳄梨椅”式跨域组合；同日前后的 CLIP 工作则强调图文对齐，为后续文生图系统提供对照与条件模块。
whatHappenedEn: DALL·E used a discrete VAE to tokenize images and modeled them autoregressively with text tokens. The official blog showed cross-domain compositions such as an “avocado armchair”; CLIP, released around the same time, stressed image–text alignment and later conditioned many text-to-image systems.
whyImportant: 它把“提示控制图像”写进主流 AI 议程，使生成媒体从分类/检索旁支进入基础模型叙事；后续 DALL·E 2、Imagen 与 Stable Diffusion 都在回应同一需求，但分发方式从演示走向 API 与开放权重。
whyImportantEn: It put prompt-controlled imagery on the mainstream AI agenda, moving generative media from a side branch of classification and retrieval into the foundation-model story. Later DALL·E 2, Imagen, and Stable Diffusion answered the same demand with APIs and open weights.
impact:
  user: 普通观察者第一次大规模看到“一句话生成从未存在过的物体与场景”的演示。
  industry: 文生图成为实验室与产品路线的公开竞赛项，版权与滥用讨论随之提前。
impactEn:
  user: A broad audience first saw large-scale demos of inventing objects and scenes from a single caption.
  industry: Text-to-image became a public competition among labs and products, pulling forward copyright and misuse debates.
beforeAfter:
  before: 文本生成图像多为研究原型或拼接式工具，公共样例稀少。
  after: 提示驱动的图像生成成为多模态基础模型的标准能力目标之一。
beforeAfterEn:
  before: Text-to-image was mostly research prototypes or collage-style tools with few public examples.
  after: Prompt-driven image generation became a standard capability target for multimodal foundation models.
relatedEvents: [gpt-3, stable-diffusion, sora]
visual:
  src: /assets/events/dall-e.webp
  width: 1280
  height: 720
  alt: "打开的速写本从空白页涌出超现实拼贴物象"
  altEn: "Open sketchbook blooming surreal collage objects from a blank page"
  caption: "AI Chronicle 原创插图：DALL·E 把自然语言提示变成可观看的图像生成。"
  captionEn: "Original illustration by AI Chronicle: DALL·E turns natural-language prompts into generated images."
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial illustration for DALL-E, sketchbook blooming surreal collage, soft colors, no logos, 16:9"
sources:
  - title: DALL·E — Creating images from text
    url: https://openai.com/index/dall-e/
    publisher: OpenAI
    type: official
  - title: Zero-Shot Text-to-Image Generation
    url: https://arxiv.org/abs/2102.12092
    publisher: arXiv
    type: paper
status: verified
slug: dall-e
---
