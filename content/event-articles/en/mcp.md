---
eventId: mcp
form: short protocol history
narrativeCenter: MCP tries to rewrite the multiplying connections between AI apps and external systems as reusable protocol boundaries
emotionalSource: what slows ecosystems is often not missing smart models, but countless people rewriting the same quiet adapters
avoid:
  - casting adoption prospects as finished industry unification
  - claiming MCP automatically solves permissions and prompt injection
  - conflating MCP with model function calling
---

Connecting one AI application to one data source is usually not hard. Ten applications each connecting to ten data sources is no longer twenty endpoints and a few auth snippets. Every host has its own plugin format; every service has its own objects and permissions; every pair must re-explain what is readable, what is allowed, and in what shape results return.

On 25 November 2024 Anthropic released the Model Context Protocol (MCP) for that multiplication problem.

The protocol uses a client–server structure: an MCP Server exposes capabilities; a Client connects and negotiates; a Host carries the model, user interaction, and permission decisions. Servers can provide tools, read-only resources, and prompt templates; the message layer uses JSON-RPC. A GitHub, Postgres, or local-file integration can then be reused across compatible hosts without rewriting for every model UI. Anthropic also opened the specification, SDKs, local-server support in Claude Desktop, and a set of example servers—documents, chat, code, browser automation—showing what kinds of work the protocol can express, not that those integrations were enterprise-complete.

This is not the same problem function calling solves. Function calling specifies how a model chooses tools and emits parameters; MCP cares more about where tools are discovered, how a host connects, how capabilities are described, and how results travel over a common interface. One is call syntax; the other tries to specify the socket. They can work together, and neither decides what plugs in behind the socket. Writing MCP as “another tool-use button” misses the layer it wants to standardize.

At launch Anthropic listed prefabricated servers for Google Drive, Slack, GitHub, Git, Postgres, and Puppeteer, and named early adopters or collaborators such as Block, Apollo, and Zed, Replit, Codeium, and Sourcegraph. Those were launch participants and plans, not proof the protocol had become an industry standard. A standard lives by how many independent implementations follow, whether hosts stay compatible, and whether the specification survives extension without fracturing—none of which a publisher can unilaterally declare.

Connection is never only convenience. A Server that can read files, query databases, or run commands can also return malicious content, steer a model into other tools, or gain permissions the user never truly understood. MCP defines a communication boundary; it does not make trust decisions for the host. Authorization prompts, least privilege, source labeling, result isolation, and prompt-injection defenses still fall to implementers and users. Compared with function calling, MCP pulls “tool install and discovery” into a system layer outside the model chat: users or admins first decide which Servers to trust; the model then chooses among tools already exposed. That layering resembles OS permission models and inherits supply-chain risk—a malicious Server is a new attack surface.

Protocol history rarely has dazzling demos. Success often looks like glue code no longer written, an integration that still works after a host swap, or a protocol people finally stop noticing. Late 2024 delivered a specification and first implementations, not a finished ecosystem—the latter is bought with compatibility and time. Convenience and attack surface belong in the same sentence.
