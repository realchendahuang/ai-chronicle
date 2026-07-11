---
eventId: openai-plugins
form: Product archaeology
narrativeCenter: A short-lived directory that never became the final standard, yet exposed early how a conversational assistant would connect to the outside world
emotionalSource: Excitement from the first search, calculation, and booking tools, mixed with noise from permissions and prompt injection
avoid:
  - Writing the plugin catalog as a triumphant ecosystem story
  - Equating a short life with historical worthlessness
  - Substituting a partner list for narrative
---

Looking back at ChatGPT plugins, the retired directory still holds an overly tidy image of the internet: line up websites and services, let the model choose.

On 23 March 2023, OpenAI opened plugin testing to waitlisted users. ChatGPT then still felt like a closed conversation room. It could explain a travel plan without knowing live fares; write calculation steps while stumbling on simple arithmetic; recommend a restaurant without completing a booking. Plugins opened a few doors. Browsing brought fresh web information; a code interpreter took over calculation; third parties such as Expedia and Wolfram placed their capabilities in the same chat surface. Users enabled plugins; the model selected among them and assembled calls. Access was not a universal default switch but limited alpha and test seats. OpenAI's own browsing and code plugins sat beside third-party ones—a reminder that tools came both from ecosystem partners and from the platform itself.

Waitlists biased early experience toward developers, press, and power users whose feedback shaped review and permission design. Manifests and OpenAPI elevated service self-description into model-readable contracts—an idea tool ecosystems keep rediscovering. Browsing imported web content and classic prompt-injection equations; code plugins outsourced arithmetic reliability to an execution environment and exposed LM math fragility. After the directory retired, the mechanisms were disassembled and reused, not deleted.

The integration style matched the moment's simplicity. A manifest under a domain told ChatGPT who the plugin was; an OpenAPI description said what it could do. Interface documents written for human developers now had to be readable by a model. Names, parameter descriptions, and permission scopes were no longer internal engineering details; they affected whether the model picked a tool and whether a user's sentence became a correct call. Discovery, authorization, and invocation were packed into one conversation stream—strong product intuition, concentrated governance and safety problems.

It sounded like the start of an app store and behaved more like a hastily built bazaar. Stalls multiplied; discovery and review grew hard; many plugins differed little. Harder still: once the model read external pages and accessed services on a user's behalf, malicious instructions, authorization boundaries, and mistaken actions entered the dialogue together. A language model can decide what to do next without gaining the clear control flow of conventional software. Convenience and risk were the same act: handing judgment to the model.

The plugin directory did not become the general standard for model–tool connection. Function calling, GPT Actions, and later agent interfaces dismantled it into more basic capabilities; the store form and product name receded. Some abilities continued as product features such as code interpretation / data analysis and browsing, no longer mainly distributed through a plugin shelf. The engineering questions that remained were concrete: how the model selects tools, how parameters are validated, when users authorize, whether external responses can be trusted. Spring 2023 put those questions into ChatGPT in one place. After the directory closed, they stayed inside every external call.

Archaeology here is not about declaring that plugins “should have become the standard.” It is about admitting that a failed or withdrawn product experiment can still set the next stage's problems on the table early. The catalog was short-lived. The seam problems were not.
