---
id: systems-networking
order: 30
segment: upstream
title: 整机、集群与网络
titleEn: Systems, clusters & networking
oneLiner: 单卡只是零件；机架、液冷与高速互联才把算力连成训练集群。
oneLinerEn: A single card is a part; racks, cooling, and fast interconnects turn compute into training clusters.
description: 服务器整机、机柜、液冷、NVLink/InfiniBand/以太网与调度软件，决定大模型训练能否在合理时间内跑完。本层连接芯片商与云厂商，也是“有卡无集群”的常见卡点。
descriptionEn: Servers, racks, liquid cooling, NVLink/InfiniBand/Ethernet, and schedulers decide whether large-model training finishes in time. This layer links chip vendors to clouds—and is where “cards without clusters” fail.
dependsOn:
  - accelerators
feedsInto:
  - cloud-compute
roles:
  - name: "AI 服务器与 ODM"
    nameEn: "AI servers & ODMs"
    summary: "把 GPU/加速器做成可上架的训练/推理节点。"
    summaryEn: "Turn accelerators into rackable train/serve nodes."
    examples:
      - "超微 Supermicro"
      - "戴尔/HPE"
      - "浪潮等"
  - name: "高速互联"
    nameEn: "High-speed interconnect"
    summary: "多机多卡通信带宽与拓扑，直接影响大模型并行效率。"
    summaryEn: "Multi-node bandwidth and topology dominate large-model parallel efficiency."
    examples:
      - "NVIDIA NVLink/Spectrum-X"
      - "InfiniBand"
      - "以太网 RoCE"
  - name: "数据中心工程"
    nameEn: "Datacenter engineering"
    summary: "电力、散热与机房密度是扩容的物理上限。"
    summaryEn: "Power, cooling, and facility density cap expansion."
    examples:
      - "液冷方案"
      - "电力配套"
      - "选址与能耗"
companies:
  - nvidia
  - amazon
  - microsoft
  - google
  - alibaba
  - huawei
relatedTopics:
  - ai-infrastructure
  - ai-hardware
relatedEvents:
  - gpu
  - vllm
relatedConcepts:
  - gpu
slug: systems-networking
---
