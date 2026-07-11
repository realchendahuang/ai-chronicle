---
eventId: github-copilot
form: History of an editor action
narrativeCenter: Code generation compressed for the first time into accept, reject, and revise during ordinary typing
emotionalSource: A suggestion that saves trivial labor can also smuggle unreviewed error into a project
avoid:
  - Writing a completion product as an autonomous software engineer
  - Retelling Codex's model release and API demos
  - Claiming productivity gains without evidence
---

GitHub Copilot entered the editor through unfinished code.

The technical preview of 29 June 2021 placed OpenAI Codex inside Visual Studio Code. The extension read the code under edit and proposed the next line—or a whole function—from names, comments, and surrounding context. Developers did not need to leave the editor, formulate a complete question, and copy an answer back. Suggestions appeared while typing and were accepted, rejected, or revised. Access was a limited technical preview, first in VS Code, not a default option across every IDE.

Putting Codex into gray inline suggestions was an interaction demotion: no prompt craft required, only keep typing. Accept/reject/edit rates matter more to the product than leaderboard scores, even when early materials did not publish every internal metric. GitHub–OpenAI collaboration wrote the event: model capability on one side, developer distribution on the other. License and training-data disputes followed, proving a light suggestion still sits on heavy copyright ground. Preview lightness and legal weight shared one timeline from day one.

That product design mattered more than any demo sample. Traditional autocomplete excelled at listing variables, methods, and types in scope; a language server can know precisely which parameters an API accepts. Copilot might propose an implementation: test cases, boilerplate, a common algorithm, even a function body inferred from a comment. It need not know the project's true intent; it turns traces of intent—names, comments, surrounding code—into candidate code. Suggestions appear as inline ghost text. One Tab looks light.

GitHub called it an “AI pair programmer” in the launch post, but the product's actual action was narrower and easier to form a habit around. It did not join requirements discussion or own post-merge failures; it kept offering a next possibility. The preview covered many languages and frameworks, with particular emphasis on Python, JavaScript, TypeScript, Ruby, and Go. GitHub also warned clearly that generated code could be wrong and could reproduce patterns from training data. That was not decorative disclaimer; it was a warning written jointly by product mechanism and training-data origin.

The identity of “suggestion” lowered the barrier and assigned responsibility. Code is not correct because a model produced it; developers still check dependencies, edge cases, security, and license risk. Codex trained on large amounts of public source code, which quickly made training-data licensing, similar-snippet output, and authorship contested. A moment of convenience inside the editor connected to a set of unresolved problems outside it. Later research and litigation would pull on those borders; in summer 2021, the problem was already in the product notes.

Copilot in 2021 was still a technical preview, and only first in Visual Studio Code. Its product mechanism was already set: suggestions appear inline; developers accept, ignore, or revise one at a time. One Tab looks light; tests, review, authorization, and post-merge consequences remain entirely on the other side of the key. Later chat, agent, and multi-file features would expand the product. This day established the smallest unit—the next block of code, continually offered in the input stream and always rejectable.
