---
eventId: alphafold-3
form: Capability expansion beside access controversy
narrativeCenter: Prediction widens from single-protein shape to multi-molecule complexes while launch access stays server-first
emotionalSource: Drug and cell work care how partners sit together; full code does not open in step
avoid:
  - Treating AF3 as a minor AF2 version bump
  - Reading paper benchmarks as clinical readiness
  - Omitting Isomorphic Labs and reproducibility debate
---

AlphaFold 2 made single-chain protein shapes feel like a daily hypothesis tool. Questions in cells and drug design are usually more crowded: how does a protein sit with DNA, RNA, small molecules, ions, or antibodies in one figure? A correct monomer backbone can still carry a wrong binding pose; the wrong partner often misleads downstream design more than a slightly imperfect shape.

Around 8 May 2024, Google DeepMind and Isomorphic Labs released AlphaFold 3. The target moved from one macromolecule’s shape to joint structures of many biomolecule types. A unified representation handles different species; modules such as Pairformer update pair information; a diffusion-based structure module samples three-dimensional atomic coordinates—clearly shifting generation toward iterative denoising relative to AF2’s structure path. On protein–ligand, protein–nucleic-acid, and antibody-related complexes, the paper reports gains over several specialist baselines. Those numbers are bound to the paper’s splits and versions: research evaluation, not regulatory clearance. Confidence scores and failure modes remain; multiple samples from the same input may yield different poses and need confidence and physical checks.

Access was as loud as capability. Launch offered limited access mainly through forms such as AlphaFold Server; full training code and weights did not open in the research-friendly way AF2 had. The scientific community pressed on reproducibility, independent benchmarks, and commercial boundaries. Later policy changes belong to the aftershock and shift over time; “server-first” is the fact of the launch day and must not be back-filled with later openness. Isomorphic Labs plugging related capability into drug-design pipelines shows the institutional bet: interactions, not a museum of monomers. Server quotas, allowed molecule types, and commercial terms jointly formed the real access conditions at launch.

Diffusion enters mainstream structural biology with a cross-domain echo of image generation and a wholly different error cost—one wrong atomic coordinate usually hurts more than one wrong landscape. Pocket geometry, stereochemistry, and strain are not always captured by a single score. Paper gains should be read as “better than specialist baselines on the reported splits,” not as “automatic clinical candidates.”

AlphaFold 3 does not make wet labs optional. It widens the prior on what complexes look like and writes the tension between open science and productized release into the same *Nature* reading experience. Capability and access conditions belong on one ledger; delete either half and the history is only half true.

When the prediction target becomes a complex, error shifts from “shape a bit off” to “maybe bound in the wrong place.” Risk changes shape while release strategy grows more closed; stacked, criticism comes not only from competition but from reproducibility culture. Pairformer and diffusion rewrite the structure path; server quotas rewrite who can reproduce at once. Both rewrites must sit side by side in the account.
