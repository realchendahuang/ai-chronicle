---
eventId: function-calling
form: Interface history
narrativeCenter: How JSON Schema cut a checkable seam between probabilistic models and deterministic software
emotionalSource: The brittleness of parsing free text set against the engineering order of structured calls
avoid:
  - Anthropomorphizing function calling as the model learning to use the world
  - Letting agent rhetoric bury interface detail
  - Confusing structured output with execution authority
---

Before function calling shipped, many language-model applications hid a nervous strip of parsing code.

Developers asked the model to answer in a private convention: function name first, then arguments, preferably nothing else. Most of the time it complied. Sometimes it added polite explanation, dropped a field, or wrote natural language where a number belonged. Applications reached for regexes, string splits, and retry prompts to force a variable output into a software entrance that needed stability. Demos ran. Production systems grew brittle in those occasional failures.

Unlike chat plugins, function calling primarily serves developer backends: users may never see JSON, only UI rendered from call results. That invisible tool layer lowers end-user complexity and concentrates security review on the application owner. Once the interface hardens, ecosystems stack state machines and retries on it. June 2023's contribution was a brick hard enough to build on—the minimal kernel later nicknamed an agent loop.

On 13 June 2023, OpenAI added function calling to the 0613 versions of GPT-4 and GPT-3.5 Turbo and documented the API surface in the same update cycle. Developers supplied function names, descriptions, and JSON Schema. The model could return not only free text whose intent had to be guessed, but a function name and structured arguments. The application still validated parameters, decided whether to execute, actually called a database or external service, and returned results to the model. The model proposed a call; software held execution—the boundary that mattered. Launch materials also discussed multi-turn tool loops and related patterns; later versions would revise details without changing the core contract: structured intent is not authorization to act.

The language model did not become deterministic. A well-formed argument could still name the wrong city, misread a time, or create a security problem. JSON solves how a call is expressed, not whether the call is sensible. Prompt injection did not vanish; when external content can influence model choice, authorization, validation, and audit still belong outside the model. Structure is not trustworthiness. It is a shape that programs can check—missing fields rejected, type errors blocked, unknown function names discarded.

The interface's weight came from restraint. Function calling did not invent search, databases, or business APIs, and it did not run application code. It arranged a seam between two different kinds of system: the language model handling fuzzy intent, conventional software obeying types, permissions, and execution rules. Once the seam was clear enough, weather lookups, order operations, private retrieval, and code execution could enter the same loop without pretending free text was already a program.

Later “agent” became the louder name, tools multiplied, calls ran in parallel, and frameworks managed state and retries. The Assistants API, Responses API, and other vendors' tool-use surfaces would reuse the same idea at different layers of abstraction. Many complex systems still begin with this plain contract: here are tools, here are their parameters; the model may choose, the application must judge. Progress sometimes looks like a model that can say more. Sometimes it looks like software finally knowing which part of what the model said can be taken seriously next.
