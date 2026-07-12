---
eventId: agent-runtime
form: A runtime cross-section
narrativeCenter: The Responses API and Agents SDK bring tool loops, handoffs, guardrails, and tracing out of application glue
emotionalSource: The code least suited to a demo finally receives a formal place
avoid:
  - Treating SDK primitives as proof that agents are reliable
  - Collapsing the Responses API and Agents SDK into one layer
  - Hiding permissions and observability beneath multi-agent diagrams
---

An agent demo usually begins with a request and ends with an answer. A production system lives in between. The model asks for a search; the application performs it and returns the result. The model asks to read a file; the application checks permission. One step times out and the loop must recover. Work moves to another agent and the logs must explain which context crossed the boundary. The visible answer may be a few lines. The glue behind it can become the backend.

On 11 March 2025, OpenAI released the Responses API and open-sourced the Agents SDK. The Responses API placed text and tool calls in a unified interface and offered built-in tools including web search, file search, and computer use. The Agents SDK operated on the application side, turning agents, handoffs, guardrails, and tracing into composable primitives. The two arrived together but served different jobs: one was a platform interface; the other was an orchestration library. The notable change was not simply that developers could draw more agents. Work previously dismissed as glue became a formal product surface. A handoff no longer had to mean stuffing a string into another prompt; it had a named abstraction. Tracing was presented as part of the stack rather than an emergency logging project after an incident. A guardrail could no longer be reduced to “please do nothing dangerous”; it had to decide what input or output was allowed to continue around a tool call.

Names do not create reliability. A handoff that carries too little context produces amnesia; one that carries too much spreads secrets and noise. A narrow guardrail misses danger, while an over-broad one prevents useful work. Tracing can record calls but cannot decide who may inspect the trace, how long it should remain, or whether a failure belongs to the model, the tool, or the application. The busier a multi-agent diagram becomes, the easier it is to bury those decisions beneath arrows.

The release also set a migration direction away from the Assistants API. State previously organized around Assistants, Threads, and Runs had to be placed again across Responses and application orchestration. That migration made a larger point: how much state a platform chooses to host is not a permanent technical constant. It moves with product strategy. An abstraction delivers convenience and later creates work when its nouns and object boundaries change.

The Responses API and Agents SDK therefore mark a shift in where engineering attention lands. Model ability still matters, but an agent product's continuity increasingly depends on recovery after tool failure, traceable handoffs, and permissions that can be narrowed. The launch brought glue code onto the stage. Its real test begins when an incident occurs and the runtime either leads an engineer to the broken step—or leaves another fluent answer with no accountable path behind it.
