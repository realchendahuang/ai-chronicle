---
eventId: eliza
form: conversational mechanism study
narrativeCenter: the user's role in supplying coherence and understanding to a pattern-matching program
emotionalSource: the imbalance between a very small machine procedure and a very large human willingness to interpret
avoid:
  - describing ELIZA as an actual psychotherapy system
  - inventing patients or emotional responses
  - importing the capabilities of modern chatbots into the 1966 program
---

> **MEN ARE ALL ALIKE.**  
> IN WHAT WAY?

Joseph Weizenbaum printed this exchange near the beginning of his 1966 paper in *Communications of the ACM*: *ELIZA—A Computer Program for the Study of Natural Language Communication Between Man and Machine*. The next lines continue with complaints about men and requests for examples. On the page, the capitalized reply can read as attentive questioning. Inside the program there was no account of men, relationships, annoyance, or the person typing.

ELIZA scanned an input sentence for keywords arranged by priority. A keyword selected a decomposition rule, which divided the sentence into pieces. A reassembly rule could then move those pieces, change pronouns, and place them inside a prepared response. When no useful keyword appeared, the program fell back to content-free remarks or recalled a transformed fragment saved earlier—its “memory” often little more than a rewritten scrap of prior input tossed back into the conversation. A sentence such as “I am very unhappy” could yield a question about the duration of the unhappiness without the software representing what unhappiness was.

Weizenbaum compared the procedure to a foreign speaker with limited English who recognizes a part of a sentence and uses a formula to display interest. The analogy is exact in an uncomfortable way. Much of the meaning stays with the person who supplied it. The paper’s tables of rules and procedural description were partly intended to dissolve the aura of magic: once the insides were written in sufficiently plain language, the mystery was supposed to collapse.

ELIZA was also separate from its scripts. The keyword lists and transformation rules could be edited, so the same underlying program was not inherently a therapist. Its best-known script, DOCTOR, imitated features of Rogerian, person-centered therapeutic interviewing: reflection, redirection, requests to continue. This was a remarkably economical role for pattern matching. A therapist could plausibly keep a conversation moving without contributing many external facts, while the client volunteered the subject, history, and connections. The open form of the reply invited the other participant to perform the missing semantic work.

One of ELIZA’s most effective computational resources was therefore not in the computer.

Weizenbaum did not conceal the trick. He wrote that the aura of magic would dissolve once the program was explained in sufficiently plain language. He also observed that people approach a conversational partner with assumptions about its knowledge and reasoning. As long as its replies can be reconciled with those assumptions, the imagined partner remains intact. ELIZA did not have to build the whole illusion. It only had to avoid breaking what the user was already constructing. In later work such as *Computer Power and Human Reason*, he pressed a sharper moral claim: outsourcing human judgment and responsibility to machines is dangerous. ELIZA was both a technical demonstration and material for that later argument.

ELIZA ran in a time-sharing environment at MIT; users typed at teletype terminals. It was not an internet product in the later sense, yet it already made “chatting with a machine by text” a demonstrable experience. Keywords carried priorities; pronoun tables swapped *I / me / my* with *you / your*; fallback lines—please go on, please give an example—kept the turn alive without advancing facts. Those details are checkable in the CACM paper’s rule tables. They explain why DOCTOR was so thrifty: therapeutic questioning needs no external knowledge base, only a way to return material the user has just supplied.

ELIZA asked the questions. The richer disclosure came from the side that believed it was being heard. The program showed that text could make a computer approachable and that a small mechanism could sustain an exchange longer than its internal model seemed to warrant. Continuation is not comprehension, and an apt response is not a judgment. What came to be called the ELIZA effect names a division of labor that outlived the program: software offers a surface with just enough openness; people furnish motive, care, and causal sense. Large language models differ radically from a 1966 keyword table, yet the crack between fluency and understanding still opens along a similar line. Weizenbaum later insisted he was not forbidding conversational programs; he was forbidding the misreading of fluent dialogue as moral and cognitive competence.
