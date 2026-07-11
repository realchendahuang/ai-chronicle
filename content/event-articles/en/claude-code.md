---
eventId: claude-code
form: "Chronicle of an action sequence"
narrativeCenter: "Once the model enters the terminal, the unit of coding collaboration becomes a chain of authorizable, executable, checkable actions—not one code suggestion"
emotionalSource: "What reassures is not the appearance of autonomy but that every edit still lands as commands, diffs, and tests"
avoid:
  - "Writing a research preview as a mature unsupervised engineer replacement"
  - "Reading terminal-native as fully autonomous without permissions or confirmation"
  - "Retelling the story as an editor-completion product"
---

Search code. Open a file. Edit. Run tests. Read the error, search again. Commit if needed, or push to GitHub.

Those actions once lived across editor, terminal, and browser. On 24 February 2025, Anthropic's Claude Code research preview—released with Claude 3.7 Sonnet—joined them in one command-line session. The official page was concrete: search and read code, edit files, write and run tests, commit and push, while keeping the developer informed at each step. It no longer waited for people to paste snippets into a chat box; it gained an interface for acting on a real repository. Access was a limited research preview, not a mature product that could unattendedly take over any warehouse of code.

A CLI defaults to developers who already use git and tests, not pure GUI novices. Confirmation dialogs move safety into interaction; diffs and logs pull agent stories back to reviewable artifacts. Versus cloud parallel agents, local terminals keep synchronous feel and local mis-operation risk. Preview boundaries—tool reliability, long commands—belong in the body more than success anecdotes: the product is still learning to live with real build systems.

The terminal's value has little to do with how engineer-like a black window looks. Software talks back there. Missing files fail immediately; type errors leave locations; failed tests refuse to change their exit code because an explanation was fluent. Language models could once offer patches that looked like answers; Claude Code must run patches inside the project's existing constraints. One execution produces new state; that state becomes context for the next judgment. The feedback loop widens what the model can take on and brings risk closer.

Reading a repository is not the same permission as modifying it; running tests is not the same risk as arbitrary commands. Claude Code operations require permission, with confirmation before higher-risk actions; project instructions can live in `CLAUDE.md`; tools can connect through GitHub and MCP. Agent capability never belongs only to the model. It is composed of visible context, granted permissions, callable tools, and tests that can decide right and wrong. Reading “terminal-native” as “fully autonomous without confirmation” misstates both product mechanism and safety boundary.

Anthropic still called it a research preview at launch and listed work remaining: tool-call reliability, long-running commands, in-app presentation. Single-task completion and time-saved cases on the page came from internal or early tests; SWE-bench scores depend on scaffolding, filtering, and retry protocols. They show product direction, not that every unfamiliar repository is already stably owned. Vendor efficiency stories and benchmarks must be read with their settings.

Claude Code added a new grammar to AI programming. Developers need not only ask how a few lines should be written; they can also assign “find why this fails, fix it, run tests.” A natural-language task still decomposes into plain actions: read, edit, run, look. Model work unfolds along the terminal; human judgment remains at authorization and acceptance. “I am done” is a sentence; file diffs, command logs, and test results are what can pass between the two. The honesty of a research preview is that it still requires a person at the end of that chain.
