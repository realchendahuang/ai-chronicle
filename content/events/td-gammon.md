---
id: td-gammon
title: TD-Gammon 与时间差分学习
titleEn: TD-Gammon and temporal-difference learning
subtitle: 神经网络从自我对弈中逼近双陆棋大师水平
subtitleEn: A neural network approaches master level at backgammon through self-play
date: '1992'
datePrecision: year
importance: B
eventType:
  - milestone
  - paper
topics:
  - reinforcement-learning
  - game-ai
  - neural-networks
  - ai-history
people:
  - gerry-tesauro
concepts:
  - deep-reinforcement-learning
summary: Gerald Tesauro 在 IBM 开发 TD-Gammon，让一个带时序差分学习的小型神经网络仅靠与自己对弈训练，棋力逼近人类大师。它把「从经验中学习价值」变成了可以量化的现实。
summaryEn: At IBM, Gerald Tesauro built TD-Gammon, a small neural network trained with temporal-difference learning that reached near-master level at backgammon purely through self-play, turning "learning values from experience" into a measurable reality.
background: 双陆棋带有骰子的随机性，局面评估复杂，很难靠穷举搜索解决，是测试学习算法的合适环境。
backgroundEn: Backgammon's dice randomness and complex position evaluation make exhaustive search impractical, a suitable testbed for learning algorithms.
whatHappened: 网络把局面编码为输入，输出对当前玩家胜率的估计，通过 TD(λ) 规则按未来几步的预测之差更新权重。1992 年版本与当时的顶尖程序和人机结合系统对弈表现优秀；引入更多隐藏单元与更长训练后，棋力进一步接近人类世界级水平。
whatHappenedEn: The network encoded positions as inputs and output an estimated win probability, updating weights by the difference between successive predictions under the TD(λ) rule. The 1992 version performed well against top programs and human-machine hybrids; with more hidden units and longer training it approached world-class human play.
whyImportant: TD-Gammon 证明纯粹的自我对弈学习可以在高复杂度博弈中产生接近顶尖的技能，这直接启发了后来的 AlphaGo 与 AlphaZero 的自我博弈训练思路。
whyImportantEn: TD-Gammon proved that pure self-play learning can produce near-top skill in a complex game, directly inspiring the self-play training of later AlphaGo and AlphaZero.
impact:
  developer: 让 TD 学习与价值网络成为强化学习工具箱里的核心方法。
  industry: 展示了游戏可以作为衡量学习算法的公开标尺。
impactEn:
  developer: Made TD learning and value networks core tools in the RL toolbox.
  industry: Showed games can serve as public yardsticks for learning algorithms.
beforeAfter:
  before: 强化学习多依赖显式规则与环境模型。
  after: 直接从与环境的交互中学习价值函数成为主流方向。
beforeAfterEn:
  before: RL often relied on explicit rules and environment models.
  after: Learning value functions directly from interaction became the mainstream direction.
relatedEvents:
  - deep-blue
  - alphago
  - alphazero
  - openai-five
visual:
  src: /assets/events/td-gammon.webp
  width: 1672
  height: 941
  alt: 发光自对弈网络的西洋双陆棋插画
  altEn: Illustration of a backgammon board with a self-play neural network
  caption: TD-Gammon 用时序差分自对弈练成一流棋手，是深度强化学习的直接先驱。
  captionEn: TD-Gammon trained to expert level via TD self-play, the direct precursor of deep RL.
  credit: AI Chronicle
  rights: generated
  prompt: TD-Gammon 用时序差分自对弈练成一流棋手，是深度强化学习的直接先驱。
sources:
  - title: Temporal Difference Learning and TD-Gammon
    url: "https://dl.acm.org/doi/10.1145/203330.203343"
    publisher: Communications of the ACM
    type: paper
status: verified
slug: td-gammon
---
