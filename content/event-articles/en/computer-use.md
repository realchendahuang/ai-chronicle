---
eventId: computer-use
form: product-day report
narrativeCenter: when tools stop being only developer-registered JSON functions and become any button or field on a screen
emotionalSource: the thrill of a self-moving cursor in a demo, beside mis-clicks, overreach, and experimental error
avoid:
  - writing mature autonomy that replaces human operators
  - ignoring official limits on error rates and risk
  - conflating this with browser-only plugins or macro scripts
---

On 22 October 2024, Anthropic’s announcement page put two items side by side: an upgraded Claude 3.5 Sonnet, and a public beta called computer use. The latter was described in deliberately human terms—look at a screen, move a cursor, click buttons, type text. In the demo, the model switched tabs, gathered information, and filled a form. The model proposed the actions; the environment was still a computer under authorized control. For developers already used to function calling and Tool Use, the jump was not “can it return JSON?” It was that the tool set suddenly became the whole graphical interface.

Until then, agents mostly lived inside developer-supplied inventories: search APIs, calendars, databases, shell commands. Software outside the list—internal admin panels, desktop finance tools, GUI-only legacies—needed a new integration or brittle RPA. Computer use treats screenshots as observation and pointer coordinates plus keystrokes as actions, so the same multimodal model advances a task in a loop of see pixels, choose an action, see a new screenshot. It remains kin to tool calling: the client executes and enforces permission; the model proposes where to click and what to type. The difference is that the action space is a general UI, not a finite schema.

Anthropic’s companion research note did not hide the ugly parts. The capability was labeled experimental: slow, error-prone; while recording demos the model could mis-click and stop a recording, or wander off into photos of Yellowstone. On OSWorld-style evaluations the company reported about 14.9% versus roughly 7.7% for the next model in the same category, still far below human scores often cited near 70–75%. Numbers move with versions; the order of magnitude still holds: the beta opened an interface and a narrative, not a reliable digital employee. Safety talk escalated with the keys—pointer permissions mean phishing pages, prompt injection, and hostile workflows can produce real clicks and real sends. Sandboxes, human confirmation, and least privilege stop being optional.

Placed on the tool timeline, the line is clear. OpenAI’s function calling (2023) and Claude Tool Use GA (May 2024) first made structured arguments an industry default; the Responses API and Agents SDK later packaged built-in tools and tracing. Computer use is a radical extension of the same line: when “tool” means “software a human already knows how to use,” integration cost falls and the blast radius grows. It is not only a browser plugin; the metaphor is broader desktop control. It is not classical RPA alone; policy is generated on the fly from pixel context by a large model, not only a replayed recording.

For engineering teams the checklist is concrete: isolated VMs, audit logs, no unconfirmed transfers or outbound mail, tight account scope. For product narratives, desktop agents became a question frontier models must answer—not only whether they chat, but whether they may, and can, click on a user’s behalf. What shipped on 22 October 2024 was a public beta door and an explicit immaturity claim. The cursor started moving; the responsibility boundary had to be drawn with it.
