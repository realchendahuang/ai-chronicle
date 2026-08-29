---
id: openai-jalapeno-chip
title: OpenAI 自研推理芯片 Jalapeño 公布测试成绩
titleEn: OpenAI's Jalapeño inference chip posts benchmark results
subtitle: Hot Chips 披露每瓦性能超英伟达 GB200/GB300，年底前开始部署
subtitleEn: Hot Chips reveals per-watt performance above Nvidia GB200/GB300, with deployment starting before year-end
date: '2026-08-25'
datePrecision: day
importance: B
eventType:
  - product
  - research
topics:
  - ai-hardware
  - computing-power
  - model-efficiency
companies:
  - openai
  - nvidia
concepts:
  - gpu
  - computing-power
  - ai-hardware
summary: OpenAI 在 Hot Chips 大会公布自研推理芯片 Jalapeño 的测试成绩：峰值吞吐下每瓦性能为参照系统（英伟达 GB200/GB300）的 1.5～1.9 倍，交互式工作负载优势达 2.1～4.1 倍；芯片由 OpenAI 与博通联合开发，2026 年底前开始在自有基础设施部署，与英伟达并行采购而非替代。
summaryEn: "OpenAI posted benchmark results for its Jalapeño inference chip at Hot Chips: 1.5–1.9x the per-watt performance of the reference Nvidia GB200/GB300 systems at peak throughput, and 2.1–4.1x on highly interactive workloads. Co-developed with Broadcom, the chip starts deploying in OpenAI's own infrastructure before year-end, bought alongside Nvidia rather than replacing it."
background: 推理成本随模型规模与用户量持续上升，算力多元化成为前沿实验室的共识：OpenAI 与博通 6 月 24 日联合发布 Jalapeño，从设计到流片仅 9 个月；英伟达在训练与推理市场的主导地位，让自研芯片成为成本与议价能力的双重筹码。
backgroundEn: "Inference cost keeps rising with model scale and usage, making compute diversification a frontier-lab consensus: OpenAI and Broadcom unveiled Jalapeño on June 24 after just nine months from design to tape-out. Nvidia's dominance in training and inference makes self-designed chips a double lever on cost and bargaining power."
whatHappened: 8 月 25 日 Hot Chips 大会披露：Jalapeño 在峰值吞吐下每瓦性能为参照系统（GB200/GB300）的 1.5～1.9 倍，高度交互式工作负载优势达 2.1～4.1 倍；测试覆盖 GPT-OSS 120B、DeepSeek R1 670B、Kimi K2.5 1T 等多厂商模型。额定功耗 700W，实测持续功耗 550W 以下；配备 216GiB HBM4、内存带宽 15.4TB/s。架构放弃 prefill/decode 分离，采用统一芯片池与乱序核心。2026 年底前开始在自有基础设施部署，第二代已深度开发、第三代初具雏形；OpenAI 明确表示与 NVIDIA、AMD 并行采购。
whatHappenedEn: At Hot Chips on August 25, OpenAI disclosed that Jalapeño delivers 1.5–1.9x the per-watt performance of the reference GB200/GB300 systems at peak throughput and 2.1–4.1x on highly interactive workloads, tested across GPT-OSS 120B, DeepSeek R1 670B, and Kimi K2.5 1T. Rated at 700W with sustained test power at or below 550W, it packs 216GiB of HBM4 at 15.4TB/s. The architecture abandons prefill/decode separation for a unified chip pool with out-of-order cores. Deployment in OpenAI's own infrastructure starts before year-end, with Gen 2 deep in development and Gen 3 taking shape; OpenAI says it buys alongside Nvidia and AMD, not instead of them.
whyImportant: 它把「自研芯片」从战略叙事变成可核验的测试数据，证明推理专用 ASIC 可以在每瓦性能上超过通用加速器；同时「并行采购」的定位说明算力多元化是成本策略，而非对英伟达的替代宣言。
whyImportantEn: It turned "self-designed chip" from strategic narrative into verifiable benchmark data, showing inference ASICs can beat general accelerators on per-watt performance; the "buy alongside" positioning also frames compute diversification as a cost strategy, not a declaration of replacing Nvidia.
impact:
  developer: 推理成本可能随自研芯片部署进一步下降，API 定价空间打开。
  industry: 每瓦性能成为推理芯片竞争的新标尺，自研 ASIC 路线获得数据背书。
  product: 算力多元化从口号变成采购事实，英伟达的定价权面临长期压力。
impactEn:
  developer: Inference costs may fall further as self-designed chips deploy, opening API pricing room.
  industry: Per-watt performance became the new yardstick for inference chips, with the ASIC route gaining data-backed credibility.
  product: Compute diversification moved from slogan to procurement fact, putting long-term pressure on Nvidia's pricing power.
beforeAfter:
  before: OpenAI 的推理算力依赖英伟达等外部供应商，自研芯片只有工程样片。
  after: Jalapeño 公布每瓦性能数据，年底前部署，与英伟达并行采购。
beforeAfterEn:
  before: OpenAI's inference compute depended on external vendors like Nvidia, with only engineering samples of its own chip.
  after: Jalapeño posted per-watt data, deploys before year-end, bought alongside Nvidia.
relatedEvents:
  - gpt-5-6
  - deepseek-v4-flash-ga
  - openai-paces-frontier-training
visual:
  src: /assets/events/openai-jalapeno-chip.webp
  width: 1280
  height: 720
  alt: 编辑插图：一块发光的芯片悬浮在服务器机架上方，芯片表面有辣椒轮廓的散热纹路
  altEn: Editorial illustration of a glowing chip floating above server racks, with a chili-shaped heat pattern on its surface
  caption: AI Chronicle 原创插图：悬浮的芯片与辣椒纹路，对应 Jalapeño 的命名与推理定位。
  captionEn: AI Chronicle original illustration of a floating chip with chili patterning, for Jalapeño's name and inference stance.
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial 16:9 museum poster, a single glowing chip floating above rows of server racks, subtle chili-pepper heat pattern etched on the chip surface, deep charcoal and hot red palette, no logos, no readable text, clean, precise"
sources:
  - title: OpenAI's Jalapeño – update (Hot Chips)
    url: "https://www.jonpeddie.com/news/openais-jalapeno-u"
    publisher: Jon Peddie Research
    type: report
  - title: 36氪：OpenAI 自研推理芯片性能超越英伟达
    url: "https://eu.36kr.com/zh/p/3955555203447945"
    publisher: 36氪
    type: report
  - title: 澎湃新闻：OpenAI 推出首款芯片
    url: "https://www.thepaper.cn/newsdetail_forward_33852130"
    publisher: 澎湃新闻
    type: report
status: verified
slug: openai-jalapeno-chip
---
