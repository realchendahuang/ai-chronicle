---
eventId: agent-runtime
form: developer-stack archaeology
narrativeCenter: Responses API and Agents SDK name tool loops, handoffs, guardrails, and tracing—long buried in app code—as platform capabilities
emotionalSource: a release whose protagonist is not a talking model but the glue code no one used to showcase
avoid:
  - treating SDK primitives as proof that Agents already work reliably
  - conflating the layers Responses API and Agents SDK each own
  - covering tracing, permissions, and failure handling with multi-agent spectacle
---

Before Agent became a product name, it was often just a loop growing longer inside an application: send a question to the model, parse the tools it wants, run the tools, stuff results back into context, ask again. Timeouts, retries, permissions, logs, and error handling sat beside it. Demos highlighted the model’s reply. The parts that made the demo repeatable usually had no name.

On 11 March 2025 OpenAI released the Responses API and an open-source Agents SDK and began naming those middle layers. Responses unifies text output and tool calls and supplies built-in tools such as web search, file search, and computer use; the Agents SDK turns Agent, Handoff, Guardrail, and Tracing into composable primitives. One handles how the model responds and uses tools; the other handles how applications organize multiple roles and execution. They ship together without being the same abstraction: a platform response-and-tool interface on one side, an application orchestration library on the other.

“Handoff” sounds like role-play; at runtime it is a concrete decision—whether the current agent should pass task and context to another better suited one. A “guardrail” is not only a safety prompt; it runs checks around inputs, outputs, or tool actions. “Tracing” is plainer: when a system has called the model five times, three tools, and produced a result after a second attempt, developers need to see that path to know whether failure came from model judgment, tool returns, or orchestration code. Agent demos can look fine without tracing. Production systems go blind on the first overnight failure.

These primitives do not make agents reliable by themselves. Built-in web search can still retrieve unsuitable material; computer use still involves permissions and irreversible actions; handoffs can drop information; traces can only record failures that already happened. The platform supplies more consistent building materials, not a prewritten responsibility boundary for applications. Permissions still need application definition; user confirmation may still need product design; irreversible operations still need extra gates. Putting built-in tools into Responses admits that capabilities common to general agents should not be rewired from zero each time. Computer use in particular pushes permission and irreversible action to the front—an agent that can click an interface can also click wrong.

The launch page also sketched migration from the Assistants API. The detail is modest and important: agent runtimes are still rewriting their own abstractions—how much state to host, how much control apps keep, in what form tool results return to the model. Assistants hosted session and run state heavily; Responses and the Agents SDK hand more loop control back to developer-composable interfaces. Each choice has a bill. An open-source Agents SDK also means example code can be forked into internal scaffolds, spreading an orchestration philosophy beyond official paths—the core is not multi-agent spectacle, but treating handoff, guardrail, and trace as first-class concepts.

What changes is the layer at which model platforms compete. Developers once compared mainly which model answered better. When tasks cross files, the web, desktops, and multiple sub-roles, whether interfaces preserve reasoning traces, tools are easy to attach, and errors are recoverable also enter the choice. Glue once scattered across frameworks and business code is pulled into the vendor’s formal product stack. The historical mark of Responses API and Agents SDK is that the industry finally named a problem long hidden inside applications: running an agent is engineering of interfaces, observation, and boundaries—not one clever generation.
