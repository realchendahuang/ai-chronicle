---
eventId: llama-2
form: The license beside the download button
narrativeCenter: Llama 2 brings official weights into research and commercial products while drawing limits through a community license
emotionalSource: Relief at being able to discuss private deployment, followed by a pause when legal review reaches the additional terms
avoid:
  - Calling the community license unrestricted open source
  - Omitting the acceptable-use policy and monthly-active-user threshold
  - Treating the Microsoft cloud partnership as the only deployment path
---

Although first-generation LLaMA weights circulated through the community, the official terms were aimed mainly at noncommercial research. Engineers already knew how to quantize, fine-tune, and run the models locally. Companies still found it difficult to place that gray route inside procurement and product contracts. A model being downloadable did not mean a company could comfortably ship it.

On 18 July 2023, Meta released Llama 2 base and Chat variants at 7B, 13B, and 70B, free for research and commercial use. Teams could request the weights, deploy them in their own environments, or choose hosted cloud offerings. Microsoft was the preferred cloud partner, not the only location permitted by the license.

“Free to use” was followed by the full Llama 2 Community License. It included an acceptable-use policy, an additional authorization requirement for products above a very large monthly-active-user threshold, and restrictions on certain uses, including using outputs to improve other large language models. These terms separated Llama 2 from closed APIs and from OSI open-source software licenses without comparable conditions. Open weights, open code, and open-source licensing became harder to treat as synonyms.

The model release was more than a relicensing of the first generation. Meta provided base and chat-tuned versions, and the paper described longer training, safety fine-tuning, and red-team work. Communities could continue quantization and domain fine-tuning from the same official checkpoints. Enterprises could more readily place private deployment, data boundaries, and inference cost into a formal plan. Technical evaluation and license review now happened together. That middle position expanded choice and created work. Teams no longer faced only a binary between closed APIs and noncommercial research weights, but they had to determine whether their user scale, purpose, and distribution fell within the terms. Keeping weights in a private environment did not remove content-safety, output-compliance, or capability limits. It transferred more control and more responsibility to the deployer at the same time.

Llama 2's clearest product surface had two parts: a route for taking the weights away and a license explaining how they could be taken. Reading only the download button made “open” too broad. Reading only the restrictions missed the real space it created for commercial deployment. The release required both to be read on the same page.
