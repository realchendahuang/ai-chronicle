---
id: qwen-3-8
title: 阿里发布 Qwen3.8 与 Qwen3.8-Max
titleEn: Alibaba releases Qwen3.8 and Qwen3.8-Max
subtitle: 2.4T 参数稀疏 MoE 旗舰，原生多模态与 1M 上下文，开源权重随后放出
subtitleEn: A 2.4T-parameter sparse MoE flagship with native multimodal and 1M context, open weights to follow
date: '2026-08-03'
datePrecision: day
importance: A
eventType:
  - model
  - open-source
topics:
  - china-ai
  - open-source-models
  - large-language-models
  - multimodal-ai
  - model-efficiency
  - ai-agent
companies:
  - alibaba
models:
  - qwen3.8
  - qwen3.8-max
concepts:
  - llm
  - moe
  - context-window
  - open-weight
  - multimodal
summary: 阿里云发布 Qwen3.8 与 Qwen3.8-Max：总参数 2.4T、每 token 激活约 950B 的稀疏 MoE 架构，原生多模态视觉与 1M 上下文，CodeArena 全球第四；官方宣布下周开源 Max 权重与 Qwen3.8-27B，并同步推出 Agent 产品「千问办公」。
summaryEn: "Alibaba Cloud released Qwen3.8 and Qwen3.8-Max: a sparse MoE with 2.4T total parameters and about 950B active per token, native multimodal vision, and a 1M-token context, ranked fourth globally on CodeArena. The company said Max weights and Qwen3.8-27B would open the following week, and launched an agent product, Qianwen Office."
background: Kimi K3 在 7 月以 2.8T 总参数刷新开源规模纪录并登顶 WebDev Arena，开源与闭源的边界叙事被改写。阿里云 Qwen 家族长期以「开放权重 + 云上旗舰」双轨并行，需要一次代际更新回应规模竞赛与 Agent 工作负载。
backgroundEn: Kimi K3 had reset the open-weight scale record at 2.8T parameters and topped WebDev Arena in July, rewriting the open-versus-closed narrative. Alibaba's Qwen family had long run open weights and cloud flagships in parallel and needed a generational update for the scale race and agent workloads.
whatHappened: Qwen3.8-Max 采用 2.4T 总参数、约 950B 激活的稀疏 MoE，支持 1M 上下文与原生多模态视觉；官方称其在 CodeArena 排名全球第四，并宣布下周开源 Max 权重与 Qwen3.8-27B（截至报道权重尚未发布）。API 国内定价每百万 token 输入 12 元、输出 36 元。同日发布 Agent 产品「千问办公」，并展示 Qwen3.8 用 16 天自主完成真实开源项目 oh-my-cli（265 commits、127 PRs、151 issues）。
whatHappenedEn: Qwen3.8-Max is a sparse MoE with 2.4T total and ~950B active parameters, 1M context, and native multimodal vision. Alibaba reported a global fourth-place rank on CodeArena and said Max weights plus Qwen3.8-27B would open the following week (not yet released as of reporting). Domestic API pricing is ¥12 per million input tokens and ¥36 per million output. The same day it launched the agent product Qianwen Office and showed Qwen3.8 completing the real open-source project oh-my-cli autonomously in 16 days (265 commits, 127 PRs, 151 issues).
whyImportant: 它把中国开源旗舰的规模竞赛推进到 2.4T 档，并以「下周开源」的节奏把云上旗舰与开放权重绑定；同时用真实项目自主开发演示，把 Agent 能力从榜单数字变成可核验的工作记录。
whyImportantEn: It pushed the Chinese open-flagship scale race to the 2.4T tier and tied cloud flagship to open weights with a "next week" cadence, while demonstrating agent capability as a verifiable work record on a real project rather than a leaderboard number.
impact:
  developer: 获得一个可自托管、原生视觉、1M 上下文的 2.4T 稀疏模型选项，开源后可直接部署与微调。
  industry: 开源旗舰规模纪录在 Kimi K3 之后再次被改写，云厂商与开源社区的绑定节奏成为竞争新变量。
  product: 办公与 Agent 类产品获得「模型 + 应用」同场发布的组合打法。
impactEn:
  developer: A self-hostable 2.4T sparse model with native vision and 1M context, deployable and fine-tunable once weights open.
  industry: The open-flagship scale record changed hands again after Kimi K3, with cloud-plus-open cadence becoming a new competitive variable.
  product: Office and agent products gained a model-plus-application launch combo.
beforeAfter:
  before: 开源规模纪录由 Kimi K3 的 2.8T 持有，Qwen 云上旗舰停留在 3.7 代。
  after: Qwen3.8-Max 以 2.4T 总参、950B 激活进入竞赛，并承诺一周内开放权重。
beforeAfterEn:
  before: Kimi K3 held the open-scale record at 2.8T, and Qwen's cloud flagship sat at the 3.7 generation.
  after: Qwen3.8-Max entered the race at 2.4T total / 950B active with open weights promised within a week.
relatedEvents:
  - kimi-k3
  - qwen
  - deepseek-v4
  - gpt-5-6
visual:
  src: /assets/events/qwen-3-8.webp
  width: 1280
  height: 720
  alt: 编辑插图：蓝色穹顶下展开的稀疏发光节点网络与办公文档剪影
  altEn: Editorial illustration of sparse glowing node networks under a blue dome with office-document silhouettes
  caption: AI Chronicle 原创插图：稀疏网络与办公场景叠合，对应 Qwen3.8 的 MoE 架构与千问办公。
  captionEn: AI Chronicle original illustration of sparse networks over office scenes, for Qwen3.8's MoE architecture and Qianwen Office.
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial 16:9 museum poster, sparse network of glowing nodes under a deep blue dome, faint office document and desk silhouettes at the bottom, no logos, no readable text, clean, precise"
sources:
  - title: 阿里云发布 Qwen3.8 系列
    url: "https://www.iresearch.cn/news/202608/562334.shtml"
    publisher: 艾瑞网
    type: report
  - title: 科技日报：Qwen3.8 发布报道
    url: "https://www.stdaily.com/"
    publisher: 科技日报
    type: report
  - title: 澎湃新闻：Qwen3.8 与千问办公
    url: "https://www.thepaper.cn/newsDetail_forward_33708536"
    publisher: 澎湃新闻
    type: report
status: verified
slug: qwen-3-8
---
