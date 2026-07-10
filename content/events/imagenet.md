---
id: imagenet
title: ImageNet 数据集发布
subtitle: 1400 万张标注图像把数据规模变成研究基础设施
subtitleEn: Fourteen million labeled images turn data scale into research infrastructure
date: '2009'
datePrecision: year
importance: A
eventType:
  - dataset
topics:
  - computer-vision
  - deep-learning
people:
  - fei-fei-li
concepts:
  - image-classification
  - dataset
  - supervised-learning
summary: 李飞飞团队发布 ImageNet，按 WordNet 名词层级组织超过 1400 万张人工标注图像；2010 年开始的 ILSVRC 提供统一训练集和年度比较。
summaryEn: Fei-Fei Li’s team released ImageNet, organizing more than fourteen million human-labeled images through the WordNet noun hierarchy. The annual ILSVRC challenge began in 2010 with shared data and evaluation.
whatHappened: 团队从网络收集候选图片，再通过众包完成类别核验。竞赛常用子集包含约 120 万张训练图像和 1000 个类别，让不同算法在相同数据、指标和截止时间下比较。
whatHappenedEn: The team collected candidate images from the web and used crowdsourcing to verify labels. The competition subset contained roughly 1.2 million training images across 1,000 classes, allowing algorithms to be compared on the same data, metrics, and deadline.
whyImportant: ImageNet 说明训练数据本身可以是公共研究基础设施。它为 AlexNet 提供规模足够的学习材料和明确成绩差距，同时也留下标签偏差、版权和数据治理问题。
whyImportantEn: ImageNet showed that training data itself could be public research infrastructure. It gave AlexNet enough material and a clear performance gap, while leaving lasting questions about label bias, copyright, and data governance.
beforeAfter:
  before: 计算机视觉研究受限于小型数据集，难以评估模型泛化能力。
  after: 大规模标注数据集成为推动深度学习发展的关键基础设施。
relatedEvents:
  - alexnet
  - resnet
sources:
  - title: ImageNet — A large-scale hierarchical image database
    url: https://ieeexplore.ieee.org/document/5206848
    publisher: IEEE
    type: paper
status: verified
slug: imagenet
---
