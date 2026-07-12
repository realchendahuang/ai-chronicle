---
eventId: swe-bench
form: From issue to patch
narrativeCenter: SWE-bench uses real repositories and tests to separate function generation from software repair
emotionalSource: Sobriety when attractive code fails a real test, and relief when the field gains a shared question
avoid:
  - Treating the benchmark as having solved software engineering
  - Omitting repository snapshots, issue text, and test verification
  - Using later agent scores to inflate the 2023 scene
---

Benchmarks such as HumanEval gave a model a description and asked for a standalone function. Problems inside real repositories were rarely that clean. An issue described the symptom visible to a user, relevant logic might be distributed across several files, and a repair could not break existing behavior. Producing a plausible passage of code and locating a defect in an unfamiliar project were different abilities.

In October 2023, a Princeton team released SWE-bench, turning 2,294 GitHub issues that maintainers had resolved in real Python repositories into executable tasks. The researchers preserved the repository snapshot from when a problem existed and paired it with the issue description. A model then had to produce a patch. Scoring did not reward a fluent explanation; the patch returned to the project and ran against tests to determine whether it actually repaired the issue. Task construction determined what the ruler measured. A model had to locate relevant files in a larger codebase, understand existing interfaces, change code across locations, and avoid regressions. Tests provided a clearer endpoint than subjective reading, but only for behavior the project could automatically verify. A patch passing tests was not guaranteed to be elegant, while a sound approach could still lose its score to environment or harness failure.

Initial model results were low, exposing the distance between function generation and software engineering. Putting a repository into a long context did not automatically locate the critical code, and producing one patch rarely handled feedback from failed tests. Coding agents that followed therefore built loops around search, editing, execution, and retry. The benchmark did not create those abilities; it let teams inspect them on the same tasks.

SWE-bench also had a bounded field of view: primarily Python, selected open-source repositories, and historical issues that could become automated evaluation. Its 2,294 examples were not all of software engineering. Leaderboards could be affected by task leakage, harness differences, and subset selection. Later variants such as Verified tried to improve task reliability, demonstrating that the ruler itself required maintenance.

What changed was the evidence a product claim had to face. When a model said it could “code,” the follow-up no longer had to be only how elegantly it solved an isolated algorithm. Could it take a real issue and turn the project's tests from red to green? That green light did not prove the engineering work was complete, but it was harder to imitate than code that had never been run.
