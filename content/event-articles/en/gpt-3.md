---
eventId: gpt-3
form: Essay on the prompt as a temporary dataset
narrativeCenter: Examples inside the context specifying a task without any update to the model weights
emotionalSource: The pleasure of rapid adaptation shadowed by abrupt failures on simple questions
avoid:
  - Repeating the scaling-law story as a tale of inevitable victory through size
  - Treating few-shot performance as mastery of every demonstrated task
  - Hiding arithmetic failures, bias, and possible benchmark contamination
---

GPT-3 moved part of machine-learning development into a piece of prose.

The paper called its evaluation settings zero-shot, one-shot, and few-shot. In the first, the model received a task description. In the second, one worked example appeared as well. In the third, several input–answer pairs were written into the context before the test item. Nothing happened to the weights. There was no gradient update and no new training run. The examples simply occupied the same temporary window as the question.

This made a prompt resemble a miniature dataset—one that could be edited with a text cursor. A sequence of examples could establish the desired answer format, assign meanings to labels, indicate a translation direction, or demonstrate a novel word operation. The 175-billion-parameter model then continued the pattern.

Some changes were dramatic. On LAMBADA, reformulating the problem as fill-in-the-blank and providing examples produced a reported few-shot accuracy of 86.4 percent. On TriviaQA, the paper reported 64.3 percent zero-shot and 71.2 percent few-shot. WebQuestions rose from 14.4 to 41.5 percent. Similar prompting was used for translation, grammar correction, questions, and simple code.

The same tables refused to form a clean ascent. GPT-3 could handle some two-digit arithmetic and then deteriorate sharply as digits accumulated. It approached chance on WiC word-sense classification. Adversarial natural-language inference and parts of commonsense reasoning remained difficult. The order and wording of demonstrations mattered. The paper could show that behavior changed inside the context; it could not fully explain what sort of temporary task representation the model had formed there.

Scale also enlarged the uncertainty around data. A corpus drawn broadly from the web may contain benchmark questions or close relatives. The authors performed contamination analyses, but no procedure could certify the complete absence of overlap across every evaluation. Bias arrived through the same door. The paper's compact phrase—models trained on the internet have internet-scale biases—was less a rhetorical flourish than a warning about what indiscriminate reach collects.

OpenAI distributed GPT-3 through an API rather than downloadable weights. That choice made the prompt both the experimental instrument and the product interface. A developer without a training cluster could try a classifier, translator, writing tool, or code generator by changing examples in a request. One underlying model could support many products while its operator retained control of the model itself.

The enduring oddity of GPT-3 is how quickly competence could appear and vanish. A few examples made the model look as though it had understood a new rule on the spot; a reordered example or longer sum revealed how contingent that understanding was. Task design became cheaper, faster, and more accessible. It also became grammatical: software behavior could now depend on the exact way an instruction happened to be written.
