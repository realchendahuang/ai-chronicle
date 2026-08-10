---
id: general-problem-solver
title: 通用问题求解器 GPS
titleEn: The General Problem Solver
subtitle: 纽厄尔与西蒙用「手段-目的分析」挑战通用智能
subtitleEn: Newell and Simon attack general intelligence with means–ends analysis
date: '1957'
datePrecision: year
importance: A
eventType:
  - paper
  - research
topics:
  - ai-foundations
  - symbolic-ai
  - ai-history
companies: []
concepts:
  - symbolic-ai
  - supervised-learning
summary: 纽厄尔、肖和西蒙开发通用问题求解器 GPS，用「手段-目的分析」把任意问题拆成子目标逐步解决。它是符号主义 AI 早期最雄心勃勃的尝试。
summaryEn: Newell, Shaw, and Simon built the General Problem Solver (GPS), using means–ends analysis to break arbitrary problems into subgoals. It was the most ambitious early attempt of symbolic AI.
background: 逻辑理论家证明机器能推理后，纽厄尔与西蒙想更进一步：能否写出不针对特定领域、而是「通用」的问题求解程序？GPS 应运而生。
backgroundEn: 'After Logic Theorist proved machines could reason, Newell and Simon wanted to go further: could one write a problem solver that was not domain-specific but "general"? GPS was the answer.'
whatHappened: GPS 用「手段-目的分析」工作：比较当前状态与目标状态的差异，选择缩小差异的算子，必要时递归拆出子目标。它不依赖具体领域知识，希望凭通用的搜索策略解决任何可形式化的问题。
whatHappenedEn: 'GPS worked via means–ends analysis: compare the current state with the goal, pick operators that reduce the difference, and recursively create subgoals when needed. It avoided domain knowledge, hoping generic search strategies could solve any formalizable problem.'
whyImportant: GPS 奠定了「搜索+启发式」这一 AI 基本范式，也直接影响了后来专家系统与规划算法的设计。它预示了「通用智能」这条贯穿 AI 史的理想主线。
whyImportantEn: GPS established the "search plus heuristics" paradigm that shaped later expert systems and planning algorithms, and it previewed the quest for general intelligence that runs through AI history.
impact:
  developer: 搜索、启发式、状态空间这些概念成为 AI 与算法课程的基础。
  industry: 后续专家系统与自动规划系统在概念上都可以追溯到 GPS。
impactEn:
  developer: Search, heuristics, and state space became foundations of AI and algorithm curricula.
  industry: Later expert systems and automated planners trace conceptually back to GPS.
beforeAfter:
  before: 程序只能解决预先写好的具体问题。
  after: 出现尝试跨领域求解的通用框架。
beforeAfterEn:
  before: Programs could only solve specific pre-coded problems.
  after: A general framework attempting cross-domain solving appeared.
relatedEvents:
  - logic-theorist
  - expert-systems
  - deep-blue
visual:
  src: /assets/events/general-problem-solver.webp
  width: 1672
  height: 941
  alt: 算法解迷宫流程图的复古插画
  altEn: Illustration of a flowchart maze being solved by an algorithm, retro computing
  caption: 纽厄尔与西蒙的 GPS 用手段-目的分析，让程序第一次能「面向目标推理」。
  captionEn: Newell and Simon's GPS used means-ends analysis, letting programs reason toward goals for the first time.
  credit: AI Chronicle
  rights: generated
  prompt: 纽厄尔与西蒙的 GPS 用手段-目的分析，让程序第一次能「面向目标推理」。
sources:
  - title: Report on a general problem-solving program
    url: "https://www.rand.org/pubs/papers/P1584.html"
    publisher: RAND Corporation
    type: paper
status: verified
slug: general-problem-solver
---
