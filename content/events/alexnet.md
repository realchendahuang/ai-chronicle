---
id: alexnet
title: AlexNet 赢得 ImageNet 竞赛
subtitle: 两块 GPU、120 万张训练图像和 10.9 个百分点的领先
subtitleEn: Two GPUs, 1.2 million training images, and a 10.9-point lead
date: '2012-09-30'
datePrecision: day
importance: S
eventType:
  - paper
  - benchmark
topics:
  - deep-learning
  - computer-vision
people:
  - alex-krizhevsky
  - ilya-sutskever
  - geoffrey-hinton
concepts:
  - cnn
  - gpu
  - dropout
  - relu
summary: AlexNet 在 ILSVRC 2012 将 top-5 错误率降到 15.3%，第二名为 26.2%。这个差距让深度卷积网络成为计算机视觉的新基线。
summaryEn: AlexNet reduced top-5 error in ILSVRC 2012 to 15.3%, compared with 26.2% for the runner-up. The gap made deep convolutional networks the new baseline for computer vision.
background: ImageNet 已提供超过百万张带标签训练图像，GPU 也具备适合矩阵计算的并行能力，但主流视觉系统仍依赖人工设计的 SIFT、HOG 等特征。
backgroundEn: ImageNet supplied more than a million labeled training images and GPUs offered suitable parallel computation, while mainstream vision systems still relied on hand-engineered features such as SIFT and HOG.
whatHappened: 八层 AlexNet 在两块 GTX 580 GPU 上训练，使用 ReLU 加快优化，以数据增强和 Dropout 抑制过拟合。模型直接从像素学习特征，不再把特征提取与分类拆成两个独立系统。
whatHappenedEn: The eight-layer AlexNet trained across two GTX 580 GPUs, used ReLU for faster optimization, and controlled overfitting with augmentation and dropout. It learned features directly from pixels instead of separating feature engineering from classification.
whyImportant: 结果同时验证了数据、GPU 和深层网络的组合。此后视觉研究迅速放弃大量手工特征，算力和训练数据开始与算法一起决定模型能力。
whyImportantEn: The result validated the combination of data, GPUs, and deep networks. Vision research rapidly moved away from hand-engineered features, and compute and training data became as decisive as algorithms.
impact:
  industry: 引发全球科技公司对深度学习的大规模投入。
  developer: 改变了计算机视觉的研究范式。
beforeAfter:
  before: 计算机视觉主要依赖手工设计的特征提取器（如 SIFT、HOG）。
  after: 深度学习成为计算机视觉的主流方法，GPU 成为 AI 核心硬件。
relatedEvents:
  - imagenet
  - deep-learning-rise
  - resnet
  - gpt-1
visual:
  src: /assets/events/alexnet.webp
  width: 1800
  height: 1012
  alt: AlexNet 论文中 ReLU 与 tanh 训练速度的对比图
  altEn: AlexNet paper figure comparing the training speed of ReLU and tanh units
  caption: AlexNet 论文用 CIFAR-10 实验展示 ReLU 网络达到相同训练误差所需的迭代次数显著更少。
  captionEn: The AlexNet paper uses a CIFAR-10 experiment to show that a ReLU network reaches the same training error in far fewer iterations.
  credit: Alex Krizhevsky, Ilya Sutskever, Geoffrey E. Hinton
  sourceUrl: "https://proceedings.neurips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf"
  rights: official-editorial
sources:
  - title: ImageNet Classification with Deep Convolutional Neural Networks
    url: "https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks"
    publisher: NeurIPS
    type: paper
status: verified
slug: alexnet
---
