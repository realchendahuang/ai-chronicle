---
eventId: ibm-watson
form: televised contest narrative
narrativeCenter: how an offline question-answering system used three seconds to choose an answer and decide whether it was worth buzzing
emotionalSource: a decisive final score sharing the screen with five question marks that exposed the boundary
avoid:
  - treating a game victory as solved open-domain question answering
  - omitting offline operation and clue boundaries
  - using later enterprise outcomes to rewrite the match
---

When Watson took the *Jeopardy!* stage in February 2011, it faced Brad Rutter and Ken Jennings, two of the game’s greatest champions. The task was not merely to “know the answer.” Clues used puns, cultural references, and compressed wording. The system had to estimate its confidence within seconds, decide whether that confidence justified buzzing, and sometimes choose a wager. A bad answer was not a harmless search result. It subtracted money from the score.

Behind the stage stood a room-size machine: ten racks, 90 servers, and 2,880 processor cores. The competition system did not use the live internet. Encyclopedias, dictionaries, novels, plays, Project Gutenberg books, and other sources had been loaded in advance. After receiving a clue, DeepQA generated candidate answers in parallel and subjected them to hundreds of analyses—answer type, time, place, textual co-occurrence, and passage support among them. Confidence rose when independent lines of evidence converged. The full argument took about three seconds.

The revealing feature of this design was that uncertainty remained visible. In a Final Jeopardy category called “U.S. Cities,” the correct response was Chicago. Watson answered, “What is Toronto?????” The five question marks signaled that the system itself had little confidence, but the wager still placed the failure before millions of viewers. A machine cannot feel television embarrassment; its engineers could no longer keep the boundary inside the laboratory. A geographic implication in ordinary language had slipped through the evidence pipeline.

Across the three matches, Watson finished with $77,147, ahead of Jennings at $24,000 and Rutter at $21,600. The margin established genuine championship-level performance under *Jeopardy!* rules. The same rules drew a fence around the result: clues were short, scoring was fixed, the corpus was prepared, and answers were usually supported by existing text. The contest was not a continuously changing web, still less a medical or enterprise setting with liability, explanation, and long-term follow-up.

The Watson name later moved into healthcare and business products, which makes it tempting to rewrite the 2011 event through later successes and disappointments. The evidence should remain separate. The television system demonstrated a concrete pipeline: retrieve competing hypotheses, make heterogeneous evidence argue, and use confidence to decide whether to speak. That pattern still appears in retrieval-augmented question answering. A trophy, however, cannot be exchanged for a reliability contract in every other domain.

The complete record of those three days requires both images at once: the decisive score and the row of question marks after Toronto. One shows the speed and strength of evidence fusion in a bounded task. The other shows a low-confidence error that the system recognized yet still voiced. A dependable question-answering machine must do more than find plausible answers. It must also know when not to press the buzzer.
