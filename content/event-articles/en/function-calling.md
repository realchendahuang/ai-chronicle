---
eventId: function-calling
form: Interface history
narrativeCenter: JSON Schema defining an inspectable seam between probabilistic language and deterministic software
emotionalSource: Relief after brittle free-text parsers, tempered by the knowledge that valid structure is not valid intent
avoid:
  - Personifying the feature as a model learning to use the world
  - Letting the grand language of agents replace the actual interface contract
  - Confusing a structured request with permission to execute it
---

Before function calling, many language-model applications depended on a parser nobody quite trusted.

Prompts demanded a rigid reply: write the function name, then the arguments, add no explanation. Most outputs complied. Some wrapped the answer in prose, omitted a field, changed a key, or placed a sentence where a number belonged. Regular expressions and string splitting attempted to repair the variance. The demo worked; the exception paths accumulated.

In June 2023, OpenAI added function calling to GPT-4 and GPT-3.5 Turbo. An application could send function names, descriptions, and JSON Schemas. The model could respond with a selected function and structured arguments rather than a paragraph from which an intention had to be inferred.

The application still had work to do. It validated the arguments, chose whether the operation should be allowed, executed the database query or external API, and returned the result to the model if another response was needed. Function calling did not grant the model a database connection. It formalized a request across a boundary.

That distinction protects the feature from its own mythology. Well-formed JSON may contain the wrong city, the wrong date, or an unsafe instruction. Schema validation answers whether an object has the expected shape, not whether the model understood the person who asked for it. Prompt injection remains possible wherever untrusted text can influence tool selection. Authorization, policy, and audit still belong outside the model.

The improvement came from this modest scope. Language models are useful where requests are variable and underspecified. Traditional software is useful where types, permissions, and execution rules must hold. JSON Schema kept those roles separate and created a seam at which each could hand over a bounded artifact.

Weather services, private retrieval systems, order APIs, and execution environments could now join a common loop without pretending prose was a program. Later agent frameworks would add parallel calls, retries, state, and long-running tasks. Their diagrams became elaborate. Near the middle remained the same contract: these are the tools, these are their arguments, the model may propose one, and the application must decide what happens next.

Some advances are measured by how much more a model can say. Function calling was an advance in knowing exactly which part of an answer software was prepared to take literally.
