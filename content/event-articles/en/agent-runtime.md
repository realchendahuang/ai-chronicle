---
eventId: agent-runtime
form: "Archaeology of a developer stack"
narrativeCenter: "The Responses API and Agents SDK name tool loops, handoffs, guardrails, and tracing—long buried in application code—as platform capabilities"
emotionalSource: "The star of the release is not a talkative model but the glue code no one used to show"
avoid:
  - "Treating SDK primitives as proof that agents already work reliably"
  - "Collapsing the Responses API and Agents SDK into one layer"
  - "Using multi-agent quantity to hide tracing, permissions, and failure handling"
---

Before “agent” became a product name, it was often a lengthening loop inside an application: send the question to a model, parse the tool it wants, run the tool, stuff the result back into context, ask again. Timeouts, retries, permissions, logs, and error handling had to sit beside that loop. Demos highlighted the model's answer. The parts that made the demo runnable again usually had no name.

On 11 March 2025, OpenAI released the Responses API and an open-source Agents SDK and began naming those middle layers. The Responses API unified text output and tool calling and offered built-in web search, file search, and computer use. The Agents SDK turned Agent, Handoff, Guardrail, and Tracing into composable primitives. The first addresses how a model responds and uses tools; the second addresses how applications organize roles and execution. They shipped together without being the same abstraction: one is a platform response and tool interface; the other is an application-side orchestration library.

Built-in tools in Responses admit that common agent needs should not be reintegrated from zero each time. Web search raises provenance; file search raises index permissions; computer use raises GUI fragility and irreversible action risk. The open-source Agents SDK spreads handoff, guardrail, and trace as first-class ideas into forks and internal scaffolds. Migration notes mark Assistants' object model as an old map. March 2025 is a naming ceremony for the runtime layer.

“Handoff” sounds like role play and, at runtime, is a concrete decision: should the current agent pass task and context to another better suited agent? “Guardrail” is not only a safety prompt; it executes checks around input, output, or tool actions. “Tracing” is plainer—when a system called a model five times, three tools, and succeeded on a second attempt, developers need to see the path to know whether the error lived in model judgment, tool return, or orchestration code. An agent demo can look fine without tracing. A production system goes blind on the first overnight failure without it.

These primitives do not automatically make agents reliable. Built-in web search can still fetch unsuitable material; computer use still involves permissions and irreversible actions; handoffs can drop information; traces only record failures that already happened. The platform supplies more consistent construction materials, not a finished boundary of responsibility. Applications still define permissions; products may still need user confirmation; irreversible operations still need extra gates.

The launch page also pointed a migration path from the Assistants API. The detail is easy to miss and tells the larger story: agent runtimes were still rewriting their own abstractions—how much state to host, how much control applications keep, how tool results re-enter the model. Assistants hosted conversation and run state heavily; Responses and the Agents SDK returned more of the loop to interfaces developers could compose. Each choice has a bill.

What changed was the layer at which model platforms compete. Developers once compared which model answered better. When work spans files, the web, the desktop, and multiple sub-roles, whether interfaces retain reasoning process, whether tools connect easily, and whether errors can be traced enter the choice. Glue that once lived in frameworks and business code entered the provider product stack. The historical mark of the Responses API and Agents SDK is that the industry finally named a problem long hidden inside applications: running an agent is engineering of interfaces, observability, and boundaries—not one clever generation.
