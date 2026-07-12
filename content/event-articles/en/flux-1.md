---
eventId: flux-1
form: three-door release narrative
narrativeCenter: how one 12B image-model family separated capability and permission across Pro, Dev, and Schnell
emotionalSource: users saw three ways to call or download a model, while the consequential difference was what each door allowed them to do
avoid:
  - treating community popularity as scientific consensus
  - conflating the licenses of Pro, Dev, and Schnell
  - presenting publisher benchmarks as independent findings
---

Black Forest Labs announced its company and released FLUX.1 on 1 August 2024. It did not offer a single model under one set of terms. The launch opened three doors. Pro, the highest-capability version, was available through APIs. Dev, distilled from Pro, shipped as downloadable weights for non-commercial use. Schnell, optimized for fast few-step generation, was also downloadable and used the Apache 2.0 license. Capability, speed, and permission were separated from the first day.

The variants shared a foundation of roughly twelve billion parameters. Black Forest Labs described a hybrid of multimodal and parallel diffusion-transformer blocks trained with flow matching, with choices such as rotary positional embeddings intended to support efficiency and scale. For a working creator, those terms eventually condensed into practical tests: whether a complex prompt preserved all its objects, whether lettering inside the image contained fewer errors, and how many images from a batch were good enough to continue editing.

The founding team carried a recognizable technical lineage, including work on VQGAN, latent diffusion, and Stable Diffusion. That history gave FLUX.1 an audience able to test it immediately. SDXL had remained a default for high-quality local text-to-image workflows, so the community did not need to learn what a checkpoint was. It needed ComfyUI nodes, hosted services, and inference scripts to accept a new set of files.

Black Forest Labs reported that Pro and Dev surpassed several commercial systems in visual quality, prompt following, typography, and output diversity, and described Schnell as a leading few-step model. These were the publisher’s comparisons, with tasks, raters, and versions chosen by the company. The community rapidly tested the claim that FLUX followed instructions more closely, but fast adoption was not scientific consensus across every style, language, and hardware configuration.

Licensing determined the adoption path more directly than the leaderboard did. An individual could use Schnell for local development. Researchers could inspect and modify Dev weights under non-commercial terms. A commercial product seeking the full Pro capability had to use an API. Calling all three “open-source Flux” erased the release’s most important boundary. Downloadable weights, permission to research, permission to commercialize, and open-source code were not interchangeable properties. FLUX.1 made their differences part of the product family.

Migration happened quickly because the release did not require the community to abandon its existing tools; users could replace the model entry inside familiar workflows. A few new filenames in a folder looked like a minor change. Behind them was a new distribution order: the strongest model stayed behind a service, a nearby distilled model opened for research, and a fast variant spread under a permissive license. FLUX.1 raised the image-quality ceiling and the cost of failing to read the license.
