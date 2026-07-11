---
eventId: function-calling
form: interface history
narrativeCenter: how JSON Schema drew a checkable seam between probabilistic models and deterministic software
emotionalSource: the fragility of early free-text parsing set against the engineering order of structured calls
avoid:
  - anthropomorphizing function calling as a model learning to use the world
  - covering interface detail with Agent grand vision
  - mistaking structured output for execution permission
---

Before function calling shipped, many language-model applications hid a nervous little parser.

Developers asked the model to answer under a convention: function name first, then parameters, preferably nothing else. Most of the time it complied. Sometimes it added a polite explanation, dropped a field, or wrote a number as natural language. Applications reached for regular expressions, string splits, and retry prompts to force a changeable output into an entry software needed to be stable. Demos could run. Production systems grew brittle on those “sometimes.”

On 13 June 2023 OpenAI added function calling to the 0613 GPT-4 and GPT-3.5 Turbo models. Developers supplied names, descriptions, and JSON Schema to the API; the model could return not only free text whose intent humans had to guess, but a function and structured arguments. The application still validated parameters, decided whether to execute, actually called databases or external services, and sent results back. The model proposes a call; software holds execution—that boundary matters. Release materials also discussed parallel and multi-turn tool loops. Later versions would change interface details; the core contract did not: structured intent is not authorization to run.

The application loop is usually: receive a `function_call` → execute locally or remotely → return results as role messages → ask the model to summarize or call again. Errors split into two layers: schema failures can be retried or rejected; business failures require a decision about whether the model sees the error text. That loop would later be called the minimal kernel of an agent. In June 2023 its name was plainer: function calling.

It did not make language models deterministic. A well-formed parameter can still pick the wrong city, misread a time, or create a safety problem. JSON solves how a call is expressed, not whether the call is sound. Prompt injection did not vanish; when external content can steer model choices, authorization, validation, and audit still sit outside the model. Structure is not trust. It only gives errors a shape programs can check—missing fields rejected, type errors blocked, unknown function names discarded.

Unlike chat plugins, function calling first served developer backends: users might never see JSON, only UI rendered from call results. That invisible tool layer lowers end-user complexity and concentrates security review on the application owner. The 0613 model update is often remembered alongside JSON mode and system-message improvements—weeks when tool-facing interfaces clustered.

The interface’s weight is its restraint. Function calling did not invent search, databases, or business APIs, and it does not run application code. It arranges a seam between two different systems: language models handle fuzzy intent; ordinary software keeps types, permissions, and execution rules. Later “Agent” became the louder name; tool counts rose; calls could run in parallel; frameworks managed state and retries. Many complex systems still begin with this plain contract: here are tools, here are their parameters; the model may choose, the application must decide. Progress sometimes looks like models saying more. Sometimes it looks like software finally knowing which part of the model’s speech can be taken seriously.
