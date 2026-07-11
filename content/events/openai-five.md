---
id: openai-five
title: OpenAI Five 击败 Dota 2 世界冠军
titleEn: OpenAI Five defeats the Dota 2 world champions
subtitle: 大规模自我博弈进入实时多人复杂环境
subtitleEn: Large-scale self-play reaches a complex real-time multiplayer environment
date: '2019-04-13'
datePrecision: day
importance: B
eventType: [milestone]
topics: [reinforcement-learning, game-ai, ai-infrastructure]
companies: [openai]
products: [openai-five]
concepts: [reinforcement-learning, self-play]
summary: OpenAI Five 在一场三局两胜的公开赛中连胜两局，击败 2018 年 Dota 2 世界冠军 OG。比赛使用 17 名可选英雄及若干规则限制，五个智能体各自控制一名角色并实时协作。
summaryEn: OpenAI Five won the first two games of a best-of-three exhibition against OG, the 2018 Dota 2 world champion. The match used a 17-hero pool and other restrictions, with five agents each controlling one character in real time.
background: 围棋等棋类回合明确、动作离散。Dota 2 同时包含实时控制、部分可观测、长时间规划、海量动作和团队协作。
backgroundEn: Board games have clear turns and discrete actions. Dota 2 adds real-time control, partial observability, long horizons, huge action spaces, and team coordination.
whatHappened: 系统使用大规模分布式强化学习和自我博弈，每天积累相当于约 180 年的对局经验。比赛版本仍限制了英雄、物品和部分游戏规则。
whatHappenedEn: The system used distributed reinforcement learning and self-play, accumulating roughly 180 years of experience each day. The match setup still restricted heroes, items, and some game rules.
whyImportant: 它展示强化学习可以依靠算力和自动生成经验处理比棋盘更连续、更嘈杂的环境，同时也暴露高样本成本和环境定制的限制。
whyImportantEn: It showed that reinforcement learning could use compute and generated experience in an environment far messier than a board game, while exposing the limits of sample cost and environment-specific engineering.
impact:
  developer: 大规模并行模拟、自我博弈和策略训练成为复杂控制任务的重要工程范式。
  industry: 算力不只用于训练静态数据模型，也可用于自动产生交互经验。
impactEn:
  developer: Large parallel simulation, self-play, and policy training became an important engineering pattern for complex control.
  industry: Compute could be used not only to train on static datasets but also to generate interactive experience automatically.
beforeAfter:
  before: 强化学习的公众突破主要集中在棋类和单智能体游戏。
  after: 多智能体协作与实时长程任务进入前沿演示范围。
beforeAfterEn:
  before: Public reinforcement-learning breakthroughs centered on board games and single-agent play.
  after: Multi-agent coordination and real-time long-horizon tasks entered frontier demonstrations.
relatedEvents: [alphazero, openai-o1]
visual:
  src: /assets/events/openai-five.webp
  width: 1800
  height: 1012
  alt: OpenAI Five 论文列出的 Dota 2 观察空间、动作空间和比赛限制
  altEn: OpenAI Five paper passage describing Dota 2 observation and action spaces and match restrictions
  caption: OpenAI Five 论文记录系统每个时间步约观察 1.6 万个值，并明确写出 17 名英雄池与多单位控制物品等限制。
  captionEn: The OpenAI Five paper records roughly 16,000 observed values per timestep and states the 17-hero pool and restrictions on items that control multiple units.
  credit: OpenAI
  sourceUrl: https://arxiv.org/abs/1912.06680
  rights: official-editorial
sources:
  - title: OpenAI Five Defeats Dota 2 World Champions
    url: https://openai.com/index/openai-five-defeats-dota-2-world-champions/
    publisher: OpenAI
    type: official
status: verified
slug: openai-five
---
