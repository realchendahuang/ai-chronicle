---
id: google-nmt
title: 谷歌发布神经机器翻译
titleEn: Google launches neural machine translation
subtitle: 端到端深度学习碾压传统统计方法
subtitleEn: End-to-end deep learning crushes traditional statistical methods
date: '2016-09-27'
datePrecision: day
importance: A
eventType:
  - product
topics:
  - natural-language-processing
  - deep-learning
  - ai-applications
companies:
  - google
concepts:
  - nlp
  - encoder-decoder
  - attention
summary: 谷歌宣布其在线翻译改用神经机器翻译（GNMT），端到端深度模型在质量上大幅超越传统统计方法。它宣告深度学习接管了机器翻译这一重要应用领域。
summaryEn: Google announced its online translation had switched to GNMT, an end-to-end deep model that massively outperformed traditional statistical methods, marking deep learning's takeover of machine translation.
background: 2014 年 seq2seq 等神经架构在学术界展示了翻译潜力，但工业级翻译一直由统计机器翻译主导，直到 2016 年谷歌把神经模型部署上线。
backgroundEn: By 2014 seq2seq and related neural architectures had shown translation potential in academia, but industrial translation stayed with statistical methods until Google deployed neural models in 2016.
whatHappened: 谷歌宣布生产环境翻译系统改用 GNMT，使用循环神经网络端到端建模，官方称翻译质量接近甚至超过统计方法。该系统覆盖数十种语言，全面取代旧引擎。
whatHappenedEn: Google announced its production translation had switched to GNMT, modeling translation end-to-end with recurrent networks, with quality officially said to rival or beat statistical methods. The system covered dozens of languages and fully replaced the old engine.
whyImportant: GNMT 是深度学习在核心语言应用上「端到端碾压传统方法」的标志性案例，证明了深度模型在真实工业产品中大规模落地的能力，也推动了注意力机制与 Transformer 的后续演进。
whyImportantEn: GNMT is the landmark case of deep learning "crushing traditional methods end-to-end" in a core language application, proving deep models can deploy at scale in real products, and accelerating the later evolution of attention and Transformers.
impact:
  user: 全球用户获得了质量显著提升的免费翻译。
  industry: 机器翻译全面转向神经方法，传统统计团队随之转型。
impactEn:
  user: Users worldwide gained free translation of markedly higher quality.
  industry: Machine translation moved fully to neural methods, and traditional statistical teams pivoted.
beforeAfter:
  before: 机器翻译依赖短语表与统计模型。
  after: 机器翻译由端到端深度网络驱动。
beforeAfterEn:
  before: Machine translation relied on phrase tables and statistical models.
  after: Machine translation is driven by end-to-end deep networks.
relatedEvents:
  - seq2seq
  - bahdanau-attention
  - transformer
  - word2vec
visual:
  src: /assets/events/google-nmt.webp
  width: 1672
  height: 941
  alt: 两种语言气泡被发光翻译桥连接的插画
  altEn: Illustration of two speech bubbles in different languages linked by a glowing bridge
  caption: Google 神经机器翻译把翻译质量推到一个台阶，让 NMT 成为行业标准。
  captionEn: Google NMT lifted translation quality a full step and made neural MT the industry standard.
  credit: AI Chronicle
  rights: generated
  prompt: Google 神经机器翻译把翻译质量推到一个台阶，让 NMT 成为行业标准。
sources:
  - title: GNMT 博客
    url: "https://research.google/blog/neural-machine-translation-technique/"
    publisher: Google
    type: official
status: verified
slug: google-nmt
---
