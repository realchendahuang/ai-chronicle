---
eventId: wavenet
form: a generative model that taught machines to speak like people
narrativeCenter: how WaveNet, by generating raw waveforms sample by sample, first brought machine speech close to the human voice
emotionalSource: the wonder of hearing machine speech so natural it is hard to tell apart
avoid:
  - inventing WaveNet's parameter count and training details
  - claiming WaveNet was the first neural TTS model
  - exaggerating how much early versions were commercialized
---

In September 2016 DeepMind published a paper: WaveNet. What the model does sounds simple—generate raw audio waveforms directly. But before it, "sounding human" was the wall machine speech could not get past. Concatenative synthesis stitched recorded clips; parametric synthesis modeled the vocal tract mathematically; both sounded stiff or mechanical. WaveNet chose another path: generate audio the way one generates images, predicting each audio sample one at a time.

The idea sounds elegant but was extremely heavy. WaveNet modeled the waveform directly with a deep network, each sample depending on all previous ones, making inference painfully slow—at release, generating one second of speech could take tens of seconds of compute. The paper admitted this openly. But the listening results were stunning: on English and Mandarin synthesis, human evaluators rated WaveNet's quality far above the best concatenative systems, very close to real recordings.

Why does WaveNet matter? Because it established a route: speech synthesis should stop relying on hand-designed phonetic rules and instead learn "the human voice" end to end from data. That route evolved onward—from WaveNet to Tacotron to various streaming neural TTS—which is how voice assistants finally reached today's "can't tell it's a machine" quality. When Google Assistant gained natural voices, the source was here.

WaveNet's influence reached beyond speech synthesis. Its sample-by-sample generation shares methodological ancestry with later diffusion models and autoregressive generation: using a network to generate raw data distributions directly. It is not only a milestone in speech AI but an underrated pioneer of the generative-AI family.

Looking back, WaveNet's most moving quality is a plain belief that the impossible could be done. While everyone assumed machine voices had to be mechanical, DeepMind chose to relearn from the rawest level of the waveform. The seeds of today's voice assistants, audiobooks, voice cloning, and even full-duplex real-time voice interaction are all buried in that 2016 paper.
