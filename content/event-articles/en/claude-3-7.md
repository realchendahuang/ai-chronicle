---
eventId: claude-3-7
form: one model that gives you both "fast" and "smart" answers
narrativeCenter: how Anthropic, with hybrid reasoning, turned "whether to think" from a model choice into a toggle in the user's hand
emotionalSource: appreciation for a product design that dissolves a technical trade-off
avoid:
  - claiming Claude 3.7 is strongest on every task
  - ignoring the latency and cost of extended-thinking mode
  - assuming hybrid reasoning comes for free
---

From late 2024 into early 2025, reasoning models became the new battleground. OpenAI's o1 proved that "letting the model think longer" dramatically improved complex tasks, but it created an awkward choice: users had to pick between "fast but not so smart" and "very smart but slow," and switching required changing models. Anthropic dissolved that choice in February 2025 with a clever design.

Claude 3.7 Sonnet shipped, calling itself a "hybrid reasoning model." The same model, by default in standard mode, responds quickly and flows like ordinary conversation; when deep thought is needed, switch on extended thinking mode and the model plans autonomously and reasons step by step, with configurable thinking time. Fast and slow, instinct and deliberation, were no longer properties of two models but two gears of one brain.

The developer experience improved immediately. When writing code, simple tasks could be answered instantly and complex refactors could run at full thinking power—no more choosing "which model should I use." Claude 3.7 was also among the strongest coding models of its time, launching alongside Claude Code and excelling in coding scenarios. The thinking-budget parameter added to the API later became standard on every reasoning model.

The significance of hybrid reasoning is that it redefined the shape of the flagship model. It declared that reasoning should not be a privilege of a few models but a default capability of every model—whether to use it and for how long, decided by the user. Every vendor absorbed this design.

Looking back, Claude 3.7 did not create an o1-style "reasoning moment," but it did something more practical: it moved reasoning from "special offer" to "standard equipment," from "change the model" to "flip the switch." When an ordinary user casually turns on extended thinking and lets the model think a few seconds longer before answering, they may not know—this design that made "smart" feel within reach was left by Anthropic in the spring of 2025.
