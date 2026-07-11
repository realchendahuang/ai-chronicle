---
eventId: codex-agent
form: Institutional history of a cloud task queue
narrativeCenter: "Cloud Codex gives each software assignment an isolated environment, changing a coding agent from one session into a set of parallel tasks that can be awaited and reviewed"
emotionalSource: "The time of coding is rearranged: a person need not witness every intermediate step, but must confront the evidence when the task returns"
avoid:
  - "Confusing the 2025 cloud product with the 2021 model of the same name"
  - "Treating task count or parallelism as capability in itself"
  - "Minimizing isolation, tests, logs, and code citations as conditions of acceptance"
---

A local coding agent occupies a continuous stretch of attention. The developer assigns work, watches it search and edit, and intervenes when the path forks. OpenAI's cloud Codex, introduced in May 2025, rearranged that time. A task could leave the desk, enter its own isolated environment, and return later with a patch and a record. Several assignments could be away at once.

After a GitHub repository was connected, Codex provisioned a container containing the code for each task. The agent read files, ran commands, made changes, and executed tests inside that environment, initially using the codex-1 model. One assignment did not share a workspace with another. Isolation made parallel execution possible, but it also forced a useful clarity: repairing a bug, adding tests, and explaining a module could be three separate commissions rather than three turns waiting in one conversation.

The cloud did not reduce software engineering to the instruction placed at the top of the task. It relocated the intermediate moments. Requirements could still be misunderstood. Tests could omit important behavior. A convention known to the team but absent from the repository could still be violated. OpenAI therefore made logs, test results, and code citations part of the returned evidence. The human could inspect what happened rather than accept a completion declaration produced by the same system that performed the work.

Cloud and terminal agents suggested different collaboration regimes, not mutually exclusive products. A terminal session suited work whose objective changed through conversation. A cloud assignment suited work that could be bounded, isolated, and judged afterward. One resembled sharing a bench; the other resembled issuing a work order. The underlying model might be comparable, but the institution around it changed which tasks were sensible to delegate.

With Codex, developers began to manage queues in addition to code. Which jobs were independent enough to start together? What evidence counted as passing? How would conflicts between separately produced patches return to the main branch? When generation becomes parallel, the scarce resource can move away from typing. Decomposition, acceptance criteria, and review grow heavier because a batch of plausible changes may arrive before anyone has decided which deserve to be merged.

The research preview's concrete unit was more modest than “parallel engineers”: a software task with its own environment, history, and return package. The work could happen out of sight. Accountability had to come back into view.
