---
eventId: mcp
form: Short history of a protocol
narrativeCenter: "MCP tries to replace the multiplying private connections between AI hosts and external systems with a reusable boundary"
emotionalSource: "Ecosystems are often slowed not by a shortage of intelligent models but by many people rewriting the same inconspicuous adapters"
avoid:
  - "Writing prospective adoption as completed industry unification"
  - "Claiming the protocol itself solves authorization or prompt injection"
  - "Confusing MCP with model-level function calling"
---

Anthropic released the Model Context Protocol on 25 November 2024 with an open specification, SDKs, local-server support in Claude Desktop, and example servers. Its target was visible in the multiplication of private adapters. One application connected to one source is manageable; ten hosts paired independently with ten services create a matrix in which every connection must explain permissions, objects, and return formats again.

MCP divided that connection into named responsibilities. A server exposed capabilities. A client established the connection and negotiated them. The host retained the model interaction, the user interface, and decisions about permission. Servers could offer tools, read-only resources, and reusable prompts; JSON-RPC carried the messages.

The hoped-for economy was straightforward. A GitHub, Postgres, or local-files integration could be implemented once and used by multiple compatible hosts instead of being rewritten for every model application. The protocol did not prescribe what the model should think about the retrieved information. It gave software a shared way to announce and exchange what was available.

Function calling addressed a neighboring but different layer. It specified how a model could choose a function and emit arguments. MCP concerned discovery, connection, capability description, and the return path between a host and an external provider. One resembled a calling convention; the other attempted to standardize the socket. They could operate together, and neither guaranteed that whatever was connected was trustworthy.

At launch, Anthropic listed prebuilt servers for services including Google Drive, Slack, GitHub, Git, Postgres, and Puppeteer. It also named early adopters or collaborators such as Block, Apollo, Zed, Replit, Codeium, and Sourcegraph. These were participants and plans documented by the release, not proof that a standard had already won. A protocol becomes infrastructure only through independent implementations, sustained compatibility, and a specification that survives extension without fragmenting into dialects.

Convenience expanded the security boundary at the same time. A server allowed to read files, query a database, or execute a command may return hostile content, encourage the model to invoke another tool, or receive authority the user did not understand granting. MCP described communication; it did not perform trust. Consent prompts, least privilege, source marking, isolation of results, and defenses against prompt injection remained duties of hosts and implementers.

Protocols rarely receive the applause reserved for models. When they succeed, an adapter is never written, an integration continues working after the host changes, and eventually the connecting layer becomes too ordinary to mention. MCP made a bid for precisely that kind of disappearance: a future in which attaching an AI application to the outside world no longer begins with a private agreement between every pair of systems.
