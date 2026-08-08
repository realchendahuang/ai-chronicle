---
id: claude-opus-5
title: Claude Opus 5 发布
titleEn: Claude Opus 5 launches
subtitle: 旗舰性能、半价定价，前沿模型竞争转向性价比与工程化
subtitleEn: Frontier capability at roughly half the flagship price, as competition shifts to cost-effectiveness and engineering
date: '2026-07-24'
datePrecision: day
importance: A
eventType:
  - model
topics:
  - large-language-models
  - ai-coding
  - ai-agent
  - enterprise-ai
  - reasoning-models
companies:
  - anthropic
models:
  - claude-opus-5
concepts:
  - llm
  - coding-agent
  - reasoning-model
summary: Anthropic 发布 Claude Opus 5，定位接近旗舰前沿智能、定价与 Opus 4.8 持平，成为 Claude Max 的新默认模型与 Claude Pro 的最强选项，并随发布带来对话中途工具切换、API 安全回退等工程化机制。
summaryEn: Anthropic released Claude Opus 5 on July 24, 2026, positioned as near-frontier capability at pricing unchanged from Opus 4.8. It became the default model for Claude Max and the strongest option in Claude Pro, alongside new engineering features such as mid-conversation tool switching and API safety fallbacks.
background: Opus 系列是 Anthropic 旗舰档位，上一代 Opus 4.8 之后，Claude 5 家族于 6 月底以 Sonnet 5 等型号进入市场，把 Agent 与编码任务作为主要战场；与此同时，GPT-5.6 与 Grok 4.5 相继在工具编排与编程上加强，成本成为各厂商争夺企业预算的关键变量。
backgroundEn: Opus is Anthropic's flagship tier. After Opus 4.8, the Claude 5 family entered the market in late June with Sonnet 5 and others, making agent and coding tasks the main battlefield; meanwhile GPT-5.6 and Grok 4.5 strengthened tool orchestration and programming, and cost became the key variable in winning enterprise budgets.
whatHappened: Opus 5 在官方评测中刷新多项纪录：Frontier-Bench v0.1 约为 Opus 4.8 的两倍，OSWorld 2.0 以约旗舰三分之一的成本取得更好成绩，ARC-AGI 3 约为第二名模型的三倍。定价为每百万输入 5 美元、输出 25 美元，与 Opus 4.8 持平；Fast 模式约 2.5 倍速度、2 倍价格。API 名 claude-opus-5，并推出对话中途切换工具与"被安全分类器拦截时自动回退到其他模型"的 beta 功能。官方 System Card 同时说明：模型未做网络攻防训练，漏洞利用能力仍明显落后于同期专攻该方向的模型。
whatHappenedEn: Opus 5 refreshed several official benchmarks, roughly doubling Opus 4.8 on Frontier-Bench v0.1, beating the flagship at about one-third the cost on OSWorld 2.0, and scoring about three times the runner-up on ARC-AGI 3. Pricing stays at $5 per million input tokens and $25 per million output, matching Opus 4.8; Fast mode runs about 2.5x faster at 2x price. The API model is claude-opus-5, with beta features for switching tools mid-conversation and automatically falling back to another model when a safety classifier blocks a request. The System Card also states the model received no cyber-offense training and its exploitation capability still trails models specialized in that area.
whyImportant: Opus 5 把"接近旗舰的性能、腰斩的成本"变成产品路线，而不是营销话术：同一家族内给出标准与 Fast 两档经济选择，并首次把安全拦截后的自动回退做成 API 能力，让企业对"模型被拒答时怎么办"有了可配置的答案。
whyImportantEn: Opus 5 turns "near-flagship performance at half the cost" into a product route rather than marketing language. The family offers standard and Fast tiers for economics, and for the first time makes post-interception automatic fallback an API capability, giving enterprises a configurable answer to what happens when a model declines a request.
impact:
  developer: 长流程 Agent 与高频编码任务的单位成本下降，回退与工具切换减少人工介入。
  product: Claude Max 默认模型升级，Pro 用户首次拥有旗舰档选择。
  industry: 前沿竞争的重心从单点能力转向"能力与成本的组合曲线"，并波及安全拦截的产品化处理。
impactEn:
  developer: Unit costs drop for long agent loops and high-frequency coding tasks; fallbacks and tool switching reduce human intervention.
  product: Claude Max's default model upgrades, and Pro users get a flagship-tier option for the first time.
  industry: Frontier competition shifts from peak capability to the capability-cost curve, and productizes handling of safety interceptions.
beforeAfter:
  before: 旗舰档与性价比档通常分属不同产品线，被安全拦截的请求往往直接失败。
  after: 同一旗舰家族内出现标准与 Fast 两档，模型被拦截时可按配置自动回退。
beforeAfterEn:
  before: Flagship and cost-effective tiers usually lived in separate product lines, and safety-intercepted requests simply failed.
  after: One flagship family offers standard and Fast tiers, and intercepted requests can fall back automatically by configuration.
relatedEvents:
  - claude-5-family
  - gpt-5-6
  - claude-code
visual:
  src: /assets/events/claude-opus-5.png
  width: 1280
  height: 720
  alt: 编辑插图：深色背景下层层叠叠的分层地形山脊，顶端一颗发光点
  altEn: Editorial illustration of layered terrain ridges under a dark sky with a single glowing peak
  caption: AI Chronicle 原创插图：层叠山脊与顶端光点，对应 Opus 5 的能力分层与旗舰定位。
  captionEn: AI Chronicle original illustration of layered ridges and a single lit peak, for Opus 5's tiered capability and flagship position.
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial 16:9 museum poster, layered dark terrain ridges, one small luminous point above the highest ridge, deep blue night, no logos, no text"
sources:
  - title: Claude Opus 5（Anthropic 官方）
    url: "https://www.anthropic.com/news/claude-opus-5"
    publisher: Anthropic
    type: official
  - title: Anthropic Newsroom
    url: "https://www.anthropic.com/news"
    publisher: Anthropic
    type: official
status: verified
slug: claude-opus-5
---
