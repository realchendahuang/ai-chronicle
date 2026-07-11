---
id: anthropic-claude
title: Claude 模型谱系
titleEn: Claude model lineage
company: anthropic
description: Claude 从安全导向的对话模型，逐步发展为强调长上下文、可靠工具使用与持续 Agent 工作的模型家族。
descriptionEn: Claude evolved from a safety-focused conversational model into a family built around long context, reliable tool use, and sustained agentic work.
latestModel: Claude Fable 5 / Sonnet 5 / Opus 4.8
latestModelEn: Claude Fable 5 / Sonnet 5 / Opus 4.8
updatedAt: '2026-07-11'
releases:
  - name: Claude Instant
    date: '2023-03-14'
    datePrecision: day
    status: legacy
    summary: 与 Claude 1 同期的轻量高速档，用更低延迟覆盖日常对话与高吞吐场景。
    summaryEn: Lightweight high-speed tier launched with Claude 1 for everyday chat and high-throughput use.
    source: https://www.anthropic.com/news/introducing-claude
  - name: Claude 1
    date: '2023-03-14'
    datePrecision: day
    status: legacy
    summary: 以 Constitutional AI 为核心对齐方法，强调有帮助、诚实与无害的对话表现。
    summaryEn: Debuted with Constitutional AI as a central alignment method, emphasizing helpful, honest, and harmless dialogue.
    source: https://www.anthropic.com/news/introducing-claude
  - name: Claude 2
    date: '2023-07-11'
    datePrecision: day
    status: legacy
    summary: 扩大上下文并提升代码、数学与长文档分析能力，开始面向公开产品与 API 扩张。
    summaryEn: Expanded context and improved coding, math, and long-document analysis as Claude moved into a broader product and API release.
    source: https://www.anthropic.com/news/claude-2
  - name: Claude 2.1
    date: '2023-11-21'
    datePrecision: day
    status: legacy
    summary: 把上下文扩展到 200K，并降低长文本中的错误回答，为企业文档工作流铺路。
    summaryEn: Extended context to 200K and reduced errors in long-document work, strengthening the case for enterprise knowledge workflows.
    source: https://www.anthropic.com/news/claude-2-1
  - name: Claude 3（Opus / Sonnet / Haiku）
    date: '2024-03-04'
    datePrecision: day
    status: legacy
    summary: 首次形成按能力、速度和成本分层的完整家族，并把视觉理解纳入 Claude。
    summaryEn: Established the Opus, Sonnet, and Haiku tiers for capability, speed, and cost, while adding vision to Claude.
    source: https://www.anthropic.com/news/claude-3-family
  - name: Claude 3.5 Sonnet
    date: '2024-06-20'
    datePrecision: day
    status: legacy
    summary: 以中档成本达到接近旗舰的代码和视觉能力，Sonnet 由此成为 Claude 的主力平衡档。
    summaryEn: Delivered near-flagship coding and vision at a mid-tier cost, turning Sonnet into Claude's primary balance of speed and intelligence.
    source: https://www.anthropic.com/news/claude-3-5-sonnet
  - name: Claude 3.5 Haiku
    date: '2024-10-22'
    datePrecision: day
    status: legacy
    summary: 3.5 代的高速低价档，承接高并发、分类与轻量工具调用。
    summaryEn: High-speed, low-cost 3.5-generation tier for concurrency, classification, and light tool use.
    source: https://www.anthropic.com/news/3-5-models-and-computer-use
  - name: Claude 3.5 Sonnet（新）
    date: '2024-10-22'
    datePrecision: day
    status: legacy
    summary: 同日升级的 3.5 Sonnet，强化计算机使用与 Agent 操作能力。
    summaryEn: Same-day 3.5 Sonnet upgrade strengthening computer use and agentic operation.
    source: https://www.anthropic.com/news/3-5-models-and-computer-use
  - name: Claude 3.7 Sonnet
    date: '2025-02-24'
    datePrecision: day
    status: legacy
    summary: 首次在同一模型中提供快速回答与可见的扩展思考模式，强化代码和复杂任务表现。
    summaryEn: Combined fast answers and an optional extended-thinking mode in one model, with a strong focus on coding and complex tasks.
    source: https://www.anthropic.com/news/claude-3-7-sonnet
  - name: Claude 4（Opus 4 / Sonnet 4）
    date: '2025-05-22'
    datePrecision: day
    status: legacy
    summary: 面向长时间运行的 Agent 和软件工程任务优化，Claude Code 也随模型能力一同成为核心产品入口。
    summaryEn: Optimized for long-running agents and software engineering, with Claude Code emerging as a core product surface alongside the models.
    source: https://www.anthropic.com/news/claude-4
  - name: Claude Opus 4.1
    date: '2025-08-05'
    datePrecision: day
    status: deprecated
    summary: 提升 Agent 任务、真实代码库编程和精确指令遵循，作为 Opus 4 的增量旗舰更新。
    summaryEn: Improved agentic tasks, real-codebase programming, and precise instruction following as an incremental Opus 4 flagship update.
    source: https://www.anthropic.com/news/claude-opus-4-1
  - name: Claude Sonnet 4.5
    date: '2025-09-29'
    datePrecision: day
    status: legacy
    summary: 强化代码、计算机操作与长时间自主工作，继续扩大 Sonnet 在生产 Agent 中的使用范围。
    summaryEn: Strengthened coding, computer use, and sustained autonomous work, expanding Sonnet's role in production agents.
    source: https://www.anthropic.com/news/claude-sonnet-4-5
  - name: Claude Haiku 4.5
    date: '2025-10-15'
    datePrecision: day
    status: current
    summary: 以更低延迟和成本提供接近前沿的智能，承担高并发与实时子任务。
    summaryEn: Delivered near-frontier intelligence at lower latency and cost for high-throughput and real-time subtasks.
    source: https://www.anthropic.com/news/claude-haiku-4-5
  - name: Claude Opus 4.5
    date: '2025-11-24'
    datePrecision: day
    status: legacy
    summary: 提升复杂代码库修改、深度研究与长链条 Agent 执行的稳定性。
    summaryEn: Improved stability on complex codebase changes, deep research, and long-horizon agent execution.
    source: https://www.anthropic.com/news/claude-opus-4-5
  - name: Claude Opus 4.6
    date: '2026-02-05'
    datePrecision: day
    status: legacy
    summary: 继续推进高难度代码、企业工作流与可控推理，是 4.x 旗舰快速迭代的一环。
    summaryEn: Continued advancing difficult coding, enterprise workflows, and controllable reasoning during the rapid 4.x flagship cycle.
    source: https://www.anthropic.com/news/claude-opus-4-6
  - name: Claude Sonnet 4.6
    date: '2026-02-17'
    datePrecision: day
    status: legacy
    summary: 在速度、智能和成本之间重新平衡，并支持更长的 Agent 输出与复杂工具工作流。
    summaryEn: Rebalanced speed, intelligence, and cost while supporting longer agent outputs and more complex tool workflows.
    source: https://www.anthropic.com/news/claude-sonnet-4-6
  - name: Claude Opus 4.7
    date: '2026-04-16'
    datePrecision: day
    status: legacy
    summary: 为复杂 Agent 编程与企业任务提高持续执行质量，并缩短从研究到生产的模型更新周期。
    summaryEn: Raised sustained execution quality for complex agentic coding and enterprise work while shortening the model iteration cycle.
    source: https://www.anthropic.com/news/claude-opus-4-7
  - name: Claude Opus 4.8
    date: '2026-05-28'
    datePrecision: day
    status: current
    summary: Anthropic 当前推荐的复杂 Agent 编程与企业工作模型，强调高可靠的长任务执行。
    summaryEn: Anthropic's current recommendation for complex agentic coding and enterprise work, focused on reliable long-horizon execution.
    source: https://www.anthropic.com/news/claude-opus-4-8
  - name: Claude Fable 5
    date: '2026-06-09'
    datePrecision: day
    status: current
    summary: 面向长期运行 Agent 的下一代高智能模型，也是 Anthropic 当前广泛发布的最高能力档。
    summaryEn: A next-generation model for long-running agents and Anthropic's most capable broadly released tier.
    source: https://www.anthropic.com/news/claude-fable-5-mythos-5
  - name: Claude Sonnet 5
    date: '2026-06-30'
    datePrecision: day
    status: current
    summary: 以速度和智能的综合平衡为核心，强化编码、日常专业工作与 Agent 能力。
    summaryEn: Centers on the best combination of speed and intelligence, with stronger coding, professional work, and agentic capability.
    source: https://www.anthropic.com/news/claude-sonnet-5
slug: anthropic-claude
---
