---
eventId: o3-o4-mini
form: a record of a model-form upgrade
narrativeCenter: how OpenAI systematically packed "thinking" and "acting" into the same flagship models for the first time
emotionalSource: the amazement—and slight unease—of watching a model search, code, and look at images to answer a question
avoid:
  - inventing OpenAI launch details
  - presenting o3 as the first reasoning model
  - substituting "strongest" for concrete capability
---

On April 16, 2025 OpenAI released o3 and o4-mini. By name they were the new generation of the o-series reasoning models; but the real change was hidden in the phrase "tool use." o3 and o4-mini were the first reasoning models that actively call tools during reasoning—searching the web, executing code, viewing images, feeding the results into their thinking chain, then delivering a final answer.

Before this, reasoning models and tool use were separate paths. o1 was good at "thinking" but limited in tool ability, requiring the user to feed it external information; tool-capable models were good at "doing" but lacked deep reasoning and planning. o3/o4-mini merged the two: while reasoning internally, the model can decide in real time "I need to look this up," actually search, look, compute, and continue reasoning on the new information. "Think and act simultaneously" became a complete loop on a flagship for the first time.

For developers, the change was fundamental. Building an agent application used to require orchestrating model calls, tool calls, and result feeding yourself; now a single API call lets the model complete the whole "think-search-execute-answer" chain on its own. Developers no longer need to write piles of glue code; the model itself became an executor that works independently. This directly fueled the agent-application explosion of 2025.

o3's capability gains were substantial too. It broke records again on reasoning and coding benchmarks, pushing test-time compute to new heights; o4-mini delivered near-flagship reasoning at lower cost, letting small developers afford strong reasoning models. OpenAI also integrated these deeply into ChatGPT, letting ordinary users experience "the model searches the web itself and answers."

The deeper impact of the o3/o4-mini release was defining the basic form of the next-generation model. Subsequent flagships—GPT-5, Claude 4, and rivals—all made "reasoning plus tools plus action" a default requirement. The "question engine" era passed; models became "subjects that complete tasks independently." That shift was more structural than any single benchmark breakthrough.

Looking back at April 2025, the meaning of o3/o4-mini is "fusion." It packed thinking and acting completely into a flagship, turning "the model does a whole task by itself" from vision into routine. Later agent-native models and autonomous-agent products nearly all stand on the line o3/o4-mini drew. A model that does not just answer you but figures out how and does the work itself—after spring 2025, that picture became the norm in the AI world.
