---
eventId: llama-4
form: model-family anatomy
narrativeCenter: Scout, Maverick, and Behemoth not released alongside them—activation counts, expert counts, and teacher distillation as a division of labor
emotionalSource: vast total parameters hidden behind sparse activation, the strongest member kept backstage as teacher
avoid:
  - rewriting Meta’s benchmark marketing as objective verdict
  - calling open weights unconditional open source
  - touting 10M context without training length and official test scope
---

Llama 4’s three names do not read as one size chart. Scout is built to go far; Maverick to cover broader tasks; Behemoth too large, at launch, to leave the training yard with the other two. Meta called them a herd. Mixture-of-experts routing and teacher distillation hold the relations together; a simple small-to-large ranking does not.

Per Meta’s launch materials, Scout has about 109 billion total parameters and 16 experts, activating roughly 17 billion parameters per token. Maverick scales to about 400 billion total parameters and 128 experts while still activating about 17 billion per token. Parameters must fit in memory, yet need not all compute every step: tokens pass shared experts and then routed specialists. The asymmetry stores capacity while bounding active FLOPs. MoE is the premise of the product tiers, not merely an acronym.

Both released models place images and text into one backbone from pretraining. Meta’s “native multimodal” means early fusion over text, images, and video frames rather than bolting a vision head onto a finished language model. Maverick is positioned as the general assistant and image-text workhorse; Scout spends architectural budget on long context.

“Ten million tokens” is Scout’s loudest number and the one that needs slow reading. Meta states pretraining and post-training at 256K context, then length generalization and specialized data out to 10M; launch posts show perplexity on long code and needle-in-a-haystack retrieval. That evidences long-range handling under official tests, not that every real 10M-token job will be fully understood. Fitting material in, retrieving a span, and sustaining reliable judgment are three different difficulties.

Behemoth, the largest family member, remained in training or preview at launch—on the order of two trillion total parameters and about 288 billion active—without shipping as available weights beside Scout and Maverick. Meta used it to produce soft targets for distilling Maverick in pretraining and compared it to other flagships on STEM benchmarks on the launch page. Behind this open-weight release stands a teacher not fully opened: the community receives students; part of what trained them stays inside the company.

Launch pages list many wins against GPT-4o, Gemini 2.0, DeepSeek V3, and others—Meta’s own evaluations and versions, useful for positioning, insufficient to decide for every deploy precision, prompt, and application dataset. That Scout fits an H100 at Int4 and Maverick a single H100 host describes hardware envelope at stated precision only.

Llama 4 brings open-weight models into multimodality, MoE, and ultra-long context, and it makes “open” more stratified. Weights downloadable, architecture studyable, students deployable; teacher, full data, and training process still offstage. The herd left the fence—but not every animal walked the same distance out.

Routing and shared-expert layout shape load balance and memory maps; quantization notes determine whether seventeen billion active parameters meet latency targets on real hosts. Multimodal pretraining puts image–text pairs into one loss rather than bolting a vision head on later, which helps screenshot and chart tasks and complicates safety. Ten-million-token claims require reading the 256K training length and official needle tests as scope, not as universal task competence. Students downloadable, teachers withheld: openness stratified by design.
