---
eventId: tool-use
form: Prehistory of an emerging protocol layer
narrativeCenter: Claude's structured calls showing that functions and JSON Schema had become a shared grammar across frontier providers
emotionalSource: The order of recognizing a familiar software boundary in another model API and the incompleteness of provider-specific conventions
avoid:
  - Framing the release as a simple imitation of OpenAI function calling
  - Reading MCP backward into a feature that preceded it
  - Confusing model tool selection with application-side execution and authority
---

A capability starts to resemble infrastructure when changing the model no longer makes the workflow unrecognizable.

Define a tool by name and description. Specify its arguments with JSON Schema. Let the model select one or more tools in response to an untidy human request. The application executes the operations and returns their results. When Anthropic made Claude tool use generally available in May 2024, this loop already had the feeling of a common grammar.

The grammar was not a standard. Providers differed in prompts, result formats, error handling, and parallel calls. Claude's release included the ability to request multiple tools and examples involving customer support and image input. These examples moved the feature away from an abstract agent spectacle and toward ordinary work: look up an order, retrieve current information, interpret visual material, continue with a controlled operation.

Control remained outside the model. Claude generated a structured request; it did not thereby receive credentials to a database or an account. The client application decided what to expose, checked the arguments, performed the call, and managed authorization. A model's selection could still be mistaken even when the JSON was impeccable.

When function calling belonged to one vendor, it could be treated as a proprietary convenience. Once several leading model platforms exposed similar seams, developers could design frameworks around a more durable division of labor. Language models interpreted variable intention. Software tools handled live data and bounded actions. Agent code could begin moving between providers without returning to prose conventions and regular-expression parsers each time.

Similarity made the remaining differences more expensive. How should a tool advertise itself? Who owns authentication and context? In what form should results travel back? Can the same server be discovered by unrelated model clients? Repeating the same integration for each platform created pressure for another layer.

Claude Tool Use did not provide that cross-model, cross-service layer, and it should not be relabeled as MCP before MCP existed. It established a provider-specific way for Claude to call client tools. Its place in protocol history comes from the repeated integration work it made visible. Later efforts, including MCP, would address parts of that broader connection problem; Tool Use was evidence of the demand, not a preview of one inevitable standard.

By 2024, the handles on the tools were starting to share a shape. The next argument would be about the socket they should all fit.
