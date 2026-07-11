---
eventId: claude-code
form: Terminal-agent product history
narrativeCenter: A research-preview CLI that chains reading a repo, editing files, running commands, and permission prompts into reviewable action sequences
emotionalSource: Familiarity when the feedback loop returns to the terminal—and restraint in pausing before higher-risk actions
avoid:
  - Writing a fully autonomous engineer
  - Omitting CLAUDE.md and the permission model
  - Collapsing with completion-only editor plugins
---

Many engineers still treat the terminal, Git, and test commands as the center of real development. Copilot and Cursor put models in editors; Devin put tasks in separate workspaces. Where the prompt blinks is where state, patches, and failure logs truly meet. On 24 February 2025, Anthropic released a research preview of Claude Code alongside Claude 3.7 Sonnet—a command-line tool that reads repositories, edits files, and runs commands in a local process, requesting permission before higher-risk actions.

Capability depends on permissions, context, tests, and human supervision—not on being “naturally autonomous.” `CLAUDE.md` can hold project-level instructions; GitHub and MCP tools can connect external resources. The product unit widens from “suggest a snippet” to “a reviewable sequence of actions”: inspect state, edit, execute, read errors, retry. People stay in the loop; the default surface of the loop becomes the terminal. The pause before each higher-risk action is product philosophy, not ornament.

The research-preview label requires reading stability and coverage small. What it demonstrates is a collaboration tempo: the model touches a full feedback loop; humans keep veto and authorization. Compared with parallel cloud task queues, the terminal stresses synchronous context; compared with pure completion, it stresses executable consequence.

Claude Code does not cancel code review. It partly extends what is reviewed from patch text to commands and permission prompts themselves. People already at home in a shell can, beside a familiar prompt, first seriously consider putting an agent on the same path—and remember that every step on the path should still be rejectable.

A terminal agent’s risk model differs from the cloud’s: it sits closer to a developer’s local privileges, and mistaken actions hit more directly. Permission prompts are therefore not courtesy but product boundary. In research preview, repo scale, languages, and failure recovery remain under watch. What is shown is not that engineers are replaceable, but that the feedback loop can be reached by a model—while humans still hold veto power.

A local process means logs, secrets, and uncommitted edits share one trust domain. If a product only stresses “can edit the repo” without permission granularity, demos look good and incidents look bad. Shipping capability and restraint together in research preview is the product attitude this event should record.

Against editor plugins, a terminal agent sits closer to scripts and Makefiles: composable, pipeable, imaginable in CI. Research preview is not a CI-ready claim, but the direction points toward “model actions scriptable.” Once scriptable, permission models must be scriptable too, or automation amplifies mistakes.
