---
eventId: deepseek-v4
form: migration-notice narrative
narrativeCenter: how a release labeled preview also asked developers to begin moving away from old model names
emotionalSource: the new family was still in preview while the retirement date for its predecessors was already in the documentation
avoid:
  - writing preview as general availability
  - treating vendor agent-coding scores as third-party reproduction
  - ignoring the product split between Pro and Flash
---

On 24 April 2026, DeepSeek announced V4 Preview in its API documentation and released open weights. The page emphasized *preview* while giving a concrete migration instruction: keep the existing `base_url`, but change the model name to `deepseek-v4-pro` or `deepseek-v4-flash`. The same notice said that `deepseek-chat` and `deepseek-reasoner` would be retired on 24 July. The new generation had not been called generally available; the countdown for the old entry points had already begun.

Pro and Flash divided the family into two distinct tradeoffs. DeepSeek listed Pro at 1.6 trillion total parameters and 49 billion active, targeting harder reasoning and agentic coding. Flash had 284 billion total and 13 billion active, emphasizing faster responses and lower cost. Mixture-of-experts architecture separated stored capacity from the parameters used on each step. The product tiers were therefore not merely the same model at different speed settings. They carried different latency, cost, and capability boundaries.

Official services made a one-million-token context window standard and offered both thinking and non-thinking modes. The combination addressed work longer than a single answer: an agent reading a repository, calling tools, retaining intermediate records, and continuing across later tasks. A longer window solves only whether information can remain present in the input. Correct tool use, obedience to earlier constraints, and recovery from an error many steps later still require evaluation on real workflows. A million-token container is not a quality guarantee for long-horizon work.

The launch page described V4-Pro as leading open models on agentic-coding benchmarks and said the family integrated with tools including Claude Code and OpenCode. These were publisher claims. Evaluation scripts, prompt templates, and integration versions determine how the numbers should be read. That boundary matters even more in preview, when rate limits, interface behavior, and recommended templates may change. Open weights let outsiders download and reproduce earlier; they also expose outsiders earlier to implementation details that have not yet settled.

The release’s most concrete tension appeared in operations rather than on a leaderboard. A development team could not ask only whether the new model was stronger. It had to choose when to change names, how to regression-test thinking mode, how to route work between Pro and Flash, and whether migration could finish before the old endpoints disappeared. *Preview* usually suggests that waiting is reasonable. A retirement notice gives waiting a deadline.

DeepSeek-V4 did not announce that long-running agents had been solved. It placed million-token context, two modes, and two sparse model tiers into a downloadable and callable release that was still changing, then used the retirement date of older models to pull real users toward it. Understanding the event requires the migration line beside the parameter table. Frontier-model iteration had accelerated until “preview” and “prepare for production migration” could be true at the same time.
