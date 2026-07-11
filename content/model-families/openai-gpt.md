---
id: openai-gpt
title: OpenAI 模型谱系
titleEn: OpenAI model lineage
company: openai
description: 从生成式预训练到统一推理、多模态、工具与 Agent，OpenAI 以 GPT 主线串联图像、语音、视频与推理专用系列，持续重划通用模型的产品边界。
descriptionEn: From generative pretraining to unified reasoning, multimodality, tools, and agents, OpenAI’s GPT mainline—together with image, speech, video, and reasoning series—keeps redrawing the product boundary of general-purpose models.
latestModel: GPT-5.6（Sol / Terra / Luna）
latestModelEn: GPT-5.6 (Sol / Terra / Luna)
updatedAt: '2026-07-11'
releases:
  - name: GPT-1
    date: '2018-06-11'
    datePrecision: day
    status: legacy
    summary: 用「先预训练、再微调」证明通用语言表征可迁移到多种任务，为 GPT 路线奠定方法基础。
    summaryEn: Established the pretrain-then-finetune recipe for transferable language representations and set the foundation for the GPT line.
    source: https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf
  - name: GPT-2
    date: '2019-02-14'
    datePrecision: day
    status: legacy
    summary: 把参数规模和零样本生成能力同时向前推，也首次让模型发布方式与滥用风险成为公共议题。
    summaryEn: Advanced both scale and zero-shot generation, while making staged release and misuse risk part of the public model conversation.
    source: https://openai.com/index/better-language-models/
  - name: GPT-3
    date: '2020-05-28'
    datePrecision: day
    status: legacy
    summary: 1750 亿参数带来强大的少样本与上下文学习，大模型开始以 API 形式成为通用能力底座。
    summaryEn: Its 175B parameters unlocked strong few-shot and in-context learning, turning a large model into a general capability delivered by API.
    source: https://arxiv.org/abs/2005.14165
  - name: DALL·E
    date: '2021-01-05'
    datePrecision: day
    status: legacy
    summary: 文本到图像生成的早期里程碑，展示大规模多模态生成的产品潜力。
    summaryEn: Early text-to-image milestone that showed the product potential of large-scale multimodal generation.
    source: https://openai.com/index/dall-e/
  - name: Codex
    date: '2021-08-10'
    datePrecision: day
    status: legacy
    summary: 在代码语料上微调的 GPT 系模型，支撑 GitHub Copilot 等编程辅助产品。
    summaryEn: GPT-family model fine-tuned on code corpora, powering products such as GitHub Copilot.
    source: https://openai.com/index/openai-codex/
  - name: DALL·E 2
    date: '2022-04-06'
    datePrecision: day
    status: legacy
    summary: 显著提升图像质量与语义对齐，文生图进入可用的消费与创作者工具阶段。
    summaryEn: Major gains in image quality and semantic alignment, bringing text-to-image into usable consumer and creator tools.
    source: https://openai.com/index/dall-e-2/
  - name: Whisper
    date: '2022-09-21'
    datePrecision: day
    status: legacy
    summary: 大规模弱监督语音识别模型开源，成为多语言转写与字幕的事实基础设施之一。
    summaryEn: Open large-scale weakly supervised speech recognition that became de-facto infrastructure for multilingual transcription.
    source: https://openai.com/index/whisper/
  - name: GPT-3.5 / ChatGPT
    date: '2022-11-30'
    datePrecision: day
    status: legacy
    summary: 指令微调与对话对齐支撑 ChatGPT，把大模型从开发者工具变成大众产品入口。
    summaryEn: Instruction tuning and conversational alignment powered ChatGPT, moving large models from developer tools to a mass-market interface.
    source: https://openai.com/index/chatgpt/
  - name: GPT-4
    date: '2023-03-14'
    datePrecision: day
    status: legacy
    summary: 显著提升推理、代码与专业任务表现，并把图像理解纳入旗舰模型能力。
    summaryEn: Raised the bar for reasoning, coding, and professional tasks while bringing image understanding into the flagship model.
    source: https://openai.com/index/gpt-4-research/
  - name: DALL·E 3
    date: '2023-09-20'
    datePrecision: day
    status: legacy
    summary: 与 ChatGPT 深度集成，强调提示遵循与更安全的图像生成体验。
    summaryEn: Deep ChatGPT integration with stronger prompt following and a safer image-generation experience.
    source: https://openai.com/index/dall-e-3/
  - name: GPT-4 Turbo
    date: '2023-11-06'
    datePrecision: day
    status: legacy
    summary: 更长上下文、更低价格与更新知识截断，面向生产 API 与 Assistants 工作流。
    summaryEn: Longer context, lower price, and a fresher knowledge cutoff for production APIs and Assistants workflows.
    source: https://openai.com/index/new-models-and-developer-products-announced-at-devday/
  - name: Sora
    date: '2024-02-15'
    datePrecision: day
    status: legacy
    summary: 文本到视频生成研究与产品化路线公开，把「世界模拟」叙事带入生成模型竞争。
    summaryEn: Text-to-video research and product path announced, bringing world-simulation narratives into generative competition.
    source: https://openai.com/index/sora/
  - name: GPT-4o
    date: '2024-05-13'
    datePrecision: day
    status: legacy
    summary: 原生统一文本、视觉与语音输入输出，降低实时多模态交互的延迟与成本。
    summaryEn: Natively unified text, vision, and audio input and output, reducing latency and cost of real-time multimodal interaction.
    source: https://openai.com/index/hello-gpt-4o/
  - name: OpenAI o1-preview / o1-mini
    date: '2024-09-12'
    datePrecision: day
    status: legacy
    summary: 用更长测试时计算换取更强复杂推理，「推理模型」成为独立产品路线。
    summaryEn: Traded more test-time compute for stronger complex reasoning, establishing reasoning models as a distinct product line.
    source: https://openai.com/index/introducing-openai-o1-preview/
  - name: OpenAI o1
    date: '2024-12-05'
    datePrecision: day
    status: legacy
    summary: o1 正式版扩大可用性，强化 STEM、代码与多步规划场景。
    summaryEn: Full o1 release broadened availability with stronger STEM, coding, and multi-step planning.
    source: https://openai.com/index/o1-and-new-tools-for-developers/
  - name: OpenAI o3-mini
    date: '2025-01-31'
    datePrecision: day
    status: legacy
    summary: 更小更快的推理档，并向免费用户开放；可调低/中/高思考强度。
    summaryEn: Smaller, faster reasoning tier opened even to free users, with low/medium/high effort settings.
    source: https://openai.com/index/openai-o3-mini/
  - name: GPT-4.5
    date: '2025-02-27'
    datePrecision: day
    status: legacy
    summary: 强化世界知识、自然对话与模式识别，是大规模无监督路线的过渡性旗舰更新。
    summaryEn: Improved world knowledge, natural conversation, and pattern recognition as a transitional unsupervised-scale flagship.
    source: https://openai.com/index/introducing-gpt-4-5/
  - name: OpenAI o3 / o4-mini
    date: '2025-04-16'
    datePrecision: day
    status: legacy
    summary: 首批能在 ChatGPT 中代理式调用全套工具的推理模型；o4-mini 接续小推理档。
    summaryEn: First reasoning models able to agentically use ChatGPT’s full tool set; o4-mini continued the small reasoning tier.
    source: https://openai.com/index/introducing-o3-and-o4-mini/
  - name: OpenAI o3-pro
    date: '2025-06-10'
    datePrecision: day
    status: legacy
    summary: 更高计算预算的 o3 专业档，面向最难推理与专业工作负载。
    summaryEn: Higher-compute o3 professional tier for the hardest reasoning and professional workloads.
    source: https://openai.com/index/introducing-o3-and-o4-mini/
  - name: GPT-5
    date: '2025-08-07'
    datePrecision: day
    status: legacy
    summary: 把快速回答与深度推理统一到同一家族，并面向工具使用、代码和专业工作流优化。
    summaryEn: Unified fast answers and deeper reasoning in one family, optimized for tools, coding, and professional workflows.
    source: https://openai.com/index/introducing-gpt-5/
  - name: GPT-5.1
    date: '2025-11-01'
    datePrecision: month
    status: legacy
    summary: 提升可控性、代码与 Agent 工作流，并加入无需额外思考的快速推理档位。
    summaryEn: Improved steerability, coding, and agentic workflows, with a no-reasoning setting for faster responses.
    source: https://developers.openai.com/api/docs/changelog
  - name: GPT-5.2
    date: '2025-12-01'
    datePrecision: month
    status: legacy
    summary: 面向复杂专业工作提高可靠性，并延伸出针对长期软件工程任务优化的 Codex 版本。
    summaryEn: Higher reliability for complex professional work and Codex variants for long-running software engineering.
    source: https://developers.openai.com/api/docs/models/gpt-5.2
  - name: GPT-5.3
    date: '2026-03-01'
    datePrecision: month
    status: deprecated
    summary: 重点推进 ChatGPT 即时体验与实时编码分支，随后被更新的旗舰家族取代。
    summaryEn: Focused on the instant ChatGPT experience and real-time coding variants before newer flagships superseded it.
    source: https://developers.openai.com/api/docs/models/gpt-5.3-chat-latest
  - name: GPT-5.4
    date: '2026-03-01'
    datePrecision: month
    status: legacy
    summary: 引入 100 万 token 上下文、原生压缩、工具搜索和内置计算机使用，强化长期 Agent 工作流。
    summaryEn: Added a 1M-token context window, native compaction, tool search, and built-in computer use for long-running agents.
    source: https://developers.openai.com/api/docs/changelog
  - name: GPT-5.5
    date: '2026-04-01'
    datePrecision: month
    status: legacy
    summary: 把托管 Shell、补丁应用、Skills、MCP 与网页搜索进一步纳入旗舰模型的生产工作流。
    summaryEn: Pulled hosted shell, patch application, Skills, MCP, and web search further into the flagship production workflow.
    source: https://developers.openai.com/api/docs/changelog
  - name: GPT-5.6
    date: '2026-07-01'
    datePrecision: month
    status: current
    summary: 以 Sol、Terra、Luna 三档覆盖能力、成本与吞吐，并加入程序化工具调用、多 Agent、显式缓存和持久推理。
    summaryEn: Sol, Terra, and Luna tiers for capability, cost, and throughput, plus programmatic tool calling, multi-agent orchestration, explicit caching, and persisted reasoning.
    source: https://developers.openai.com/api/docs/guides/latest-model
slug: openai-gpt
---
