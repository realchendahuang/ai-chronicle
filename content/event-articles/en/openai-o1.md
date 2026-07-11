---
eventId: openai-o1
form: Technical essay on waiting
narrativeCenter: o1 rewrites time and compute spent before an answer from system lag into an expandable model capability
emotionalSource: Computers long treated immediate response as virtue; here waiting is priced openly and loaded with intellectual expectation
avoid:
  - Equating a hidden reasoning process with an auditable proof
  - Using contest math scores as a summary of all reasoning
  - Claiming test-time compute replaces training scale
---

Computers usually apologize for waiting. Progress bars, spinners, and “loading” explain why a result has not arrived.

On 12 September 2024, when OpenAI released o1-preview and o1-mini, waiting was presented by a frontier lab as a capability: some problems deserve more computation before an answer.

Ordinary chat models can emit reasoning steps, yet they often process simple questions and hard proofs with a similar token-by-token procedure. For o1, OpenAI described another training path: reinforcement learning that develops longer internal reasoning—trying, checking, revising—and partial gains on complex tasks as test-time compute rises. Scaling no longer happens only before training ends. After deployment, each problem can still receive a different thinking budget.

Official scores in mathematics, science, and programming made the difference legible. On AIME problems, Codeforces contests, and graduate-level science questions such as GPQA, o1 showed large gains over GPT-4o under OpenAI’s reported settings—vendor evaluations, not a general certificate of intelligence. Contest items have checkable answers and reward iterative derivation; open-world facts, ambiguous demands, and value conflicts do not become math problems merely because the model spends longer.

Access belongs in the same ledger. o1-preview entered ChatGPT and the API as a preview with strict rate limits; o1-mini shipped beside it, splitting reasoning products by size and cost from day one. At launch it lacked several ChatGPT features already present on other models, including web browsing and file uploads—keeping first reasoning models inside a more closed input surface to avoid stacked failures from tools and long context. The full internal chain of thought was not shown to users: products could return answers or cleaned summaries without making hidden computation an auditable proof. “Thinking longer” describes training and inference mechanics; it does not guarantee correctness, and a polished explanation is not necessarily the path that produced the answer.

Safety materials, including a later system card, discussed risks particular to reasoning models: longer internal processes can probe refusal boundaries and need matching training and monitoring. Those are the publisher’s risk narratives and mitigations, not proof that risk has ended. Waiting raises the chance of success while raising cost, latency, and a new trust temptation—people prefer answers that arrived slowly.

Model choice acquired a price in time. Instant answers still suit many tasks; hard problems can call costlier reasoning; products must decide when to wait and when to admit ignorance quickly. Test-time compute does not replace data, parameters, or training scale; it adds another dial beside those older levers. The spinner remains. Besides slowness, it marks intentional expenditure—and in autumn 2024 that expenditure still carried preview, rate-limit, and feature-gap labels.
