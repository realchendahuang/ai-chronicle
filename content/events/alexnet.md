---
id: alexnet
title: AlexNet 赢得 ImageNet 竞赛
subtitle: 深度学习在计算机视觉领域的突破性胜利
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
summary: Alex Krizhevsky、Ilya Sutskever 和 Geoffrey Hinton 设计的 AlexNet 在 ILSVRC 2012 中以压倒性优势夺冠，错误率远低于传统方法，标志着深度学习时代的正式开启。
whatHappened: AlexNet 是一个深度卷积神经网络，利用 GPU 进行训练，采用了 ReLU 激活函数和 Dropout 正则化等技术。在 ImageNet 竞赛中，它的 top-5 错误率为 15.3%，而第二名的方法错误率高达 26.2%。
whyImportant: 这是深度学习从学术边缘走向主流的转折点。它证明了 GPU 加速+大数据+深度网络的组合可以远超传统计算机视觉方法。
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
sources:
  - title: ImageNet Classification with Deep Convolutional Neural Networks
    url: https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks
    publisher: NeurIPS
    type: paper
status: verified
slug: alexnet
---
