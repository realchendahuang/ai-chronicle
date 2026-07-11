---
eventId: alphafold
form: Chronicle of a blind scientific assessment
narrativeCenter: CASP14 establishing AlphaFold 2 through targets whose experimental structures remained hidden
emotionalSource: Decades of experimental effort meeting a computational prediction in two sets of nearly coincident coordinates
avoid:
  - Calling structure prediction a complete simulation of protein folding
  - Declaring experimental structure determination obsolete
  - Leaping from structural accuracy to completed drug discovery
---

CASP keeps its authority by withholding the answer.

Since 1994, the biennial Critical Assessment of protein Structure Prediction has selected proteins whose structures have recently been determined experimentally but not yet made public. Competitors receive amino-acid sequences and submit three-dimensional predictions. Only after submissions close are the hidden experimental structures released for comparison. The arrangement removes a comfort common to technology demonstrations: no participant gets to choose the cases that make its system look best.

At CASP14 in 2020, AlphaFold 2 achieved a median GDT score of 92.4 across all targets. GDT runs from 0 to 100 and measures, in effect, how much of a predicted chain lies close to the reference structure. CASP co-founder John Moult had described scores around 90 as competitive with experimental results. AlphaFold's average positional error was about 1.6 angstroms—roughly the width of an atom. On the hardest free-modeling targets, where no close known structure could serve as a template, the median remained 87.0.

These results did not come from simulating every physical step by which a protein folds inside a cell. AlphaFold treated the protein as a spatial system to be inferred. Multiple-sequence alignments supplied traces of evolution: positions that vary together may be constrained by proximity or function. Pair representations tracked possible relations between residues. Attention repeatedly exchanged information between the sequence and pair views, and a structure module produced atomic coordinates together with confidence estimates.

The test's design made the claim unusually precise. The system could predict the static structures of many proteins from sequence with accuracy that, on numerous CASP targets, approached the experimental reference. It did not thereby reveal every molecular motion, interaction, or biological function. A single predicted conformation does not settle how a protein binds another protein, DNA, RNA, or a drug. Low-confidence regions and dynamic complexes still demand experiments and other forms of modeling.

Those qualifications belong beside the achievement, not beneath it. By 2020, sequence databases contained on the order of 180 million protein sequences, while the Protein Data Bank held about 170,000 experimentally determined structures. Sequencing had become abundant; structure remained slow and expensive, commonly requiring X-ray crystallography, cryo-electron microscopy, or nuclear magnetic resonance. A reliable computational hypothesis could change which experiments scientists chose to undertake first.

In 2021, code was released, and the AlphaFold Database would eventually expand beyond 200 million predicted structures. Scale arrived after the test of credibility.

The useful image is two coordinate sets laid over one another after the sealed answer has been opened: one assembled through physical experiments, the other submitted while that result was still unavailable. A scientific community had spent decades constructing an examination that made a company's self-assessment insufficient. CASP14 allowed the coincidence of those coordinates, rather than a slogan about “solving life,” to carry the claim.
