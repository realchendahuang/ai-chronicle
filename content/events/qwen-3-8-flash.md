---
id: qwen-3-8-flash
title: 阿里发布并开源 Qwen3.8-Flash
titleEn: Alibaba releases and open-sources Qwen3.8-Flash
subtitle: 125B 总参、单 token 激活 6B 的「Next」架构，训练成本较前代骤降约 90%
subtitleEn: A 125B-parameter "Next"-architecture MoE with 6B active per token, at roughly a 90% lower training cost
date: '2026-08-26'
datePrecision: day
importance: A
eventType:
  - model
  - open-source
topics:
  - china-ai
  - open-source-models
  - model-efficiency
  - multimodal-ai
  - large-language-models
companies:
  - alibaba
models:
  - qwen-3-8-flash
concepts:
  - llm
  - moe
  - open-weight
  - multimodal
  - context-window
summary: 阿里发布并开源 Qwen3.8-Flash：总参 125B、单 token 激活 6B 的多模态 MoE，采用全新「Next」架构（QSA 稀疏注意力 + Gated DeltaNet 混合注意力），训练成本较 Qwen3.7-Plus 下降约 90%，推理定价每百万输入 1 元、输出 3 元；被视为 Qwen4 的雏形，首发上线「千问办公」。
summaryEn: Alibaba released and open-sourced Qwen3.8-Flash, a multimodal MoE with 125B total and 6B active parameters on a new "Next" architecture (QSA sparse attention fused with Gated DeltaNet). Training cost is about 90% below Qwen3.7-Plus, with inference priced at ¥1 per million input and ¥3 per million output tokens; it is seen as the Qwen4 prototype and launched on Qianwen Office.
background: Qwen3.8-Max 于 8 月 3 日发布并承诺开源，8 月 13 日 Max 权重与 Qwen3.8-27B 相继放出；开源旗舰的规模竞赛之后，成本与效率成为下一轮竞争焦点。DeepSeek-V4-Flash 以低价占据开发者心智，阿里需要一款「便宜到可以随便用」的模型守住入口。
backgroundEn: Qwen3.8-Max launched on August 3 with open weights promised, and Max weights plus Qwen3.8-27B followed on August 13; after the open-flagship scale race, cost and efficiency became the next battleground. DeepSeek-V4-Flash had captured developers with low prices, so Alibaba needed a model cheap enough to use freely to hold the door.
whatHappened: Qwen3.8-Flash 于 8 月 26 日晚发布并同步开源：总参 125B、单 token 激活 6B，原生支持 262,144 token 上下文（YaRN 可扩展至 1M）；采用全新「Next」架构——QSA（Qwen Sparse Attention）与 GDN（Gated DeltaNet）融合的混合注意力，高缓存命中下 1M 长上下文可提速 8 倍以上。训练成本较 Qwen3.7-Plus 下降约 90%，推理定价每百万输入 1 元、输出 3 元，最低可至 DeepSeek-V4-Flash 的三分之一。同步发布 Qwen3.8-Flash-Next 开源权重，首发上线「千问办公」，Qwen 全球下载量突破 30 亿次。
whatHappenedEn: "Qwen3.8-Flash launched and open-sourced on the evening of August 26: 125B total with 6B active per token, natively supporting 262,144-token context (extendable to 1M via YaRN), on the new \"Next\" architecture—QSA (Qwen Sparse Attention) fused with GDN (Gated DeltaNet) hybrid attention, with 1M long-context speedups above 8x under high cache hits. Training cost is about 90% below Qwen3.7-Plus, inference is priced at ¥1 per million input and ¥3 per million output tokens, as low as one-third of DeepSeek-V4-Flash. Qwen3.8-Flash-Next weights opened alongside, the model debuted on Qianwen Office, and global Qwen downloads passed 3 billion."
whyImportant: 它把「训练成本降 90%」从口号变成可核验的架构选择，用 6B 激活参数挑战「小模型不够强」的假设；同时以 Qwen4 雏形的身份预告下一代架构方向，成本曲线成为开源竞争的新标尺。
whyImportantEn: It turned "90% lower training cost" from a slogan into a verifiable architectural choice, challenging the assumption that 6B active parameters cannot be strong; as the Qwen4 prototype it also previewed the next architecture direction, making the cost curve a new yardstick in open competition.
impact:
  developer: 获得一个训练与推理成本都极低的 6B 激活多模态模型，可自托管、可微调、可商用。
  industry: 开源竞争从参数规模转向成本曲线，「训练成本降 90%」成为新的发布叙事。
  product: 千问办公成为新模型的第一个落地入口，模型与应用同场发布。
impactEn:
  developer: A multimodal model with 6B active parameters at rock-bottom training and inference cost, self-hostable, fine-tunable, and commercial.
  industry: Open competition shifted from parameter scale to cost curves, with "90% cheaper training" becoming the new launch narrative.
  product: Qianwen Office became the first landing spot, with model and app launched together.
beforeAfter:
  before: 开源竞争以参数规模为主，Qwen3.8-Max 的 2.4T 是旗舰档的答案。
  after: Qwen3.8-Flash 用 6B 激活与 90% 成本降幅定义效率档，Next 架构预告 Qwen4。
beforeAfterEn:
  before: Open competition ran on parameter scale, with Qwen3.8-Max's 2.4T as the flagship answer.
  after: Qwen3.8-Flash defined the efficiency tier with 6B active and a 90% cost cut, with Next previewing Qwen4.
relatedEvents:
  - qwen-3-8
  - deepseek-v4-flash-ga
  - kimi-k3
  - glm-5-3
visual:
  src: /assets/events/qwen-3-8-flash.webp
  width: 1280
  height: 720
  alt: 编辑插图：一道闪电劈开成本曲线，曲线从高处断崖式下降，节点稀疏而明亮
  altEn: Editorial illustration of a lightning bolt splitting a cost curve that drops off a cliff, with sparse bright nodes
  caption: AI Chronicle 原创插图：闪电与断崖式成本曲线，对应 Qwen3.8-Flash 的成本革命。
  captionEn: AI Chronicle original illustration of lightning and a cliff-drop cost curve, for Qwen3.8-Flash's cost revolution.
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial 16:9 museum poster, a stylized lightning bolt striking a descending cost curve that drops off a cliff, sparse glowing nodes along the line, deep blue and electric yellow palette, no logos, no readable text, clean, precise"
sources:
  - title: 澎湃新闻：阿里千问 Qwen3.8-Flash 发布并开源
    url: "https://www.thepaper.cn/newsDetail_forward_33954694"
    publisher: 澎湃新闻
    type: report
  - title: IT之家：Qwen3.8-Flash（Next）发布开源
    url: "https://m.ithome.com/html/994735.htm"
    publisher: IT之家
    type: report
  - title: Qwen3.8-Flash-Next 技术报告
    url: "https://github.com/QwenLM/Qwen3.8-Flash-Next"
    publisher: GitHub
    type: official
status: verified
slug: qwen-3-8-flash
---
