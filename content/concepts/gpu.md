---
id: gpu
title: GPU（图形处理器）
fullName: Graphics Processing Unit
difficulty: beginner
oneLiner: 原本为图像渲染设计的并行芯片，后来成为训练与推理神经网络的主力算力。
beginnerExplanation: GPU 里有大量可以同时做简单运算的核心。画游戏画面需要同时算很多像素；训练神经网络也要同时算很多矩阵乘法。CUDA 等软件让开发者不必把问题改写成“画图”，也能直接调用这些并行核心。
whyItMatters: 没有便宜、可编程的 GPU 生态，深度学习很难从实验室演示变成可重复训练的工业流程。
relatedEvents:
  - cuda
  - alexnet
  - deep-learning-rise
  - pytorch
relatedConcepts:
  - deep-learning
  - neural-network
commonMisunderstandings:
  - GPU 不是“更聪明的 CPU”，而是擅长大批量并行的同类运算。
  - 有 GPU 不等于训练一定成功，数据、算法与软件栈同样关键。
slug: gpu
---
