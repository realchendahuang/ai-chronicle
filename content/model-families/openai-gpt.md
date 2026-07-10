---
id: openai-gpt
title: GPT 模型谱系
titleEn: GPT model lineage
company: openai
description: 从生成式预训练到统一推理、工具与多模态能力，GPT 的每一代都在重新定义通用模型的产品边界。
descriptionEn: From generative pretraining to unified reasoning, tools, and multimodality, each GPT generation has redrawn the boundary of a general-purpose model.
latestModel: GPT-5.6（Sol / Terra / Luna）
latestModelEn: GPT-5.6 (Sol / Terra / Luna)
updatedAt: '2026-07-10'
releases:
  - name: GPT-1
    date: '2018-06-11'
    datePrecision: day
    status: legacy
    summary: 用“先预训练、再微调”证明通用语言表征可以迁移到多种任务，为 GPT 路线奠定方法基础。
    summaryEn: Established the pretrain-then-finetune recipe for transferable language representations and set the foundation for the GPT line.
    source: https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf
  - name: GPT-2
    date: '2019-02-14'
    datePrecision: day
    status: legacy
    summary: 把参数规模和零样本生成能力同时向前推了一步，也首次让模型发布方式与滥用风险成为公共议题。
    summaryEn: Advanced both scale and zero-shot generation, while making staged release and misuse risk part of the public model conversation.
    source: https://openai.com/index/better-language-models/
  - name: GPT-3
    date: '2020-05-28'
    datePrecision: day
    status: legacy
    summary: 1750 亿参数带来强大的少样本与上下文学习能力，大模型开始以 API 形式成为通用能力底座。
    summaryEn: Its 175B parameters unlocked strong few-shot and in-context learning, turning a large model into a general capability delivered by API.
    source: https://arxiv.org/abs/2005.14165
  - name: GPT-3.5
    date: '2022-11-30'
    datePrecision: day
    status: legacy
    summary: 通过指令微调和对话对齐支撑 ChatGPT，把大模型从开发者工具变成大众产品入口。
    summaryEn: Instruction tuning and conversational alignment powered ChatGPT, moving large models from developer infrastructure to a mass-market interface.
    source: https://openai.com/index/chatgpt/
  - name: GPT-4
    date: '2023-03-14'
    datePrecision: day
    status: legacy
    summary: 显著提升推理、代码与专业任务表现，并把图像理解纳入旗舰模型能力。
    summaryEn: Raised the bar for reasoning, coding, and professional tasks while bringing image understanding into the flagship model.
    source: https://openai.com/index/gpt-4-research/
  - name: GPT-4o
    date: '2024-05-13'
    datePrecision: day
    status: legacy
    summary: 原生统一文本、视觉与语音输入输出，降低实时多模态交互的延迟与成本。
    summaryEn: Natively unified text, vision, and audio input and output, reducing the latency and cost of real-time multimodal interaction.
    source: https://openai.com/index/hello-gpt-4o/
  - name: OpenAI o1
    date: '2024-09-12'
    datePrecision: day
    status: legacy
    summary: 用更长的测试时计算换取更强的复杂推理表现，“推理模型”成为独立产品路线。
    summaryEn: Traded more test-time computation for stronger complex reasoning, establishing reasoning models as a distinct product line.
    source: https://openai.com/index/introducing-openai-o1-preview/
  - name: GPT-4.5
    date: '2025-02-27'
    datePrecision: day
    status: legacy
    summary: 强化世界知识、自然对话与模式识别，是大规模无监督学习路线的一次过渡性旗舰更新。
    summaryEn: Improved world knowledge, natural conversation, and pattern recognition as a transitional flagship built around large-scale unsupervised learning.
    source: https://openai.com/index/introducing-gpt-4-5/
  - name: GPT-5
    date: '2025-08-07'
    datePrecision: day
    status: legacy
    summary: 把快速回答与深度推理统一到同一家族，并面向工具使用、代码和专业工作流优化。
    summaryEn: Unified fast responses and deeper reasoning in one family, optimized for tools, coding, and professional workflows.
    source: https://openai.com/index/introducing-gpt-5/
  - name: GPT-5.1
    date: '2025-11-01'
    datePrecision: month
    status: legacy
    summary: 提升可控性、代码与 Agent 工作流，并加入无需额外思考的快速推理档位。
    summaryEn: Improved steerability, coding, and agentic workflows, with a no-reasoning setting for faster responses when deeper thought was unnecessary.
    source: https://developers.openai.com/api/docs/changelog
  - name: GPT-5.2
    date: '2025-12-01'
    datePrecision: month
    status: legacy
    summary: 面向复杂专业工作继续提高可靠性，并延伸出针对长期软件工程任务优化的 Codex 版本。
    summaryEn: Increased reliability for complex professional work and extended into Codex variants optimized for long-running software engineering tasks.
    source: https://developers.openai.com/api/docs/models/gpt-5.2
  - name: GPT-5.3
    date: '2026-03-01'
    datePrecision: month
    status: deprecated
    summary: 重点推进 ChatGPT 即时体验与实时编码分支，随后被更新的旗舰家族取代。
    summaryEn: Focused on the instant ChatGPT experience and real-time coding variants before being superseded by newer flagship families.
    source: https://developers.openai.com/api/docs/models/gpt-5.3-chat-latest
  - name: GPT-5.4
    date: '2026-03-01'
    datePrecision: month
    status: legacy
    summary: 引入 100 万 token 上下文、原生压缩、工具搜索和内置计算机使用，强化长期 Agent 工作流。
    summaryEn: Added a 1M-token context window, native compaction, tool search, and built-in computer use for long-running agent workflows.
    source: https://developers.openai.com/api/docs/changelog
  - name: GPT-5.5
    date: '2026-04-01'
    datePrecision: month
    status: legacy
    summary: 把托管 Shell、补丁应用、Skills、MCP 与网页搜索进一步纳入旗舰模型的生产工作流。
    summaryEn: Pulled hosted shell, patch application, Skills, MCP, and web search further into the flagship model's production workflow.
    source: https://developers.openai.com/api/docs/changelog
  - name: GPT-5.6
    date: '2026-07-01'
    datePrecision: month
    status: current
    summary: 以 Sol、Terra、Luna 三档覆盖能力、成本与吞吐，并加入程序化工具调用、多 Agent、显式缓存和持久推理。
    summaryEn: Introduced Sol, Terra, and Luna tiers for capability, cost, and throughput, plus programmatic tool calling, multi-agent orchestration, explicit caching, and persisted reasoning.
    source: https://developers.openai.com/api/docs/guides/latest-model
slug: openai-gpt
---
