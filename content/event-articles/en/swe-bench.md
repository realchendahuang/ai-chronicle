---
eventId: swe-bench
form: Birth of a benchmark
narrativeCenter: Real GitHub issues split “can write a function” from “can fix a repository” into two measurable things
emotionalSource: Sobriety when first model scores were low—and the product-narrative turn once a shared target appeared
avoid:
  - Treating the benchmark as solved software engineering
  - Omitting task construction and test verification
  - Inflating the 2023 scene with later agent scores
---

Benchmarks such as HumanEval mostly ask whether a model can emit a standalone function from a description. Real development often asks something else: inside an existing repository, read an issue, edit the right files, and keep the original tests green. One is a fill-in-the-blank exam; the other is repairing pipes on someone else’s site without breaking what already carries water.

Around 10 October 2023, a Princeton team released SWE-bench: 2,294 resolved issues from real Python repositories turned into executable software-engineering tasks. Each task supplies a repository snapshot and issue text; the model must produce a patch verified by the project’s own tests. The score is not whether the code looks plausible; it is whether tests pass. Construction details—snapshot boundaries, test commands, how failures count—decide whether the ruler is honest.

First model scores were low. Low scores were not humiliation—they were the ruler starting to work: pretty completion is not software engineering. The evaluation still has bounds—mostly Python, particular repos, automatable issues—and does not represent every language or org process. A shared target nevertheless appeared. Product claims began to face harder questions: can you fix real issues, pass tests, and handle long context—not only emit handsome fragments?

Later verified subsets and agent leaderboards are aftermath. Autumn 2023 nails the reframing: software-engineering ability rewritten from “can write code” into “can submit a verifiable fix in a real repository.” Rulers dull, skew, and get gamed; before this one, the industry lacked even a shared sentence for the rewrite. Without a shared sentence, demo videos can stand in for evidence; with one, there is at least a place to object, redesign, and run again.

After the benchmark launched, leaderboards and papers began speaking in the same tasks. Agent systems were named more often than single completions, because repo-level repair needs search, edit, and test loops. SWE-bench did not solve software engineering; it made “how many real issues solved” checkable. What is checkable can also be gamed, subsetted, and over-read—those side effects are ordinary aging of a ruler.

The figure 2,294 also reminds us that an eval set is a sample, not all of software engineering. Preference for Python and automatable issues shapes how agents are optimized. Rulers change behavior; behavior then demands ruler updates. Benchmarks and systems advance by pulling on each other.
