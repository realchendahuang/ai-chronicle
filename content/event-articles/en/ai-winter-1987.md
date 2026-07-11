---
eventId: ai-winter-1987
form: production-system postmortem
narrativeCenter: the lifetime cost revealed when expert-system demonstrations became systems that organizations had to maintain
emotionalSource: knowledge once booked as an asset gradually appearing as an obligation that never stopped accruing
avoid:
  - attributing the market contraction to one technical failure
  - inventing a precise day on which the downturn began
  - flattening distinct AI approaches into a slogan about history repeating
---

The demonstration worked. Under the chosen conditions, the rule base produced advice that resembled an expert's. Then the expensive questions began.

Who would interview the expert when a new case appeared? Who would turn the clarification into a rule and test its interactions with all the others? When two rules fired in conflict, which one prevailed? If a product, regulation, or organizational process changed, how would obsolete knowledge be identified and removed? Professional judgment carries defaults, exceptions, and context that practitioners may not state until an unusual case forces them to. A symbolic system requires those conditions to become explicit. The larger the rule base grows, the more likely a local repair is to alter behavior elsewhere.

The “knowledge-acquisition bottleneck” was therefore not a gate passed once before launch. It continued for the lifetime of the software.

In the first half of the 1980s, companies bought Lisp machines, expert-system development tools, and knowledge-engineering services. Successes in narrow domains were offered as evidence for much wider knowledge automation. A market formed around the specialized hardware and the people who could populate it with rules. Purchase price, however, was only the first line in the operating cost. Continued expert participation, validation, rule maintenance, and adaptation to a changing organization determined whether a system survived.

At the same time, general-purpose workstations grew faster and cheaper. Lisp machines had offered an environment unusually well suited to AI development. When ordinary hardware could perform more of the same work, specialization changed character: its price and closed ecosystem became liabilities. Demand weakened, suppliers contracted, and after 1987 the connected market for dedicated machines, tools, and consulting receded quickly.

Calling this the second AI winter can blur what was specifically commercial about it. Research did not stop in unison, and rule-based software did not vanish. Enterprise arithmetic changed. A system capable of a convincing expert performance was not necessarily a production system that could be kept current within a budget. “Artificial intelligence” again became a label that procurement departments and investors treated with suspicion; projects found safer names such as machine learning or intelligent systems.

The postmortem should not end with “handwritten rules failed, learned models won.” Later machine-learning systems reduced the need to encode every expert judgment directly, but they inherited data drift, monitoring, evaluation, exceptional cases, and responsibility for wrong outputs. The representation of knowledge changed. Production reality continued to move.

After 1987, the market was repricing a maintenance liability that the boom had treated like a one-time installation. A demonstration needed to answer correctly on selected cases. Production software had to remain correct while rules, staff, products, and organizations changed around it. The largest cost in knowledge engineering turned out not to be entering the first rules, but maintaining a rule base that never reached a finished state.
