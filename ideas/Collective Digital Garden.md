---
title: Collective Digital Garden for Life Itself
date: 2024-01-10
image: https://github.com/life-itself/community/assets/180658/4a13b6be-be44-465e-80f1-47faceaa6211
---

> [!note]
> Original thread with discussions at: https://github.com/orgs/life-itself/discussions/992

**v2 - 2024-02-26**

This proposal is about creating a space for collaborative knowledge building long-term. For now, we are terming this a *collective digital garden 🌱*. 

The proposed approach mixes a knowledgebase/wiki with a ideas playground/forum. The former is more formal and the latter more relaxed and playful.

The proposal builds upon the discussion forum we already have and digital garden experience with our Flowershow tool.

![image](https://github.com/life-itself/community/assets/180658/4a13b6be-be44-465e-80f1-47faceaa6211)

## Context

- We have an increasing amount of useful material published on github discussions
- Have some wiki like material in lifeitself.org/notes (that is largely invisible)

## Problem

- We're not clear what we need
- Github discussions don't work as a collaborative knowledge base e.g. limited ability to edit each other, poor linking. This is starting to be noticeable as related points are spread across multiple discussions
- KB section of main website (https://lifeitself.org/notes) don't work very well in sense that not very discoverable and not very updated. Also being part of the main site there is a sense they should be higher quality or something like that.

Questions: what do we need and how we pilot it?

##  What we want

> [!note]
> I'm going to speak in the first person for now though obviously the intention is to check these points with others.

The two key features:

- The informality that gives me and others the permission post things that are half-formed or to ask questions.
- And the structure and process to evolve a proper collaborative knowledgebase with more refined entries and rich linking

Other desirables:

- Be able to feature articles and to see what's new (in both areas of the half-formed and the more refined)
- Open but moderated contribution
- Ability to have discussions / questions as well as knowledge curation
- Allow for discussions and comments (for engagement/corrections)

As I reflect on the inspirations below e.g. Wikipedia, LessWrong I see that the **primary function for me is a *collaborative* knowledgebase**:

- Easy to create entries
- Easy to link them
- Multiple people can edit an article - but with moderation
- Can have comments / discussion - like a talk page or in a dedicated section of the site

Secondary purpose is a place to ask questions, chat, try out ideas.

Having both is key i think.

> [!aside]
> 
> Often think a forum is what you have when you can't have annotated comments on the post itself using quotes instead of annotations. Though only partial because difficult to make annotation comments that cover several points across the piece.

You also want to think about new-joiners. They want a place where they can see -- and perhaps contribute -- in a low-stakes way. For example, see the best content. Leave an upvote or comment etc.

I like the idea of mixing a knowledgebase with a playground. The latter is more formal and the latter  relaxed and, well, playful.

![image](https://hackmd.io/_uploads/SysyyCvja.png)

### The evolution of a piece of work

- Start in playground
- Refine into an entry in the knowledgebase
- Eventually a snapshot may become released on the blog
  - NB: one of the advantages of blogs is that they *are* timestamped and when it's out it's out. You aren't trying to come back to it.

### Technical desiderata

- Can edit locally preferably with something like Obsidian
- Moderation for contribution e.g. pull requests would work
- Write in markdown (allows for long-term maintenance, easy conversion etc)

Open questions

- How do you handle comments on different versions. Take the example of this proposal which had a quite different v1 on discussion forum: https://github.com/orgs/life-itself/discussions/992. Now have revised it substantially. Hacky solutions like comments having a statement like: comment on vXXX. Other approach is pull requests with comments there (but then things aren't published).

### Concrete steps

Evolve from where we are by combining github discussions with a markdown-based obsidian/git approach and published with [Flowershow](https://flowershow.app).

Concretely

- Create a repo like github.com/life-itself/forum (or even reuse community repo moving website out of community repo). This git repo houses markdown files which are the wiki pages / forum posts. 
  - every page is automatically discussable with discussion being on github discussions via giscus integration
- people can still post directly on github discussions though may want some way to automate converting discussion body into markdown but that's open to debate

## Rabbit holes / Risks

TODO

## No goes

TODO

## Appendix: Other options considered

- Use discourse (we had a discourse forum from 2016-2019) **❌ it's a forum not a kb/wiki primarily. plus cost, format lock-in** 
  - 👍 easy to use
  - 👎 recurring cost of ~1k a year.
  - 👎 a forum not a wiki
  - 👎 locked into their system and format (even if open source). If you ever want to leave you are kind of stuck.
- just use github discussions: Go all in on github discussions: just use that and move everything to that. Maybe have a landing page somewhere that explains how we use it. **❌ limited wiki functionality.**
  - Works decently as a forum
  - However, as wiki have issue of not having very good linking
  - Can't use obsidian etc directly
  - You are "on" github rather than your own space both in terms of theme, and in terms of things like signing up etc

## Appendix: Inspirations

### Less Wrong

- Posts are like decent essays
- Substantial commenting feature
- Curated core content
- Forum creates community (feels a bit different from a wiki)

What I miss in lesswrong

- Everything feels pretty polished - it is a high quality forum. I want somewhere i can post things that half-formed etc. See Fowler on his bliki
  >   I intend to use this to post ideas that are forming, but either too immature or too short for a proper article. Also as I see questions posted on mailing lists or newsgroups I'll try to provide a lasting answer here.
- Also miss collaborative wiki aspect: everything is a new post so little sense of cumulation ...
  
### Wikipedia

- You have the actual articles and the talk pages
- You can have stubs and an evolution in the status and quality of the articles

What i miss

- Discussions or Q&A that aren't related to a topic. though perhaps one gets that in the talk.
- Talk is a very second class citizen. More for debating.

### Martin Fowler's Bliki

https://martinfowler.com/bliki/WhatIsaBliki.html

> Beyond the name, however, there's the very ephemeral nature of blog postings. Short bursts of writing that might be interesting when they are read - but quickly age. I find writing too hard to want to spend it on things that disappear.
> 
> I have similar mixed feelings about wikis. I like the way they allow you to quickly put stuff together. But they can easily lead to long rambling sites. And I do like the fact that blogs make it easy to see what's really changed recently - thanks to the hooks into RSS and aggregators.
> 
> So I decided I wanted something that was a cross between a wiki and a blog - which Ward Cunningham immediately dubbed a bliki. Like a blog, it allows me to post short thoughts when I have them. Like a wiki it will build up a body of cross-linked pieces that I hope will still be interesting in a year's time.
> 
> I intend to use this to post ideas that are forming, but either too immature or too short for a proper article. Also as I see questions posted on mailing lists or newsgroups I'll try to provide a lasting answer here.

## Appendix: wikis, forums, and blogs

- **Wiki**: A collaborative website where **anyone can edit and add content** to existing pages. 
  - Building and maintaining shared knowledge bases (e.g., Wikipedia)
  - Collaborative documentation projects
  - Internal company wikis for sharing policies and procedures
- **Forum**:  An online discussion board where people can **post messages, reply to threads, and engage in discussions** about specific topics.
  * Support communities for products or services
  * Online communities with shared interests
  * Q&A platforms for specific topics
- **Blog**:  A **regularly updated webpage** where individuals or organizations **publish content** in reverse chronological order (latest post first).
  * Sharing personal thoughts and experiences
  * Providing updates on specific topics or projects
  * Publishing news and commentary

### Which one to use when?

Consider factors like:

* **Content audience:** Is it primarily one-way communication (blog) or two-way discussion (forum/wiki)?
* **Content ownership:** Do you want open collaboration (wiki) or controlled contributions (blog)?
* **Content structure:** Does the information require a specific hierarchy (wiki) or chronological order (blog)?

These are not mutually exclusive. We can combine elements of each platform to create a hybrid solution that best suits our needs.

![image](https://github.com/life-itself/community/assets/180658/926d593f-87ef-4d2c-b6b9-6c4dea4f5f5b)

## Appendix: SCQA Brainstorm

### Situation

- We have an ad-hoc informal forum in the form of github discussions running since ~ late 2022
- Have a notes/wiki/forum section at lifeitself.org/notes (only Rufus has ever really posted there)
- Have old analysis (from 2021/2022) of why we wanted a forum and wiki and why try an integrated site https://lifeitself.org/notes/projects/digital-garden-2022
- Back in the day (2016 or so!) we have a private discourse based forum which we ultimately shuttered around 2019

### Complication

- Github discussions don't work as a collaborative knowledge base e.g. limited ability to edit each other, poor linking.
- KB section of main website (https://lifeitself.org/notes) don't work very well in sense that not very discoverable and not very updated
  - Also being part of the main site there is a sense they should be higher quality or something like that.
- Overall building the wiki/forum directly into the main site does not work so well ...
  - Technical reasons:
    - Bloats main site and slows build (?)
    - Build delay: when posting on forum i often want to post and immediately share. Atm i have to wait 2-3m for site to build (if it builds)
  - Social reasons: stuff on main site wants to be more polished.
    - Even I feel a bit reluctant to post half-formed things
    - And if i feel that about .
    - 🔮 Want somewhere with a bit of a rough feel where people feel comfortable throwing stuff up
- The supposed benefits of keeping them in one repo was that we could make references but i think that is quite minor actually.

### Questions

What is the need?

- Something wiki like where we can post post stubs, half-finished things etc for reference and discussion
- A place for discussion 
