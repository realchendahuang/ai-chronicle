---
id: kimi-k3
title: Kimi K3 发布并开源
titleEn: Kimi K3 launches and goes open-weight
subtitle: 全球参数规模最大的开源模型，WebDev Arena 首个登顶的开源模型
subtitleEn: The largest open-weight model by parameter count, and the first open model to top WebDev Arena
date: '2026-07-16'
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
companies:
  - moonshot
models:
  - kimi-k3
concepts:
  - llm
  - moe
  - context-window
  - open-weight
  - multimodal
summary: 月之暗面发布 Kimi K3，总参数 2.8 万亿、每 token 激活约 1040 亿的 MoE 架构模型，原生支持视觉与百万级上下文；7 月 27 日权重开放，成为当时全球参数最大的开源模型，并在 WebDev Arena 上首次由开源模型登顶。
summaryEn: Moonshot AI launched Kimi K3 on July 16, 2026—a Mixture-of-Experts model with 2.8 trillion total parameters and about 104 billion active per token, natively multimodal with a 1M-token context—and opened its weights on July 27, making it the largest open-weight model in the world and the first open model to top WebDev Arena.
background: 2025 年以来，DeepSeek、Qwen 等中国实验室的开源权重不断逼近闭源前沿，但"开源模型规模世界第一"与"开源模型登顶代码竞技场"仍属于闭源厂商。月之暗面此前以 Kimi K2 在代码与 Agent 任务上建立口碑，随后转向更大规模的稀疏架构。
backgroundEn: Since 2025, open weights from Chinese labs such as DeepSeek and Qwen had kept closing the gap with closed frontier models, yet the largest open model in the world and the top of the coding arena still belonged to closed vendors. Moonshot AI had built a reputation with Kimi K2 on coding and agent tasks, then moved to a much larger sparse architecture.
whatHappened: Kimi K3 采用 MoE 架构，896 个路由专家加 2 个共享专家，每 token 激活约 16 个专家；自研 Kimi Delta Attention（KDA）线性注意力在百万上下文下保持低计算开销，Moon Clip 二阶优化器把训练数据需求从 40T 降到 20T。发布约两周后权重开放，使用修改版 MIT 许可证（连续 12 个月 MaaS 收入超过 2000 万美元需另行签约），并同步公开技术报告与 MoonEP、FlashKDA 等基础设施。发布当天阿里云、昇腾、Nebius、Baseten、Fireworks 与 vLLM、SGLang 等完成适配。
whatHappenedEn: Kimi K3 uses a MoE design with 896 routed experts plus 2 shared experts, activating about 16 per token. Its in-house Kimi Delta Attention (KDA) keeps compute low at a 1M-token context, and the Moon Clip second-order optimizer halves training data demand from 40T to 20T tokens. About two weeks after launch, the weights opened under a modified MIT license (an additional agreement applies once MaaS revenue exceeds $20M over 12 consecutive months), along with a technical report and infrastructure work such as MoonEP and FlashKDA. On day one, Alibaba Cloud, Huawei Ascend, Nebius, Baseten, Fireworks, vLLM, and SGLang shipped support.
whyImportant: 它把"开源模型在规模与榜单上超越闭源前沿"第一次变成可核验的公开记录，也让开源基座加云厂商分发的路径在中国市场完成了一次大规模演练；对开发者和中小团队，最强模型的可自托管选择从此不再只由闭源厂商决定。
whyImportantEn: It turned "an open model exceeding closed frontier models in scale and on leaderboards" into a verifiable public record, and demonstrated the open-base-plus-cloud-distribution path at scale in China. For developers and small teams, the most capable self-hostable option is no longer decided solely by closed vendors.
impact:
  developer: 获得一个可商用、可自托管、原生视觉与长上下文的 2.8T 稀疏模型，Day0 已有多家云与推理框架适配。
  industry: 开源与闭源的边界叙事被改写：规模最大与竞技场登顶首次同时属于开源权重。
  product: 代码、深度研究、多模态理解类产品可以在保持数据控制的前提下使用前沿能力。
impactEn:
  developer: A commercially usable, self-hostable 2.8T sparse model with native vision and long context, with cloud and inference-framework support on day one.
  industry: "The open-versus-closed narrative changed: largest scale and arena top spot now belong to open weights simultaneously."
  product: Coding, deep-research, and multimodal products can use frontier capabilities while keeping data control.
beforeAfter:
  before: 参数规模最大与竞技场登顶的公开记录都由闭源模型持有。
  after: 开源模型同时刷新了两项记录，且配套工具链在发布当天完成适配。
beforeAfterEn:
  before: The public records for largest scale and top arena rank were held by closed models.
  after: An open model holds both records, with toolchain support shipping on day one.
relatedEvents:
  - kimi-k2
  - deepseek-v4
  - gpt-5-6
visual:
  src: /assets/events/kimi-k3.png
  width: 1280
  height: 720
  alt: 编辑插图：巨大月亮下展开的三层稀疏发光专家节点网格
  altEn: Editorial illustration of layered sparse grids of glowing expert nodes under a large pale moon
  caption: AI Chronicle 原创插图：月光与稀疏专家网格，对应 Kimi K3 的 MoE 结构与开源夜航。
  captionEn: AI Chronicle original illustration of moonlight over sparse expert grids, for Kimi K3's MoE structure and open-weight night sail.
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial 16:9 museum poster, large pale moon above sparse layered grids of glowing expert nodes on thin lines, deep indigo night, no logos, no text, quiet"
sources:
  - title: 新华网：Kimi K3 发布报道
    url: "http://www.xinhuanet.com/tech/20260717/da893d3a5e1b429ea79d928e02847744/c.html"
    publisher: 新华网
    type: report
  - title: 证券时报：Kimi K3 开源细节
    url: "https://stcn.com/article/detail/4044661.html"
    publisher: 证券时报
    type: report
status: verified
slug: kimi-k3
---
