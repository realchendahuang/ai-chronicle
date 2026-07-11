---
id: cloud-compute
order: 40
segment: midstream
title: 云算力与 MaaS 底座
titleEn: Cloud compute & MaaS substrate
oneLiner: 多数团队不买整机，而是按小时租 GPU 与托管推理。
oneLinerEn: Most teams rent GPUs and hosted inference by the hour rather than buying full systems.
description: AWS、Azure、GCP、阿里云、火山引擎等把上游集群产品化成实例、配额与区域。模型公司与应用公司在此上训练与部署；云也自营模型与 API，形成“房东兼租客”。
descriptionEn: AWS, Azure, GCP, Alibaba Cloud, Volcano Engine productize upstream clusters into instances, quotas, and regions. Model and app companies train and serve here; clouds also run first-party models and APIs—landlord and tenant at once.
dependsOn:
  - systems-networking
feedsInto:
  - ai-software
  - foundation-models
  - applications
roles:
  - name: "IaaS GPU 租赁"
    nameEn: "IaaS GPU rental"
    summary: "按需/包年 GPU 实例，是创业公司与研究的默认入口。"
    summaryEn: "On-demand/reserved GPU instances—the default door for startups and research."
    examples:
      - "AWS p 系列"
      - "Azure ND"
      - "GCP A3"
      - "阿里云/火山引擎 GPU"
  - name: "托管推理与 MaaS"
    nameEn: "Hosted inference & MaaS"
    summary: "按 token 计费的模型 API，把运维复杂度上收到云。"
    summaryEn: "Token-priced model APIs that absorb ops complexity."
    examples:
      - "Bedrock"
      - "Azure OpenAI"
      - "Vertex AI"
      - "百炼/方舟"
  - name: "企业专有云与混合部署"
    nameEn: "Private/hybrid deploy"
    summary: "数据驻留与合规驱动的私有化与专属集群。"
    summaryEn: "Private and dedicated clusters for data residency and compliance."
    examples:
      - "行业云"
      - "专属 region"
      - "本地一体机"
companies:
  - amazon
  - microsoft
  - google
  - alibaba
  - bytedance
  - huawei
  - ibm
relatedTopics:
  - ai-infrastructure
  - enterprise-ai
  - china-ai
relatedEvents:
  - chatgpt-launch
  - gpt-4-release
relatedConcepts:
  - llm
slug: cloud-compute
---
