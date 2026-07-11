---
eventId: llama-2
form: license close reading
narrativeCenter: how 7B/13B/70B weights “free for research and commercial use” still live under a community license—not an OSI blank check
emotionalSource: cautious excitement when counsel and engineers can finally push the same checkpoint through procurement
avoid:
  - calling Llama 2 unconditional open-source software
  - conflating LLaMA 1 research terms with Llama 2 commercial terms
  - replacing clauses and red-teaming with democratization slogans
---

On 18 July 2023 Meta’s announcement liked the words open source; the license still had to be read. Llama 2 shipped pretrained and chat fine-tuned weights at 7B, 13B, and 70B, free of charge for research and commercial use. Microsoft became preferred partner; Azure listed the models; Windows local optimization and availability through AWS, Hugging Face, and others followed. For product teams this was the sentence missing after first-generation LLaMA: weights could enter a contract conversation, not only a research request or a torrent.

“Free commercial use” is not an OSI open-source software license. Llama 2 uses a community license plus an acceptable use policy, additional authorization for very large monthly-active-user deployments, and restrictions such as using model outputs to improve other large language models. The accurate phrase is open weights under commercial-friendly but conditioned terms. Mixing that language with Apache 2.0 Mistral 7B—or with unrestricted open-source projects—fails legal review. Keep editorial distance between marketing copy and SPDX-style classification.

Technical and safety detail live in *Llama 2: Open Foundation and Fine-Tuned Chat Models*. Training continues the “enough tokens, discussed public-data recipe” line; Chat variants use supervised fine-tuning and human-preference optimization, with internal and external red-teaming emphasized. A transparency schematic and responsible-use guide try to surface known issues and mitigations—part of the release bundle, not decoration. Author-reported benchmarks should be read apart from third-party replications; what restructured the market was the checkpoint itself becoming privately deployable and further fine-tunable under clear(er) terms.

Contrast with LLaMA 1 fixes the historical slot. February 2023’s research license plus the weight leak already birthed quantization, LoRA, and local UIs; enterprise default paths stayed fuzzy. Llama 2 turned fuzz into checklist items: request access, accept terms, evaluate AUP, then decide whether to ship. Communities kept merging and distilling the same generation; startups used it for offline demos and proprietary fine-tunes; clouds sold hosted inference. Competition left the closed-API scoreboard alone and entered “can you lawfully put weights in your own VPC.”

Later Llama 3, 3.1, and 4 rewrite capability ceilings and multimodal edges. July 2023’s distinctive content is a shift in the license tier. The industry learned to chew words carefully: open weights, open code, open-source license—three phrases marketing had kneaded into one. Llama 2 did not end safety or centralization debates; it gave those debates a concrete license PDF and a downloadable 70B filename. Read the day with both the blog’s celebratory tone and the restriction list open—both are primary sources; drop either side and the page tilts.
