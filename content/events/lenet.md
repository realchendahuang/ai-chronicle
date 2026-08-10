---
id: lenet
title: LeNet 与卷积神经网络
titleEn: LeNet and convolutional neural networks
subtitle: 让深度网络第一次在真实任务上落地
subtitleEn: The first deep networks to work on a real task
date: '1989'
datePrecision: year
importance: A
eventType:
  - milestone
  - paper
topics:
  - deep-learning
  - computer-vision
  - neural-networks
  - ai-history
people:
  - yann-lecun
concepts:
  - cnn
  - backpropagation
summary: Yann LeCun 及其合作者提出 LeNet，把卷积、池化与反向传播组合成可训练的卷积神经网络，先用于邮政编码手写数字识别，后在银行支票识别中实际部署。它证明深度网络可以在真实任务上工作。
summaryEn: Yann LeCun and collaborators proposed LeNet, combining convolution, pooling, and backpropagation into a trainable convolutional network—first for handwritten zip-code digits, then in deployed bank-check recognition. It proved deep networks could work on real tasks.
background: 1986 年反向传播被重新推广后，研究者开始寻找能自动学习图像特征的网络结构，而不是依赖手工特征。
backgroundEn: After backpropagation was repopularized in 1986, researchers sought network architectures that could learn image features automatically instead of relying on hand-crafted features.
whatHappened: 1989 年 LeCun 等人在美国邮政数据集上展示卷积网络；1998 年 LeNet-5 论文系统总结了卷积、池化、全连接与训练细节，并在 MNIST 手写数字基准上达到当时领先的错误率。卷积的局部连接与权重共享大幅减少了参数量，使网络能在当时的硬件上训练。
whatHappenedEn: LeCun et al. demonstrated convolutional networks on USPS data in 1989; the 1998 LeNet-5 paper systematically described convolution, pooling, fully connected layers, and training details, achieving leading error rates on the MNIST benchmark. Local connectivity and weight sharing sharply cut parameters, making training feasible on the hardware of the time.
whyImportant: LeNet 确立了 CNN 的基本构件，这套设计在 2012 年 AlexNet 之后重新统治计算机视觉。它也是「深度网络可以在现实任务中部署」的最早实证之一。
whyImportantEn: LeNet established the basic CNN building blocks, a design that returned to dominate computer vision after AlexNet in 2012. It is also one of the earliest proofs that deep networks can be deployed on real tasks.
impact:
  developer: 卷积、池化与共享权重的组合成为视觉模型的标准范式。
  industry: 银行支票识别等最早的一批深度学习商用案例由此产生。
impactEn:
  developer: The convolution-pooling-shared-weights combination became the standard vision paradigm.
  industry: Early deep-learning commercial deployments such as check reading traced back to this line.
beforeAfter:
  before: 图像识别依赖手工设计的特征与浅层模型。
  after: 可学习特征的卷积网络进入主流，深度视觉成为现实。
beforeAfterEn:
  before: Vision relied on hand-crafted features and shallow models.
  after: Convolutional networks with learned features entered the mainstream, and deep vision became real.
relatedEvents:
  - backpropagation
  - alexnet
  - imagenet
  - deep-learning-rise
sources:
  - title: Gradient-Based Learning Applied to Document Recognition
    url: "https://ieeexplore.ieee.org/document/726791"
    publisher: Proceedings of the IEEE
    type: paper
status: verified
slug: lenet
---
