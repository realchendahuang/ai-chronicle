---
id: constitutional-ai
title: Constitutional AI：用原则与 AI 反馈训练无害性
titleEn: Constitutional AI trains harmlessness with principles and AI feedback
subtitle: 一份“宪法”加 RLAIF，减少对有害输出人工标注的依赖
subtitleEn: A written constitution plus RLAIF reduces reliance on human labels of harm
date: '2022-12-15'
datePrecision: day
importance: A
eventType: [paper]
topics:
  - ai-safety
  - large-language-models
companies: [anthropic]
models: []
products: []
papers: [constitutional-ai]
people: [yuntao-bai, saurav-kadavath, amanda-askell, deep-ganguli, jared-kaplan, dario-amodei]
concepts: [rlhf, llm]
summary: Anthropic 提出 Constitutional AI：用人类写定的原则列表让模型批评与改写自身输出，再以 AI 反馈做强化学习（RLAIF），在减少有害性人工标签的同时训练更少回避、更能解释拒绝的助手。
summaryEn: Anthropic proposed Constitutional AI—using a human-written list of principles so a model critiques and revises its own outputs, then reinforcement learning from AI feedback (RLAIF)—to train less evasive, better-explained refusals with fewer human harm labels.
background: RLHF 用人类偏好塑造助手行为，但大规模标注有害内容成本高、对标注员有负担，且“有帮助且无害”目标常把模型推向过度拒绝。
backgroundEn: RLHF shaped assistants with human preferences, but large-scale labeling of harmful content was costly and burdensome for labelers, and the helpful-and-harmless goal often pushed models toward over-refusal.
whatHappened: 2022 年 12 月论文描述两阶段：监督阶段用原则驱动的自我批评与修订；强化学习阶段用 AI 按原则比较回答训练偏好模型。人类主要提供原则文本，而非逐条有害标签。
whatHappenedEn: A December 2022 paper described two stages—supervised self-critique and revision driven by principles, then RL with an AI preference model that ranks answers by those principles. Humans mainly supplied the principle text rather than per-example harm labels.
whyImportant: 它把行为规范写成可讨论的“宪法”，并把部分监督从人类标注转移到模型自我评估，成为 Claude 产品线对外讲述的对齐方法之一。
whyImportantEn: It made behavioral norms a discussable “constitution” and shifted part of supervision from human labeling to model self-evaluation, becoming one of the alignment stories told for the Claude product line.
impact:
  developer: 对齐流程多了一条可扩展的无害性训练路径，原则列表可被审计与修订。
  industry: “原则 + AI 反馈”进入安全与产品叙事，与纯 RLHF 并列讨论。
impactEn:
  developer: Alignment pipelines gained a more scalable harmlessness path with auditable, revisable principle lists.
  industry: “Principles plus AI feedback” entered safety and product narratives alongside pure RLHF.
beforeAfter:
  before: 无害性训练高度依赖人类对有害输出的标注与排序。
  after: 原则文本与 AI 反馈可承担部分无害性监督，人类重点转向写规则与评估。
beforeAfterEn:
  before: Harmlessness training depended heavily on humans labeling and ranking harmful outputs.
  after: Principle text and AI feedback could carry part of harmlessness supervision; humans focused more on writing rules and evaluation.
relatedEvents: [claude, instructgpt, chatgpt-launch]
visual:
  src: /assets/events/constitutional-ai.webp
  width: 1280
  height: 720
  alt: "一份原则卷轴照亮模型自我批改的双栏回答草稿"
  altEn: "A scroll of principles lighting a model’s two-column self-critique of answer drafts"
  caption: "AI Chronicle 原创插图：Constitutional AI 用原则与 AI 反馈塑造无害行为。"
  captionEn: "Original illustration by AI Chronicle: Constitutional AI shapes harmless behavior with principles and AI feedback."
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial illustration for Constitutional AI, open constitution scroll with abstract principle marks casting light on dual-column answer drafts being revised by a calm abstract model figure, warm parchment and soft indigo, no text no logos, 16:9"
sources:
  - title: 'Constitutional AI: Harmlessness from AI Feedback'
    url: "https://arxiv.org/abs/2212.08073"
    publisher: arXiv
    type: paper
  - title: Constitutional AI — Anthropic research overview
    url: "https://www-cdn.anthropic.com/7512771452629584566b6303311496c262da1006/Anthropic_ConstitutionalAI_v2.pdf"
    publisher: Anthropic
    type: official
status: verified
slug: constitutional-ai
---
