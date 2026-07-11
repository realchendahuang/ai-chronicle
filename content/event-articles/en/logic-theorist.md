---
eventId: logic-theorist
form: proof record
narrativeCenter: the conversion of mathematical proof from a finished chain into a search among possible next steps
emotionalSource: restrained surprise at seeing a hidden portion of reasoning become executable
avoid:
  - personifying the program as a mathematical prodigy
  - presenting one shorter proof as a general defeat of mathematicians
  - inflating a bounded formal task into general intelligence
---

38 out of 52.

Allen Newell, Herbert Simon, and Cliff Shaw’s Logic Theorist proved 38 of 52 selected propositions from chapter two of Whitehead and Russell’s *Principia Mathematica*. One proof was shorter than the published version. The propositions were already known to be true; printed proofs were already attached. The program’s problem was not to discover the destination but to find a route to it.

Formal logic says which steps are allowed. It does not automatically say which permitted step should be tried first. Treat every branch equally and candidate paths grow beyond practical reach. The team represented proof as a search through states—known expressions, applicable rules, possible next formulas—and supplied heuristics for ranking those possibilities. Preference under resource limits, not exhaustive enumeration, became part of the program. RAND’s description of the “logic theory machine” emphasized the difference from a systematic algorithm that mechanically exhausts its options: its methods were called heuristic because they resembled a limited but central feature of human problem solving—selection when the search space is too large to finish. The resemblance did not grant the machine a mathematician’s private intuition. It meant that the labor often omitted when a clean proof is printed—deciding what to try next—had become procedural. Newell and Simon would later connect this style of work to bounded rationality: a system that cannot survey every lawful path must still choose well enough, soon enough.

The 14 failures belong on the same scorecard. They mark the joint limits of search depth, heuristic preference, and machine resources—not a general verdict that machines cannot do mathematics. The shorter proof mattered because another reader could verify, line by line, whether each inference obeyed the rules. The program held no occult authority—only an auditable path.

Making that search run on a 1950s computer required an unglamorous companion invention. Newell, Shaw, and Simon developed the Information Processing Language, or IPL, to hold symbolic expressions, goals, and candidate steps in linked lists whose length could change. Lists could grow, nest, and share structure. A data structure can look like plumbing in retrospect. Here it was part of the intellectual claim. Heuristics could not choose among ideas until the machine had a practical way to construct, rearrange, and share their symbolic pieces. Logic Theorist therefore diverged from numerical programs: arithmetic code handled fixed-format numbers; this program rewrote expression trees.

Early electronic computers were easy to understand as fast arithmetic machinery. Logic Theorist worked on symbolic expressions, intermediate states, goals, and estimates of promise. Calculation now included deciding what deserved calculation next. By the time of the 1956 Dartmouth summer project, Newell and Simon could already exhibit results from this line of work. The later mainstream of symbolic AI—representation, search, heuristics—had a demonstrable prototype at a scale small enough to check line by line.

Newell and Simon would pursue a more general science of problem solving, including later systems such as GPS. Logic Theorist itself remains clearest at its actual scale: one formal system, a selected collection of propositions, designed rules of preference, and a score of 38 out of 52 that can still be audited. Later symbolic systems changed domains while repeating the same skeleton: represent states, search among legal operators, control explosion with heuristics. The contribution was not that it “did all of mathematics,” but that it made the skeleton run as a first working sample.
