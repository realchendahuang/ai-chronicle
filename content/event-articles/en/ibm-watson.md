---
eventId: ibm-watson
form: Public contest record
narrativeCenter: An offline DeepQA pipeline outscoring two champions across three Jeopardy! matches
emotionalSource: Embarrassment when confidence shows on live TV—and the clarity of the final margin
avoid:
  - Reading a game win as solved open-domain QA
  - Omitting offline operation and clue bounds
  - Back-propagating later enterprise outcomes onto the match
---

*Jeopardy!* turns natural-language clues into timed answers with wagers. Knowledge is not enough; contestants must ring in, and poor confidence loses money. IBM chose the show because it made question answering a public exam with rules: one clue, one canonical response, a host’s judgment.

In the three matches aired 14–16 February 2011, the competition Watson did not query the live internet. It carried sources with it—encyclopedias, dictionaries, literary works, and more—and ran offline. DeepQA generated many candidate answers in parallel, ran them through hundreds of analyses—type match, co-occurrence, temporal and geographic constraints, passage support—and fused evidence with machine learning; after a clue arrived, answer and confidence emerged on the order of three seconds. Public hardware orders of magnitude: about ten racks, ninety servers, 2,880 processor cores (institutional historical materials). Inside the machine was a very fast argument: which evidence is harder, then a single decision to speak.

Uncertainty did not stay hidden. On a Final Jeopardy clue in “U.S. Cities,” correct response Chicago, Watson offered “What is Toronto?????”—repeated question marks exposed low confidence while the geographic error remained obvious to a television audience. Final totals: Watson $77,147, Ken Jennings $24,000, Brad Rutter $21,600; prize money went to charity. The margin was clear. The capability boundary did not automatically enlarge with the trophy.

Clues were short, scoring fixed, corpora prepared in advance. When the Watson brand later entered healthcare and enterprise, those supports often did not hold. A public win shows a pipeline can work on a bounded task; it cannot alone show the same brand is deployable in open business settings. Retrieve candidates, make heterogeneous evidence compete, estimate whether confidence is high enough to speak—that pipeline instinct outlasts the television persona.

After the television win, the Watson brand was pulled toward healthcare and enterprise. A contest rules table is not a product-liability table. DeepQA’s parallel hypotheses and evidence fusion remain a family instinct for retrieval-augmented QA; converting a trophy directly into ward and call-center readiness exceeds what the match showed. Read Watson with the score margin and the Final Jeopardy question marks together.

Offline operation secured reproducible match conditions and also limited distance from open-web QA. Later retrieval-augmented generation would face freshness and non-reproducibility again. Competition Watson chose reproducibility over freshness; that choice belongs in the capability boundary, not only in victory news.
