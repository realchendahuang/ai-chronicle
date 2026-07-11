---
eventId: tool-use
form: protocol prehistory
narrativeCenter: how Claude’s structured tool calls showed that functions and JSON Schema were becoming shared grammar across frontier models
emotionalSource: the order of similar software boundaries across models, and the incompleteness of still-separate dialects
avoid:
  - casting Tool Use as simple follower of OpenAI function calling
  - equating Tool Use with MCP ahead of time
  - confusing model tool choice with application tool execution
---

Write the tool names and descriptions first, then constrain parameters with JSON Schema. The model picks one or more tools from a user request and returns structured arguments. The application runs the database query, business API, or other operation and feeds results back.

By 30 May 2024, when Anthropic announced Claude Tool Use as generally available, that loop already felt familiar. It had moved from earlier beta and preview stages into a production default. Details still carried Claude’s content-block conventions—structured calls returned as `tool_use` blocks, for example—but familiarity did not mean identical prompts, error handling, parallel calls, or return formats to OpenAI function calling. The division of labor between language models and ordinary software was stabilizing; platform dialects remained.

Before GA, developers often relied on brittle free-form conventions or semi-formal betas to get similar behavior from Claude. GA wrote `tool_use` blocks, errors, and multi-turn result returns into a stable contract so benchmarks and production logs could parse the same fields. Claude can select multiple tools in one request and can decide what to call on tasks that include images. Anthropic’s customer-service and vision examples pull tool use out of abstract agent demos into ordinary work: order lookups, reading information, continuing with visual material. The model handles messy human requests; tools touch live data and controlled actions; the application still holds the gate—a call request is not database or account permission.

When only one API offers the capability, developers treat it as a product feature. When several frontier models expose similar entry points, it starts to look like infrastructure. Agent frameworks can try migrating across models; tool definitions need not restart as pure-text ciphers every time. Differences grow sharper at the same moment: how the same tool should be described, how results return, who manages auth and context, how a service declares what it can do to an unfamiliar client.

Tool Use does not answer all of those questions. It defines one call path between Claude and client-side tools; it does not form a cross-model, cross-service protocol. The duplicated labor is already visible: more platforms must describe tools, choose tools, pass parameters, and return results, yet the same integration still has to be rewritten per vendor. Months later Anthropic’s MCP would target discovery and connection between hosts and external systems. Tool Use makes “how a model picks tools” concrete; it is not a trailer for that standard—the layers differ and should not be collapsed.

When OpenAI function calling and Claude Tool Use sit side by side, framework authors write adapters: one business tool, two request field sets. Those adapters are evidence that shared grammar has not yet become a shared protocol. GA also meant documentation, error codes, and practices maintained to production standards. Swap the model and tool definitions, structured parameters, and result returns still feel familiar. When the connection layer becomes reusable is a question for the next protocol.
