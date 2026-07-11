---
eventId: mcp
form: Short essay on protocol history
narrativeCenter: "MCP tries to rewrite the multiplying connections between every AI app and every external system into reusable protocol boundaries"
emotionalSource: "What often slows an ecosystem is not missing smart models but countless people rewriting the same unglamorous adapters"
avoid:
  - Writing adoption prospects as finished industry unification
  - Claiming MCP automatically solves permissions and prompt injection
  - Collapsing MCP with model function calling
---

Connecting one AI application to one data source is usually not hard. Connecting ten applications each to ten data sources is no longer twenty endpoints and a few authentication snippets. Every host has a plugin format; every service has objects and permissions; every pair re-explains what is readable here, what is allowed there, and in what shape results return.

On 25 November 2024, Anthropic released the Model Context Protocol (MCP) against that multiplication problem.

Client/server split lets ecosystems grow along two lines: hosts implement clients; tool providers implement servers. Example servers show expressible work types, not enterprise completeness. Early adopter lists are social capital; standard pressure comes when a second and third host share a handshake without private dialect. Local servers with filesystem and shell power are especially dangerous; default-trusting community servers replays plugin-era lessons. MCP bets connection tax can fall if trust tax is collected.

The protocol uses a client–server structure: an MCP server exposes capabilities; a client connects and negotiates; a host carries the model, user interaction, and permission decisions. Servers can offer tools, read-only resources, and prompt templates; the message layer uses JSON-RPC. A GitHub, Postgres, or local-file integration can then be reused by multiple compatible hosts without rewriting for every model UI. Anthropic also opened the specification, SDKs, local server support in Claude Desktop, and a set of example servers.

This is not the same problem function calling solves. Function calling specifies how a model chooses tools and emits parameters. MCP cares more about where tools are discovered, how a host connects, how capabilities are described, and how results travel a common interface. One is call syntax; the other tries to specify the socket. They can work together; neither decides what sits behind the socket. Writing MCP as “another tool-use button” misses the layer it wants to standardize.

At launch Anthropic listed prefabricated servers for Google Drive, Slack, GitHub, Git, Postgres, and Puppeteer, and named early adopters or collaborators including Block, Apollo, and tools such as Zed, Replit, Codeium, and Sourcegraph. Those are launch participants and plans, not proof the protocol is already an industry standard. A standard lives by later independent implementations, cross-host compatibility, and whether the spec survives extension without shattering—none of which a publisher can declare alone.

Connection is never only convenience. A server that can read files, query databases, or run commands can also return malicious content, induce other tool calls, or obtain permissions a user never truly understood. MCP defines a communication boundary; it does not complete trust judgment for the host. Authorization prompts, least privilege, provenance, result isolation, and defenses against prompt injection still fall on implementers and users. A universal socket makes devices easier to plug in and makes plugging in the wrong device more serious.

Launch day delivered a specification, SDKs, and examples—not a mandate that the industry switch. Whether MCP becomes a default connection layer depends on later independent implementations staying compatible and on permission UX that lets ordinary people understand what they authorize.

Protocol history rarely has a glowing model demo. Success often looks like glue code no longer written, an integration that still works after a host swap, or a protocol that finally disappears from attention. That invisibility is what MCP seeks: connections between AI and the outside world that need not begin as private conventions every time. Late 2024 delivered a specification and first implementations, not a finished ecosystem—the latter is paid for in compatibility and time.
