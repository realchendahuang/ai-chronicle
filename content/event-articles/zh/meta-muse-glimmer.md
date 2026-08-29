---
eventId: meta-muse-glimmer
form: 开源路线的重新接上
narrativeCenter: Meta 用「闭源基座蒸馏 + 开源中型」的组合回应社区，把端侧 Agent 的能力门槛抬到 30B 档
emotionalSource: 扎克伯格那篇《The Future Is for Everyone》，比模型本身更说明 Meta 的路线摇摆
avoid:
  - 把「优于 Gemma4-31B」的官方口径写成独立评测结论
  - 忽略 Muse Glimmer 是蒸馏模型而非独立基座
  - 把「重返开源」写成 Meta 从未离开过开源
---

2026 年 8 月 10 日，Meta 超级智能实验室发布 Muse Glimmer：约 30B 参数的稠密多模态智能体模型，Apache 2.0 开源，可在 24GB 显存消费级 GPU 或 M4/M5 Max MacBook 上完全本地运行。同一天，扎克伯格发表长篇檄文《The Future Is for Everyone》，批评「限制开源」路线，宣布 Meta 重返开源。

先看模型。Muse Glimmer 由闭源基座 Muse Spark 逻辑蒸馏而来——这是理解它的关键：它不是独立训练的基座，而是「前沿闭源基座 + 中型开源专用模型」双线策略的一环。上下文 128K，提供两套 4bit 量化（K Quant 约 17GB、Dynamic K Quant 约 20GB），配套 DFlash 区块并行推测解码，RTX 5090 上生成速度从 74.9 提升到 233.4 token/s。官方口径里，它在 MCP Atlas、DeepSearch QA、Gaia2 等多个 Agent 基准上优于 Gemma4-31B 与 Qwen3.6-27B——需要带着厂商自述的边界读，但「30B 稠密模型可以本地跑 Agent 工作流」这件事本身是确定的。

再看路线。Meta 在 Llama 系列之后转向闭源旗舰 Muse Spark，开源社区对其路线反复摇摆多有批评。扎克伯格这篇檄文把「限制开源」直接点名批评，并预告 Muse Spark 1.2 的开放权重版本——「闭源基座 + 开源中型」不是权宜之计，而是被写进战略的组合打法。对社区来说，这篇檄文比模型本身更说明问题：Meta 需要开发者生态，而开源是拿回生态的入场券。

端侧 Agent 的竞争格局同样值得读。Gemma 4、Qwen3.6-27B 等中型开源模型此前主导了本地 Agent 场景；Muse Glimmer 把能力门槛抬到 30B 档，同时用「完全本地运行」回应隐私与成本诉求。对开发者，这是一个可完全本地运行、Apache 2.0 的 30B 智能体模型，数据不出设备、成本可控；对行业，端侧 Agent 模型的能力门槛被抬到 30B 档，「闭源基座 + 开源中型」成为新的组合打法。

Muse Glimmer 的意义不在单个数字。它把 Meta 的开源路线从「Llama 时代」重新接上，用「闭源基座蒸馏 + 开源中型」的组合回应社区；同时把端侧 Agent 模型的能力门槛抬到 30B 档，本地运行成为可交付的产品形态。至于「重返开源」的说法——Meta 从未离开过开源，只是离开过社区。这一次，它带着 30B 的模型和一篇檄文回来了。
