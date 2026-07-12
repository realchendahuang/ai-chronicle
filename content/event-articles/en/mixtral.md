---
eventId: mixtral
form: Two parameter ledgers
narrativeCenter: Mixtral's two-of-eight sparse expert routing separates total capacity from the parameters activated for each inference step
emotionalSource: Surprise when model size stops being one number, followed by caution when deployment requires the books to be reconciled
avoid:
  - Treating vendor benchmarks as independent conclusions
  - Ignoring the distinction between total and active parameters
  - Backfilling later and larger MoE systems into launch day
---

“8x7B” looked like a simple multiplication problem, but Mixtral required readers to set aside their usual intuition about parameter tables. On 11 December 2023, Mistral AI released Mixtral 8x7B, a sparse mixture-of-experts model with weights under Apache 2.0. Its appeal came from both the structure and a familiar license allowing commercial use, modification, and redistribution.

The model required two ledgers. The first recorded total capacity: about 46.7 billion parameters, with eight feed-forward experts in each layer. The second recorded what participated when processing a particular token: a router selected only two experts, leaving about 12.9 billion parameters active per token. The expert pool determined how many patterns the model could contain; routing determined which part of that capacity incurred compute at a given moment.

That did not make deploying Mixtral equivalent to deploying an ordinary dense 13B model. Inactive experts still had to be stored, and checkpoint and memory layout reflected the larger total. Batching, expert parallelism, routing implementation, and communication all affected real latency. Paper active-parameter counts explained compute potential; they could not replace a throughput test on actual hardware.

Release materials listed a 32k context and emphasized English, French, Italian, German, Spanish, and code. An Instruct version trained with supervised fine-tuning and DPO arrived at the same time. Mistral reported an MT-Bench score of 8.3 and claimed that Mixtral exceeded Llama 2 70B on many benchmarks while matching or exceeding GPT-3.5 on several measures. The subject of those sentences must remain the publisher. Suitability still had to be retested on a team's own data, latency targets, and machines.

Apache 2.0 made the legal path relatively direct without assuming responsibility for training-data provenance, output compliance, or content safety. Engineering teams received commercially usable weights with high total capacity and sparse activation, along with new optimization problems: where experts lived, whether routing remained balanced, and whether the inference stack scheduled them efficiently. Permissive licensing lowered the entrance barrier; MoE moved complexity into the runtime.

Mixtral added a column to open-model comparison. “How many parameters?” no longer produced a complete answer. The minimum account now included total parameters, active parameters per token, license, and measured throughput. The expert pool was like a restaurant with eight kitchens: each order opened only two, but the rent for the whole building still existed.
