---
eventId: hunyuan-hy4-preview
form: A front-line entry into productivity
narrativeCenter: 'Tencent moved Hunyuan into the domestic first tier with 770B/49B and a 1M context, with "the model in its own R&D" as the new capability narrative'
emotionalSource: 'The phrase "preliminary recursive self-improvement loop" reveals Tencent''s ambition more than any benchmark'
avoid:
  - Treating the internal blind-test score as an independent evaluation result
  - Ignoring the 770B vs. 780B (Hugging Face) accounting difference
  - Describing "model in its own R&D" as fully autonomous self-improvement
---

On August 28, 2026, Tencent Hunyuan released and open-sourced Hy4 preview. A 770B-total, 49B-active MoE with context past 1M under Apache 2.0—these numbers moved Hunyuan from the domestic second tier into the first. But the most readable line in the release materials is not a parameter; it is: "preliminary recursive self-improvement loop."

On specs: Hy4 preview is a major step up from Hy3 (295B/21B, 256K context): 770B total (780B on Hugging Face including the built-in MTP speculative decoding layer), 49B active, context past 1M. In an internal blind test (163 experts, 203 engineering tasks) it scored 2.99/4.00, slightly above GLM-5.3 (2.92) and Kimi K3 (2.94)—read with the vendor-self-reported caveat, but the direction is clear: Hunyuan entered front-line competition among domestic open flagships. Self-reported DeepSWE is 64.3 (Hy3 was 28.0) and Terminal Bench 2.1 is 85.4, positioned "for productivity" across software engineering, office analytics, game development, and research.

"Recursive self-improvement" is the most distinctive narrative of this launch. Tencent says Hy4 preview participated in its own full R&D pipeline for the first time: training methods, data strategy, evaluation systems, and automatic operator optimization—the model helping optimize its own training and inference systems, with self-optimized inference raising end-to-end throughput 31.8% over baseline. Read carefully: this is a "preliminary" loop, not fully autonomous self-improvement; the model participates in parts of the R&D process, not the whole of it. But the direction deserves attention: when models are strong enough, "a model participating in building models" stops being science fiction and becomes engineering reality.

The launch rhythm continues Tencent's playbook: the product matrix debuted together. WorkBuddy/CodeBuddy (domestic and international), Yuanbao, and ima plugged in the same day with a two-week free trial; API pricing is ¥6 input and ¥18 output per million tokens (international $0.834/$2.501). Tencent did not hold a separate launch event for the model—it put the model directly into its own products. The "model plus product matrix" combo mirrors Alibaba's Qianwen Office same-stage launch.

Hy4 preview's meaning is not in any single number. It moved Tencent Hunyuan into the first tier of domestic open flagships, answering the scale race with a 1M context and productivity positioning; the "model in its own R&D" recursive self-improvement narrative opened a new imagination for where open-model capability comes from. For developers, this is an Apache 2.0 productivity model with 1M context and 49B active parameters, freely commercial; for the industry, domestic open-flagship competition extended from the model layer to the "model in its own R&D" narrative. Preview first, GA to follow—the next batch of Hy4 models is already on the way.
