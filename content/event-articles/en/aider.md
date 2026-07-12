---
eventId: aider
form: A terminal pairing record
narrativeCenter: Git keeps model edits reviewable, reversible, and attributable
emotionalSource: The sense of control as a diff appears line by line
avoid:
  - Treating terminal agent coding as a 2025 invention
  - Inflating an open CLI into an unsupervised engineer
  - Letting later commercial products erase Aider's own workflow
---

In the spring of 2023, the defining image of AI coding was still text appearing after a cursor. GitHub Copilot had made completion ordinary, but completion usually stopped at the code in front of the developer. When the task became “change three files in this repository and make sure the tests still pass,” people often returned to browser chat, explained the directory structure, and carried the answer back by hand.

Aider chose a less theatrical entrance: the terminal. A developer opened a local Git repository, described a change, and let the tool turn a model response into edits against real files. Git then asked the question that mattered more than the fluency of the answer: what, exactly, changed?

Version control was not hidden behind a friendly interface. It was the contract. A proposed edit could be inspected line by line, reverted, or preserved in a commit.

For generated code, those old mechanisms were not ceremony; they were reins. Models could change and API providers could change while review and rollback remained in the developer's hands.

Aider's workflow grew to include repository mapping, test execution, and commits. None of that made it an engineer that could safely own a project alone. Large repositories still made context selection difficult. A convincing diff could still be wrong when tests were weak. Explanations still required engineering judgment. The tool's credibility came less from a promise that the model would always be right than from the fact that mistakes appeared in familiar engineering artifacts.

Its Apache license and bring-your-own-key approach also separated the workflow from a single commercial editor. Teams could choose models, inspect the implementation, and fit the tool around habits they already had. That did not invalidate the integrated AI IDE. It established a different bargain: one product could optimize for everything living in one interface, while an open terminal tool could insist that the repository and the model did not need the same owner.

More powerful and more famous coding agents later arrived in the terminal. Aider's durable idea remained modest: before allowing a model into a real repository, make every change visible, rejectable, and reversible. The colored diff scrolling past the prompt—not a claim of autonomy—is the central image of its story.
