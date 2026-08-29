---
eventId: openai-jalapeno-chip
form: From strategic narrative to verifiable data
narrativeCenter: 'OpenAI backed the inference-ASIC route with per-watt data at Hot Chips, with "buy alongside" positioning compute diversification as a cost strategy'
emotionalSource: 'The "1.5–1.9x per-watt performance" number is more persuasive than any strategic manifesto'
avoid:
  - Treating vendor-reported per-watt figures as independent evaluation
  - Blurring "buy alongside" and "replace Nvidia"
  - Writing the Hot Chips disclosure as the chip's first release
---

On August 25, 2026, OpenAI posted benchmark results for its Jalapeño inference chip at Hot Chips: 1.5–1.9x the per-watt performance of the reference Nvidia GB200/GB300 systems at peak throughput, and 2.1–4.1x on highly interactive workloads. Tests covered GPT-OSS 120B, DeepSeek R1 670B, and Kimi K2.5 1T—a detail worth reading on its own: Jalapeño is not tuned only for OpenAI's own models, and broad compatibility is being sold as a feature.

On background: Jalapeño is a custom inference ASIC co-developed with Broadcom, unveiled June 24, nine months from design to tape-out, serving post-deployment inference for ChatGPT and Codex rather than training. At the time there were only engineering samples and a vague "better per-watt than the best available" claim; the Hot Chips disclosure turned "self-designed chip" from strategic narrative into verifiable test data. Rated at 700W with sustained test power at or below 550W, it packs 216GiB of HBM4 at 15.4TB/s; the architecture abandons prefill/decode separation for a unified chip pool with out-of-order cores, reducing data movement.

Read these numbers with the vendor-self-reported caveat—Hot Chips is an industry conference, but the tests were designed and presented by OpenAI. The direction is nonetheless clear: inference ASICs can beat general accelerators on per-watt performance, and per-watt is exactly the core variable of inference cost. SemiAnalysis's independent benchmarks also show it leading Nvidia, AMD, and Google chips on per-watt throughput in nearly every scenario—independent analysts and vendor claims pointing the same way carries more weight than any single source.

The positioning deserves even more attention. OpenAI explicitly says it buys alongside Nvidia and AMD, not instead of them—"buy alongside" reveals that compute diversification is fundamentally a cost strategy and bargaining chip, not a declaration of war on Nvidia. Deployment in OpenAI's own infrastructure starts before year-end, with Gen 2 deep in development and Gen 3 taking shape. For developers, inference costs may fall further as self-designed chips deploy, opening API pricing room; for the industry, per-watt performance became the new yardstick for inference chips, with the ASIC route gaining data-backed credibility.

Jalapeño's meaning is not in any single number. It turned "self-designed chip" from strategic narrative into verifiable benchmark data, showing inference ASICs can beat general accelerators on per-watt performance; the "buy alongside" positioning also frames compute diversification as a cost strategy, not a replacement declaration. For developers, inference costs may keep falling; for the industry, per-watt became the new yardstick, putting long-term pressure on Nvidia's pricing power. The chip is named after a chili pepper—how hot it is, the data will tell.
