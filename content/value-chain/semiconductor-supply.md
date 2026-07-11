---
id: semiconductor-supply
order: 10
segment: upstream
title: 半导体供应链
titleEn: Semiconductor supply chain
oneLiner: 没有晶圆、存储与先进封装，就没有可量产的 AI 加速芯片。
oneLinerEn: Without wafers, memory, and advanced packaging, AI accelerators cannot ship at scale.
description: AI 算力的最底层是半导体制造与存储。台积电等晶圆代工厂、ASML 等光刻设备、HBM 高带宽存储与 CoWoS 类先进封装，决定了 GPU/加速器“能不能造出来、造多少、多贵”。本层玩家多数不直接做模型，但卡死整条链的产能与交期。
descriptionEn: The bottom of AI compute is manufacturing and memory. Foundries, lithography tools, HBM, and advanced packaging decide whether accelerators can be built, in what volume, and at what price. Players here rarely ship models, yet they gate the entire chain’s capacity and lead times.
dependsOn: []
feedsInto:
  - accelerators
roles:
  - name: "晶圆代工"
    nameEn: "Foundry"
    summary: "把芯片设计流片成硅片，先进制程产能是 AI 扩张的硬约束。"
    summaryEn: "Turns chip designs into silicon; leading-edge capacity is a hard constraint on AI scaling."
    examples:
      - "台积电 TSMC"
      - "三星 Foundry"
      - "中芯国际（成熟/受限制程）"
  - name: "设备与材料"
    nameEn: "Equipment & materials"
    summary: "光刻、蚀刻、沉积与特种气体/材料，决定先进节点是否可重复量产。"
    summaryEn: "Lithography, etch, deposition, and specialty materials decide if advanced nodes are manufacturable."
    examples:
      - "ASML（EUV）"
      - "应用材料"
      - "东京电子"
  - name: "HBM 与先进封装"
    nameEn: "HBM & advanced packaging"
    summary: "训练/推理带宽依赖高带宽存储与 2.5D/3D 封装，常比逻辑核更紧缺。"
    summaryEn: "Training/inference bandwidth depends on HBM and 2.5D/3D packaging, often scarcer than logic dies."
    examples:
      - "SK 海力士"
      - "三星"
      - "美光"
      - "CoWoS/封装产能"
companies:
  - nvidia
  - huawei
relatedTopics:
  - ai-hardware
  - ai-infrastructure
relatedEvents:
  - gpu
relatedConcepts:
  - gpu
slug: semiconductor-supply
---
