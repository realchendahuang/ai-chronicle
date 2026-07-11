---
eventId: swe-bench
form: Benchmark anatomy
narrativeCenter: "How SWE-bench turns already-resolved GitHub issues into an executable exam"
emotionalSource: "Excitement that models can write code collides with long, petty, uncooperative causal chains in real repositories"
avoid:
  - Equating leaderboard scores with everyday developer productivity
  - Ignoring incomplete tests or environment sensitivity
  - Reusing hero narratives of single-function code generation
---

SWE-bench's raw material is not problems invented for models. It is a short stretch of software past: a GitHub issue, a later accepted change, and the codebase before that change.

In October 2023, researchers including a Princeton team introduced the benchmark in a paper. Tasks roll a repository back to the moment before the fix, leave the issue text, and ask a model to walk the path again. The answer is not code that merely looks reasonable. The model must deliver a patch; the patch must enter the original project's execution environment; tests decide whether the problem is fixed or only hidden elsewhere. The paper collected 2,294 issues from 12 popular Python repositories. Each had been reported, discussed, and solved by people, so the tasks keep what contest problems rarely copy: incomplete context, bugs that cross functions and files, dependency versions that interfere, and project habits left unsaid behind a one-line issue.

Real issues bias the bench toward defects with clear reports and automatable tests; tribal knowledge bugs stay scarce. Python and chosen repos shape leaderboard overfitting. The 1.96% starting score is a historical anchor: later double-digit success must declare subset, prompts, and attempts. Anatomy ends not in worship of rankings but in reading protocols—otherwise coding-agent progress is only percentage animation.

“Understanding code” becomes concrete. The model must find what to read, separate adjacency from true relevance, run tests after edits, and chase failures. Sometimes the correct patch is short and the difficulty is reaching those few lines. Traditional code benchmarks fence a problem and ask whether a function can be written. SWE-bench removes part of the fence and leaves a repository and a ticket.

First-paper results were almost discouragingly cold. The best reported system, Claude 2, solved 1.96% of issues; the authors' SWE-Llama handled only simpler slices. That figure does not mean language models of the time could not program. It measures the strip product demos often skip between “can generate code” and “can maintain software.” Repository navigation, long context, tool use, environment setup, test feedback, and multi-turn revision—once held in developers' hands—enter the exam together. Paper numbers bind to then-current models and settings; later higher leaderboard scores must be read with subset filters, prompts, whether relevant files are given, execution budgets, and scaffolding.

Different subsets, filtered versions such as Verified, and public leaderboards soon became a shared language for coding agents. New trouble followed: a score moves with task selection, prompting, file hints, budgets, and test coverage. Passing existing tests does not guarantee a fix is correct in all cases; percentages under different protocols cannot be ranked without the protocols. Figures such as Devin's reported 13.86%, if compared to the paper's 1.96% without sample and prompt conditions, invent a false progress story.

The exam refuses to admire the surface of code. Elegant patches and confident write-ups cannot answer for the repository. The environment is restored, the edit applied, tests return. Software engineering stands before the model with its ordinary temper: what happens after the change is the real answer. SWE-bench's historical role is to turn that “what happened” into a measurement that can be run again—not a freeze-frame from a demo video.
