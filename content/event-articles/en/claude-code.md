---
eventId: claude-code
form: A terminal collaboration scene
narrativeCenter: Claude Code joins repository reading, file edits, command execution, and permission prompts into an observable local feedback loop
emotionalSource: Excitement as a model touches the real environment, followed by the pause of an authorization request
avoid:
  - Writing it as a fully autonomous software engineer
  - Omitting CLAUDE.md and the permission model
  - Collapsing it into a completion-only editor plugin
---

The terminal is honest because failure has nowhere to hide. A command returns a nonzero status. A test fills the screen with a stack trace. Git lists the files that remain uncommitted. Many engineers write inside an editor and return here to find out whether the software actually works.

On 24 February 2025, Anthropic released a research preview of Claude Code alongside Claude 3.7 Sonnet. It did not merely add another chat panel beside an editor. Running as a local process, it could read a repository, edit files, execute commands, and continue from their output. A model entered the full feedback loop as a product: inspect state, change something, run tests, read the failure, and try again.

That path also made risk concrete. The neighborhood around a terminal can contain uncommitted work, environment variables, deployment commands, and credentials. Claude Code requested permission before higher-risk actions. The prompt was not interface politeness; it marked a trust boundary. The model might propose the next step, while actual execution still depended on what the user granted. The closer a model moves to a real environment, the less vague permission can be.

A repository could also keep project instructions in `CLAUDE.md`, placing build commands, conventions, and warnings near version control. GitHub and MCP connections extended the reachable environment further. Context began to look less like a disposable prompt and more like a project asset. Yet an instruction file could not replace tests, and additional tools could not supply judgment automatically. Incorrect project guidance would be followed faithfully; broad permissions could turn one mistaken inference into a real operation.

“Research preview” bounded the claim. The release demonstrated a collaboration rhythm, not a guarantee that every repository could be handed over. A person and model shared the same shell feedback. Human work shifted partly from typing each command to reviewing a plan, authorizing actions, and accepting results. Code review expanded as well: the final diff mattered, but so did which commands ran and why the agent chose its next step after a failure.

The defining image of Claude Code is not an uninterrupted stream of generated code. It is the process stopping before execution and waiting for permission. That pause admits the terminal's double nature: it is software engineering's most complete feedback surface and also the place where an error can most quickly become a consequence.
