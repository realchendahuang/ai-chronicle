---
id: cuda
title: CUDA 把 GPU 变成通用计算平台
titleEn: CUDA turns the GPU into a general computing platform
subtitle: 熟悉的编程模型让并行算力进入开发者工具链
subtitleEn: A familiar programming model brings parallel compute into the developer toolchain
date: '2006-11'
datePrecision: month
importance: A
eventType: [product, infrastructure]
topics: [ai-infrastructure, deep-learning]
products: [cuda]
concepts: [gpu]
summary: NVIDIA 发布 CUDA，让开发者用 C 风格工具直接编写在 GPU 上运行的通用并行程序。
summaryEn: NVIDIA introduced CUDA, allowing developers to write general parallel programs for GPUs with C-like tools.
background: GPU 已拥有大量并行计算单元，但通用计算需要把问题改写成图形着色流程，开发门槛高，生态也不稳定。
backgroundEn: GPUs already contained large numbers of parallel units, but general computation had to be expressed through graphics pipelines, making development difficult and the ecosystem fragile.
whatHappened: CUDA 提供编程模型、编译器、运行时和数学库，让线程、内存层次与 GPU 内核成为普通软件工程对象。随后 cuDNN 等库进一步封装了神经网络运算。
whatHappenedEn: CUDA supplied a programming model, compiler, runtime, and math libraries, making threads, memory hierarchies, and GPU kernels ordinary software-engineering concerns. Libraries such as cuDNN later packaged neural-network operations.
whyImportant: 深度学习需要重复执行大规模矩阵运算。CUDA 让研究者不必自己发明一套硬件和工具链，就能持续利用商品 GPU 的性能增长。
whyImportantEn: Deep learning repeatedly performs large matrix operations. CUDA let researchers benefit from improving commodity GPUs without building a new hardware and software stack for each project.
impact:
  developer: GPU 加速从特殊图形技巧变成有文档、库和调试工具支持的平台能力。
  industry: NVIDIA 的软硬件生态逐渐成为训练和推理基础设施的事实标准。
impactEn:
  developer: GPU acceleration moved from a graphics trick to a platform supported by documentation, libraries, and debugging tools.
  industry: NVIDIA’s combined hardware and software ecosystem became the de facto foundation for AI training and inference.
beforeAfter:
  before: 通用 GPU 计算需要借用图形 API，应用开发困难。
  after: 并行计算拥有稳定编程平台，并与深度学习框架共同演化。
beforeAfterEn:
  before: General GPU computing required adapting problems to graphics APIs.
  after: Parallel computing had a stable platform that evolved alongside deep-learning frameworks.
relatedEvents: [deep-learning-rise, alexnet]
sources:
  - title: CUDA Toolkit Archive
    url: https://developer.nvidia.com/cuda-toolkit-archive
    publisher: NVIDIA
    type: official
status: verified
slug: cuda
---
