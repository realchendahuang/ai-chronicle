---
eventId: continue-dev
form: An open-sidebar observation
narrativeCenter: Continue lets developers keep a familiar IDE while treating models, context, and workflows as replaceable parts
emotionalSource: Relief at gaining AI assistance without moving an entire toolchain
avoid:
  - Pulling later industry consolidation into the launch-day plot
  - Inflating early agent capability
  - Mistaking openness for zero configuration or maintenance
---

As the “AI-native editor” became a category, developers appeared to face a full migration problem. Should they leave their current editor? What would happen to extensions, shortcuts, and team settings? Did using AI require sending code to one model provider? Continue offered a less dramatic answer: begin with a sidebar.

During 2023, Continue developed as an open-source extension for VS Code and JetBrains, bringing chat, completion, and repository context into IDEs developers already used. It did not require everyone to accept the same model. Cloud APIs, local models, and different providers could be connected as needed, and workflows could be customized. The editor stayed; the model became a replaceable component. The value of that choice was not only price. An organization could inspect how the extension handled context, decide where code was sent, and make its own trade-offs among capability, cost, and data boundaries. If one model was faster at completion and another stronger at repository questions, replacing the model did not require replacing the editor. Open source here meant configuration authority rather than a general slogan.

Authority came with work. The more interchangeable the models, the more a team had to understand differences in context windows, interfaces, and deployment. A local model could reduce data leaving the machine while trading away speed or quality. Self-hosting increased control and returned operational responsibility. Continue offered a structure for choosing, not a button that guaranteed the best result.

That structure formed a useful contrast with the complete-editor route represented by Cursor and Windsurf. An integrated product could optimize indexing, interface, and model calls together, reducing interaction friction. An open sidebar let developers keep their toolchain and choose critical parts separately. The two routes pursued different kinds of freedom: one reduced the friction of operating; the other reduced the friction of leaving and replacing.

Continue's place does not depend on having been the “strongest agent.” It added a fork to the AI-coding ecosystem. While the industry repeatedly invited developers into new enclosed workspaces, an open extension insisted that the model could come to the existing workspace—and that the user could keep the key to the door.
