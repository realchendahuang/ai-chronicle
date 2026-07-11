---
eventId: assistants-api
form: Retrospective on an API lifecycle
narrativeCenter: Assistant, Thread, Message, and Run turning agent infrastructure into hosted state while prefiguring future migration costs
emotionalSource: Relief when repeated backend work disappears into a platform and ambivalence when the abstraction later moves toward deprecation
avoid:
  - Using later deprecation to declare the original launch a mistake
  - Implying that hosted state eliminated the need for application backends
  - Choosing a simple verdict of either developer liberation or vendor lock-in
---

By November 2023, the difficult part of building an assistant was no longer confined to calling a model. Developers were storing chats, trimming context, handling uploaded files, pausing for tools, and placing results back into prompts. On 6 November, at its first DevDay, OpenAI launched the Assistants API in beta and offered to host much of that machinery.

Its design condensed the runtime into four nouns. An Assistant held instructions and tools. A Thread contained an ongoing conversation. Messages accumulated within it. A Run asked the model to process that thread and, when necessary, use file retrieval, Code Interpreter, or a developer-defined function. The distance from prototype to a file-aware, tool-using product became shorter because application teams no longer had to invent every object themselves. It was not “no backend,” but a move of a class of agent infrastructure from application code into a provider state machine.

The same DevDay shipped end-user GPTs; Assistants targeted developers embedding similar capabilities. Retrieval hosted part of RAG; Code Interpreter hosted execution; functions left business tools on the developer side. The triad was useful and foggy in debugging—was it recall, interpreter timeout, or wrong function choice? When the platform later steered migration to Responses, state objects in that fog had to be renamed. Lifecycle retrospectives matter because hosting depth swings with product strategy.

The design also proposed that a model provider should host inference together with conversation state, retrieval, and an execution environment. Application code and product responsibility remained, while more of the runtime was explained by the platform: which states a Run entered, how tool output returned, how files attached. Convenience and dependence were the same architectural fact viewed at different moments.

Every high-level abstraction makes decisions on behalf of its user. Threads had platform-defined persistence. Runs entered states whose order and visibility followed OpenAI's design. Debugging required an account of the provider's state machine alongside the application and model. When, around March 2025, the Responses API and Agents SDK became the preferred direction and Assistants entered a migration and deprecation path, changing the base URL was not enough. Responsibilities once given to Assistant, Thread, and Run—conversation durability, tool loops, hosted files and code execution—had to be re-placed. Deprecation is not a moral verdict on the launch; it is the ordinary second half of an interface lifecycle.

Retrospect can make superseded interfaces appear foolish. That would miss what the API discovered. A hosted agent loop was new enough that its proper objects were genuinely unsettled. Building one version was part of learning where state, tools, and orchestration belonged. Nor does migration prove that hosting them was wrong. Self-managed systems regain control and observability at the price of repeated infrastructure. Provider-managed systems shorten implementation and inherit the provider's lifecycle. The trade does not disappear when the nouns change.

Assistants API wrote time into the model API. An answer was no longer the whole unit. Messages persisted; tools interrupted; a run could wait, fail, resume, or complete. The interface later acquired a lifecycle of its own, and the state developers had entrusted to those four nouns had to find a new place in a successor—with a reminder, the next time depth of hosting is chosen, that convenience once came with a migration bill.
