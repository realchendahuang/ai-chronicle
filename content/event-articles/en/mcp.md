---
eventId: mcp
form: An interface-boundary note
narrativeCenter: MCP separates host, connection, and capability provider so that one integration can potentially be reused across applications
emotionalSource: Relief at avoiding another private plugin rewrite, tempered by the need for clearer trust as connection gets easier
avoid:
  - Treating release day as completed industry unification
  - Claiming the protocol automatically solves prompt injection or malicious servers
  - Collapsing it into model-level function calling
---

By 2024, models could already request functions with structured arguments. The tiring work lived outside the function. The same database might need one plugin for a desktop assistant, another for an editor, and a third for a new agent framework. The underlying tool had not changed, but discovery, connection, and permission interfaces were rebuilt around every host.

On 25 November, Anthropic released the Model Context Protocol. MCP used JSON-RPC to establish a client-server interface and divided the roles. A Server exposed tools, read-only resources, or prompt templates. A Client managed a connection and negotiated capabilities. A Host retained control over model interaction and user permission. The division pursued a practical goal: a capability provider should not have to invent a new plugin format for every AI application. This was not the same thing as a model making one tool call. A `tool_use` block or function call describes how the model says, inside a conversation, “I want this tool with these arguments.” MCP addresses how a host discovers a tool, connects to it, and exchanges capability information. One resembles a grammatical request; the other standardizes the socket and line carrying it. Grammar without connection cannot reach the tool. Connection without a model-call format still leaves the application translating intent.

The protocol did not standardize trust along with transport. A Server could declare a capability without deserving trust. A Host could connect without granting write access by default. Malicious servers, excessive authorization, and prompt injection still required permission prompts, isolation, audit, and stop mechanisms at the host boundary. MCP made integration easier and could make an attack surface grow faster, which is why host control was not an implementation footnote but a security boundary.

Prefabricated servers and early participants at release showed willingness to experiment, not that the standard had already won. Protocol standing emerges from independent implementations, compatibility, and long-term evolution. Whether new capabilities break old clients, and whether different hosts present permissions consistently and intelligibly, matters more to ecosystem cohesion than a launch list.

MCP's value did not depend on claiming to solve everything. It first drew a common interface around repetitive wiring so tool providers and hosts could argue over the same diagram. Once the plug becomes standard, what sits behind the wall—and who controls the switch—has to become more visible, not less.
