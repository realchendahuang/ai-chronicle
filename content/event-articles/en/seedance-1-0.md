---
eventId: seedance-1-0
form: The making of a ten-second storyboard
narrativeCenter: Native multi-shot generation and platform distribution turned ByteDance’s video capability from tool effects into a named foundation model
emotionalSource: A wide shot, medium shot, and close-up occurring in one prompt instead of three separate generations
avoid:
  - Treating first place in vendor or third-party leaderboards as universal leadership
  - Ignoring inference hardware, clip duration, and product-access constraints
  - Letting later copyright disputes replace Seedance 1.0’s own technical and distribution choices
---

One prompt in the Seedance 1.0 technical report reads like a compact storyboard. A detective enters a dim room, examines clues on a table, picks up an item, and the camera changes to capture him thinking. Earlier video workflows often asked a creator to generate those actions separately and use editing to preserve the person and the space. When ByteDance released Seedance 1.0 at the Volcano Engine Force conference on June 11, 2025, it placed “native multi-shot” beside the model’s name.

The representative output described by the company was a ten-second video containing two or three shot transitions, moving among wide, medium, and close views. One model handled both text-to-video and image-to-video work at a target resolution of 1080p. The report also supplied a concrete speed sample: on an NVIDIA L20, a five-second 1080p generation took about 41.4 seconds. That figure showed where ByteDance had invested in acceleration and where the boundary remained. Generation was not instantaneous, and different hardware, prompts, and service load would change the wait.

Multi-shot generation required more than placing three short clips together. A person, object, and intended action established in one view had to remain meaningful in the next. The Seed team described shot-boundary detection, automatic video captioning, unified multitask training, and feedback optimization adapted to video. Artificial Analysis ranked the model highly in text-to-video and image-to-video at the time, but a leaderboard reflected a particular sample and voting environment. A creator’s practical result still depended on how many retries a private prompt consumed.

The other half of Seedance 1.0 existed outside the model. ByteDance could place related generation capabilities in Doubao, Jimeng, its editing ecosystem, and Volcano Engine APIs, reaching consumers, professional creators, and application developers through different doors. For a short-video platform company, distribution was not an accessory added after research. It shaped where an output would be revised, shared, and eventually returned to a content network.

The release gave ByteDance a stable video-model name that outsiders could cite and test. Its video AI had previously been easy to perceive as an effect inside an editing tool or a capability hidden behind recommendation systems. Seedance connected a foundation model, a technical report, and product distribution. Ten seconds remained short and shot-to-shot continuity could still fail, but ByteDance was no longer only a channel for generated video. It had become a model supplier responsible for what appeared in the frame.
