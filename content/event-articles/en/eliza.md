---
eventId: eliza
form: conversational mechanism study
narrativeCenter: how the user performed much of the understanding in an exchange that felt attentive
emotionalSource: a considerate question on the screen, with only keywords, fragments, and templates behind it
avoid:
  - describing ELIZA as an actual psychotherapy system
  - inventing patients or emotional responses
  - importing modern chatbot capabilities into the 1966 program
---

> **MEN ARE ALL ALIKE.**
>
> **IN WHAT WAY?**

Joseph Weizenbaum printed this exchange in his 1966 paper on ELIZA. The person continues with a complaint; the program requests examples, reformulates phrases, and returns the subject to the speaker. It is easy to hear concern in “In what way?” Inside ELIZA, however, there was no model of men, relationships, annoyance, or the person at the terminal.

Its procedure could be laid out line by line. ELIZA searched the input for prioritized keywords. A keyword selected a decomposition rule that divided the sentence into pieces; a reassembly rule changed pronouns, moved the user’s words, and fitted them into a prepared reply. If no useful keyword appeared, the program could ask the user to continue or retrieve a transformed fragment saved earlier. Its “memory” was not an understanding of the past so much as a note left on a desk for later reuse.

ELIZA was also distinct from the role it played. Different scripts could supply different keyword lists and transformations. The famous DOCTOR script imitated the surface form of Rogerian, person-centered interviewing: reflection, requests to elaborate, and questions that returned attention to the speaker. That role was exceptionally economical for a rule system. The user supplied the people, history, and causal links; the program kept the exchange moving while contributing almost no external facts. “Can you give me an example?” sounded responsive and quietly handed the unfinished semantic work back to the human.

Weizenbaum did not conceal this arrangement. His paper exposed the procedures and rule tables, and compared the mechanism to a foreign speaker with limited English who recognizes a phrase and uses a formula to display interest. People, he observed, approach a conversational partner with assumptions about what it knows and how it reasons. As long as the next reply can be reconciled with those assumptions, the imagined partner survives. Some of ELIZA’s most effective computation therefore took place outside the computer: the user supplied context, inferred motives, and repaired ambiguity.

That was both the demonstration’s power and its warning. On MIT’s time-sharing system, ordinary text became an approachable computer interface; a person could continue without learning a command language. But the ease of the interface encouraged a category mistake—conversation mistaken for comprehension, and an apt phrase mistaken for judgment. In *Computer Power and Human Reason*, Weizenbaum later pushed the moral issue further: a machine’s ability to participate in an exchange did not justify transferring human responsibility to it.

Modern language models are technically remote from ELIZA’s keyword tables, but the old program still teaches a useful reading habit. When a machine’s sentence feels caring or intelligent, ask how much is represented by the system and how much has just been supplied by the reader. The 1966 reply “In what way?” did not understand the preceding complaint. It placed an empty space with such precision that the person on the other side filled it with understanding.
