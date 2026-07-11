---
eventId: llama-4
form: Stratified open-weight history
narrativeCenter: Scout and Maverick push openness into longer context with MoE and native multimodality while a teacher stays backstage
emotionalSource: Excitement at downloadable students—and stratified openness when the teacher remains inside
avoid:
  - Treating ten million tokens as universal task competence
  - Omitting that Behemoth did not ship as open weights beside them
  - Reading vendor comparison tables as independent finals
---

On 5 April 2025, Meta released open-weight Llama 4 Scout and Maverick. Both are mixture-of-experts models with native text-and-image input; Scout stresses ultra-long context, Maverick general capability. Per launch materials, Scout has about 109 billion total parameters and 16 experts, activating roughly 17 billion per token; Maverick scales to about 400 billion total and 128 experts while still activating about 17 billion. Not every parameter need compute every step: shared and routed experts split capacity from active FLOPs. “Large” on disk and “live” per step must be read apart.

“Ten million tokens” is Scout’s loudest number and the one that needs slow reading. Meta states pretraining and post-training at 256K context, then length generalization and specialized data out to 10M, with launch posts showing long-code and needle-in-a-haystack style tests. That evidences long-range handling under official settings—not that every real 10M-token job will be fully understood. Fitting material in, retrieving a span, and sustaining judgment are three different difficulties. Needle tests and perplexity curves on the launch page are evidence, not certificates of universal task competence.

Behemoth, the largest family member, remained in training or preview at launch—on the order of two trillion total parameters and about 288 billion active—without shipping as available weights beside Scout and Maverick, yet used to produce soft targets for distilling Maverick. The community receives students; part of what trained them stays inside the company: openness stratified again. Launch-page wins against GPT-4o, Gemini, DeepSeek, and others are Meta’s own evaluations and versions—useful for positioning, insufficient as a final for every deploy.

Llama 4 pushes open weights into multimodality, MoE, and ultra-long context, and forces the word *open* to be read in parts: weights downloadable, architecture studyable, students deployable; teacher, full data, and training process may still be offstage. The herd left the fence—but not every animal walked the same distance out.

Scout’s long context and Maverick’s general capability move open-weight users from “parameter count” toward “active count, context, and modality.” Deployers must watch memory, disk, and routing implementations together. Behemoth withholding weights while teaching makes “open” present as a downloadable student layer. Stratification is not a flaw description; it is a structural fact of this generation’s release.
