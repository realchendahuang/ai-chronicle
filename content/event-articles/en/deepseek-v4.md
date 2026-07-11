---
eventId: deepseek-v4
form: preview release note
narrativeCenter: V4 Pro and Flash previews putting 1M context, thinking/non-thinking modes, and agent-coding claims into one open-weight family
emotionalSource: specs already point at long-horizon agents while the materials still say Preview—vendor benchmarks must not be mixed with GA
avoid:
  - writing a preview as full GA
  - treating official agent-coding scores as third-party reproduction
  - ignoring Pro/Flash split and sparse activation
---

On 24 April 2026 DeepSeek released **preview** open weights for V4 Pro and V4 Flash and updated official service docs. Timing follows the R1-driven wave of reasoning models: the industry already accepts that open weights can carry long-chain reasoning. The next question is whether those models can hold longer context, steadier tool use, and multi-step work such as coding agents.

Per official launch materials, V4-Pro uses a sparse structure with about 1.6 trillion total parameters and 49 billion active, aimed at hard reasoning and agent coding; V4-Flash offers a smaller active footprint for speed and cost. The official API defaults to a context window on the order of one million tokens and supports switching between thinking and non-thinking modes: open thinking when an explicit chain is wanted, close it for latency. These are product-spec statements; preview-stage stability, rate limits, and interface details may still change.

Claims about agent coding—performance on long-horizon, multi-file, tool-using software tasks—were given at launch as vendor benchmarks and demos. They should be labeled **publisher-reported, preview-stage**, not written as widely independently reproduced industry standards. A 1M window likewise needs layers: length is a capacity ceiling, not proof that arbitrary million-token materials are used losslessly. Retrieval, localization, and consistent reasoning across the whole span are different difficulties.

Continuity with V3 and R1 is worth keeping. V3 published an MoE cost structure; R1 put RL reasoning and distillation into open weights; the V4 preview pushes the narrative toward ultra-long context and agent workloads while still stressing sparse activation to control inference cost. The open-weight path again lines up against closed flagships on the same capability checklist—alignment of claims and specs, with acceptance still depending on real downstream tasks.

Preview prose should stay restrained. Record 1.6T/49B, the 1M window, dual modes, and the Pro/Flash split. Do not promote unfinished GA, unaudited agent scores, or undisclosed full training cost into settled conclusions. DeepSeek-V4’s place on the timeline is a specification still stamped Preview: direction clear, seal incomplete.

Preview channels that ship both flagship and fast lines invite early latency–quality curves under real traffic. Agent coding success rates depend on tool APIs, sandboxes, and recovery—not model scores alone. One-million-token windows are capacity ceilings; lossless use of arbitrary million-token dumps is a harder claim. Spec sheets may lead; acceptance belongs to stable releases and third-party failure lists. Preview credit comes from writing unfinished next to the title.
