---
id: ai-software
order: 50
segment: midstream
title: AI 软件栈与框架
titleEn: AI software stack & frameworks
oneLiner: CUDA、PyTorch、编译器与推理引擎决定算力能不能被模型真正吃掉。
oneLinerEn: CUDA, PyTorch, compilers, and serving engines decide whether compute is actually usable by models.
description: 从 CUDA/ROCm 到 PyTorch/JAX、Megatron/DeepSpeed、vLLM/TensorRT-LLM，软件栈把芯片能力翻译成训练吞吐与推理延迟。开源社区与芯片厂商在此争夺“默认开发接口”。
descriptionEn: From CUDA/ROCm to PyTorch/JAX, Megatron/DeepSpeed, and vLLM/TensorRT-LLM, the stack translates silicon into training throughput and serving latency. Open communities and chip vendors fight over the default developer interface.
dependsOn:
  - accelerators
  - cloud-compute
feedsInto:
  - foundation-models
  - tooling-data
roles:
  - name: "芯片软件平台"
    nameEn: "Silicon software platform"
    summary: "驱动、库与图编译，锁住开发者习惯。"
    summaryEn: "Drivers, libraries, and graph compilers lock developer habits."
    examples:
      - "CUDA 生态"
      - "ROCm"
      - "CANN（昇腾）"
  - name: "训练框架"
    nameEn: "Training frameworks"
    summary: "动态图、分布式与检查点，是研究与工业训练的共同语言。"
    summaryEn: "Dynamic graphs, distributed training, and checkpoints—the shared language of research and industry."
    examples:
      - "PyTorch"
      - "JAX"
      - "MindSpore"
      - "Megatron-LM"
  - name: "推理与服务"
    nameEn: "Inference & serving"
    summary: "批处理、分页注意力、量化与路由，直接决定单位 token 成本。"
    summaryEn: "Batching, paged attention, quant, and routing set per-token cost."
    examples:
      - "vLLM"
      - "TensorRT-LLM"
      - "TGI"
      - "SGLang"
companies:
  - nvidia
  - huggingface
  - meta
  - microsoft
  - google
  - huawei
relatedTopics:
  - ai-infrastructure
  - model-efficiency
  - open-source-models
relatedEvents:
  - pytorch
  - tensorflow-open-source
  - gpu
  - vllm
  - flashattention
  - huggingface-transformers
relatedConcepts:
  - gpu
  - quantization
  - transformer
slug: ai-software
---
