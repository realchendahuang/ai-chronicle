---
eventId: alphafold-3
form: Essay on molecular relations
narrativeCenter: "AlphaFold 3 expands structural prediction from the portrait of an individual protein to the geometry formed when different biomolecules meet"
emotionalSource: "Many of biology's consequential events occur not inside isolated objects but at their points of contact"
avoid:
  - "Inferring a discovered medicine directly from a predicted structure"
  - "Generalizing vendor-reported benchmark results into clinical effectiveness"
  - "Passing over the initial server-only access and absence of released code and weights"
---

The protein structure problem invited the language of portraiture: one sequence, one folded form, one object brought into view. Cells are less solitary than that picture.

Proteins bind DNA and help regulate genetic information. RNA folds and pairs, and joins proteins in molecular machinery. A small-molecule drug approaches a pocket whose geometry may determine whether any later biological effect is possible. Once AlphaFold 2 had made a striking advance in predicting many protein structures, the important questions did not end at the protein's surface. They gathered there.

AlphaFold 3 widened the unit of prediction. Proteins, nucleic acids, small-molecule ligands, ions, and modified residues could be represented in a single system. The requested output was the joint structure of a complex, showing each component together with the positions of different kinds of molecules in relation to one another.

The architecture changed with the scope. A Pairformer became the principal processing module in place of AlphaFold 2's Evoformer, with reduced reliance on multiple-sequence alignments. At the output end, a diffusion process generated atomic coordinates. During training, noise was added to known structures and the network learned to reverse that corruption. At inference, it began from noise and repeatedly denoised toward a possible three-dimensional arrangement.

Generation makes room for chemically detailed hypotheses, but it also creates a specific temptation. Where the evidence is weak or structure is absent, a system may produce geometry that looks persuasive because plausibility is what denoising has learned to construct. The Nature paper discussed such hallucination and measures intended to reduce it; it did not claim that the danger had vanished.

Across the evaluation categories selected in the paper, the authors reported improvements over strong specialized systems for tasks including protein–ligand, protein–nucleic-acid, and antibody–antigen structure prediction. These are results under the paper's datasets, sampling procedures, and ranking methods. A predicted complex can sharpen an experimental hypothesis or help researchers decide which candidates deserve attention. It cannot derive binding affinity, cellular behavior, toxicity, or clinical success from coordinates alone. Each step toward a drug adds realities that a structural model does not contain.

The publication also arrived with an unresolved question about how science should inspect such a system. Researchers could submit eligible predictions through AlphaFold Server, but the complete model weights and code were not released alongside the paper as they had been for AlphaFold 2. Input and usage limits constrained the first public service. Reproducibility was therefore not an administrative afterthought. A method presented as a general account of molecular interaction must eventually be compared, extended, and challenged outside the laboratory that built it.

“Decoding life” is too large a phrase to describe AlphaFold 3 usefully. The object on the screen was no longer necessarily an individual molecule. Biology often becomes consequential at contact: a surface fits, a strand is recognized, a ligand settles—or fails to. The model offered coordinates for those meetings. Experiments still had to determine what the meetings meant.
