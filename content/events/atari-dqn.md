---
id: atari-dqn
title: DeepMind 用 DQN 打通雅达利游戏
titleEn: DeepMind trains DQN on Atari games
subtitle: 「人类级控制」论文宣告深度强化学习时代
subtitleEn: A "human-level control" paper ushers in deep reinforcement learning
date: '2013-12-12'
datePrecision: day
importance: A
eventType:
  - research
  - milestone
topics:
  - reinforcement-learning
  - deep-learning
  - game-ai
  - deep-reinforcement-learning
companies:
  - google-deepmind
concepts:
  - reinforcement-learning
  - deep-reinforcement-learning
  - cnn
  - monte-carlo-tree-search
summary: DeepMind 在 2013 年底公布了 DQN：用深度卷积网络直接从像素学习玩雅达利游戏，部分达到甚至超过人类水平。这篇论文把「深度强化学习」从边缘推上主流，也成为后续 AlphaGo 的起点。
summaryEn: In late 2013 DeepMind unveiled DQN, a deep convolutional network learning to play Atari games directly from pixels, reaching or exceeding human level on some titles. The paper pushed deep reinforcement learning into the mainstream and became the seed of AlphaGo.
background: 强化学习长期依赖人工设计的状态特征，游戏 AI 与真实决策问题的表现都受制于此。深度学习在图像上的突破让研究者开始思考：能否让智能体直接从原始感知学习策略？
backgroundEn: "Reinforcement learning had long relied on hand-crafted state features, limiting game AI and real-world decision tasks. Deep learning's image breakthroughs prompted a question: could an agent learn policies directly from raw perception?"
whatHappened: DeepMind 团队让同一个 DQN 网络直接读像素、打雅达利游戏，在 49 款游戏中多款超过此前最先进的系统，部分游戏接近甚至超过人类专业玩家。研究结果先以技术报告形式公开，随后登上《自然》。它证明了「一个网络学多种任务」的通用学习能力。
whatHappenedEn: The DeepMind team let a single DQN network read raw pixels and play Atari games, beating previous best systems on many of 49 titles and approaching or exceeding human experts on several. The results first appeared as a tech report, then in Nature, demonstrating a single network learning many tasks.
whyImportant: DQN 证明了深度网络能在强化学习里直接做函数逼近，把感知、决策统一起来。它点燃了深度强化学习研究热潮，也为 2016 年 AlphaGo 提供了直接的技术与团队基础。
whyImportantEn: DQN proved deep networks can serve directly as function approximators in reinforcement learning, unifying perception and decision-making. It ignited the deep-RL boom and provided the direct technical and team basis for AlphaGo in 2016.
impact:
  user: 游戏 AI 与智能体研究的范式从「手工特征」转向「端到端学习」。
  developer: 深度强化学习成为独立的研究方向，开源框架与基准大量出现。
  industry: 从游戏、机器人到自动决策，深度 RL 进入产业视野。
impactEn:
  user: The paradigm for game AI and agent research shifted from hand-crafted features to end-to-end learning.
  developer: Deep RL became a standalone research field with many open frameworks and benchmarks.
  industry: Deep RL entered the industrial view from games and robots to automated decision-making.
beforeAfter:
  before: 强化学习依赖人工设计的特征与线性/表格方法。
  after: 深度网络直接吃像素学策略，感知与决策合一。
beforeAfterEn:
  before: RL relied on hand-crafted features and linear or tabular methods.
  after: Deep networks learn policies straight from pixels, fusing perception and decision-making.
relatedEvents:
  - alphago
  - td-gammon
  - openai-five
  - alphazero
visual:
  src: /assets/events/atari-dqn.webp
  width: 1672
  height: 941
  alt: 复古像素游戏被神经网络学习的插画
  altEn: Illustration of a retro 8-bit game screen overlaid with a neural network
  caption: DeepMind 的 DQN 让网络直接从像素学会打雅达利游戏，点燃了深度强化学习。
  captionEn: DeepMind's DQN learned to play Atari from pixels, igniting deep reinforcement learning.
  credit: AI Chronicle
  rights: generated
  prompt: DeepMind 的 DQN 让网络直接从像素学会打雅达利游戏，点燃了深度强化学习。
sources:
  - title: Playing Atari with Deep Reinforcement Learning
    url: "https://arxiv.org/abs/1312.5602"
    publisher: arXiv
    type: paper
status: verified
slug: atari-dqn
---
