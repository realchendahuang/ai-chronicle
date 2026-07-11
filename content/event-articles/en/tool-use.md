---
eventId: tool-use
form: Protocol prehistory
narrativeCenter: Claude’s structured tool calling draws a clean line between choosing a tool and executing it
emotionalSource: Model and software begin to share a similar grammar while platform dialects remain
avoid:
  - Writing a simple chase story after OpenAI function calling
  - Equating Tool Use with MCP ahead of time
  - Confusing model tool choice with application execution
---

On 30 May 2024, Anthropic announced that Claude Tool Use was generally available.

It sounded like a version bump. What it nailed was a division of labor. The model may propose which tool to call and with which arguments; the application still runs the query, changes the order, or fires the request. Parameters are constrained with JSON Schema and returned as content blocks such as `tool_use`—beta had matured into default production support, the grammar was steadier, and the responsibility line had not moved. Treating returned parameters as already authorized operations is an integration mistake, not the model “learning to execute.”

It belongs to the same family as OpenAI’s function calling a year earlier, without being the same dialect: prompting, error handling, parallelism, and return shape are not fully interchangeable. Samples for customer support and image-backed tools state the intent clearly—the model understands and selects; the client owns authorization, timeouts, side effects, and audit.

General availability means docs, stability expectations, and examples aimed at production integration rather than demo scripts. Once tool loops are default, failure modes are too: bad schemas, hallucinated arguments, calling tools when a human should be asked. Products must put refuse, clarify, and retry on the same path. Tool Use is also not the later Model Context Protocol. One governs how a structured call is emitted inside a conversation; the other tries to govern how hosts, clients, and servers discover and connect tools. Timeline and abstraction differ.

Spring 2024’s GA only nails one link into Claude’s default surface: the model may emit executable intent. Protocol prehistory often looks like this: a shared grammar first, a unified standard later. While dialects remain, engineers translate and defend; when standards arrive, work becomes compatibility and governance—the problems do not vanish, they change layer and name.

Once Tool Use is default, integration tests must cover paths such as wrong tool choice, bad argument types, and tool timeouts. Protocol prehistory matters because those paths gain names, content blocks, and docs. Later protocols such as MCP try to solve discovery and connection; Tool Use solves how to speak inside a session. Until both layers are in place, engineers keep translating dialects.
