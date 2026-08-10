---
id: google-tpu
title: Google 发布 TPU
titleEn: Google releases its TPU
subtitle: 为深度学习定制的第一代专用芯片
subtitleEn: The first chip purpose-built for deep learning
date: '2016-05-18'
datePrecision: day
importance: B
eventType:
  - product
  - research
topics:
  - ai-infrastructure
  - ai-hardware
  - scaling-laws
companies:
  - google
concepts:
  - gpu
summary: Google 在 I/O 2016 公布自研 Tensor Processing Unit，这是一款针对神经网络推理优化的专用芯片，已在 AlphaGo 与搜索排序等场景使用。TPU 标志着大公司开始为深度学习定制硬件。
summaryEn: At I/O 2016 Google unveiled its Tensor Processing Unit, a chip optimized for neural-network inference, already used for AlphaGo and search ranking. TPU marked big companies starting to build custom hardware for deep learning.
background: 2015 年前后神经网络进入生产阶段，GPU 功耗与成本成为瓶颈，Google 决定自研专用芯片来支撑语音识别、搜索与 AlphaGo。
backgroundEn: Around 2015 neural networks entered production; GPU power and cost became bottlenecks, so Google decided to build a custom chip to support speech recognition, search, and AlphaGo.
whatHappened: 2016 年 5 月 Google 在 I/O 大会介绍 TPU，称其推理性能相比同期 GPU 有数量级优势，已在搜索排序、街景与 AlphaGo 中使用。此后 Google 持续迭代 TPU 系列，并建设云服务对外提供。
whatHappenedEn: In May 2016 Google presented the TPU at I/O, claiming order-of-magnitude inference gains over contemporary GPUs, already used for search ranking, Street View, and AlphaGo. Google kept iterating the TPU line and offered it through cloud services.
whyImportant: TPU 把「为 AI 造芯片」从幻想变成主流路线，推动了英伟达之外的 AI 芯片竞争，也预示了算力军备竞赛的到来。
whyImportantEn: TPU turned "building chips for AI" from fantasy into a mainstream route, pushed competition beyond Nvidia, and foreshadowed the compute arms race.
impact:
  developer: 大模型训练与推理多了一个可选的专用算力平台。
  industry: 拉开 AI 专用芯片（TPU、NPU、ASIC）产业化的序幕。
impactEn:
  developer: Large-model training and inference gained an alternative specialized compute platform.
  industry: Opened the industrialization of AI-specialized chips — TPU, NPU, and ASIC.
beforeAfter:
  before: 深度学习只能跑在通用 GPU 上。
  after: 专用 AI 芯片成为大公司算力战略的核心。
beforeAfterEn:
  before: Deep learning ran only on general-purpose GPUs.
  after: Specialized AI chips became core to big companies' compute strategy.
relatedEvents:
  - cuda
  - alphago
  - deep-learning-rise
  - scaling-laws
sources:
  - title: Google TPU blog
    url: "https://cloud.google.com/blog/products/ai-machine-learning"
    publisher: Google Cloud
    type: official
status: verified
slug: google-tpu
---
