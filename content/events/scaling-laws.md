---
id: scaling-laws
title: 神经语言模型缩放规律被量化
titleEn: Neural language-model scaling laws are quantified
subtitle: 性能与参数、数据和计算量呈可预测幂律关系
subtitleEn: Performance follows predictable power laws in parameters, data, and compute
date: '2020-01-23'
datePrecision: day
importance: A
eventType: [paper]
topics: [large-language-models, ai-infrastructure]
companies: [openai]
concepts: [scaling-law, llm]
summary: OpenAI 研究者在跨越七个数量级的计算规模上拟合经验幂律，测量语言模型交叉熵损失随参数量、数据量和训练计算量的变化，并提出当时的计算预算分配公式。
summaryEn: OpenAI researchers fit empirical power laws across more than seven orders of magnitude of compute, measuring how language-model cross-entropy loss varied with parameters, data, and training compute and deriving a compute-allocation rule for the tested regime.
background: 更大的模型往往更好，但团队缺少可靠方法估计增加数据、参数或训练时间的收益，也难判断一次训练是否接近最优配置。
backgroundEn: Larger models often performed better, but teams lacked a reliable way to estimate gains from more data, parameters, or training time and to judge whether a run was close to compute-optimal.
whatHappened: 论文发现跨多个数量级，交叉熵损失与三种规模变量呈平滑幂律关系，其他因素不构成瓶颈时，趋势可以外推。
whatHappenedEn: Across several orders of magnitude, the paper found smooth power-law relationships between cross-entropy loss and the three scale variables, allowing extrapolation when other factors were not bottlenecks.
whyImportant: 缩放从经验判断变成可用于预算和路线选择的工程工具，直接支持了更大训练集群和基础模型投资；后续 Chinchilla 等工作又修正了最优数据与参数配比。
whyImportantEn: Scaling moved from intuition to an engineering tool for budgets and roadmaps, supporting investment in larger training clusters and foundation models. Later work such as Chinchilla revised the optimal balance of data and parameters.
impact:
  developer: 训练前可以用小规模实验估计大模型的损失和资源需求。
  industry: 前沿模型竞争越来越依赖持续扩大的算力、数据和资本投入。
impactEn:
  developer: Small runs could be used to estimate the loss and resource needs of much larger models.
  industry: Frontier-model competition increasingly depended on sustained growth in compute, data, and capital.
beforeAfter:
  before: 扩大模型主要依赖经验和零散观察。
  after: 规模收益可以被拟合、预测并写进训练计划。
beforeAfterEn:
  before: Scaling models relied mainly on intuition and isolated observations.
  after: Returns to scale could be fitted, predicted, and incorporated into training plans.
relatedEvents: [gpt-2, gpt-3, instructgpt]
visual:
  src: /assets/events/scaling-laws.webp
  width: 1400
  height: 1812
  alt: 《Scaling Laws for Neural Language Models》论文首页
  altEn: First page of the paper Scaling Laws for Neural Language Models
  caption: 论文首页概括了模型性能与参数、数据和计算量之间的幂律关系。
  captionEn: The paper's first page introduces power-law relationships between performance, parameters, data, and compute.
  credit: Jared Kaplan 等 / arXiv
  sourceUrl: https://arxiv.org/abs/2001.08361
  rights: official-editorial
sources:
  - title: Scaling Laws for Neural Language Models
    url: https://arxiv.org/abs/2001.08361
    publisher: arXiv
    type: paper
  - title: Training Compute-Optimal Large Language Models
    url: https://arxiv.org/abs/2203.15556
    publisher: DeepMind
    type: paper
status: verified
slug: scaling-laws
---
