---
eventId: openai-plugins
form: Product archaeology
narrativeCenter: A short-lived catalog revealing how a conversational model might choose among external services
emotionalSource: Early excitement around browsing, calculation, and transactions disturbed by permissions and prompt injection
avoid:
  - Narrating the plugin directory as the triumph of a durable ecosystem
  - Mistaking a short product life for historical insignificance
  - Substituting a list of launch partners for an account of the product idea
---

ChatGPT plugins imagined the internet as a directory the model could read.

In early 2023, the chat product was still largely bounded by its trained knowledge and the text supplied in a conversation. It could propose a journey but not inspect a current fare; describe a calculation and make a numerical mistake; mention a restaurant without placing a reservation. Plugins opened different doors. Browsing supplied recent web information. Code Interpreter carried out computation. Third parties such as Expedia and Wolfram exposed services the model could select after a user enabled them.

The connective tissue was almost quaint: a manifest identified the plugin, and an OpenAPI description explained its operations. Documentation originally written so human developers could integrate an API now had another reader. Names, parameter descriptions, and scope influenced whether a language model selected the right operation and filled it correctly.

The result looked briefly like an app store for a conversational operating layer. It behaved more like a market erected before its civic rules were finished. As listings multiplied, discovery and review grew difficult, and many plugins offered near-duplicate purposes. More serious problems followed from the same mechanism that made the catalog useful. If a model could read an external page and decide what to do, instructions hidden in that page could compete with the user's request. If it could act through an authorized service, permission was no longer a box checked once; it had to survive the model's interpretation of each step.

A conventional program has a control flow engineers can trace. A plugin-enabled assistant inserted a probabilistic judgment into that flow. It might choose a tool, omit one, or construct a call from an imperfect reading of the conversation. The directory made these judgments accessible to a mass audience before the surrounding security model had matured.

The plugin catalog did not become the permanent universal interface. Function calling, GPT Actions, and later agent systems decomposed the idea into lower-level contracts. The storefront receded. Yet its historical value lies partly in that impermanence. Products often reveal the future in the wrong shape.

Plugins correctly anticipated that a chat window could become an entrance to search, computation, and external transactions. They treated the difficult part as arranging tools in a catalog. Experience suggested otherwise. The harder problem was preserving a correspondence among a person's intention, a model's interpretation, a software service's permissions, and the action finally taken.

The directory ceased to be the central interface. Tool selection, argument validation, user authorization, and untrusted external responses remained concrete integration problems in later agent systems.
