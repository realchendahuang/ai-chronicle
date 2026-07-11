---
eventId: codex-agent
form: Institutional history of cloud tasks
narrativeCenter: Each software task enters an isolated environment; coding agents become a queue that can finish and be checked in parallel
emotionalSource: People need not watch every step, yet must face patches and evidence on return
avoid:
  - Collapsing this Codex with the 2021 model of the same name
  - Treating parallelism count as capability itself
  - Soft-pedaling isolation, tests, and code citations
---

A coding agent in a local terminal occupies a continuous stretch of time: a person assigns work, watches search and edits, and intervenes at forks. The screen stays lit; attention stays occupied. On 16 May 2025, OpenAI’s cloud Codex research preview inside ChatGPT rearranged that time. Tasks leave, each enters an isolated environment, several can run at once, and patches return later with evidence. People need not watch every step, yet must face checkable materials on return.

After a GitHub repository is connected, Codex prepares a container preloaded with code for each task, reads files, runs commands, edits, and executes tests. The first version was driven by codex-1. One agent cannot see what another is changing; isolation makes parallelism possible and writes task boundaries clearly. Fix a bug, add tests, explain a passage—three independent commissions rather than a single conversation queue. Access was a research preview for ChatGPT users with the right entitlements, not a default “cloud engineer” for everyone. Cloud isolation lowers direct laptop risk and raises governance questions about connected repos and injected secrets.

The cloud did not turn software engineering into one sentence. Agents still misread requirements; tests still under-cover; unwritten repository conventions can still be ignored. OpenAI put logs, test results, and code citations into the delivery so users can reconstruct what happened rather than receive only a completion claim. Tasks run in the background; responsibility is not hosted with them. Ten simultaneous failures only manufacture ten noise packets faster. Parallelism count is not capability.

The relationship to terminal agents is complementary: terminals suit correction-in-flight; cloud tasks suit work that is bounded, isolatable, and finally checkable. This product must not be confused with the 2021 Codex API model that shared the name—that generation turned natural language into callable code; this one turns software tasks into parallel cloud jobs that return evidence. The first preview did not deliver “parallel engineers.” It delivered a restrained product unit: own environment, process record, and return package. Queue management—which tasks are independent enough, what counts as pass, how conflicts re-enter main—begins to take as much time as writing code itself.

Research preview made an “evidence pack” part of default delivery: not only a diff, but what ran, what tested, which locations were cited. When people are absent, the only substitute for watching is a checkable trail. Set against terminal agents such as Claude Code, the cloud version trades isolation and parallelism for a different tempo; set against 2021 Codex, it is no longer content to emit fragments, but tries to close the loop on repository-scale tasks.
