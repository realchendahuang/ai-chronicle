---
eventId: openai-plugins
form: Archaeology of a short-lived product
narrativeCenter: A plugin catalog let ChatGPT select external services in one interface and pushed authorization and external-content risk in front of users
emotionalSource: Surprise as chat reaches live information, computation, and transactions, followed by unease when it crosses boundaries
avoid:
  - Writing a limited test as a mature mass ecosystem
  - Dismissing exposed problems because the catalog retired
  - Replacing narrative with a partner list
---

In early 2023, ChatGPT resembled a closed conversation room. It could plan a trip without knowing today's fare, explain a formula while making a simple arithmetic mistake, and recommend a service without taking the next step. The conversation was fluid, but the world outside remained beyond the training cutoff and the clipboard.

On 23 March, OpenAI opened ChatGPT plugin testing to users from a waitlist. A browsing plugin brought live web information, Code Interpreter handled calculation and execution, and third-party services such as Expedia and Wolfram connected their capabilities to the conversation. A user enabled plugins first; the model then selected a tool and assembled a call. The chat box appeared able not only to answer but to reach into an external system.

Developers described a plugin's identity with a manifest hosted on its domain and described the interface with an OpenAPI specification. Documentation previously intended mainly for people acquired another reader: the model had to understand available operations and their arguments. Service self-description, tool discovery, and model selection were compressed into one product path. That idea outlived the catalog itself.

The problems entered through the same path. When a model read an external page, text on the page could contain adversarial instructions. When a plugin queried or acted on a service for a user, authorization scope and confirmation timing became critical.

A convenient call passed through model judgment, third-party output, and user permission. Ambiguity at any point could produce an unintended action. Plugins connected capability to the conversation and connected the hostility of the open internet at the same time.

Early access moved through a waitlist and limited testing rather than an immediate universal rollout. The plugin catalog also did not become the general standard. Function calling, GPT Actions, built-in browsing, and code execution decomposed it into more basic capabilities as the directory form receded. The disappearance of the shelf did not remove the seams. How a tool is described, who approves its use, and whether external output can be trusted continued into later agent products and protocols.

ChatGPT plugins were a brief experiment in opening the door. The hinge and label later changed, and the same catalog no longer defined the entrance. But after that opening, conversational assistants could no longer pretend that only clean data waited outside. Once a system can reach through the doorway, it also has to learn when to stop its hand.
