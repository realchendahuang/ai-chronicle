---
eventId: deepseek-v4-pro-ga
form: A GA that turned a weakness into a selling point
narrativeCenter: DeepSeek used one GA release to turn its preview-era agent weakness into a selling point and extend competition to the framework layer
emotionalSource: The DeepSWE jump from 12.8 to 62.7 is more persuasive than any launch event
avoid:
  - Treating vendor-reported benchmarks as independent evaluation
  - Blurring "near Fable 5" and "above Fable 5"
  - Dismissing the Harness open-source as an unrelated side note
---

On August 13, 2026, DeepSeek promoted V4 Pro to the 0813 GA build—111 days after the preview launched on April 24. In those 111 days, V4-Flash went GA on July 31, making the Pro GA the last piece of the V4 line. But what made this update news was not the GA itself; it was one set of numbers: DeepSWE jumping from 12.8 in preview to 62.7.

12.8 was the preview's biggest weakness. When V4 Pro launched in April, its reasoning and price held up, but agent capability clearly lagged contemporary flagships—a DeepSWE of 12.8 stood out on any comparison table. The 0813 GA turned that weakness into a selling point: 62.7 beats Claude Opus 4.8's 58.0, Terminal Bench 2.1 rose from 72.1 to 87.9 (near Fable 5's 88.0), and Cybergym from 52.7 to 83.3. Read with the vendor-self-reported caveat, but the direction is clear: DeepSeek completed a generational agent leap in one GA release.

On specs, 0813 keeps the preview architecture: 1.6T total, ~49B active per token, 1M context, 384K max output. Two additions matter more: first native image reasoning (the preview was text-only), and compatibility with both OpenAI and Anthropic API ecosystems, so Responses API and agent tools like Codex plug in directly. For developers, the migration cost of "switch model, keep code" drops further.

The DeepSeek Harness v0.1 (MIT) released the same day is easy to file as a side note, but it may say more than the model itself. Harness is an engineering framework for agent orchestration—extending competition from the model layer to the agent development layer. When model capability converges, frameworks, toolchains, and ecosystems become the next battlefield. DeepSeek open-sourcing Harness is a way of saying: use the models freely, we give you the toolchain too.

The V4 line is now fully GA. For developers, this is a flagship option with 1M context, image reasoning, dual API ecosystems, and still-aggressive pricing; for the industry, DeepSWE 62.7 is a new reference point—a Chinese model standing firmly in the top band of agent benchmarks for the first time. The promised "big API price cuts" have not landed yet, but given DeepSeek's pricing history, the price war is probably a matter of time.
