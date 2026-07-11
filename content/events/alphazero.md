---
id: alphazero
title: AlphaZero 用自我博弈统一棋类学习
titleEn: AlphaZero unifies game learning through self-play
subtitle: 不再依赖人类棋谱，规则与自我对弈足以产生策略
subtitleEn: Rules and self-play replace human game records
date: '2017-12-05'
datePrecision: day
importance: A
eventType: [paper, milestone]
topics:
  - reinforcement-learning
  - game-ai
companies: [google-deepmind]
concepts: [deep-reinforcement-learning, monte-carlo-tree-search]
summary: DeepMind 发布 AlphaZero，用同一套自我对弈、策略—价值网络和蒙特卡洛树搜索方法分别学习国际象棋、将棋与围棋。三个网络各自从随机参数训练，并不共享已经学到的棋艺。
summaryEn: DeepMind introduced AlphaZero, applying the same combination of self-play, a policy-and-value network, and Monte Carlo tree search separately to chess, shogi, and Go. Each game used its own training run from random parameters rather than one shared trained network.
background: AlphaGo 结合人类棋谱监督学习、自我对弈和人工设计的搜索流程，证明深度强化学习能处理围棋，但系统仍针对单一游戏精心搭建。
backgroundEn: AlphaGo combined supervised learning from human games, self-play, and a carefully designed search pipeline. It solved Go but remained tailored to one game.
whatHappened: AlphaZero 使用一套通用网络预测走子概率和局面价值，再用蒙特卡洛树搜索产生更强的训练目标。每种游戏从随机对弈开始，不输入人类策略。
whatHappenedEn: AlphaZero used one general network to predict moves and position value, while Monte Carlo tree search produced stronger training targets. Each game started from random play without human strategy data.
whyImportant: 它把“专家数据”从必要条件变成可选加速项，展示了规则明确、可大量模拟的环境中，自我生成数据可以超过人类积累的经验。
whyImportantEn: It turned expert data from a requirement into an optional accelerator, showing that self-generated experience could surpass accumulated human play in environments with clear rules and cheap simulation.
impact:
  developer: 自我博弈、搜索与价值网络的组合成为强化学习的重要参考架构。
  industry: 研究注意力进一步转向能通过环境反馈自主改进的通用学习系统。
impactEn:
  developer: The combination of self-play, search, and value networks became a major reference architecture for reinforcement learning.
  industry: Research attention moved further toward general systems that improve from environmental feedback.
beforeAfter:
  before: 高水平游戏 AI 依赖大量人类棋谱和针对任务的工程。
  after: 同一训练方法可以从规则出发掌握多种棋类。
beforeAfterEn:
  before: High-level game AI depended on human records and task-specific engineering.
  after: One training method could master multiple games from rules alone.
relatedEvents: [alphago, openai-five]
visual:
  src: /assets/events/alphazero.webp
  width: 1800
  height: 1012
  alt: AlphaZero 在国际象棋、将棋和围棋训练过程中的 Elo 曲线
  altEn: AlphaZero Elo curves during training in chess, shogi, and Go
  caption: 论文图 1 记录 AlphaZero 训练 70 万步时在三种棋类中的 Elo 变化；三个任务分别训练，并不共享棋艺参数。
  captionEn: Figure 1 traces AlphaZero's Elo over 700,000 training steps in three games; each game was trained separately rather than sharing learned play.
  credit: David Silver et al., DeepMind
  sourceUrl: "https://arxiv.org/abs/1712.01815"
  rights: official-editorial
sources:
  - title: Mastering Chess and Shogi by Self-Play with a General Reinforcement Learning Algorithm
    url: "https://arxiv.org/abs/1712.01815"
    publisher: arXiv
    type: paper
status: verified
slug: alphazero
---
