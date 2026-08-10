---
id: google-brain
title: Google Brain 与大规模分布式学习
titleEn: Google Brain and large-scale distributed learning
subtitle: 用一万六千个 CPU 核心学会识别猫
subtitleEn: Learning to recognize a cat with 16,000 CPU cores
date: '2012-06-26'
datePrecision: day
importance: A
eventType:
  - milestone
  - paper
topics:
  - deep-learning
  - ai-infrastructure
  - ai-history
companies:
  - google
people:
  - geoffrey-hinton
  - jeff-dean
concepts:
  - deep-learning
summary: Google Brain 团队在 1.6 万个 CPU 核心上训练大型神经网络，无监督地学会从 YouTube 视频帧中识别猫。它证明「更大数据、更多算力」能让深度网络自己涌现特征，是深度学习复兴的关键推力之一。
summaryEn: The Google Brain team trained a large neural network on 16,000 CPU cores that learned, without supervision, to recognize cats from YouTube video frames. It showed that more data and more compute let deep networks surface features on their own—one of the key pushes behind deep learning's revival.
background: 2010 年代初，神经网络因算力与数据不足长期处于边缘，研究者普遍怀疑「越大越好」的规模路线是否可行。
backgroundEn: In the early 2010s neural networks were marginal for lack of compute and data, and many researchers doubted whether a "bigger is better" scaling route could work.
whatHappened: 由吴恩达和 Jeff Dean 主导的团队搭建了 DistBelief 分布式训练框架，在 1.6 万个 CPU 核心上训练了一个 10 亿参数的深度网络。网络在无监督条件下从 1000 万张 YouTube 缩略图中学会了「猫」这一高级特征，相关论文 2012 年发表。
whatHappenedEn: Led by Andrew Ng and Jeff Dean, the team built the DistBelief distributed training framework and trained a billion-parameter deep network on 16,000 CPU cores. Given 10 million unlabeled YouTube thumbnails, the network learned a high-level "cat" feature without supervision; the paper appeared in 2012.
whyImportant: 实验给出了「规模能换来能力」的最早证据之一，直接推动 Google 全面转向深度学习，也激励学界重新评估神经网络路线。规模法则的种子在此埋下。
whyImportantEn: The experiment offered some of the earliest evidence that scale yields capability, pushing Google wholesale into deep learning and prompting the field to reassess neural networks. The seed of the scaling law was planted here.
impact:
  developer: DistBelief 及后续 TensorFlow 成为深度学习基础设施的早期蓝本。
  industry: Google 的搜索、语音、翻译随后全面采用深度学习。
impactEn:
  developer: DistBelief and later TensorFlow became early blueprints for deep-learning infrastructure.
  industry: Google's search, speech, and translation systems all adopted deep learning afterward.
beforeAfter:
  before: 大公司视神经网络为不实用的学术路线。
  after: 规模与无监督表征成为深度学习核心叙事。
beforeAfterEn:
  before: Big companies treated neural networks as an impractical academic path.
  after: Scale and unsupervised representation became core narratives of deep learning.
relatedEvents:
  - deep-learning-rise
  - alexnet
  - scaling-laws
  - tensorflow-open-source
visual:
  src: /assets/events/google-brain.webp
  width: 1672
  height: 941
  alt: 服务器机架构成的发光大脑插画
  altEn: Illustration of a vast brain made of connected server racks
  caption: Google Brain 用 16000 个 CPU 让网络学会识别猫，验证了「大算力+大数据」的深度学习路线。
  captionEn: Google Brain used 16,000 CPUs to teach a network to recognize cats, validating the big-compute-plus-big-data path.
  credit: AI Chronicle
  rights: generated
  prompt: Google Brain 用 16000 个 CPU 让网络学会识别猫，验证了「大算力+大数据」的深度学习路线。
sources:
  - title: Building High-Level Features Using Large Scale Unsupervised Learning
    url: "https://arxiv.org/abs/1112.6209"
    publisher: arXiv
    type: paper
status: verified
slug: google-brain
---
