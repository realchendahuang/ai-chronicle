---
id: pytorch
title: PyTorch 公开亮相
titleEn: PyTorch becomes public
subtitle: 动态图与 Python 优先的研究框架进入开源主流
subtitleEn: A define-by-run, Python-first research framework enters the open-source mainstream
date: '2017-01'
datePrecision: month
importance: A
eventType: [open-source, infrastructure]
topics: [ai-infrastructure, deep-learning]
companies: [meta]
models: []
products: [pytorch]
papers: []
people: []
concepts: [deep-learning]
summary: Facebook AI Research 公开 PyTorch，以 Python 与动态计算图为核心，让研究者用熟悉的控制流搭建并调试深度网络。
summaryEn: Facebook AI Research released PyTorch publicly, centering Python and dynamic computation graphs so researchers could build and debug deep nets with familiar control flow.
background: 深度学习需要自动求导与 GPU 加速；当时主流框架多偏静态图或研究用 Lua Torch，Python 生态与灵活实验之间常要取舍。
backgroundEn: Deep learning needed automatic differentiation and GPU acceleration. Leading frameworks often favored static graphs or Lua Torch for research, forcing trade-offs between the Python ecosystem and flexible experiments.
whatHappened: 约 2017 年初 PyTorch 向公众开放。它继承 Torch 的张量与模块思路，但以 Python 为第一公民，采用 define-by-run：前向时即时建图，循环与条件可直接写在主机语言里。
whatHappenedEn: "PyTorch went public around early 2017. It kept Torch’s tensor and module ideas but made Python first-class and used define-by-run: the graph is built during the forward pass, so loops and branches live in the host language."
whyImportant: 研究代码更接近普通 Python，实验迭代变快；随后生态、论文复现与产业部署大量转向 PyTorch，与 TensorFlow 等框架形成长期竞争与互补。
whyImportantEn: Research code looked more like ordinary Python and experiments moved faster. Later ecosystems, paper reproductions, and production stacks shifted heavily toward PyTorch, competing with and complementing frameworks such as TensorFlow.
impact:
  developer: 动态图调试与 NumPy 风格张量操作成为默认研究体验。
  industry: 开源框架之争影响云服务、芯片绑定与招聘技能清单。
impactEn:
  developer: Dynamic-graph debugging and NumPy-like tensor ops became the default research experience.
  industry: Framework competition shaped cloud offerings, chip bindings, and hiring skill lists.
beforeAfter:
  before: 许多实验在静态图或非 Python 主流程上组装，调试成本高。
  after: 用 Python 控制流直接描述模型成为广泛接受的研究写法。
beforeAfterEn:
  before: Many experiments were assembled on static graphs or non-Python main paths, making debugging costly.
  after: Describing models directly with Python control flow became a widely accepted research style.
relatedEvents: [tensorflow-open-source, cuda, alexnet]
visual:
  src: /assets/events/pytorch.webp
  width: 1280
  height: 720
  alt: "实验桌上发光的 GPU 与漂浮的张量方块以橙色能量相连"
  altEn: "Glowing GPU on a lab desk linked to floating tensor blocks by orange energy"
  caption: "AI Chronicle 原创插图：PyTorch 把动态图与 GPU 算力接进日常研究流程。"
  captionEn: "Original illustration by AI Chronicle: PyTorch plugs dynamic graphs into everyday GPU research."
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial illustration of PyTorch deep learning framework, tensor blocks and GPU glow on research desk, warm orange, no text no logos, 16:9"
sources:
  - title: PyTorch — A year in
    url: https://pytorch.org/blog/a-year-in/
    publisher: PyTorch Blog
    type: official
  - title: pytorch/pytorch
    url: https://github.com/pytorch/pytorch
    publisher: GitHub
    type: official
status: verified
slug: pytorch
---
