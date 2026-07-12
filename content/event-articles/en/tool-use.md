---
eventId: tool-use
form: Responsibility inside one call
narrativeCenter: Claude Tool Use makes “the model proposes; the application executes” explicit through structured content blocks
emotionalSource: Excitement as natural language reaches business systems, checked by the need to pause before side effects occur
avoid:
  - Writing it as a simple chase after another platform's function calling
  - Equating it prematurely with MCP
  - Confusing model tool selection with application execution
---

Consider a user saying, “Check this order, and cancel it if it has not shipped.” One natural-language sentence contains two very different actions. Looking up status only reads. Canceling produces a business consequence. A model can understand the sentence and decide to query before changing anything, but free-form model text should not be what directly touches the order system.

On 30 May 2024, Anthropic announced that Claude Tool Use was generally available. Developers described client-provided tools with JSON Schema. Claude selected one or more tools from the conversation and returned a `tool_use` content block containing a name and structured arguments. The application executed the operation and sent the result back. The model proposed an intention; the client owned the action. That division was the center of the feature.

Structured arguments were more reliable than trying to extract JSON from prose, but they did not eliminate mistakes. A model could still choose the wrong tool, supply an order number that did not exist, or act too early when information was missing. A schema could constrain fields and types. It could not decide whether the user was authorized to cancel, or whether this action required another confirmation. The closer a tool came to side effects, the more authentication, idempotency, timeout handling, and audit had to remain outside the model.

General availability put paths such as parallel tool calls and image-informed tool use into stable product documentation and examples. Customer support showed the value clearly: a model interpreted the request, queried a system, and explained the next step using returned data. It also created a new class of testing. Teams had to test not only whether an answer sounded correct, but whether the product clarified, retried, or stopped after wrong tool choice, invalid arguments, a timeout, or a missing result.

Claude Tool Use occupied a different layer from the later MCP. Tool Use defined how a model expressed a structured call within a conversation. MCP addressed how a host discovered and connected to external tools. One made the request legible; the other standardized the connection. Combining the layers made it harder to locate responsibility for permission and error handling.

The GA release did not hand Claude a ring of keys to business systems. It made the act of requesting a key machine-checkable. A mature integration is not one in which the model never approaches the wrong door. It is one in which the door still does not open automatically when it does.
