---
id: hunyuan-hy4-preview
title: 腾讯混元发布并开源 Hy4 preview
titleEn: Tencent Hunyuan releases and open-sources Hy4 preview
subtitle: 770B 总参、49B 激活，上下文突破 1M，Apache 2.0 开源
subtitleEn: 770B total and 49B active parameters, context past 1M, open under Apache 2.0
date: '2026-08-28'
datePrecision: day
importance: A
eventType:
  - model
  - open-source
topics:
  - china-ai
  - open-source-models
  - large-language-models
  - ai-agent
  - model-efficiency
companies:
  - tencent
models:
  - hy4-preview
concepts:
  - llm
  - moe
  - open-weight
  - context-window
summary: 腾讯混元发布并开源 Hy4 preview：770B 总参、49B 激活的 MoE，上下文突破 1M，Apache 2.0 协议；定位「为生产力而生」，聚焦软件工程、办公分析、游戏开发与科学研究，在 WorkBuddy/CodeBuddy、元宝、ima 等产品同步首发，并首次参与自身研发全链路形成「初步的递归自我改进闭环」。
summaryEn: "Tencent Hunyuan released and open-sourced Hy4 preview: a 770B-total, 49B-active MoE with context past 1M under Apache 2.0. Positioned \"for productivity\" across software engineering, office analytics, game development, and research, it debuted on WorkBuddy/CodeBuddy, Yuanbao, and ima, and for the first time participated in its own full R&D pipeline, forming a \"preliminary recursive self-improvement loop.\""
background: 混元 Hy3（295B/21B、256K 上下文）之后，国产开源旗舰在规模与智能体能力上密集迭代：Kimi K3、Qwen3.8-Max、GLM-5.3 相继刷新纪录。腾讯需要一次代际更新，把混元从「跟随者」推进到「生产力场景」的正面竞争，并回应开源社区对权重与许可的期待。
backgroundEn: "After Hunyuan Hy3 (295B/21B, 256K context), domestic open flagships iterated densely on scale and agent ability: Kimi K3, Qwen3.8-Max, and GLM-5.3 each reset records. Tencent needed a generational update to move Hunyuan from follower to front-line competition in productivity scenarios, and to answer the open community's expectations on weights and licensing."
whatHappened: Hy4 preview 于 8 月 28 日发布并开源：MoE 架构，总参 770B（Hugging Face 显示 780B，含内置 MTP 投机解码层）、激活 49B，上下文突破 1M，Apache 2.0 协议。内部盲测（163 名专家、203 个工程任务）均分 2.99/4.00，略优于 GLM-5.3（2.92）与 Kimi K3（2.94）；自述 DeepSWE 64.3（上代 Hy3 为 28.0）、Terminal Bench 2.1 达 85.4。首次参与自身研发全链路（训练方法、数据策略、评估体系、底层算子自动优化），自主优化推理系统使端到端吞吐较基线提升 31.8%。WorkBuddy/CodeBuddy 提供限时两周免费体验，API 定价输入 6 元、输出 18 元每百万 token。
whatHappenedEn: "Hy4 preview launched and open-sourced on August 28: a MoE with 770B total parameters (780B on Hugging Face including the built-in MTP speculative decoding layer), 49B active, context past 1M, under Apache 2.0. In an internal blind test (163 experts, 203 engineering tasks) it scored 2.99/4.00, slightly above GLM-5.3 (2.92) and Kimi K3 (2.94); self-reported DeepSWE is 64.3 (Hy3 was 28.0) and Terminal Bench 2.1 is 85.4. For the first time it participated in its own full R&D pipeline—training methods, data strategy, evaluation systems, and automatic operator optimization—with self-optimized inference raising end-to-end throughput 31.8% over baseline. WorkBuddy/CodeBuddy offered a two-week free trial, with API pricing at ¥6 input and ¥18 output per million tokens."
whyImportant: 它把腾讯混元推进到国产开源旗舰的第一梯队，用 1M 上下文与生产力定位回应规模竞赛；「模型参与自身研发」的递归自我改进叙事，为开源模型的能力来源提供了新的想象空间。
whyImportantEn: It moved Tencent Hunyuan into the first tier of domestic open flagships, answering the scale race with a 1M context and productivity positioning; the "model participates in its own R&D" recursive self-improvement narrative opened a new imagination for where open-model capability comes from.
impact:
  developer: 获得一个 Apache 2.0、1M 上下文、49B 激活的开源生产力模型，可自由商用。
  industry: 国产开源旗舰的竞争从模型层延伸到「模型参与研发」的自我改进叙事。
  product: WorkBuddy/CodeBuddy、元宝、ima 同步首发，腾讯产品矩阵成为落地入口。
impactEn:
  developer: An Apache 2.0 productivity model with 1M context and 49B active parameters, freely commercial.
  industry: Domestic open-flagship competition extended to the "model in its own R&D" self-improvement narrative.
  product: WorkBuddy/CodeBuddy, Yuanbao, and ima debuted together, making Tencent's product matrix the landing spot.
beforeAfter:
  before: 混元 Hy3 是 295B/21B、256K 上下文的开源模型，处于国产第二梯队。
  after: Hy4 preview 以 770B/49B、1M 上下文进入第一梯队，Apache 2.0 开源。
beforeAfterEn:
  before: Hunyuan Hy3 was a 295B/21B, 256K-context open model in the domestic second tier.
  after: Hy4 preview entered the first tier at 770B/49B with 1M context, open under Apache 2.0.
relatedEvents:
  - tencent-hunyuan-launch
  - glm-5-3
  - qwen-3-8
  - kimi-k3
visual:
  src: /assets/events/hunyuan-hy4-preview.webp
  width: 1280
  height: 720
  alt: 编辑插图：环形轨道上多个工作台剪影围绕一个发光核心，轨道延伸出代码与文档
  altEn: Editorial illustration of workbench silhouettes on a ring track around a glowing core, with code and documents extending from the track
  caption: AI Chronicle 原创插图：环形工作台与发光核心，对应 Hy4 的生产力定位与自我改进闭环。
  captionEn: AI Chronicle original illustration of a ring of workbenches around a glowing core, for Hy4's productivity stance and self-improvement loop.
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial 16:9 museum poster, a ring of minimal workbench silhouettes orbiting a glowing core, code lines and document shapes extending outward, deep green and warm amber palette, no logos, no readable text, clean, precise"
sources:
  - title: 腾讯发布并开源 Hy4 preview
    url: "https://www.tencent.com/zh-cn/tencent-releases-and-open-sources-tencent-hy4-preview/"
    publisher: 腾讯
    type: official
  - title: Hy4-preview 开源仓库
    url: "https://github.com/Tencent-Hunyuan/Hy4-preview"
    publisher: GitHub
    type: official
  - title: "TechNode: Tencent open-sources Hy4 preview"
    url: "https://technode.com/2026/08/28/tencent-open-sources-hy4-preview-with-770b-parameters-and-a-1m-token-context/"
    publisher: TechNode
    type: report
status: verified
slug: hunyuan-hy4-preview
---
