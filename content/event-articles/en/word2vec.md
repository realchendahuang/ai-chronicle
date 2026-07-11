---
eventId: word2vec
form: essay on a computational map
narrativeCenter: local prediction turning patterns of word companionship into distances and directions
emotionalSource: a thin objective revealing linguistic regularities while refusing to become a complete theory of meaning
avoid:
  - treating vector analogies as dependable symbolic reasoning
  - building the article around the popular king-minus-man example
  - claiming that one fixed vector contains a word's full meaning
---

In a one-hot representation, every word is an address. *Cat*, *dog*, and *tax rate* occupy different cells, but the encoding itself contains no reason for the first two to be closer than either is to the third. Earlier neural language models could learn continuous word representations. Their cost made the method difficult to apply to very large vocabularies and corpora.

Word2Vec's answer was to make the learning task thinner. CBOW predicts a word from the words around it. Skip-gram reverses the direction, predicting nearby words from the current one. Across countless short windows of text, the model repeats that narrow exercise. The vectors are not dictionary definitions placed into the system. They are parameters left behind by repeated guesses about which words keep appearing near one another.

The 2013 papers concentrated on efficiency. Expensive nonlinear hidden layers used by earlier neural language models could be removed from these objectives. Hierarchical softmax and, in related work, negative sampling reduced the cost of dealing with a large output vocabulary. Once training became cheaper, researchers could increase dimensions, vocabulary, and corpus size and compare how those decisions altered the learned space. The work reported high-quality vectors learned from 1.6 billion words in less than a day.

The resulting geometry gave Word2Vec its fame. Cities and countries, singular and plural forms, adjectives and adverbs often occupied approximately consistent directions. The paper assembled 19,544 analogy questions across five semantic and nine syntactic relation types. Subtracting one vector and adding another could move the nearest neighbor toward a word that fit one of those relations. The spectacle of arithmetic over language was real enough to be useful and fragile enough to be misunderstood. The answer changes with frequency, corpus, vocabulary, and the behavior of nearest-neighbor search. The operation is not a general symbolic proof.

A further limit is built into the word table. Each word receives one fixed vector. *Bank* beside a river and *bank* holding money share the same entry; Word2Vec does not construct a new representation from the sentence in which the word currently appears. Contextual models would later address this compression.

The static vector is best read as a map of textual neighborhood. Frequent associations become short distances. Grammatical habits leave directions. Rare uses may disappear. Social prejudice in the corpus is not filtered out by the elegance of the geometry; it can settle into the same space as semantic similarity.

Word2Vec made such maps inexpensive, dense, and easy to reuse in search, classification, and neural language systems. Whether a direction represented knowledge, convention, or bias remained a question for the text that drew it.
