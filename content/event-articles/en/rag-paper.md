---
eventId: rag-paper
form: retrieval-generation splicing lab notes
narrativeCenter: how densely retrieved passages join a pretrained generator on one conditioning chain
emotionalSource: knowledge need not live only in weights; the model can look up, then write
avoid:
  - dating RAG as a product buzzword from the ChatGPT-plugin era
  - ignoring Facebook AI’s concrete dense-retrieval plus seq2seq assembly
  - claiming retrieval abolishes hallucination
---

First retrieve a Wikipedia passage. Then write the answer conditioned on the query and the passage.

On 22 May 2020, *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks* (Facebook AI and coauthors; later NeurIPS 2020) joined two long-separated ways language models “know” things. Parametric memory packs regularities and facts into weights and, at inference, only runs a forward pass. Non-parametric memory keeps a document store outside and retrieves passages when needed. The first generates fluently, updates slowly, and is hard to cite. The second is updatable and citable but does not automatically write a coherent answer. The paper’s move: retrieve first, then generate conditioned on the query and the documents.

RAG in the paper is not a marketing acronym; it is a trainable pipeline. A query enters a dense retriever that pulls relevant passages from an index such as Wikipedia; a pretrained sequence-to-sequence model (parametric memory) decodes an answer conditioned on query plus passages. Retriever and generator can be trained jointly or in stages so that “which span to fetch” and “how to phrase” align to the same knowledge-intensive objectives. Open-domain question answering is the core test bed: questions arrive without long context, yet answers depend on world knowledge. Compared with only fine-tuning a large generator, some knowledge lives in a replaceable index. Compared with only returning snippets, the output is continuous text rather than a list of links.

The name later outgrew the mechanism. Enterprise knowledge-base QA, internal policy assistants, and cited search summaries all like to call themselves RAG. The 2020 paper does not mandate a vector-database brand or a prompt template. It mandates a task split: non-parametric memory for the updatable factual surface, parametric memory for language and reasoning. An index can be rebuilt with new documents without retraining the whole net for every fact—that is the half engineers find seductive. The other half is honest limit: bad retrieval yields fluent wrong answers; conflicting passages can still be mashed; latency and index quality become product metrics. RAG lowers the pressure to put everything in weights; it does not repeal the physics of hallucination.

Placing the work among 2020 neighbors prevents time travel. BERT-style encoders had already heated dense representation retrieval; GPT-3 put huge parametric memory under the spotlight. The RAG paper stands between them: it accepts generators’ conditional power and refuses to stuff the encyclopedia only into parameters. Application waves after ChatGPT would draw “retrieval-augmented” as a default architecture diagram, but the public ledger still dates the method name to this retrieve-then-generate write-up. It also differs from later product black boxes that “search the web then summarize”: the methods section puts retriever and generator into a trainable objective, so fetching the wrong document has a chance to be partly corrected by learning, not only by prompt-time prayer.

Read the lab notes for the interface, not the slogan. Input is a question; middle is a scored set of documents; output is a string answer that ideally points back to supporting passages. Training can be end-to-end to a degree; deployment often splits into a retrieval service and a generation service. The paper’s gift is to legitimize that split and give a reproducible joint-training story—not to invent the human habit of looking things up.

Once knowledge-intensive NLP is told as one pipeline, team roles change: some people own chunking and indexes, some own generation prompts and refusal policy, some score whether answers stay grounded in documents. RAG caught on because it gave that division of labor a short name. Short names get overused; return to the 2020 abstract and setup and it remains specific: retrieval-augmented generation for tasks that need external documents to stand, not for every chat.
