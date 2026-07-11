---
id: accelerators
order: 20
segment: upstream
title: 加速芯片与平台
titleEn: Accelerators & platforms
oneLiner: GPU、TPU、NPU 把矩阵运算变成可堆叠的算力商品。
oneLinerEn: GPUs, TPUs, and NPUs turn matrix math into stackable compute products.
description: 英伟达以 GPU + CUDA 软件栈占据通用 AI 训练与大量推理份额；Google TPU、华为昇腾、AMD、自研 ASIC 等在云与端侧分流。芯片之上必须有驱动、编译器与内核库，否则模型框架无法吃到算力。
descriptionEn: NVIDIA’s GPU + CUDA stack dominates general AI training and much inference; Google TPU, Huawei Ascend, AMD, and custom ASICs split cloud and edge. Drivers, compilers, and kernels sit on top of silicon or frameworks cannot feed on the FLOPs.
dependsOn:
  - semiconductor-supply
feedsInto:
  - systems-networking
  - ai-software
roles:
  - name: "通用 GPU 平台"
    nameEn: "General GPU platform"
    summary: "可训练可推理的默认选择，生态与供货往往比峰值算力更关键。"
    summaryEn: "Default for train and serve; ecosystem and supply often matter more than peak FLOPs."
    examples:
      - "NVIDIA 数据中心 GPU"
      - "CUDA / cuDNN / NCCL"
  - name: "云自研加速器"
    nameEn: "Cloud custom accelerators"
    summary: "超大云为降本与定制工作负载设计的 ASIC/TPU 路线。"
    summaryEn: "Hyperscaler ASICs/TPUs for cost and workload fit."
    examples:
      - "Google TPU"
      - "AWS Trainium/Inferentia"
      - "Azure Maia（路线）"
  - name: "国产与端侧 NPU"
    nameEn: "Domestic & edge NPUs"
    summary: "面向可获得算力与设备侧推理的替代路径。"
    summaryEn: "Alternatives for obtainable compute and on-device inference."
    examples:
      - "华为昇腾"
      - "寒武纪等"
      - "手机/PC NPU"
companies:
  - nvidia
  - huawei
  - google
  - amazon
  - microsoft
  - apple
relatedTopics:
  - ai-hardware
  - ai-infrastructure
  - model-efficiency
relatedEvents:
  - gpu
relatedConcepts:
  - gpu
slug: accelerators
---
