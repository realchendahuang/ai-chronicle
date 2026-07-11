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

92.4.

In the 2020 CASP14 blind assessment, DeepMind’s AlphaFold 2 posted a median GDT_TS of about 92.4 across all targets—many predictions approaching experimental accuracy, with hard subsets and individual domains still lagging. GDT_TS measures backbone agreement with experiment at multiple distance cutoffs. A median of 92.4 is not a warranty on every residue; it is a distribution that crossed a gulf common to prior methods. Amino-acid sequences are comparatively easy to read. Three-dimensional structures usually require X-ray crystallography, cryo-EM, or NMR—slow and costly. Computational structure prediction had tried for decades. CASP releases target sequences before experimental structures are public, so the median carries real external validity.

The system combines coevolutionary signal from multiple-sequence alignments, pair representations, and a structure module to predict atomic coordinates, and it reports confidence measures such as pLDDT so users can see which stretches to trust. Rich families tend to score higher confidence; orphan proteins and fast-evolving regions struggle. Biologists learned a reading order: confidence color scale first, backbone second, experimental budget third.

In 2021 code and weights were released for research use; the AlphaFold Protein Structure Database later expanded beyond 200 million predicted structures, covering many sequences that lacked experimental entries. The workflow change is the real product: structural information shifts from scarce experimental output toward a searchable prior—download a model, form hypotheses about domains, candidate interfaces, and mutation sites, then prioritize crystallography or mutational assays. Code release enabled modification and distillation; the database extended benefits to researchers who never train models.

Boundaries belong in the same paragraph as the scores. AlphaFold 2 targets static single-chain (and limited related) structure prediction. It does not simulate the folding path, capture dynamics, automatically solve every complex and ligand pose, or replace efficacy and safety experiments. Low-confidence regions, intrinsically disordered stretches, rare folds, and conformation dependent on experimental conditions still fail or stay vague. Database entries are predictions, not equivalents of PDB experimental deposits.

The structure module outputs coordinates and confidence; the database outputs coverage; the laboratory outputs the final ruling. That three-layer division stabilized after CASP. AlphaFold 2 accelerates the first two; the third was never outsourced to a network. Score tables age. The workflow remains: color first, backbone second, then decide whether to pay for the experiment.
