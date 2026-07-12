---
eventId: codex-cli
form: The permission ledger of a terminal session
narrativeCenter: Codex CLI brought OpenAI models into a local repository and made “what may the model touch?” a product decision for the developer
emotionalSource: The half-second pause at an approval prompt before an agent executes its first file command
avoid:
  - Confusing the product with the 2021 Codex model
  - Claiming it replaced Claude Code or editor agents at launch
  - Pulling later cloud Codex, IDE, and desktop capabilities into the first release
---

After installing Codex CLI on April 16, 2025, a developer still saw the familiar repository and shell prompt. The change was that a natural-language task could now lead a model to inspect code, propose edits, and invoke commands on the local machine. OpenAI reused the Codex name from its 2021 coding model, but the new object was no longer only a model that completed code. It was an agent client designed to continue working inside a terminal session.

The initial release stressed that the client was lightweight, open source, and local, and it appeared alongside o3 and o4-mini. It could also combine screenshots or rough interface sketches with the code available on the machine, giving a command-line task more than text as input. Publishing the client let developers inspect how it assembled requests, asked for permission, and handled commands. The models and API service remained controlled by OpenAI. The execution doorway was open; the entire capability stack was not.

Novelty quickly became a permissions question. An assistant that only explains an error has a limited blast radius. An agent that edits files, moves directories, and runs tests occupies the developer’s trust domain. Codex CLI used approvals and sandbox boundaries to let users choose between suggestions, automated edits, and greater autonomy. Each step toward convenience enlarged the consequences of a mistake. Bad generated code could often be reverted; a side-effecting command might travel beyond the repository.

That was also what distinguished the terminal route from an editor or a cloud sandbox. An editor was good at handing the model the active file and nearby context. A cloud agent could queue work in an isolated environment. A CLI inherited the compilers, dependencies, logs, and credentials already present on the machine. It could understand the working project more directly, but it also stood closer to real systems. “Local” did not automatically mean private or safe: model requests still left the machine, while command authority came from the user who launched the process.

Cloud Codex tasks, IDE extensions, and desktop entry points later gave OpenAI’s coding agents several connected surfaces. Those were extensions of the story, not features to insert into the April launch. What Codex CLI accomplished on its first day was more basic. It placed an official OpenAI product in a terminal category already validated by Claude Code, Aider, and a growing collection of editor agents.

After that, choosing a coding agent could no longer be reduced to comparing model scores. Developers also had to decide where the work ran, which files could be read, which commands required confirmation, and how a failed action would be recovered. Codex CLI’s most consequential contribution appeared before the model produced its first line: it made terminal users draw a permission boundary.
