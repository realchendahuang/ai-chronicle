---
eventId: gpt-3
form: paper reading around the prompt box
narrativeCenter: how zero-, one-, and few-shot prompts temporarily specify tasks without updating 175 billion parameters
emotionalSource: rapid in-context adaptation set beside systematic failures on arithmetic and common sense
avoid:
  - replaying scale-always-wins rhetoric from the scaling-laws essay
  - equating few-shot scores with having truly learned every task
  - hiding data contamination, bias, and the API distribution choice
---

Preparing a model for a task used to mean touching training sets and code. GPT-3, in 2020, moved part of that work into the input box.

The paper describes an autoregressive Transformer with about 175 billion parameters, trained on a large mix of web and other text, with a 2,048-token context. Evaluation is deliberately cast as three prompting regimes. Zero-shot gives only a task description; one-shot adds a single full example; few-shot stacks several input–answer pairs into context. The model continues the text without gradient updates. “Learning,” here, happens inside one forward context: examples temporarily define answer format, label meaning, even a textual operation never fine-tuned as such.

A prompt is therefore not only a question but a tiny dataset. The paper reports roughly 86.4% few-shot accuracy on LAMBADA; TriviaQA rising from about 64.3% zero-shot to 71.2% few-shot; WebQuestions from about 14.4% to 41.5%. Translation, grammar correction, invented-word explanation, and simple code completion enter the same few-shot protocol. A model-size table from about 125 million to 175 billion parameters shows few-shot gains rising with scale.

175 billion parameters make the phenomenon visible without making results tidy. Some two-digit arithmetic looks reliable; more digits fail quickly. WiC word-sense judgment sits near chance. Common-sense and adversarial reasoning lag specialized systems. Example order and wording move scores—the authors call what internal task forms in context an open question. The breadth of training text adds another uncertainty: test items may appear in approximate form online; contamination analyses help but cannot absolutely clear every benchmark. The bias discussion leaves a precise, heavy line: models trained on the internet have internet-scale bias.

OpenAI did not release GPT-3 weights. Access came through an API. Prompting became both a control method and a product interface: developers without training clusters—or even without training a downstream model—could trial translators, classifiers, or writing tools from a few examples. The business form in which one base model serves many applications takes shape here. Few-shot protocol also changed evaluation culture: the same model can score very differently under different prompt templates, so “prompt engineering” entered papers and products.

GPT-3 moved task definition from the training pipeline into rewritable text. That text is cheap, flexible, and fragile. It can make a model look immediately compliant and still break on a reordering, a rephrase, or a slightly harder sum. The paper’s uneven tables preserve the feel of a new interface, not a certificate of universal competence. In-context learning moved the example budget from annotation platforms into prompts—cheap budget, high variance. 175 billion parameters are an amplifier; the interface shape behind the amplifier—API keys and prompt configuration—is what product history actually inherited.
