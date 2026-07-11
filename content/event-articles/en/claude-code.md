---
eventId: claude-code
form: Chronicle of an action sequence
narrativeCenter: "Once the model enters the terminal, programming collaboration expands from a code suggestion into an authorized, executable, reviewable sequence of actions"
emotionalSource: "The reassuring part is not the appearance of autonomy but the return of every change to commands, diffs, and tests"
avoid:
  - "Presenting a limited research preview as a mature replacement for supervised engineering"
  - "Treating terminal-native operation as autonomy independent of permissions and confirmation"
  - "Describing the product through the older narrative of editor completion"
---

Search the repository. Open a file. Change it. Run the tests. Read the error and search again. If the work holds, commit it—or push it to GitHub.

The actions were already familiar, but they had been divided among editor, terminal, and browser. In February 2025, Anthropic's research preview of Claude Code joined them inside one command-line session. Released alongside Claude 3.7 Sonnet, it could search and read code, edit files, write and execute tests, and perform version-control operations while keeping the developer informed. The model no longer waited for a fragment to be pasted into chat. It received interfaces for acting on the repository itself.

The terminal mattered for reasons having little to do with its austere appearance. Software can contradict a model there. A missing file produces an immediate failure. A compiler points to the type mismatch. A test command returns an exit code that does not become successful when accompanied by a confident explanation. A plausible patch had to enter the project's existing constraints and survive execution. Each run changed the state of the work; that state became evidence for the next decision.

The same loop that widened the model's reach brought risk closer. Reading a repository is not equivalent to modifying it, and running a test is not equivalent to executing an arbitrary command. Claude Code asked permission around consequential actions. Project-specific instructions could be stored in `CLAUDE.md`; connections to GitHub and MCP tools could further extend what the session knew and could do. “Agent capability” therefore did not reside in the language model alone. It emerged from the context made visible, the authority granted, the tools attached, and the tests capable of rejecting a bad change.

Anthropic still called the launch a limited research preview. The announcement named tool-use reliability, long-running commands, and the in-application experience as areas needing improvement. Examples of one-shot completion or time saved came from internal and early use. Any SWE-bench result depended on scaffolding, task selection, retries, and evaluation details. These materials indicated the direction of the product; they did not establish that unfamiliar repositories could already be handed over without supervision.

Claude Code added a new syntax to AI-assisted programming. Instead of asking how to write five lines, a developer could ask the system to investigate a failure, make the repair, and run the tests. Natural language widened the assignment, but the assignment still had to be decomposed into plain operations: inspect, edit, execute, observe.

The model's work traveled through the terminal. Human judgment remained concentrated at permission and acceptance. “Done” was only a sentence; the less glamorous record underneath it—changed files, command history, and test output—was what could cross between them reliably.
