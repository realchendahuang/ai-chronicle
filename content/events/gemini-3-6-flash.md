---
id: gemini-3-6-flash
title: Gemini 3.6 Flash 发布，旗舰 3.5 Pro 继续缺席
titleEn: Gemini 3.6 Flash arrives while the 3.5 Pro flagship stays away
subtitle: 三款模型同日发布：效率、经济与安全微调三条路线
subtitleEn: "Three models in one day: efficiency, economy, and a security-tuned variant"
date: '2026-07-21'
datePrecision: day
importance: B
eventType:
  - model
topics:
  - large-language-models
  - ai-agent
  - model-efficiency
  - multimodal-ai
  - developer-tools
companies:
  - google-deepmind
models:
  - gemini-3-6-flash
concepts:
  - llm
  - context-window
  - multimodal
summary: Google DeepMind 发布 Gemini 3.6 Flash，以及 3.5 Flash-Lite 与面向政府试点的 3.5 Flash Cyber；3.6 Flash 把输出定价下调并保持 1M 上下文，官方同时确认旗舰 3.5 Pro 仍在测试、Gemini 4 预训练已经启动。
summaryEn: Google DeepMind released Gemini 3.6 Flash alongside the 3.5 Flash-Lite and a government-pilot Cyber variant. The 3.6 Flash keeps a 1M-token context while cutting output pricing; the company also confirmed the 3.5 Pro flagship is still in testing and that Gemini 4 pretraining has begun.
background: 2026 年上半年，Google 的旗舰 Gemini 3.5 Pro 自 2 月后没有更新，而 Flash 系列承担了大多数生产负载；同期 GPT-5.6、Claude Sonnet 5、Grok 4.5 在编码与 Agent 任务上密集发力，使效率与价格的竞争比旗舰参数更早到来。
backgroundEn: In the first half of 2026, Google's Gemini 3.5 Pro flagship had not been updated since February, while the Flash line carried most production traffic. GPT-5.6, Claude Sonnet 5, and Grok 4.5 pressed hard on coding and agent tasks in the same period, so the competition over efficiency and price arrived before any flagship parameter update.
whatHappened: Gemini 3.6 Flash 定位"工作马"模型，编码、知识工作与多模态能力增强，官方称 token 用量最高可减少约 17%，上下文窗口保持 1M（输出 64K），定价每百万输入 1.50 美元、输出 7.50 美元，低于 3.5 Flash 的输出价。3.5 Flash-Lite 是同系列最经济的型号；3.5 Flash Cyber 是网络安全专用微调模型，仅向政府与可信合作伙伴限量试点。官方模型卡公布了与 GPT-5.6 Luna、Grok 4.5、Claude Sonnet 5 的横向基准。产品负责人同时表示 3.5 Pro 仍在与合作伙伴测试，并披露 Gemini 4 预训练已经启动。
whatHappenedEn: Gemini 3.6 Flash is positioned as a workhorse model with stronger coding, knowledge work, and multimodal ability; the company reports token usage can drop by up to about 17%. It keeps a 1M-token context window (64K output) with pricing of $1.50 per million input tokens and $7.50 per million output, below the 3.5 Flash output price. The 3.5 Flash-Lite is the cheapest model in the family, and the 3.5 Flash Cyber is a security-tuned variant limited to government and trusted-partner pilots. The official model card publishes cross-benchmarks against GPT-5.6 Luna, Grok 4.5, and Claude Sonnet 5. The product lead also said the 3.5 Pro is still being tested with partners and disclosed that Gemini 4 pretraining has begun.
whyImportant: 它把 Google 这一季的战略摆到了桌面上：在旗舰缺席的窗口里，用效率、延迟与价格守住生产负载，同时为下一代旗舰保留预算与注意力；1M 上下文与降价组合直接改变长期 Agent 任务的选型成本。
whyImportantEn: "It puts Google's strategy for the quarter on the table: while the flagship is absent, hold production workloads with efficiency, latency, and price, while saving budget and attention for the next flagship. The 1M-context-plus-price-cut combination directly changes the selection cost of long-running agent tasks."
impact:
  developer: 长上下文与高频调用场景的单位成本下降，Flash 系成为更多生产默认项。
  product: 经济档与安全档在同一系列内分离，满足不同客户预算与合规需求。
  industry: 在旗舰缺席期，"够用且便宜"的模型同样改写竞争格局，旗舰节奏本身成为信号。
impactEn:
  developer: Unit costs fall for long-context and high-volume calls; Flash-family models become the default in more production setups.
  product: Economy and security tiers split within one family, serving different budgets and compliance needs.
  industry: During a flagship gap, "good enough and cheap" models still reshape competition, and flagship cadence itself becomes a signal.
beforeAfter:
  before: 生产负载的性价比选择与旗舰能力更新高度绑定在同一个发布节奏上。
  after: 效率、经济与安全微调在旗舰缺席时独立成线，旗舰节奏与生产路线解耦。
beforeAfterEn:
  before: Cost-effective production choices were tightly coupled to the same cadence as flagship updates.
  after: Efficiency, economy, and security tuning run as independent lines while the flagship is away.
relatedEvents:
  - gemini-3-5-flash
  - gpt-5-6
  - claude-5-family
visual:
  src: /assets/events/gemini-3-6-flash.png
  width: 1280
  height: 720
  alt: 编辑插图：三条速度不同的发光流线在深色背景中并行延伸
  altEn: Editorial illustration of three luminous streams of different speeds running in parallel across a dark field
  caption: AI Chronicle 原创插图：三条并行光流，对应同日发布的三款不同定位的模型。
  captionEn: AI Chronicle original illustration of three parallel streams of light, for three models with different roles released on the same day.
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial 16:9 museum poster, three smooth luminous streams of different widths and speeds crossing a dark field, blue and cyan, no logos, no text"
sources:
  - title: Gemini 3.6 Flash model card
    url: "https://deepmind.google/models/model-cards/gemini-3-6-flash/"
    publisher: Google DeepMind
    type: official
  - title: Google releases three new Gemini models, but no 3.5 Pro
    url: "https://techcrunch.com/2026/07/21/google-releases-three-new-gemini-models-but-no-3-5-pro/"
    publisher: TechCrunch
    type: report
status: verified
slug: gemini-3-6-flash
---
