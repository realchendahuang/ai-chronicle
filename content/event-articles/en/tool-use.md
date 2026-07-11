---
eventId: tool-use
form: Protocol prehistory
narrativeCenter: How Claude's structured tool calling showed that functions and JSON Schema were becoming shared grammar across frontier models
emotionalSource: The order of plugging different models into similar software boundaries, and the incompleteness of still-private protocols
avoid:
  - Writing the story as mere following of OpenAI function calling
  - Equating Tool Use with MCP ahead of time
  - Confusing model tool selection with application tool execution
---

Once tool calling became a shared industry capability, swapping models no longer dropped developers into an entirely foreign job.

Name tools and describe them; constrain parameters with JSON Schema; let the model choose one or more tools from a user request and return structured arguments; have the application run the database query, business API, or other operation and send results back. On 30 May 2024, when Anthropic announced Claude Tool Use as generally available, that loop already felt familiar. It had moved from earlier beta and preview stages into a production-default surface. Details still carried Claude's content-block conventions—structured calls returned as `tool_use` blocks, for example—and familiarity did not mean identity with OpenAI function calling in prompts, error handling, parallel calls, or response shapes. The division of labor between language models and conventional software was stabilizing; platform dialects remained.

Before GA, Claude tool patterns often relied on brittle conventions or informal betas. GA wrote `tool_use` blocks, errors, and multi-turn returns as a stable contract so logs and evals could parse the same fields. Vision-aware tool choice widened what a tool could serve—screenshots and documents, not only text support. Anthropic did not ship a cross-host standard that day; it shipped a model willing to say, stably, what it wants to call. The socket standard is another chapter.

Claude could select multiple tools in one request and decide what to call on tasks that included images. Anthropic's customer-service and vision examples pulled tool use out of abstract agent demos into ordinary work: looking up an order, reading information, continuing with visual material. The model handled messy human requests; tools touched live data and controlled operations. The application still sat between them: a call request is not database or account permission. GA meant the interface and behavior were delivered as a stable product surface, not something that “sometimes worked in a demo.”

When only one API offered the pattern, developers treated it as a product feature. When several frontier models offered similar entrances, it began to look like infrastructure. Agent frameworks could try to migrate across models; tool definitions no longer had to restart as free-text ciphers every time. Differences grew sharper at the same moment: how the same tool should be described, how results return, who manages auth and context, how a service declares capabilities to unfamiliar clients.

Tool Use did not answer every later question. It defined one calling pattern between Claude and client-side tools, not a cross-model, cross-service protocol. The duplicated labor was already visible: more platforms had to describe tools, select tools, pass parameters, and return results, while the same integration still needed rewriting per vendor. Months later, Anthropic's MCP would attack discovery and connection between hosts and external systems. Tool Use made “how the model chooses tools” concrete; it was not a trailer for that standard. The layers differ and should not be collapsed.

The GA moment does not rest on a spectacular demo. It left a quiet engineering fact: probabilistic models at different vendors began to respect similar interface boundaries. After a model swap, tool definitions, structured parameters, and result return remained familiar work. Whether the connection layer itself could be reused waited for the next protocol.
