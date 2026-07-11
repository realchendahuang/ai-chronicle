---
eventId: swe-bench
form: Anatomy of a benchmark
narrativeCenter: "SWE-bench turns resolved GitHub issues back into executable examinations by restoring repositories to the moment before the fix"
emotionalSource: "The excitement of fluent code generation meeting the stubborn causal texture of maintained software"
avoid:
  - "Equating leaderboard scores with everyday developer productivity"
  - "Ignoring incomplete tests, environment failures, or differences in evaluation protocol"
  - "Recycling the heroic narrative of solving an isolated programming exercise"
---

Every SWE-bench task begins with an act of reversal.

A repository that has already survived a reported problem is returned to its earlier state. The accepted repair is removed. The issue remains. A model receives that snapshot and is asked to find its own way from complaint to patch, after which the project's tests decide what the patch has accomplished. The answer is not the code that most resembles the maintainer's solution. It is a change that makes the specified behavior work without breaking what the test suite can still see.

The first dataset contained 2,294 resolved issues drawn from twelve widely used Python repositories. These were not exercises written to expose one algorithmic trick. Their difficulty had accumulated in the ordinary way software becomes difficult: an issue description assumed local knowledge; the relevant behavior crossed files; dependencies mattered; a compact fix could sit behind a long search through code that was nearby but not responsible.

Earlier coding benchmarks generally built a fence around the task. Given a description and a function signature, a model generated the missing implementation. That question was useful, but it quietly performed much of software engineering on the model's behalf. It selected the file, isolated the problem, supplied the interface, and made execution cheap. SWE-bench removed some of that assistance. The model now had to decide where to look, understand enough of the repository to edit safely, run tests, read failures, and revise.

The initial results were severe. The paper reported that the best-performing model, Claude 2, resolved 1.96 percent of the tasks; the researchers' SWE-Llama models managed only a portion of the easier cases. This was not evidence that language models could not program. It was a measurement of how much work lay between producing plausible code and maintaining a living codebase. Retrieval, long context, environment setup, tool use, iteration, and regression testing—activities previously supplied by the developer—had entered the exam together.

Once coding agents became a commercial category, SWE-bench and later variants such as SWE-bench Verified became a shared language for progress. A shared language is not a universal one. Scores vary with the chosen subset, problem filtering, prompts, hints about relevant files, execution budget, tool design, and the condition of the test environment. Passing existing tests does not prove correctness in cases the suite does not cover. A percentage that omits its protocol can become less a result than a decoration.

Still, the benchmark imposed a valuable indifference. It did not care whether a patch looked sophisticated or whether the model explained it persuasively. The repository was reconstructed, the modification applied, and the tests run. The original maintainers had already left behind a small historical record—issue, code before repair, code after repair—and SWE-bench made that record executable.

Coding benchmarks had spent years flattening software into neat questions for machines. SWE-bench reversed the direction. The machine was sent into software as it had actually been found: incomplete in description, distributed in cause, and willing to answer a confident patch with nothing more eloquent than another failing test.
