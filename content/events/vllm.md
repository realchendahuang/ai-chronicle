---
id: vllm
title: vLLM 与 PagedAttention 重塑 LLM 服务吞吐
titleEn: vLLM and PagedAttention reshape LLM serving throughput
subtitle: 虚拟内存式 KV 缓存管理，让同一张 GPU 塞进更多并发请求
subtitleEn: Virtual-memory-style KV cache management packs more concurrent requests on one GPU
date: '2023-06-20'
datePrecision: day
importance: A
eventType: [paper, open-source, infrastructure]
topics:
  - large-language-models
  - ai-infrastructure
  - open-source-models
  - model-efficiency
companies: []
models: []
products: [vllm]
papers: [pagedattention]
people: [woosuk-kwon, zhuohan-li, siyuan-zhuang, ying-sheng, lianmin-zheng, ion-stoica]
concepts: [llm, gpu, open-weight]
summary: UC Berkeley 等研究者开源 vLLM，并以 PagedAttention 把 KV 缓存拆成可非连续映射的页，降低显存碎片与预留浪费，显著提高大模型服务吞吐。
summaryEn: Researchers including UC Berkeley open-sourced vLLM and introduced PagedAttention, paging the KV cache into non-contiguously mapped blocks to cut fragmentation and reservation waste and raise LLM serving throughput.
background: 自回归解码要为每个请求保留增长中的 key/value 缓存；传统连续预分配会因长度不确定产生大量碎片与空闲预留，吞吐被显存而不是算力卡住。
backgroundEn: Autoregressive decoding keeps a growing key/value cache per request; contiguous pre-allocation wastes memory through fragmentation and over-reservation when lengths are unknown, so throughput is memory-bound rather than compute-bound.
whatHappened: 2023 年 6 月团队发布博客与开源库，介绍 PagedAttention 与 vLLM 服务引擎；同年 SOSP 论文系统描述设计。对比 Hugging Face Transformers 等基线，作者报告在评测负载上可达数量级吞吐提升，且不改模型架构。
whatHappenedEn: In June 2023 the team published a blog and open-source library introducing PagedAttention and the vLLM serving engine; a SOSP paper later detailed the design. Versus baselines such as Hugging Face Transformers, they reported up to order-of-magnitude throughput gains on evaluated workloads without model-architecture changes.
whyImportant: 它把操作系统分页思想带进推理栈，使高并发、开放权重与托管 API 部署共享同一套 KV 管理范式，并成为后续推理引擎竞相吸收的默认能力。
whyImportantEn: It brought OS-style paging into the inference stack so high-concurrency, open-weight, and hosted API deployments share one KV-management paradigm, a capability later inference engines absorbed by default.
impact:
  developer: 同一硬件上可服务更多并发会话，开放权重本地/自建服务更接近生产吞吐。
  industry: KV 缓存布局与调度成为独立研究与产品线，而不只是框架内部细节。
impactEn:
  developer: The same hardware could serve more concurrent sessions, bringing open-weight self-hosting closer to production throughput.
  industry: KV-cache layout and scheduling became their own research and product layer, not only framework internals.
beforeAfter:
  before: LLM 服务常因连续 KV 预留浪费显存，并发一高就 OOM 或排队。
  after: 分页式 KV 管理让显存利用率与吞吐成为可工程优化的主战场。
beforeAfterEn:
  before: LLM serving often wasted VRAM on contiguous KV reservations, so concurrency hit OOM or queues.
  after: Paged KV management made memory utilization and throughput a primary engineering battlefield.
relatedEvents: [flashattention, llama, huggingface-transformers, chatgpt-launch]
visual:
  src: /assets/events/vllm.webp
  width: 1280
  height: 720
  alt: "虚拟页表把分散的显存块映射成连贯的 KV 缓存书架"
  altEn: "A virtual page table maps scattered VRAM blocks into a coherent KV-cache shelf"
  caption: "AI Chronicle 原创插图：vLLM 用分页管理 KV 缓存，提高 LLM 服务吞吐。"
  captionEn: "Original illustration by AI Chronicle: vLLM pages the KV cache to raise LLM serving throughput."
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial illustration for vLLM PagedAttention, OS-style page table linking scattered GPU memory tiles to a neat virtual KV cache shelf, multiple request tokens waiting in a serving queue, cool teal and slate palette, technical systems feel, no text no logos, 16:9"
sources:
  - title: vLLM — Easy, Fast, and Cheap LLM Serving with PagedAttention
    url: https://vllm.ai/blog/2023-06-20-vllm
    publisher: vLLM
    type: official
  - title: Efficient Memory Management for Large Language Model Serving with PagedAttention
    url: https://arxiv.org/abs/2309.06180
    publisher: arXiv
    type: paper
  - title: vllm-project/vllm
    url: https://github.com/vllm-project/vllm
    publisher: GitHub
    type: official
status: verified
slug: vllm
---
