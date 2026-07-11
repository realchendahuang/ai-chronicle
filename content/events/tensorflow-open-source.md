---
id: tensorflow-open-source
title: Google 开源 TensorFlow
titleEn: Google open-sources TensorFlow
subtitle: 训练、部署与硬件加速进入同一套通用框架
subtitleEn: Training, deployment, and hardware acceleration enter one general framework
date: '2015-11-09'
datePrecision: day
importance: A
eventType: [open-source, infrastructure]
topics: [ai-infrastructure, deep-learning, developer-tools]
companies: [google]
products: [tensorflow]
concepts: [deep-learning, gpu]
summary: Google 以 Apache 2.0 许可证发布 TensorFlow，把内部第二代机器学习系统开放给研究者和开发者。
summaryEn: Google released TensorFlow under the Apache 2.0 license, opening its second-generation internal machine-learning system to researchers and developers.
background: 深度学习实验需要自动求导、GPU 计算、数据流水线和分布式训练。各团队重复搭建基础设施，研究代码也难以迁移到生产环境。
backgroundEn: Deep-learning work required automatic differentiation, GPU execution, data pipelines, and distributed training. Teams repeatedly rebuilt infrastructure, and research code was hard to move into production.
whatHappened: TensorFlow 用数据流图表示计算，支持 CPU、GPU 和服务器部署。Google 同时开放文档、示例和社区开发，随后推出 TPU 与配套服务。
whatHappenedEn: TensorFlow represented computation as dataflow graphs and supported CPUs, GPUs, and server deployment. Google released documentation and examples, built a community, and later paired it with TPUs and cloud services.
whyImportant: 框架把模型开发从“自己实现训练系统”变成组合算子和调用工具链，显著扩大了能参与深度学习的人群，也加速了论文到产品的迁移。
whyImportantEn: The framework moved model development from building a training system to composing operations and using a shared toolchain, expanding participation and shortening the path from papers to products.
impact:
  developer: 自动求导、模型保存和跨硬件执行成为框架提供的默认能力。
  industry: 开源框架成为云服务、芯片和开发者生态竞争的入口。
impactEn:
  developer: Automatic differentiation, model serialization, and execution across hardware became framework defaults.
  industry: Open-source frameworks became entry points for competition across cloud services, chips, and developer ecosystems.
beforeAfter:
  before: 训练系统与模型代码高度绑定，复现和部署成本高。
  after: 通用框架承接底层计算，模型迭代速度显著提高。
beforeAfterEn:
  before: Training systems were tightly coupled to model code, making reproduction and deployment expensive.
  after: General frameworks handled lower-level computation and accelerated model iteration.
relatedEvents: [cuda, alexnet, transformer]
visual:
  src: /assets/events/tensorflow-open-source.webp
  width: 1800
  height: 1012
  alt: TensorFlow 大规模机器学习系统论文首页
  altEn: Title page of the TensorFlow large-scale machine-learning systems paper
  caption: 开源发布后的 TensorFlow 系统论文把研究实验、分布式训练与生产推理写进同一套数据流架构。
  captionEn: The TensorFlow systems paper, published after the open-source release, describes research, distributed training, and production inference within one dataflow architecture.
  credit: Martín Abadi et al., Google Brain
  sourceUrl: https://arxiv.org/abs/1605.08695
  rights: official-editorial
sources:
  - title: TensorFlow — Google’s latest machine learning system, open sourced
    url: https://research.google/blog/tensorflow-googles-latest-machine-learning-system-open-sourced-for-everyone/
    publisher: Google Research
    type: official
status: verified
slug: tensorflow-open-source
---
