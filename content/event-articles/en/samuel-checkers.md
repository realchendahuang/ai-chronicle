---
eventId: samuel-checkers
form: an account of an often-cited early experiment
narrativeCenter: how a bulky IBM 702 put the term "machine learning" into public vocabulary years in advance by playing checkers against itself
emotionalSource: the plain curiosity of letting a machine improve itself, continuous with the recurring question "can programs improve themselves?"
avoid:
  - inventing conversations or moods inside the IBM lab
  - presenting the checkers program as the formal beginning of AI
  - substituting "pioneer" labels for experimental detail
---

In 1952 an unusual program appeared in an IBM lab: it did not bill customers or crunch statistics. Arthur Samuel wrote a checkers player on the IBM 702 and gave it one job—play against itself and get better. Memory was minuscule, so the program leaned on a plain idea: compress a board position into a few numbers, then let the weights of those numbers shift slowly with each game's outcome.

Samuel did not feed it grandmaster games or hand-code every move. He gave the program an evaluation function that judged "roughly how favorable is this position for me," then let game results adjust the weights of that function. Lose a game and nudge the judgments that led to it in the opposite direction. This mechanism of adjusting yourself by results later received formal names: reinforcement learning, and more broadly machine learning.

By 1955 the program had picked up a few opening tricks. It was not smarter than a person, but it demonstrated that "learning" need not mean a human writing rules—it could mean a program adjusting its own parameters from its own experience. Samuel's 1959 paper called this work an early instance of machine learning. The term now sits on countless product pages; its first serious use traces back to this checkers program.

How strong did it get? By 1959 the program played near casual amateur level, and Samuel demonstrated it in public matches. It won some and lost some. What stuck was not the record but the realization that a program could "get smarter" rather than dutifully execute every fixed instruction—a distinction still at the root of how deep learning differs from ordinary software.

In hindsight the system lacked almost everything modern machine learning has: no massive data, no deep networks, no GPUs, barely any search. But its skeleton was complete—an adjustable evaluation function, a path turning game outcomes into adjustment signals, and self-play to manufacture training data. When AlphaGo later trained through self-play and estimated win rates with a value network, the core idea already existed on that 1952 machine.

Samuel's checkers program did not spark an industry or become a product. Its place in AI history is more like a coordinate: it turned "machine learning" from a slogan into a running, repeatable experiment. Today's language models, recommendation systems, and self-driving stacks share the same plain starting point—a program adjusting itself from experience. The first clear footprint on that path sits on a 1952 checkers board.
