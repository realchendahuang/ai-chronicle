---
eventId: ibm-watson
form: systems reportage
narrativeCenter: the decomposition of a television clue into candidate answers, evidence scores, confidence, and wagering
emotionalSource: a crisp public victory set against the messier limits of question answering outside the game
avoid:
  - presenting Watson as a machine that understood arbitrary language
  - reporting only the score while hiding the system architecture
  - equating success in a controlled contest with success in enterprise deployment
---

On *Jeopardy!*, the prompt is not phrased as an ordinary question. Contestants receive a clue written around the answer, untangle its category, references, and wordplay, then respond in the form of a question. Knowledge alone is insufficient. A contestant must ring in quickly, and an answer offered with poor confidence loses money. IBM chose the game because it converted natural-language question answering into a public examination with timing and risk built into the rules.

The competition version of Watson was not querying the live internet. It carried its sources with it—Wikipedia, encyclopedias, dictionaries, literary works, and other material—and operated offline. Ten racks held ninety servers with 2,880 processor cores. Once a clue arrived, the DeepQA architecture did not rely on one grand language algorithm. It generated many candidate answers in parallel, sent them through hundreds of search and analysis procedures, and combined the resulting evidence with machine learning. The process took about three seconds.

Inside the machine, each clue became a very fast disagreement. One candidate might fit the expected answer type. Another appeared often near key terms. A third accumulated support from independent passages. The learned scorer estimated how much each kind of evidence deserved to matter. Only at the end did a single answer—and a confidence in that answer—reach the screen. The confidence also determined whether Watson should attempt to buzz in.

The machinery's uncertainty did not stay hidden. On a Final Jeopardy clue in the category “U.S. Cities,” whose correct response was Chicago, Watson offered “What is Toronto?????” The repeated question marks exposed low confidence while the geographical error remained conspicuous to a television audience.

The final totals were less ambiguous: Watson finished with $77,147, ahead of champion contestants Ken Jennings at $24,000 and Brad Rutter at $21,600. The prize money was donated to charity.

The program supplied an unusually clean boundary for the system. Clues were short. The rules of scoring were fixed. The source collection, though large, had been assembled in advance. The machine knew the category and could decline to answer by withholding the buzzer. When IBM later carried the Watson name into healthcare, analytics, and enterprise question answering, those supports no longer held. Documents went stale. Questions had unclear scope. A correct answer might not exist. The cost of an error was no longer a deduction from a game-show score.

The disciplined pipeline behind the podium outlasted both the television persona and the later breadth of the Watson brand: retrieve possibilities, make heterogeneous evidence compete, then estimate an answer and whether the accumulated confidence is high enough to speak.
