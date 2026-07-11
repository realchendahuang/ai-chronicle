---
eventId: constitutional-ai
form: Close reading of an alignment method
narrativeCenter: Harmlessness supervision partly moves from per-example human labels to a principle list plus AI feedback
emotionalSource: Wanting a less harmful assistant without making people read the worst outputs all day
avoid:
  - Treating the “constitution” as law or a safety guarantee
  - Claiming humans are no longer needed
  - Substituting later Claude product tone for the 2022 paper’s bounds
---

Labeling language-model outputs as “harmful” was never only checkboxes. Annotators read threats, hate, and boundary-crossing requests and try to stay consistent while tired; labs pay for scale and expose people repeatedly to ugly text. Optimize only for helpfulness and models over-comply on dangerous prompts; push harmlessness hard and assistants become evasive. In 2022 alignment work sat between helpfulness and safety, and at the throughput limit of human feedback pipelines.

On 15 December 2022, Anthropic posted *Constitutional AI: Harmlessness from AI Feedback* on arXiv. The method is named plainly: humans do not label every harmful output one by one; they first write a list of principles—a readable, arguable “constitution.” In a supervised stage the model critiques and revises its own answers against those principles; in a reinforcement-learning stage an AI compares candidate answers by the same principles and supplies preference signal (RLAIF). Human supervision moves upward to the principle text and evaluation design rather than endlessly expanding harm-label sets.

The paper reports that, with fewer human harm labels, one can train assistants that refuse less evasively and explain refusals better. Those are results under the authors’ settings, not automatic safety certificates. A “constitution” has no legal force; wrong, skewed, or conflicting principles are faithfully amplified. Humans do not exit—they write principles, design pipelines, sample-check, and red-team. Outsourcing part of alignment to model-on-model critique admits that human attention is scarce; scarcity does not vanish, it changes address.

Read the paper for both promise and bound. Principles are editable artifacts, not a moral terminus. Later Claude product tone and refusal style must not be back-propagated as everything the 2022 paper already proved. The method offers a path that lightens the burden of harm labeling; whether the path holds still depends on principle quality, evaluation protocol, and whether someone still owns failure cases.

A principle list can be debated in public, versioned, even criticized as skewed—that is both the method’s advantage over black-box human labels and its risk. Advantage: supervision moves up. Risk: authors’ values are amplified. RLAIF does not cancel humans; it changes where humans intervene. Read the 2022 paper as a reallocation of labor in alignment engineering—not a final declaration that safety is solved.
