---
eventId: gpt-5
form: Short commentary on product routing
narrativeCenter: "GPT-5 moves the choice between a quick answer and deeper reasoning behind the interface, allowing the system rather than the user to allocate computation"
emotionalSource: "A product change that appears to remove a menu quietly changes who decides where time and compute will be spent"
avoid:
  - "Adding undocumented benchmark figures where the source ledger does not support them"
  - "Mistaking one interface for one fixed model or one fixed reasoning depth"
  - "Elevating a provider's product framing into a final theory of intelligence"
---

GPT-4 and o1 had taught users to make a technical choice before asking an ordinary question. One family answered quickly; the other spent longer on difficult reasoning. The selector exposed a real difference, then required the person at the keyboard to predict how much computation an unanswered question deserved.

GPT-5, released on 7 August 2025, moved much of that prediction into ChatGPT. OpenAI described a system containing a fast model for most requests, a deeper reasoning model for harder work, and a real-time router between them. Conversation type, complexity, tool requirements, and explicit user intent could affect the route. After usage limits were reached, a smaller model could take over. A single product name therefore covered unequal computational paths.

The API drew a different boundary. Developers received separate GPT-5, GPT-5 mini, and GPT-5 nano models rather than the ChatGPT router itself. They still selected a price and latency tier, and could configure `reasoning_effort` and `verbosity`. ChatGPT tried to conceal scheduling from a general user; the API returned part of that scheduling problem to the application.

OpenAI's launch materials emphasized coding, tool use, mathematics, and professional tasks. The reported scores were vendor evaluations under particular settings, evidence of how the company wanted the family to be measured rather than universal guarantees independent of prompts, scaffolding, and grading. The more consequential shift lay in the unit being evaluated. A model was increasingly expected to decide when to reason, call tools in sequence, and carry work to completion, not merely compose a persuasive first answer.

Routing removed a switch and created a less visible negotiation. A ChatGPT user might not know which path a response took, why one request waited longer than another, or where a fallback after a usage limit altered the result. The old model menu had been imperfect, but it made some differences legible. The router turned them into platform policy.

GPT-5 did not make model choice disappear. It divided the choice between two relationships: ChatGPT allocated compute on the user's behalf, while API customers continued to choose models and reasoning budgets. The interface became quieter. The decision about time, cost, and effort did not.
