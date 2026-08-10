---
id: samuel-checkers
title: Arthur Samuel 的跳棋程序
titleEn: Arthur Samuel's checkers program
subtitle: 让机器自己改进的早期证明
subtitleEn: An early demonstration of a machine that improves itself
date: '1952'
datePrecision: year
importance: B
eventType:
  - milestone
  - paper
topics:
  - ai-foundations
  - reinforcement-learning
  - ai-history
people:
  - arthur-samuel
concepts:
  - reinforcement-learning
summary: 在 IBM 702 上，Arthur Samuel 编写了一个会下跳棋的程序，并让它通过与自己对弈持续改进棋力。他后来把这项工作称为「机器学习」的一个早期实例，这个术语也由此进入公共词汇。
summaryEn: On an IBM 702, Arthur Samuel wrote a checkers program that improved by playing against itself. He later cited the work as an early instance of what he called "machine learning," helping put that term into public use.
background: 二战后的机器还主要按照固定步骤工作，程序能不能通过经验自己变好，在当时没有公认的答案。
backgroundEn: Early postwar machines mostly followed fixed steps; whether a program could improve itself through experience had no settled answer.
whatHappened: Samuel 把评估棋局的启发式写成一个线性函数，程序用每局棋的结果调整权重，并与自己对弈来产生训练数据。1955 年版本学会了一些开局技巧，1959 年版本达到接近业余棋手水平，他还让程序在演示中公开对弈。
whatHappenedEn: Samuel encoded board evaluation as a linear function, used game outcomes to adjust its weights, and generated training data by playing itself. The 1955 version picked up opening tricks; by 1959 it played near amateur level and was publicly demonstrated in matches.
whyImportant: 它第一次清楚地展示了「学习」可以不是人类写规则，而是程序从自己的经验里调整参数。这个思路与后来的强化学习、搜索加评估的组合有清晰的血缘关系。
whyImportantEn: It showed clearly that "learning" need not mean hand-written rules, but a program adjusting parameters from its own experience—a direct ancestor of later reinforcement learning and of search-plus-evaluation systems.
impact:
  user: 让公众第一次看到程序可以「变聪明」，而不只是执行指令。
  developer: 为评估函数、自我对弈和基于结果的权重更新确立了可复制的范式。
impactEn:
  user: Gave the public a first view of a program "getting smarter" rather than just executing instructions.
  developer: Established a replicable pattern of evaluation functions, self-play, and outcome-based weight updates.
beforeAfter:
  before: AI 研究主要依赖手工编码的规则和搜索。
  after: 学习型系统成为独立的研究路线，并与搜索结合。
beforeAfterEn:
  before: AI research relied mostly on hand-coded rules and search.
  after: Learning systems became a distinct research line, often combined with search.
relatedEvents:
  - logic-theorist
  - alphago
  - deep-blue
visual:
  src: /assets/events/samuel-checkers.webp
  width: 1672
  height: 941
  alt: 1950 年代电脑下跳棋的复古插画
  altEn: Retro illustration of a 1950s computer playing checkers
  caption: Samuel 的跳棋程序让机器第一次通过自我对弈学会下棋，「机器学习」由此得名。
  captionEn: Samuel's checkers program taught a machine to learn by self-play, coining the term machine learning.
  credit: AI Chronicle
  rights: generated
  prompt: Samuel 的跳棋程序让机器第一次通过自我对弈学会下棋，「机器学习」由此得名。
sources:
  - title: Some Studies in Machine Learning Using the Game of Checkers
    url: "https://www.computer.org/csdl/magazine/co/1959/03/01707143/13rRUxoKj3L"
    publisher: IBM Journal of Research and Development
    type: paper
status: verified
slug: samuel-checkers
---
