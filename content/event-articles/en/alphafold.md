---
eventId: alphafold
form: contest scores and boundary notes
narrativeCenter: median GDT_TS 92.4 on CASP14 single-chain prediction expanding structural hypotheses without equaling dynamics or drugs
emotionalSource: experimental structures slow and expensive; predicted structures suddenly batch-queryable—trust must track confidence
avoid:
  - claiming protein folding was completely solved
  - treating AlphaFold DB coverage as experimental replacement
  - erasing the 2021 code and database aftermath
---

Amino-acid sequences are comparatively easy to read. Three-dimensional protein structures usually require X-ray crystallography, cryo-EM, or NMR—slow and costly. Computational structure prediction had tried for decades without stably reaching experimental accuracy across the vast conformational space. In the 2020 CASP14 blind assessment, DeepMind’s AlphaFold 2 moved the conversation from whether hope existed to which systems were already near usable.

The headline figure from the paper and CASP evaluation is a median GDT_TS of about 92.4 across all targets, with many predictions approaching experimental accuracy (hard subsets and individual domains still lag). GDT_TS measures backbone agreement with experiment at multiple distance cutoffs. A median of 92.4 does not mean every residue is perfect; it means the overall distribution crossed a gulf common to prior methods. The system combines coevolutionary signal from multiple-sequence alignments, pair representations, and a structure module to predict atomic coordinates, and it reports confidence measures such as pLDDT so users can see which stretches to trust more.

In 2021 code and weights were released for research use; the AlphaFold Protein Structure Database later expanded beyond 200 million predicted structures, covering many sequences lacking experimental entries. Biologists can download a model, form hypotheses about domains, candidate interfaces, and mutation sites, then prioritize crystallography or mutational assays. That is a workflow change: structural information shifts from scarce experimental output toward a searchable prior.

Boundaries belong in the same paragraph as the scores. AlphaFold 2 targets static single-chain (and limited related) structure prediction. It does not simulate the folding path, capture dynamics, automatically solve every complex and ligand pose, or replace efficacy and safety experiments. Low-confidence regions, intrinsically disordered stretches, rare folds, and conformation dependent on experimental conditions still fail or stay vague. Database entries are predictions, not equivalents of PDB experimental deposits.

CASP14 tables age quickly; the workflow remains: inspect prediction and confidence before spending experimental budget. Scientific questions partly shift from “can we guess the shape?” toward “how do we plug shape hypotheses into mechanism and design?” AlphaFold 2 did not end structural biology. It changed the supply curve of structural hypotheses.

Multiple-sequence-alignment quality strongly affects predictions: rich families score higher confidence; orphan proteins and fast-evolving regions struggle. Biologists learned to read pLDDT color scales before trusting a backbone, then to cross-check with known folds and experiments. Code release enabled modification and distillation; the structure database extended benefits to researchers who never train models. CASP’s blind median is external validity; database coverage is surface area; neither replaces laboratory adjudication.
