---
id: chinchilla
title: Chinchilla 修正算力最优缩放配比
titleEn: Chinchilla revises compute-optimal scaling ratios
subtitle: 同等算力下，更小模型配更多 token 优于堆参数
subtitleEn: Under fixed compute, smaller models with more tokens beat over-stacked parameters
date: '2022-03-29'
datePrecision: day
importance: A
eventType: [paper]
topics: [large-language-models, scaling-laws]
companies: [google-deepmind]
models: [chinchilla]
concepts: [scaling-law, llm]
summary: DeepMind 在 arXiv 发表《Training Compute-Optimal Large Language Models》，训练 400 余个规模从约 7000 万到逾 160 亿参数的模型。结论是算力最优时模型大小与训练 token 应近似等比放大；同算力的 70B Chinchilla（约 1.4T token）全面超过 280B Gopher。
summaryEn: DeepMind posted Training Compute-Optimal Large Language Models, training over 400 models from about 70M to over 16B parameters. For compute-optimal training, model size and tokens should scale roughly equally; 70B Chinchilla trained on about 1.4T tokens at Gopher’s compute budget uniformly beat 280B Gopher.
background: Kaplan 等缩放定律推动“更大参数”路线，许多前沿模型在固定数据预算下猛增参数，导致训练 token 相对不足。团队缺少在固定 FLOPs 下如何平衡 \(N\) 与 \(D\) 的可操作配比。
backgroundEn: Kaplan-style scaling encouraged ever-larger parameter counts; many frontier runs grew \(N\) while holding data roughly fixed, leaving models undertrained on tokens. Teams lacked an operational rule for balancing \(N\) and \(D\) under fixed FLOPs.
whatHappened: 作者拟合三种估计方法，主张模型与数据应同步加倍。Chinchilla 用与 Gopher 相同的训练算力、四分之一参数与四倍数据，在多项下游任务上显著领先，并报告 MMLU 平均准确率 67.5%，较 Gopher 提高逾 7 个百分点。
whatHappenedEn: Using three estimation approaches, the authors argued model size and data should double together. Chinchilla matched Gopher’s training compute with one-quarter the parameters and four times the data, led on many downstream tasks, and reported 67.5% average MMLU accuracy—over seven points above Gopher.
whyImportant: 它修正了“只堆参数”的读法，把数据与 token 预算重新抬进训练规划；LLaMA 等“较小模型、更多 token”叙事与此同向，也影响后续开源与闭源训练配方。
whyImportantEn: It corrected a parameters-only reading of scaling and put data and token budgets back into training plans. LLaMA’s smaller-model, more-token story runs in the same direction and shaped later open and closed recipes.
impact:
  developer: 训练计划开始显式讨论“参数是否吃饱数据”，而不只订更大集群。
  industry: 同等算力下的模型选型与推理成本估算被改写——更小激活参数往往更利于下游。
impactEn:
  developer: Training plans began asking whether parameters were data-fed, not only whether clusters were larger.
  industry: Model choice and inference-cost estimates under fixed compute shifted—smaller active models often favor downstream use.
beforeAfter:
  before: 前沿竞赛常默认参数越大越好，数据配比被低估。
  after: 算力最优配比成为可争论、可更新的工程假设。
beforeAfterEn:
  before: Frontier races often treated bigger parameter counts as default progress and underweighted data ratios.
  after: Compute-optimal ratios became a debatable, updatable engineering hypothesis.
relatedEvents: [scaling-laws, gpt-3, llama]
visual:
  src: /assets/events/chinchilla.webp
  width: 1280
  height: 720
  alt: "天平一侧参数方块、一侧数据代币叠，放在蓝图研究桌上"
  altEn: "Balance scale weighing parameter blocks against data-token stacks on blueprints"
  caption: "AI Chronicle 原创插图：Chinchilla 强调在算力预算下模型规模与数据量的配比。"
  captionEn: "Original illustration by AI Chronicle: Chinchilla stresses balancing model size and data under a compute budget."
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial illustration for Chinchilla scaling, balance scale model size vs data, sage green, no logos, 16:9"
sources:
  - title: Training Compute-Optimal Large Language Models
    url: https://arxiv.org/abs/2203.15556
    publisher: DeepMind / arXiv
    type: paper
  - title: Training Compute-Optimal Large Language Models (NeurIPS 2022)
    url: https://proceedings.neurips.cc/paper_files/paper/2022/hash/c1e2faff6f588870935f114ebe04a3e5-Abstract-Conference.html
    publisher: NeurIPS
    type: paper
status: verified
slug: chinchilla
---
