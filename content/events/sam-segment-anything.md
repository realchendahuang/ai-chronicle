---
id: sam-segment-anything
title: Meta 发布 SAM「分割一切」
titleEn: Meta releases SAM, "Segment Anything"
subtitle: 像 ChatGPT 之于文本，SAM 想成为图像分割的基础模型
subtitleEn: What ChatGPT is to text, SAM aims to be for image segmentation
date: '2023-04-05'
datePrecision: day
importance: A
eventType:
  - research
  - open-source
topics:
  - computer-vision
  - foundation-models
  - ai-history
companies:
  - meta
concepts:
  - image-classification
  - prompt
  - few-shot-learning
summary: Meta AI 发布 Segment Anything Model（SAM），一个可在零样本下分割任意图像中任意物体的模型，配套 1100 万张图像、10 亿掩码的数据集。它被视为视觉版「基础模型」。
summaryEn: Meta AI released the Segment Anything Model (SAM), which can segment any object in any image with zero-shot prompting, paired with 11 million images and over 1 billion masks. It is seen as a "foundation model" for vision.
background: ChatGPT 让「基础模型+提示」范式深入人心，但视觉领域仍缺一个通用分割模型。Meta AI 决定用互联网规模的数据，训练一个能对任意提示做分割的模型。
backgroundEn: ChatGPT popularized the "foundation model plus prompting" paradigm, but vision still lacked a general segmentation model. Meta AI decided to train, on internet-scale data, a model that segments anything given any prompt.
whatHappened: SAM 基于提示工程：点一下、框选或给一段文本，它就能输出精确的分割掩码，无需针对特定任务重新训练。配合发布的 SA-1B 数据集包含 1100 万张图像与超过 10 亿个掩码。模型与数据全部开源。
whatHappenedEn: 'SAM is prompt-driven: a click, a box, or text, and it outputs a precise segmentation mask without retraining for a specific task. The accompanying SA-1B dataset contains 11 million images and over 1 billion masks. Model and data are fully open source.'
whyImportant: SAM 确立了视觉基础模型的可提示范式，让分割从「每个任务训一个模型」变成「一个模型服务所有任务」，深刻影响了计算机视觉的研究方式。
whyImportantEn: SAM established the promptable foundation-model paradigm in vision, turning segmentation from "one model per task" into "one model for all tasks," and deeply reshaped computer vision research.
impact:
  developer: 分割能力被集成进无数下游工具，图像编辑与标注效率大增。
  industry: 验证了视觉基础模型的商业与技术可行性，推动后续多模态模型发展。
impactEn:
  developer: Segmentation was integrated into countless downstream tools, boosting image editing and annotation.
  industry: Validated vision foundation models and pushed later multimodal development.
beforeAfter:
  before: 图像分割需要按任务、按类别训练专用模型。
  after: 一个通用模型通过提示即可分割任何物体。
beforeAfterEn:
  before: Segmentation required task- and class-specific models.
  after: One general model segments anything via prompting.
relatedEvents:
  - clip
  - gpt-4o
  - stable-diffusion
sources:
  - title: Segment Anything
    url: "https://arxiv.org/abs/2304.02643"
    publisher: Meta AI / arXiv
    type: paper
status: verified
slug: sam-segment-anything
---
