---
eventId: agent-runtime
form: Archaeology of a developer stack
narrativeCenter: Responses API and Agents SDK name tool loops, handoffs, guardrails, and tracing
emotionalSource: The launch star is not a talking model but glue code no one liked to show
avoid:
  - Treating SDK primitives as proof agents already work reliably
  - Collapsing Responses API and Agents SDK into one layer
  - Letting multi-agent headcount hide tracing and permissions
---

Before “agent” was a product name, it was often a lengthening loop in application code: send the problem to a model, parse the tool it wants, execute, stuff results back into context, ask again. Timeouts, retries, permissions, logs, and error handling sat beside the loop. Demos spotlighted the answer; what made demos repeatable mostly had no name. Engineers called it glue; launch stages rarely invited glue to the podium.

On 11 March 2025, OpenAI launched the Responses API and open-sourced an Agents SDK. Responses unifies text and tool-call responses and ships built-in web search, file search, and computer use; the SDK turns Agent, Handoff, Guardrail, and Tracing into composable primitives. One is a platform response-and-tools interface; the other is an application-side orchestration library—paired, not the same layer. The launch also pointed migration paths from the Assistants API: conversation, runs, and tool loops had once been hosted under four objects; the platform now preferred vocabulary closer to one response, built-in tools, and app orchestration. Migration cost again reminded everyone that hosting depth swings with product strategy.

Built-in tools lower the cost of search and files and write permission and billing defaults into the platform path. Naming SDK primitives does not make systems reliable. What context a handoff carries, what a guardrail blocks, and how deep tracing records remain application choices. Multi-agent headcount easily hides single-point failure: one bad handoff or one unlogged tool call can collapse a “collaborative” demo in production.

What this day records is that glue code finally received official nouns. Nouns will change again; tool loops, handoffs, guardrails, and tracing will not vanish because the names do. Stack archaeology matters because what actually lets agent products run repeatedly is often what once seemed too unglamorous for a launch title.

From Assistants to Responses, nouns change; the work does not vanish. Apps still handle failure, permissions, and observability; the platform only offers another default assembly. An open-sourced Agents SDK lets orchestration logic enter repositories and code review rather than only click-config. Once glue has names, the next question is whether those names help assign responsibility in a production incident.
