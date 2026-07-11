---
id: clip
title: CLIP 用自然语言监督连接图文
titleEn: CLIP connects images and text with language supervision
subtitle: 对比学习对齐图像与文本编码器，支持零样本视觉分类
subtitleEn: Contrastive learning aligns image and text encoders for zero-shot visual classification
date: '2021-01-05'
datePrecision: day
importance: A
eventType: [model, paper]
topics: [multimodal-ai, computer-vision, large-language-models]
companies: [openai]
models: [clip]
products: []
papers: [learning-transferable-visual-models]
people: []
concepts: [multimodal]
summary: OpenAI 发布 CLIP：在大规模图文对上对比训练图像编码器与文本编码器，使模型可用自然语言描述做零样本图像分类，并开放代码与权重示例。
summaryEn: "OpenAI released CLIP: contrastive training of image and text encoders on large-scale image–text pairs enables zero-shot image classification from natural-language descriptions, with code and weight examples released."
background: 视觉模型常依赖固定类别标签集训练，换任务就要重新标注与微调；互联网上已有大量“图片配说明文字”，却未充分变成可迁移的视觉—语言接口。
backgroundEn: Vision models usually trained on fixed label sets and needed new labels and fine-tuning for new tasks. The web already held many image–caption pairs that had not fully become a transferable vision–language interface.
whatHappened: 2021 年 1 月 5 日 OpenAI 博客介绍 CLIP（Contrastive Language–Image Pre-training）。同批图文在 batch 内做对比：匹配对靠近、不匹配对推远。分类时把类别名写成文本，与图像嵌入比相似度。
whatHappenedEn: On 5 January 2021 OpenAI’s blog introduced CLIP (Contrastive Language–Image Pre-training). Matched pairs in a batch are pulled together and mismatches pushed apart. At classification time, class names become text embeddings scored against the image embedding.
whyImportant: 自然语言成为视觉任务的接口，多模态检索、生成模型的条件编码与后续视觉—语言模型大量复用“共享嵌入空间”思路。
whyImportantEn: Natural language became an interface to vision tasks. Multimodal retrieval, conditioning for generative models, and later vision–language systems reused the shared embedding-space idea.
impact:
  developer: 可用文本提示尝试新视觉类别，而不必先收集该类别的标注训练集。
  industry: 图文检索、内容审核与多模态产品获得可复用的对齐表示。
impactEn:
  developer: Text prompts could try new visual classes without first collecting labeled sets for each class.
  industry: Image–text retrieval, moderation, and multimodal products gained reusable aligned representations.
beforeAfter:
  before: 视觉识别强绑定封闭标签集与任务微调。
  after: 图文对比预训练支持开放词汇与零样本迁移的常用路径。
beforeAfterEn:
  before: Visual recognition was tightly bound to closed label sets and task fine-tuning.
  after: Image–text contrastive pretraining offered a common path to open-vocabulary and zero-shot transfer.
relatedEvents: [gpt-3, diffusion-models, gpt-4o]
visual:
  src: /assets/events/clip.webp
  width: 1280
  height: 720
  alt: "紫色双塔：一侧图像碎片，一侧抽象文本丝带彼此对照"
  altEn: "Twin purple towers pairing image fragments with abstract text ribbons"
  caption: "AI Chronicle 原创插图：CLIP 用图文对照训练共享表示空间。"
  captionEn: "Original illustration by AI Chronicle: CLIP trains a shared space by pairing images with text."
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial illustration for CLIP, twin towers image and text pairing, purple gray, no logos, 16:9"
sources:
  - title: CLIP — Connecting text and images
    url: https://openai.com/index/clip/
    publisher: OpenAI
    type: official
  - title: Learning Transferable Visual Models From Natural Language Supervision
    url: https://arxiv.org/abs/2103.00020
    publisher: arXiv
    type: paper
status: verified
slug: clip
---
