---
eventId: claude-opus-5
form: A pricing statement
narrativeCenter: Opus 5 turned "near-flagship at half price" into a product route, and put the handling of safety interceptions into the API spec
emotionalSource: A launch post full of benchmark enthusiasm published next to a System Card full of self-imposed limits
avoid:
  - Treating vendor benchmark scores as independent certification
  - Missing the speed and price trade-off of Fast mode
  - Replacing System Card content with conclusions like "safest model"
---

On July 24, 2026, Anthropic released Claude Opus 5. The official positioning, translated plainly: near-frontier intelligence at roughly half the price. The wording deserves attention—"near" rather than "at." Anthropic kept the top slot for its more expensive line and placed Opus 5 at the strongest-budget position. It became the default model for Claude Max and the strongest option in Claude Pro; the API name is claude-opus-5, priced at $5 per million input tokens and $25 per million output, unchanged from Opus 4.8.

Benchmark numbers should be read inside their vendor context: roughly double Opus 4.8 on Frontier-Bench v0.1, better results than the flagship at about one-third the cost on OSWorld 2.0, and about three times the runner-up on ARC-AGI 3. These are Anthropic's own results, not independent certification. They indicate a direction—the combination of capability and cost—rather than a universal ranking. The family also offers standard and Fast tiers: Fast runs about 2.5x faster at 2x price, turning "pay more to save time" into a per-call decision.

Two beta-level engineering features deserve more attention. First, mid-conversation tool switching: a long agent loop no longer commits to its toolset up front. Second, automatic fallback after safety interception: when a safety classifier blocks a request, the API can route it to another model by configuration. Previously, a declined request simply failed and developers handled it themselves; now it is a configurable interface behavior. This does not solve safety—it hands the engineering team control over what happens after a model says no.

The System Card contains a sentence easy to skip: Opus 5 received no cyber-offense training, and its exploitation capability still trails models specialized in that area. In a loud launch season, such a line carries as much weight as any score. It draws the boundary of this product line and reminds buyers that flagship selection was never "which is stronger" but "strong where, weak where, at what cost."

Opus 5 reads like a statement about pricing power. The center of frontier competition is moving from peak capability toward the capability-cost curve. For teams running long coding loops on it, the immediate change is the bill. For the industry, the change is the default assumption: the strongest model no longer has to be the most expensive one.
