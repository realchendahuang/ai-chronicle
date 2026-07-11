---
eventId: alphafold-3
form: capability expansion beside access dispute
narrativeCenter: how a diffusion structure module pushed prediction from single-protein shape to complexes with DNA, RNA, small molecules, and more
emotionalSource: drug design cares about binding, while launch prioritized a server over full code release
avoid:
  - treating AF3 as a minor version bump of AF2
  - reading paper benchmarks as clinically ready
  - ignoring Isomorphic Labs and reproducibility debate
---

AlphaFold 2 made single-chain structure prediction an everyday hypothesis tool. Drug discovery and cell biology more often ask another question: how do proteins sit in one three-dimensional picture with DNA, RNA, ligands, ions, and antibodies? In 2024 Google DeepMind and Isomorphic Labs released AlphaFold 3, expanding the target from “the shape of one macromolecule” to joint structures of multiple biomolecule types.

Architecturally the model uses a unified representation across molecule types, updates pair information with modules such as the Pairformer, and generates 3D atomic coordinates with a diffusion-based structure module—a clear turn from AF2’s structure-module path toward iterative denoising-style coordinate sampling. The paper reports gains over specialized baselines on protein–ligand, protein–nucleic acid, antibody-related, and other complex categories. Those figures come from the paper’s benchmarks and versions; they are research evaluations, not regulatory drug evidence. Confidence scores and failure modes remain; a wrong complex pose can mislead downstream design more than a wrong monomer backbone.

The release form was as loud as the capability. Launch access centered on AlphaFold Server and related limited channels; full training code and weights did not open in the same research-friendly way AF2 eventually did. The scientific community pressed on reproducibility, benchmark re-checking, and commercial boundaries. Later access-policy changes belong to the aftermath and shift over time; “server-first” should be recorded as a fact of launch day, not backfilled with every later openness into the first-day story.

On the application side, workflows move another step earlier: researchers can form computational hypotheses about binding poses and interface residues before designing wet experiments. Isomorphic Labs wiring related capability into drug-design pipelines signals an institutional bet on interactions rather than monomer catalogs. On the methods side, diffusion enters a mainstream structural-biology tool, echoing the diffusion wave in image generation while serving a different error cost—misplacing atomic coordinates usually hurts more than misrendering a landscape.

AlphaFold 3 does not make wet labs optional. It widens the prior supply of “what might this complex look like?” and writes the tension between open science and productized release into the same *Nature* reading experience.

Diffusion over coordinates adds flexibility and stochasticity: repeated samples may yield different poses and require confidence filters and physical checks. Drug chemists care about pocket geometry and strain that benchmark scores may not capture. Gains should be read per complex class in the paper’s splits, not crushed into one victory percentage. Server quotas and molecule-type limits were part of launch-day access; capability and availability must be narrated side by side.
