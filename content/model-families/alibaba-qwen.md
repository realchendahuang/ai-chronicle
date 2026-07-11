---
id: alibaba-qwen
title: Qwen（通义千问）模型谱系
titleEn: Qwen model lineage
company: alibaba
description: 通义千问从中文对话与开放权重起步，扩展为覆盖文本、视觉、音频、代码、推理与 Agent 的完整家族，并在云 API 与开源社区并行演进。
descriptionEn: Qwen grew from Chinese chat and open weights into a full family spanning text, vision, audio, code, reasoning, and agents, evolving in parallel on cloud APIs and the open community.
latestModel: Qwen3.7 Max / Plus
latestModelEn: Qwen3.7 Max / Plus
updatedAt: '2026-07-11'
releases:
  - name: 通义千问（Tongyi Qianwen）公测
    date: '2023-04-11'
    datePrecision: day
    status: legacy
    summary: 阿里云首次以「通义千问」品牌公开生成式对话能力，标志着集团大模型产品化启动。
    summaryEn: Alibaba Cloud first publicized generative chat under the Tongyi Qianwen brand, marking the start of its foundation-model productization.
    source: https://www.reuters.com/technology/alibaba-unveils-tongyi-qianwen-an-ai-model-similar-gpt-2023-04-11/
  - name: Qwen-VL
    date: '2023-08-25'
    datePrecision: day
    status: legacy
    summary: 视觉—语言多模态分支，开放 Base/Chat 权重，云上保留 Max/Plus 专有档。
    summaryEn: Vision-language branch with open Base/Chat weights and proprietary Max/Plus tiers on the cloud.
    source: https://qwen.ai/blog?id=qwen-vl
  - name: Qwen-7B / Qwen-7B-Chat
    date: '2023-08-03'
    datePrecision: day
    status: legacy
    summary: 首批代码与权重公开，预训练超过 2.2 万亿 token，成为中文开放生态早期主线模型之一。
    summaryEn: First public code and weights with pretraining over 2.2T tokens; an early mainline model in the Chinese open ecosystem.
    source: https://github.com/QwenLM/Qwen
  - name: Qwen（1.8B / 14B / 72B）开放
    date: '2023-12-01'
    datePrecision: day
    status: legacy
    summary: 扩展参数档位与下载可用性，形成从端侧到旗舰的第一代密集模型矩阵。
    summaryEn: Expanded size tiers and download availability into a dense-model matrix from edge to flagship.
    source: https://global.chinadaily.com.cn/a/202312/01/WS6569d3eca31090682a5f1046.html
  - name: Qwen1.5
    date: '2024-02-05'
    datePrecision: day
    status: legacy
    summary: 统一架构与对齐流程的代际刷新，覆盖多尺寸 Base/Chat，并随后引入 MoE 分支。
    summaryEn: A generational refresh of architecture and alignment across Base/Chat sizes, later expanded with an MoE branch.
    source: https://qwenlm.github.io/
  - name: Qwen1.5-MoE-A2.7B
    date: '2024-03-28'
    datePrecision: day
    status: legacy
    summary: 家族首个混合专家开放模型，以较低激活参数换取更高吞吐与性价比。
    summaryEn: First mixture-of-experts open model in the family, trading lower active parameters for throughput and cost efficiency.
    source: https://qwenlm.github.io/blog/qwen-moe/
  - name: Qwen2
    date: '2024-06-06'
    datePrecision: day
    status: legacy
    summary: 密集与 MoE 并行；多语言与代码、数学显著增强，部分小模型改为 Apache 2.0。
    summaryEn: Dense and MoE in parallel with stronger multilingual, coding, and math ability; some smaller models under Apache 2.0.
    source: https://qwen.ai/blog?id=qwen2
  - name: Qwen2-Audio
    date: '2024-08-01'
    datePrecision: month
    status: legacy
    summary: 语音理解与交互分支，支持直接以音频为输入的对话与理解任务。
    summaryEn: Audio understanding and interaction branch supporting speech-native dialogue and comprehension.
    source: https://qwenlm.github.io/
  - name: Qwen2-VL
    date: '2024-08-28'
    datePrecision: day
    status: legacy
    summary: 任意分辨率视觉理解与长视频分析，2B/7B 开放、72B 后续跟进。
    summaryEn: Any-resolution vision understanding and long-video analysis, with 2B/7B open and 72B following later.
    source: https://qwen.ai/blog?id=qwen2-vl
  - name: Qwen2.5
    date: '2024-09-19'
    datePrecision: day
    status: legacy
    summary: 预训练数据扩至约 18T token，开放 0.5B–72B 多档，并配套 Turbo/Plus 云上 MoE。
    summaryEn: Pretraining scaled to about 18T tokens with open 0.5B–72B tiers plus cloud MoE Turbo/Plus offerings.
    source: https://qwen.ai/blog?id=qwen2.5
  - name: Qwen2.5-Coder
    date: '2024-11-11'
    datePrecision: day
    status: legacy
    summary: 代码专用系列（0.5B–32B），覆盖生成、补全与仓库级任务，成为开源代码模型主力之一。
    summaryEn: Code-specialized series (0.5B–32B) for generation, completion, and repo-level tasks; a mainline open coding model.
    source: https://qwen.ai/blog?id=qwen2.5-coder-family
  - name: QwQ-32B-Preview
    date: '2024-11-27'
    datePrecision: day
    status: legacy
    summary: 开放权重推理模型预览，对标 o1 路线，强调可验证数学与复杂推理。
    summaryEn: Open-weight reasoning preview in the o1 lineage, focused on verifiable math and complex reasoning.
    source: https://qwen.ai/blog?id=qwq-32b-preview
  - name: QvQ-72B-Preview
    date: '2024-12-24'
    datePrecision: day
    status: legacy
    summary: 视觉推理预览模型，把「看图思考」做成独立产品线。
    summaryEn: Visual reasoning preview that made see-and-think a distinct product line.
    source: https://qwen.ai/blog?id=qvq-72b-preview
  - name: Qwen2.5-VL
    date: '2025-01-26'
    datePrecision: day
    status: legacy
    summary: 视觉语言旗舰刷新，强化文档、UI 与设备操作相关理解。
    summaryEn: Vision-language flagship refresh with stronger document, UI, and device-control understanding.
    source: https://qwenlm.github.io/blog/qwen2.5-vl/
  - name: Qwen2.5-Max
    date: '2025-01-28'
    datePrecision: day
    status: legacy
    summary: 大规模 MoE 云上旗舰，预训练超 20T token，对标闭源前沿综合能力。
    summaryEn: Large-scale cloud MoE flagship pretrained on over 20T tokens, targeting frontier closed-model capability.
    source: https://qwenlm.github.io/blog/qwen2.5-max/
  - name: QwQ-32B
    date: '2025-03-05'
    datePrecision: day
    status: legacy
    summary: 正式版开放推理模型，以较小体量逼近 R1 级表现。
    summaryEn: Full open reasoning model approaching R1-class results at a smaller size.
    source: https://qwenlm.github.io/
  - name: Qwen2.5-Omni
    date: '2025-03-26'
    datePrecision: day
    status: legacy
    summary: 文本、图像、视频、音频统一输入，并支持文本与语音输出，面向实时多模态 Agent。
    summaryEn: Unified text, image, video, and audio input with text and speech output for real-time multimodal agents.
    source: https://qwenlm.github.io/
  - name: Qwen3
    date: '2025-04-28'
    datePrecision: day
    status: legacy
    summary: 混合思考/非思考模式；密集 0.6B–32B 与 MoE 30B-A3B、235B-A22B 全线 Apache 2.0，训练覆盖 119 种语言约 36T token。
    summaryEn: Hybrid thinking/non-thinking modes; dense 0.6B–32B and MoE 30B-A3B / 235B-A22B under Apache 2.0, trained on ~36T tokens across 119 languages.
    source: https://qwen.ai/blog?id=qwen3
  - name: Qwen3-Coder
    date: '2025-07-01'
    datePrecision: month
    status: legacy
    summary: 代码旗舰 480B-A35B 与 Flash 30B-A3B，主打仓库级与 Agent 编程。
    summaryEn: Coding flagship 480B-A35B and Flash 30B-A3B for repo-scale and agentic programming.
    source: https://qwen.ai/
  - name: Qwen3-Max / Qwen3-Next / Qwen3-VL / Qwen3-Omni
    date: '2025-09-01'
    datePrecision: month
    status: legacy
    summary: 万亿级 Max 云旗舰、高效 Next 开放档，以及视觉与全模态分支的同期矩阵升级。
    summaryEn: Trillion-scale Max cloud flagship, efficient Next open tier, and concurrent vision/omni branch upgrades.
    source: https://qwen.ai/blog?id=qwen3-max
  - name: Qwen3-Coder-Next
    date: '2026-02-02'
    datePrecision: day
    status: legacy
    summary: 小体量混合架构上的 Agent 编码强化，压低高能力编程部署成本。
    summaryEn: Stronger agentic coding on a compact hybrid architecture, lowering deployment cost for capable coding agents.
    source: https://qwen.ai/blog?id=qwen3-coder-next
  - name: Qwen3.5 / Qwen3.5-Plus
    date: '2026-02-16'
    datePrecision: day
    status: legacy
    summary: 原生多模态 Agent 方向；开放权重 Qwen3.5-397B-A17B（约 17B 激活）与专有 Plus 云档并行。
    summaryEn: Native multimodal agents; open-weight Qwen3.5-397B-A17B (~17B active) alongside proprietary Plus cloud tiers.
    source: https://qwen.ai/blog?id=qwen3.5
  - name: Qwen3.6-Plus / Qwen3.6-35B-A3B
    date: '2026-04-01'
    datePrecision: month
    status: legacy
    summary: 面向真实世界 Agent 的 Plus 云更新，并放出高效开放 MoE 档。
    summaryEn: Plus cloud update for real-world agents plus an efficient open MoE tier.
    source: https://qwen.ai/blog?id=qwen3.6
  - name: Qwen3.7 Max / Plus
    date: '2026-05-18'
    datePrecision: day
    status: current
    summary: 当前云上旗舰与增强档，延续 Max/Plus 分层，强调编码、Agent 与多模态生产力。
    summaryEn: Current cloud flagship and Plus tiers, continuing Max/Plus stratification for coding, agents, and multimodal productivity.
    source: https://qwen.ai/
slug: alibaba-qwen
---
