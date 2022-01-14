---
created: 2021-11-25
---

# Creating our Digital Note-base (aka Digital Garden aka Collective Second Brain)

Community Repo as forum + wiki x+ research notebook (digital garden / second brain)

Tracking issue: https://github.com/life-itself/community/issues/89

Idea: use this repository as notebook/wiki/forum and have that published online at e.g. forum.lifeitself.us or lifeitself.us/forum/

There are roughly two parts to this:

1. A structure and process for adding content, discussions etc
2. A way of publishing that online

## Job Stories

### Notebook

When I have notes on a book I want to be able to publish them somewhere so that others (and myself) can find them

When I have quick ideas or notes (incl e.g. a screenshot) I want to be able to store (and publish) them somewhere so I can find and link to them later

When creating notes or ideas or questions I want to be able to discuss them with others so that they get get refined or answered

### Forum

When I have ideas or thoughts (relatively unformed) I want to share with others so that i can get input / feedback

When I want to learn more day to day about a community I want to have somewhere I can see what they are up to and thinking so that ...

When I am loosely associated with Life Itself I want a place I can come and find out and engage in a lightweight way

## Context

This community repository currently houses a few things:

* Git repo itself
* Issues
* Discussions

Background:

* This repository was originally our (fairly inactive) "research" repository.
* We also used to have a forum powered by discourse. 

## Acceptance

### Digital Garden

MVP: some notes created and published

* [ ] How do we manage files in the notebook? What's the layout?
  * [ ] Format for creating notes **🔑 Markdown (+ MDX if you really want) using digital garden extensions e.g. `[[..]]` of the kind supported by Obsidian** 
  * [ ] Tooling for managing notes **🔑 [Obsidian](https://obsidian.md)** 
  * [ ] Basic layout of repo
  * [ ] Some notes created
* [ ] How can we publish the site?
  * [ ] Publishing architecture
  * [ ] Publishing implemented

### Forum (tbd)

## Tasks

Architecture

* [ ] What is this digital garden / knowledgebase / note-base stuff? **💬 See analysis below** 
* [x] What tool do we use for editing content in the garden? **🔑 [[abc/Obsidian]]**
  * [x] What are our criteria? **🔑 a) Works with markdown under our control in this github repo.
  * [x] What are the options? **🔑 Obsidian, Dendron, Athens (?), Foam. My recommendation would be Obsidian or Dendron I think. Dendron seems better than Foam.**
  * [x] Which do we choose? **🔑 Obsidian. Obsidian is simple, good UX for non-techies fast, excellent community and plugins. Dendron is embedded in VS code (tougher for non-techies and also a lot slower), was quite complex and had so-so onboarding.**
* [ ] Layout of garden?
* [ ] How do we publish?
  * [ ] What are the options? **🔑 Obsidian publish, roll our own (in gatsby)**
    * AFAICT no great pre-rolled themes for nextjs. Several for Gatsby
  * [ ] What are the criteria? **🔑 Least work (reuse where possible!), ability to extend to forum, familiarity** 💬 my general feeling is that i prefer nextjs over gatsby ... but i would take something pre-rolled that was good.
    * https://github.com/MaggieAppleton/maggieappleton.com-V2 👈 this looks promising (though fairly bespoke) - her site looks great https://maggieappleton.com/garden
  * [ ] What do we choose? **🔑 My instinct says go with NextJS even if some pain.**
    * [ ] What starter template?
  * [ ] How do we do continuous deployment? 🔑 Netlify or similar

Implementation

* [ ] ...

Meta

* [x] 2022-01-06 Do i use this doc to track issues or do i use github? **🔑 Use this doc for now**
* [ ] 2022-01-06 What is the name for this project? (Both short and long)
  * [ ] What is the name for this type of thing? e.g. Digital Garden, Digital Knowledgebase? Digital Note-base
* [x] 2022-01-06 Should i create a folder of this project or just use the markdown file? **🔑 2022-01-06 KISS => stick with a single file for now**
* [ ] 2022-01-06 Do we merge tao with community notebook? (why/why not?) 🔑
  * 👍👍 KISS => have fewer things ... (esp when in doubt)
  * 👍 b/c tao content overlaps a lot with the general digital garden content. For example a lot of the practices stuff would benefit from being here. Our views documents overlap quite a bit.
  * 👍 One less site to maintain and its repo
  * 👎 it's a hassle to move and current site is working well. Est: 2h => Git move and merge (if we want to keep history) + tidying in various ways.
  * ?👎 tao is its own separate thing (it's our playbook etc)


## Analysis

### What is a Digital Gardens?

New-fangled graph-oriented knowledge systems seem all the rage e.g. Roam and now a plethora of others Foam, Dendron, Obsidian, Athens Research etc etc (though seem incredibly similar to wikis ... but with backlinks and block level linking ...)

Would be nice to use this and perhaps the zettelkasten methodology.

### Why a Digital Garden?

TODO

### Tech Stack

Situation:

* we have all my files in markdown on disk (and maybe some other formats)
* we are using nextjs (not gatsby)
* we need to load content and metadata from these files and display it. It would be useful to have some common utilities and (perhaps) an abstraction for this
  * 💡 YAGNI Rufus! Be careful of premature optimization. That second sentence is a judgment not a ffact.
* Currently we copy very simple micro-library code for doing the MDX loading and parsing from project to project gradually adding a few helper utilities (e.g. get me a list of pages so that i can display them on the front page)

Complication

* Loading file content is very simple.
* However, more complex needs arise and we end up having to write code
* This is both buggy and we end up with bespoke code

Question

* What approach should we take? Should we just KISS and write our own code as we need ... or should we find (or write 😬) a library for this?
  * Surely there are libraries for this already? i.e. a library that takes markdown files on disk and gives me a CMS style API around it?
    * In particular, is there some kind of graphql type thing

Answering ...

Tina.io looks the most promising here in that it does exactly what we want. The only downside is having to call a server rather than a library API. In terms of steps it would be to look at the code and try it out.

Brainstorm

* Gatsby does this already i.e. https://www.gatsbyjs.com/plugins/gatsby-source-filesystem - https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-filesystem#readme. 💬 I doubt this is useable outside of Gatsby.
* 👍 Tina-CMS https://tina.io/ is the closest to this as standalone but seems quite coupled into Tina's setup. https://tina.io/blog/using-graphql-with-the-filesystem/
  * That said Tina's design seems good and well thought out (plus one can use Tina for editing!)
* I have searched *a lot* and not found a simple library that just does this. All grapqhl
  * I looked at https://blitzjs.com. This is a separate framework and backend ORM is graphql based but is backend agnostic.
* What is it i need?
  * Graphql consists of ... (see https://graphql.org/graphql-js/)
    * Schema
    * Resolvers
    * (Optional) Server
    * (Optional) Client
