---
eventId: mcp
form: Protocol release note
narrativeCenter: Host / Client / Server writing tool discovery and invocation as a reusable client–server interface
emotionalSource: Relief when integrations need not be rewritten per host—and sobriety that trust and permission stay at the boundary
avoid:
  - Declaring the release an accomplished industry standard
  - Claiming MCP automatically solves prompt injection and malicious servers
  - Collapsing it with function calling into one layer
---

Function calling solved how a model emits tool arguments. It did not specify how editors, desktop assistants, and data sources discover, connect, and authorize one another. Each host still kept its own plugin format. Build an integration once, switch hosts, and often build again.

On 25 November 2024, Anthropic released the Model Context Protocol (MCP). It uses JSON-RPC and distinguishes Host, Client, and Server: a Server may declare tools, read-only resources, and prompt templates; a Client handles connection and capability negotiation; the Host keeps user permissions and control of model interaction. In principle one integration can be reused by many compatible apps; tool ecosystems need not be rewritten around a single model vendor. Prefabricated servers and early adopters or collaborators listed at launch are participants and plans, not proof the protocol had become an industry standard.

A protocol is not a safety certificate. Malicious servers, over-broad grants, and prompt injection remain on the host–user boundary. A standard lives by independent implementations, host compatibility, and whether the spec survives extension without fracturing—none of which a publisher can unilaterally declare. MCP also does not sit on the same layer as a `tool_use` content block inside one conversation: one governs connection and discovery; the other how a model emits structured calls in a session. Collapse the two into one word, and debugging loses its owner.

Reading the protocol in late autumn 2024 means seeing an effort to lift integration problems from product dialect into an interface sketch—not a finish line. Sketches matter because later arguments at least have a diagram to point at and revise: trust models, permission prompts, and server lists can share one coordinate system.

A protocol text can specify message shape; it cannot specify goodwill. Hosts still decide which servers to trust by default, how to show permissions, and how to stop after prompt injection. Early-adopter lists prove willingness to try, not that the ecosystem has locked onto this standard. Writing MCP as “already unifying the tool world” mistakes a launch-day sketch for a finished plan.

That the Host keeps permission control is the easiest sentence in the protocol to ignore. Without it, a Server list becomes an attack-surface list. MCP’s restraint is claiming to solve connection, not trust. Trust still needs hosts to supply product and policy.

JSON-RPC and capability negotiation let implementations split by language and process without shared memory. That is the minimum work a protocol layer should do. After the minimum, ecosystems can compete on server quality and host experience rather than private plugin formats.
