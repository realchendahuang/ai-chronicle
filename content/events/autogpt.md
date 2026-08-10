---
id: autogpt
title: AutoGPT 引爆自主智能体实验
titleEn: AutoGPT ignites autonomous-agent experiments
subtitle: 一个开源脚本让「AI 自己给自己派任务」成为全民话题
subtitleEn: An open-source script makes "AI assigning itself tasks" a mass topic
date: '2023-03-30'
datePrecision: day
importance: B
eventType:
  - product
  - milestone
topics:
  - ai-agent
  - open-source-models
  - developer-tools
  - ai-history
companies:
  - openai
concepts:
  - agent
  - llm
summary: 开源项目 AutoGPT 发布，展示让 GPT-4 自主拆分目标、调用工具并迭代执行的思路。它虽不成熟，却让「AI 智能体」成为生成式 AI 最热门的叙事之一。
summaryEn: The open-source project AutoGPT showed GPT-4 autonomously decomposing goals, calling tools, and iterating. Though immature, it made "AI agents" one of the hottest narratives in generative AI.
background: 2023 年初，GPT-4 的推理与工具调用能力让开发者开始尝试让模型自主完成多步骤任务，而不是只回答单轮问题。
backgroundEn: In early 2023 GPT-4's reasoning and tool use led developers to try having models complete multi-step tasks autonomously instead of answering single turns.
whatHappened: AutoGPT 是一个把 GPT-4 循环起来运行的程序：模型生成目标、规划步骤、调用工具、评估结果、再继续，直到完成或需要帮助。项目在 GitHub 上迅速冲上星标榜首，大量模仿项目雨后春笋般出现，其中很多很快夭折。
whatHappenedEn: "AutoGPT was a program that looped GPT-4: the model generated goals, planned steps, called tools, evaluated results, and continued until done or needing help. The repo rocketed to the top of GitHub stars, spawning countless imitators, many of which quickly died."
whyImportant: AutoGPT 把「自主智能体」从论文概念变成可运行的开源实验，定义了后来 Agent 时代的基本问题：目标拆解、工具调用、长期记忆与失败恢复。
whyImportantEn: 'AutoGPT turned "autonomous agents" from a paper concept into a runnable open-source experiment, defining the basic problems of the later agent era: goal decomposition, tool calling, long-term memory, and failure recovery.'
impact:
  developer: 让大量开发者第一次动手构建多步骤自主智能体。
  industry: 智能体成为继聊天之后的下一波 AI 产品叙事。
impactEn:
  developer: Put large numbers of developers to work building multi-step autonomous agents for the first time.
  industry: Agents became the next AI product narrative after chatbots.
beforeAfter:
  before: 对话模型被当作问答工具使用。
  after: 开发者开始让模型自主拆任务、调用工具、连续执行。
beforeAfterEn:
  before: Conversational models were used as question-answering tools.
  after: Developers began letting models decompose tasks, call tools, and run continuously.
relatedEvents:
  - gpt-4-release
  - tool-use
  - function-calling
  - agent-runtime
sources:
  - title: AutoGPT
    url: "https://github.com/Significant-Gravitas/AutoGPT"
    publisher: GitHub
    type: official
status: verified
slug: autogpt
---
