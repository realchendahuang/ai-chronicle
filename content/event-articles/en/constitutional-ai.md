---
eventId: constitutional-ai
form: close reading of an alignment method
narrativeCenter: how harmlessness supervision partly moved from “labelers mark dangerous answers one by one” to “principle text plus model critique”
emotionalSource: the bind of wanting a harmless assistant without making people read the worst outputs all day
avoid:
  - treating the constitution as law or a safety certificate
  - claiming humans are no longer needed
  - substituting Claude product voice for the 2022 paper’s limits
---

Labeling language-model harm was never only a checkbox problem. Labelers read threats, hate, manipulation, and boundary-crossing requests, and try to stay consistent while tired. Labs pay for scale and absorb the ethics of repeatedly exposing people to ugly text. Meanwhile a model optimized only for helpfulness over-cooperates on dangerous prompts; a hard push on harmlessness often twists the assistant into over-refusal and evasive hedges. Alignment work in 2022 sat in that tension—plus the throughput ceiling of human feedback pipelines.

On 15 December, the Anthropic team posted *Constitutional AI: Harmlessness from AI Feedback* on arXiv, with Yuntao Bai and many coauthors. The method is named in plain language: Constitutional AI. Humans do not mark every harmful output. They first write a list of principles—a readable, contestable “constitution.” In a supervised stage the model critiques and revises its own answers against those principles; in a reinforcement stage an AI ranks candidates by the same principles to form preference signals (RLAIF: reinforcement learning from AI feedback). Human oversight moves up toward principle text and evaluation design, not endless expansion of harm label sets.

The target behavior is easy to miss in summaries. The authors wanted assistants that need not only refuse, but explain objections while remaining somewhat helpful—“harmless without being evasive.” That is not the same objective as maximizing refusal rate. A principle list makes the source of norms inspectable: someone who has read the constitution can ask which clause a behavior maps to, instead of facing only a black-box reward model. Inspectable is not correct, and not complete. Principles are lab-written; cultural bias and omissions still enter training. The authors do not claim AI feedback abolishes human judgment—only that costly, potentially traumatic labeling can be re-sited in another part of the pipeline.

Connecting the thread to products requires restraint. When Claude entered the market months later, company narratives would place Constitutional AI beside human feedback as one method of shaping behavior; that is product positioning layered on research lineage, not a December 2022 certificate for any deployed model. ChatGPT had already shown mass demand for conversational assistants; InstructGPT had shown how a three-stage RLHF pipeline turns a continuation model into an instruction follower. Constitutional AI sits on the same alignment riverbed with a different tributary: can harmlessness labels be partly automated, and can norms be made explicit as written principles?

The useful reading is not the acronym. It is the reallocation of supervision. Humans still own principles and red-teaming; models carry large-scale comparison and revision; production systems still need independent evaluation. Later talk of collective constitutions, public principles, and contestable norms assumes the seam this paper opened: alignment is not only more thumbs-up and thumbs-down—it can also be drafting, revising, and publishing a code of behavior, while saying plainly who wrote the clauses and what they leave out.
