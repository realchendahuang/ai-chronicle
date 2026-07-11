---
id: deepseek-models
title: DeepSeek 模型谱系
titleEn: DeepSeek model lineage
company: deepseek
description: 从代码模型与稠密 LLM 起步，经 MoE、MLA、稀疏注意力到开放推理与超长上下文，DeepSeek 把训练/推理效率写成持续主线。
descriptionEn: From code models and dense LLMs through MoE, MLA, sparse attention, open reasoning, and ultra-long context, DeepSeek made training and inference efficiency a continuous mainline.
latestModel: DeepSeek-V4 Pro / Flash
latestModelEn: DeepSeek-V4 Pro / Flash
updatedAt: '2026-07-11'
releases:
  - name: DeepSeek Coder
    date: '2023-11-02'
    datePrecision: day
    status: legacy
    summary: 首个公开模型系列（约 1.3B–33B Base/Instruct），以代码预训练为主，奠定「先做开发者工具」的路径。
    summaryEn: First public series (~1.3B–33B Base/Instruct), code-heavy pretraining that set a developer-tool-first path.
    source: https://github.com/deepseek-ai/DeepSeek-Coder
  - name: DeepSeek-LLM
    date: '2023-11-29'
    datePrecision: day
    status: legacy
    summary: 7B/67B 中英通用模型（Base/Chat），架构接近 Llama 路线，补齐通用对话与知识能力。
    summaryEn: 7B/67B Chinese-English general models (Base/Chat) on a Llama-like path for chat and knowledge.
    source: https://github.com/deepseek-ai/DeepSeek-LLM
  - name: DeepSeek-MoE
    date: '2024-01-09'
    datePrecision: day
    status: legacy
    summary: 引入共享专家 + 路由专家的 MoE 变体，以约 2.7B 激活逼近更大稠密模型表现。
    summaryEn: MoE variant with shared plus routed experts, approaching denser models with ~2.7B active parameters.
    source: https://github.com/deepseek-ai/DeepSeek-MoE
  - name: DeepSeek-Math
    date: '2024-04-01'
    datePrecision: month
    status: legacy
    summary: 在 Coder 基座上强化数学；配套 GRPO 等强化学习算法，为后续推理训练埋线。
    summaryEn: Math specialization on a Coder base, with GRPO-style RL that foreshadowed later reasoning training.
    source: https://github.com/deepseek-ai/DeepSeek-Math
  - name: DeepSeek-V2
    date: '2024-05-01'
    datePrecision: month
    status: legacy
    summary: MLA（多头潜在注意力）+ MoE，大幅降低 KV 缓存与训练/推理成本，并扩展长上下文。
    summaryEn: MLA plus MoE sharply cut KV-cache and train/serve cost while extending long context.
    source: https://github.com/deepseek-ai/DeepSeek-V2
  - name: DeepSeek-Coder-V2
    date: '2024-06-01'
    datePrecision: month
    status: legacy
    summary: 基于 V2 MoE 骨干的代码系列，覆盖更多编程语言与更长上下文，面向仓库级开发。
    summaryEn: Code series on the V2 MoE backbone with more languages and longer context for repo-scale development.
    source: https://github.com/deepseek-ai/DeepSeek-Coder-V2
  - name: DeepSeek-V2.5
    date: '2024-09-05'
    datePrecision: day
    status: legacy
    summary: 合并通用对话与代码能力，单一 chat 端点覆盖开发者日常工作流。
    summaryEn: Merged general chat and coding into one endpoint for everyday developer workflows.
    source: https://api-docs.deepseek.com/news/news0905
  - name: DeepSeek-VL2
    date: '2024-12-13'
    datePrecision: day
    status: legacy
    summary: 视觉—语言系列，把多模态理解并入 DeepSeek 效率架构路线。
    summaryEn: Vision-language series folding multimodal understanding into DeepSeek’s efficiency architecture.
    source: https://github.com/deepseek-ai/DeepSeek-VL2
  - name: DeepSeek-V3
    date: '2024-12-26'
    datePrecision: day
    status: legacy
    summary: 671B MoE（约 37B 激活），低精度训练与高数据效率展示开放前沿模型的成本优势。
    summaryEn: 671B MoE (~37B active) with low-precision training and data efficiency that showcased frontier open cost advantage.
    source: https://api-docs.deepseek.com/news/news1226
  - name: DeepSeek-R1
    date: '2025-01-20'
    datePrecision: day
    status: legacy
    summary: 以强化学习驱动长链条推理并开放权重（含蒸馏小模型），重新定价推理模型能力与获取门槛。
    summaryEn: RL-driven long-form reasoning with open weights (plus distilled small models), repricing reasoning capability and access.
    source: https://api-docs.deepseek.com/news/news250120
  - name: DeepSeek-V3-0324
    date: '2025-03-24'
    datePrecision: day
    status: legacy
    summary: V3 后训练升级（MIT），强化推理、代码与工具使用，并吸收 R1 阶段经验。
    summaryEn: V3 post-training upgrade (MIT) strengthening reasoning, coding, and tools with lessons from the R1 phase.
    source: https://huggingface.co/deepseek-ai/DeepSeek-V3-0324
  - name: DeepSeek-Prover-V2
    date: '2025-05-01'
    datePrecision: day
    status: legacy
    summary: 形式化证明专用系列，把可验证数学推向独立模型线。
    summaryEn: Formal-prover series that made verifiable mathematics a dedicated model line.
    source: https://github.com/deepseek-ai/DeepSeek-Prover-V2
  - name: DeepSeek-R1-0528
    date: '2025-05-28'
    datePrecision: day
    status: legacy
    summary: R1 增量更新，在多项基准上超过初代 R1 与 V3-0324。
    summaryEn: Incremental R1 update that surpassed original R1 and V3-0324 on several benchmarks.
    source: https://api-docs.deepseek.com/
  - name: DeepSeek-V3.1
    date: '2025-08-21'
    datePrecision: day
    status: legacy
    summary: 同一模型整合思考/非思考模式，并显著强化工具使用与 Agent 编程相关基准。
    summaryEn: Unified thinking and non-thinking modes in one model with stronger tool use and agentic coding benchmarks.
    source: https://api-docs.deepseek.com/news/news250821
  - name: DeepSeek-V3.1-Terminus
    date: '2025-09-22'
    datePrecision: day
    status: legacy
    summary: 修复中英混杂与异常字符等问题，提升生产可用性。
    summaryEn: Fixed mixed-language artifacts and odd characters to improve production usability.
    source: https://api-docs.deepseek.com/
  - name: DeepSeek-V3.2-Exp
    date: '2025-09-29'
    datePrecision: day
    status: legacy
    summary: 引入 DeepSeek Sparse Attention，为更长上下文与更低注意力成本做实验性落地。
    summaryEn: Introduced DeepSeek Sparse Attention as an experimental path to longer context at lower attention cost.
    source: https://api-docs.deepseek.com/
  - name: DeepSeek-Math-V2
    date: '2025-11-27'
    datePrecision: day
    status: legacy
    summary: 基于 V3.2-Exp 骨干的数学增强，延续自验证与可验证奖励训练思路。
    summaryEn: Math enhancement on the V3.2-Exp backbone, continuing self-verification and verifiable-reward training.
    source: https://arxiv.org/abs/2511.22570
  - name: DeepSeek-V3.2
    date: '2025-12-01'
    datePrecision: day
    status: legacy
    summary: 稀疏注意力与推理效率正式版，并附 Speciale 等强化推理变体。
    summaryEn: Production sparse-attention and reasoning-efficiency release with Speciale-style reasoning variants.
    source: https://api-docs.deepseek.com/news/news251201
  - name: DeepSeek-V4 Pro / Flash
    date: '2026-04-24'
    datePrecision: day
    status: preview
    summary: 开放 1M 上下文预览：Pro（约 1.6T 总参）主打高难度推理与 Agent 编程，Flash（约 284B）以更小激活提供接近能力与更高效率。
    summaryEn: 'Open 1M-context preview: Pro (~1.6T total) for hard reasoning and agentic coding; Flash (~284B) approaches that capability with higher efficiency.'
    source: https://api-docs.deepseek.com/news/news260424
slug: deepseek-models
---
