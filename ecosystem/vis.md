---
data:
  - profiles
  - topics
---

import TernaryPlot from "components/ecosystem/TernaryPlot.jsx"
import CircularVis from "components/ecosystem/CircularVis.jsx"

# Explore Visualizations of the Ecosystem Map

On this page you can explore our various visualizations of the ecosystem map. Click below to view organizations mapped by:

1. [Approach to Social Change](#Visualizing-the-Ecosystem-by-Approach-to-Social-Change)
2. [Topic](#Visualizing-the-Ecosystem-by-Topic)

## Visualizing the Ecosystem by Approach to Social Change

This visualization maps organizations based on their approach to social change. There are three broad categories of approach: inner, cultural and systems oriented.

<TernaryPlot profiles={profiles} />

Systems approaches focus on changing institutions and systems., Organisations focused on this area are particularly interested in areas such as governance, economics and technology. Cultural approaches focus on changing the broader collective culture, targeting aspects such as norms, values and collective narratives. Inner approaches focus on the inner transformation of individuals as a way of transforming society at large, both through personal development and shifting perspectives of how they relate to themselves, others, and the planet.

Each organization was given a weighting across these three dimensions with the restriction that the overall total summed to one reflecting the fact this was about the focus of their approach. Thus being perfectly in the centre of this diagram would indicate that an organization weighted each approach equally. Conversely being at either corner would indicate the organization totally prioritized that approach.

We emphasize that these scores were assigned by the project team based on their best effort assessment based on available material. If an organization has been mis-weighted please [get in touch][contact] and it will be corrected.

**Note: we are aware many organisations currently have the same weightings and are thus on top of one another, making it difficult to see all those listed in the directory. The next iteration of the visualization will address this.**

[contact]: https://lifeitself.us/contact/

## Visualizing the Ecosystem by Topic

This visualization maps an overview of organizations grouped together by their primary topic. Click to zoom in or out. Hover over a circle to see its name.

<CircularVis profiles={profiles} topics={topics} />

We have defined ten primary topics, each of which is represented by a circle within the broader circle/topic of social change. A short description of each topic follows below:

- Arts & Culture – Role and use of arts and culture in fostering social change.
- Community – Role of community in human life and in fostering human flourishing, and approaches to building, sustaining and governing communities.
- Development & Growth – Fostering personal development and growth in emotional, psychological, social and other inner capacities.
- Ecology & Environment – Issues relating to the environment, including climate change but also nature more broadly and human relationships to it.
- Future of Work – Innovating the world of work, including through new methods and approaches to business and organizational management.
- Governance & Institutions – Devising new forms of governance and institutions to support alternative social paradigms.
- Politics & Economics – Engaging with existing political and economic systems, creating policies and innovating new approaches to politics and economics.
- Spirituality & Religion – World beyond the material and the rational.
- Technology & Blockchain – Use of technological innovation, including blockchain, to foster social change and support new social systems.
- Wellbeing & Health – Improving quality of life through the physical, psychological, environmental and social determinants of health and wellbeing.
