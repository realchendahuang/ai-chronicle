---
eventId: github-copilot
form: History of an editor gesture
narrativeCenter: Code generation entering routine work as a suggestion to accept, reject, or revise
emotionalSource: The relief of skipping small labor paired with the ease of admitting an unreviewed error
avoid:
  - Describing an autocomplete product as an autonomous software engineer
  - Repeating the Codex model and API launch story
  - Claiming universal productivity gains without evidence
---

GitHub Copilot appeared before the code was finished.

That placement defined the product. In the June 2021 technical preview, a Visual Studio Code extension read the file being edited and used OpenAI Codex to suggest what might come next. Sometimes it offered a line; sometimes a function. The developer could accept it, ignore it, or keep only enough to continue.

The history of programming assistance already contained powerful tools. Language servers knew which variables were in scope and what arguments an API accepted. Static analysis found classes of mistakes. Conventional completion could reliably enumerate names. Copilot attempted a less certain operation: infer a possible implementation from a comment, a function name, and neighboring code.

A test, a familiar algorithm, repetitive boilerplate—these were natural demonstrations because intent was visible and the desired form had appeared many times in public code. GitHub initially emphasized Python, JavaScript, TypeScript, Ruby, and Go, while supporting a broader range unevenly. Access was limited and the label “technical preview” mattered. The suggestions were generated hypotheses, not knowledge of the repository's unwritten requirements.

Calling the system an “AI pair programmer” gave it a memorable role, but its real contribution was smaller and more persistent. It did not negotiate requirements or own the consequences of a merge. It inserted a candidate into a high-frequency gesture. Instead of opening a separate interface, composing a full question, and copying the response back, the programmer encountered the model in the ordinary pause after typing.

Responsibility remained on the human side of that pause. Suggested code could contain an incorrect dependency, miss an edge case, reproduce an insecure pattern, or simply solve a different problem. Because Codex had been trained on public source code, questions about licensing, attribution, and outputs resembling training material followed the product into the editor. “Suggestion” reduced friction without dissolving provenance.

The consequential unit was the tiny decision repeated across a workday: Tab, Escape, edit; accept three lines, discard the fourth; trust a test only after running it. Code could arrive before its author had decided exactly how to write it, and review could begin before composition was complete. The gesture was light. Testing, attribution, and the consequences of merging remained on the other side of the keypress.
