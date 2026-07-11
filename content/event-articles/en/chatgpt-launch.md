---
eventId: chatgpt-launch
form: Close reading of a modest launch page
narrativeCenter: A free research preview placing GPT-3.5 behind the ordinary rhythm of continued conversation
emotionalSource: An interface of almost no friction exposing fluency, helpfulness, and error in the same public view
avoid:
  - Replacing product design with unverified growth legends
  - Turning the launch into a single instant when human history changed
  - Omitting the hallucinations and overconfidence visible in OpenAI's own examples
---

The announcement began without ceremony: “We've trained a model called ChatGPT which interacts in a conversational way.” A free research preview followed, with a button to try it.

The interface removed nearly everything except sequence. A person wrote; the model answered; the person could correct it without restating the whole exchange. Conversation history made fragments into usable commands: explain that more simply, try another version, what did you miss? Years of work on GPT-3.5 and instruction tuning reached the public through a form already learned from messaging.

OpenAI's own coding example preserved an instructive failure. A user posted Go code and asked why an error did not surface. ChatGPT requested context, then blamed a channel that it said had not been closed. But the supplied code already contained `defer close(resultWorkerErr)`. The answer was orderly, responsive, and wrong at the point that mattered. The flaw appeared not in an adversarial appendix but on the page introducing the product.

The limitations section was similarly explicit. ChatGPT could produce plausible nonsense, change its answer after a small rephrasing, become verbose, and guess what a vague prompt meant instead of asking for clarification. Safety training produced both missed harmful requests and mistaken refusals. Reinforcement learning lacked an automatic source of truth for factual claims; rewarding caution could also teach a model not to answer questions it might have handled correctly.

Conversation was more than decoration around a language model. Trainers had played both sides of dialogues. Multiple responses to the same conversational turn were ranked, reward models were trained, and PPO was applied across several iterations. Thumbs-up, thumbs-down, and a feedback contest connected public use back to data collection. The product was simultaneously an interface and an instrument for observing where the interface failed.

Before this page, interacting with a capable general model usually required API access, code, and decisions about requests, responses, and state. ChatGPT compressed those preparations into a browser tab. A teacher, programmer, writer, or bored visitor did not need to identify a formal machine-learning task before beginning. The same conversation could move from explanation to objection to revision.

Its novelty lived in this ordinariness. There was no paper to master before entry, no model weight to deploy, no scheduled match to watch. An inconsistent but cooperative system waited in a familiar white box. The launch materials already warned that it would be confidently mistaken. Millions of later exchanges began because, despite that warning, asking one more question cost almost nothing.
