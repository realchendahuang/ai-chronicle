---
eventId: ai-winter-1987
form: production-system postmortem
narrativeCenter: the cost structure that appeared once expert systems left demos for long-term operations
emotionalSource: a rule base once treated as knowledge capital turning into maintenance debt that must be continually paid
avoid:
  - reducing market contraction to a single technical failure
  - inventing a precise calendar day for the retreat
  - flattening different technical lines under “history proved it again”
---

The demo passed. The rule base could give expert-like advice on a bounded set of cases. Then came the expensive part.

When a new situation appears, who interviews the expert, clarifies the judgment, and writes it as a rule? When two rules conflict, which wins? After processes change, products turn over, or regulations update, how is old knowledge found and removed? Expert experience is full of conditions, exceptions, and default background that must become explicit symbols in a system. The more rules, the more chance a change in one place disturbs another. The “knowledge-acquisition bottleneck” does not happen once before launch; it runs through the system’s entire life. The Stanford AI100 report and Computer History Museum oral histories of expert-system pioneers return to the same theme: converting tacit knowledge into maintainable code systematically underestimates labor.

In the first half of the 1980s, enterprises bought Lisp machines, development tools, and knowledge-engineering services for expert systems. Vendors such as Symbolics and Lisp Machines Inc. sold specialized hardware aimed at AI development; DEC’s XCON (also called R1) and similar configuration systems were cited as commercial successes—generating VAX and related configurations from customer-order constraints and reducing human configuration errors. Narrow-domain success was extrapolated into a broad prospect of knowledge automation, and a market for specialized software and hardware formed. Once systems entered real organizations, purchase price was only the first invoice. Maintaining rules, validating outputs, tracking environmental change, and keeping scarce experts engaged decided whether a system stayed.

At the same time, general-purpose workstations grew faster and cheaper. Suns and improving general CPUs let more AI development run on non-specialized machines; Common Lisp and compilers matured on general hardware, weakening the sales story that AI required a Lisp machine. Lisp machines had built an advantage as software–hardware environments suited to AI work; when ordinary equipment could carry more of the same load, price and closedness flipped from selling points to burdens. Demand fell, suppliers contracted, and the market of specialized hardware, tools, and consulting retreated rapidly after 1987—the year is a retrospective marker, not a crash that rang the open-market bell on a single morning.

The contraction is often called the second AI winter, but “winter” can hide its commercial character. Research did not stop all at once, and rule systems did not vanish from software; compilers, diagnostic programs, and business-rule engines continued inside industrial systems. What changed was enterprise judgment of cost and return: a system that can display professional reasoning is not necessarily a production system that can be updated within budget. “Artificial intelligence” again became a label hard to defend to investors and purchasing departments; some projects switched to names such as “machine learning” or “intelligent systems” to avoid a burned word.

The lesson of expert systems also cannot be simplified to “handwritten rules were wrong; learning from data is right.” Later machine-learning systems no longer mainly require experts to encode knowledge line by line, yet still must handle data drift, evaluation, monitoring, anomalies, and assignment of responsibility. The representation of knowledge changed; the fact that production environments keep changing did not. Rule bases became datasets and model versions; the maintenance bill changed line items without disappearing.

After 1987 the market re-priced an underestimated long-term liability. A demo need only answer correctly on chosen cases; a production system must change with rules, people, and business. The most expensive part of knowledge engineering was never writing the first version of the rules, but the maintenance without an endpoint afterward. Line items later renamed data labeling, model monitoring, and drift handling. The question—who pays after deployment to keep the system correct—did not leave the room.
