---
eventId: openai-o1
form: Technical essay on waiting
narrativeCenter: "o1 recasts time and computation spent before an answer from mere latency into a scalable source of model capability"
emotionalSource: "Computers have long treated delay as a defect; this release attached both a price and an intellectual expectation to waiting"
avoid:
  - "Treating hidden reasoning as an auditable proof"
  - "Using mathematics competition results as a complete account of reasoning"
  - "Claiming test-time compute replaced training scale"
---

For most of computing history, a delay has arrived with an apology. The progress bar reassures us that the machine has not stopped. The spinner asks for patience without claiming that patience will make the result more intelligent.

OpenAI presented o1-preview differently. Some questions, the release suggested, improved when the model spent more computation before answering. Waiting was no longer only overhead in the delivery of capability. It had become one of the ways capability could be increased.

Ordinary chat models can produce intermediate reasoning, but simple questions and hard proofs still pass through broadly similar next-token generation. OpenAI described o1 as trained through reinforcement learning to develop a longer internal reasoning process: try an approach, detect trouble, revise, and continue. The company reported that performance on some complex tasks rose as more test-time computation was allocated. Scaling, in other words, did not end when training did. Each problem could receive a different budget after deployment.

The clearest demonstrations came from mathematics, science, and programming. OpenAI reported substantial gains over GPT-4o on American Invitational Mathematics Examination problems, Codeforces competitions, and graduate-level science questions. These are vendor results under specific conditions, not a general certificate of intelligence. Problems with verifiable answers are especially suited to repeated derivation and outcome-based reward. An ambiguous requirement, an uncertain fact, or a conflict of values does not become a well-formed theorem because a model runs for longer.

The release also changed the evidence available to the user. The full internal chain of thought was not exposed. A product could provide an answer or a summarized explanation, but the hidden computation itself was not an inspectable proof. “Reasoned for longer” described a training and inference strategy. It did not guarantee that a particular run reasoned correctly, nor did a polished account necessarily reveal the actual route by which the answer was produced.

That distinction matters because duration carries its own aura. People are accustomed to equating deliberation with care. A slower answer can therefore earn trust before its content has earned it. More test-time compute may increase the chance of solving a difficult problem, while simultaneously increasing latency, expense, and the temptation to accept an answer because something unseen appeared to work hard on it.

Model selection acquired a price in time. Quick generation remained appropriate for many requests. Difficult work could be routed to a costlier reasoning process. Products had to decide when an answer deserved additional computation and when the better response was immediate uncertainty. Training data, parameters, and training compute had not become obsolete; test-time compute added another axis beside them.

“A machine that contemplates” would place o1 inside an analogy the release could not establish. The practical change sat in the allocation ledger. Most of the intelligence budget had once been spent by the time a model was served. Now the arrival of a question triggered another decision: how much more should this one be allowed to cost?
