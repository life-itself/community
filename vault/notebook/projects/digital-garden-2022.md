---
created: 2021-11-25
author: [rufuspollock]
---

# Creating a Digital Garden (and maybe whole life itself site)

Community Repo as forum + wiki x+ research notebook (digital garden / second brain)

Tracking issue: https://github.com/life-itself/community/issues/89

Idea: use this repository as notebook/wiki/forum and have that published online at e.g. forum.lifeitself.us or lifeitself.us/forum/

There are roughly two parts to this:

1. A structure and process for adding content, discussions etc
2. A way of publishing that online

## Job Stories

💭 2022-10-06: a lot of current job stories are about what "we" (or even "I" Rufus) want to do. Valuable to think more about the other side: why would others want to see this material. Some of this is in the so that and it is so far a bit vague. Rough sense is:

- The topics we are interested in are quite niche and often hard to find "good" material on them online, especially summary
- Providing our material could be valuable to this long-tail of people searching
- Publishing early, publishing often, even in draft form can therefore be of value because what we have (compared to what is out there) is useful - cf the 8 precious exercises post

### Notebook

#### Publish notes on a book

When I have notes on a book I want to be able to publish them somewhere so that others (and myself) can find them

- what about unfinished notes? at what state do the notes "show up"
  - is it possible to have material that is not yet published

#### Publish notes on person or movement

When i have notes on a person e.g. lindisfarne association I want to post them up so that others can see 

- why not use wikipedia? because we are often adding additional material, or adding our own selective take or commentary.

#### Publish a mini-report on an area

When researching a topic I want to collect multiple entries on a particular topic  and then display them together

- e.g. i want to find organizations working on X e.g. climate crisis + mindfulness.
- mini-ecosystem mapping

#### Jot down a quick idea or a few screenshots

When I have quick ideas or notes (incl e.g. a screenshot) I want to be able to store (and publish) them somewhere so I can find and link to them later

- this sounds more like a scratch pad / inbox type facility.
- what's the benefit of publishing them? because often you don't get round to doing anything with them for a while and then just sit around. if published maybe someone else comes along and improves or at least shows interest.
- also you can still link to them.
- what about the "public" question, maybe this is better semi-internally?
  - What's the fear? that someone is going to get offended.

#### Want discussion and feedback

When creating notes or ideas or questions I want to be able to discuss them with others so that they get get refined or answered

#### See related pages / posts

When I read one notes/post I want to have clearly indicated related posts so that I can investigate them and go deeper and learn more

#### Want to know who is behind this

When I have come across this wonderful digital garden I want to know who is behind it so i can deepen my trust (who are they and what are they up to!), or find out about their other work or get in contact

### Forum

#### Share unformed thoughts for feedback

When I have ideas or thoughts (relatively unformed) I want to share with others so that i can get input / feedback

#### Want to see what people are thinking and doing in this community

When I want to learn more day to day about a community I want to have somewhere I can see what they are up to and thinking so that ...

#### Loosely engaged and want to come find out and engage in lightweight way

When I am loosely associated with Life Itself I want a place I can come and find out and engage in a lightweight way

### Tao (tbd)

💭 We did a job stories in a spreadsheet a couple of years ago for this. TODO: look them up and merge here.

Tao is the evolving culture of life itself. our handbook.

### Sutras

- bit of a special one: part of "dream of a unified text".
- place to find wisdom teachings beautifully presented
  - a way for people to find this community that would be of interest to them
- for us a convenient stable reference location

#### Want an elegant, easy to use wisdom texts

When looking for a wisdom text e.g. diamond sutra, shortness of life etc I want an elegant, free, online (downloadable) all in one version i can read and take with me (and which will stay online)

- want the curation work done (why select this version)
  - maybe recommendations on which non-open (copyright) text to get
- many classic zen texts are no obviously available to an outsider i.e. which ones should i read
- true for buddhist sutras - which are the key ones to start with
  - and are are good translations

#### Want key texts of buddhism online

When interested in buddhism I want to know which are the key sutras to read and get to read them so that I learn more and are not put off by the formal language

- sites which have *all* the sutras and totally overwhelming. plus translation are very mixed.
- => we should have a reason for including a sutra in our "sutras"
- focus on accessibility
- explanation of the key ideas
- mobile friendly etc

## Context re this repo

This community repository currently houses a few things:

* Git repo itself
* Issues
* Discussions

Background:

* This repository was originally our (fairly inactive) "research" repository.
* We also used to have a forum powered by discourse. 

## Digital Garden Design

MVP: some notes created and published

* [ ] How can we publish the site? **✅2022-11-08 static site generation plus netlify**

Architecture

* [x] What is this digital garden / knowledgebase / note-base stuff? **✅2022-11-08 (much earlier). In a nutshell: an online digital notebook/wiki that is curated and evolved over time. See https://flowershow.app/notes/digital-garden**
* [ ] Why create a digital garden (in general and for life itself)?
* [x] What tool do we use for editing content in the garden? **🔑 [[abc/Obsidian]]**
  * [x] What are our criteria? **🔑 a) Works with markdown under our control in this github repo.
  * [x] What are the options? **🔑 Obsidian, Dendron, Athens (?), Foam. My recommendation would be Obsidian or Dendron I think. Dendron seems better than Foam.**
  * [x] Which do we choose? **🔑 Obsidian. Obsidian is simple, good UX for non-techies fast, excellent community and plugins. Dendron is embedded in VS code (tougher for non-techies and also a lot slower), was quite complex and had so-so onboarding.**
* [ ] How do we manage files in the notebook?
  * [x] Format for creating notes **🔑 Markdown (+ MDX if you really want) using digital garden extensions e.g. `[[..]]` of the kind supported by Obsidian** 
  * [x] Tooling for managing notes **🔑 [Obsidian](https://obsidian.md)** 
* [ ] Layout of notebook/garden? **🚧2022-11-08 at present we have folder called notebook inside the base vault and within that `books/` and `areas/` and `/projects`**
  * [ ] #todo should this rename to garden?
  * [ ] should we flatten everything and use some kind of typing in the file to categorize? #todo analyse pros and cons
* [ ] what kind of standard frontmatter should we have? **🚧2022-11-08 think we have following**
  * `title`: title (could be autogenerated from h1 heading if on first line, and failing that the file name)
  * `development status` e.g. stub, ..., complete etc. cf gwern.net
  * epistemic status/confidence when putting forward a viewpoint.
  * `created` for first created date
  * `date` if there is a publication date e.g. for a blog
  * `authors` field for the authors.
* [x] How do we publish? **✅2022-11-08 use our new app Flowershow built on top of NextJS**
  * [ ] What are the options? **🔑 Obsidian publish, roll our own (in gatsby)**
    * AFAICT no great pre-rolled themes for nextjs. Several for Gatsby
  * [ ] What are the criteria? **🔑 Least work (reuse where possible!), ability to extend to forum, familiarity** 💬 my general feeling is that i prefer nextjs over gatsby ... but i would take something pre-rolled that was good.
    * https://github.com/MaggieAppleton/maggieappleton.com-V2 👈 this looks promising (though fairly bespoke) - her site looks great https://maggieappleton.com/garden
  * [ ] What do we choose? **🔑 My instinct says go with NextJS even if some pain.**
    * [ ] What starter template? **✅2022-11-08 Create our own i.e. flowershow**
  * [ ] How do we do continuous deployment? 🔑 Netlify or similar
* [x] Some notes created **✅2022-10-06 we have a fair number of notes in `notes` folder**

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


# Notes

## Outflow - 2022-10-06

- Now have flowershow and clear direction in publishing a nextjs digital garden
- Have several distinct sub-projects that could be part of one big site.
  - tao
  - sutras
  - main
  - notes (aka digital garden)
  - forum
- deciding whether this all merges into one is important because ...
  - if we have all together then we need one system to satisfy most of the requirements
  - ...?
- what are the benefits of all in one?
  - need to distinguish backend and frontend
  - for frontend having everything in one url-space leads to
    - better SEO
    - greater bulk of material in one place.
    - ? reduces duplication
    - ? generates more interlinking.
  - backend:
    - can do linking in the editor (and updating linking when pages change location)
    - common theming is easy
    - one system to upgrade rather than multiple sites
- What are downsides of all in one?
  - people step on each other toes
  - one system to satisfy all requirements (though note could load into one url space)
- An agile approach would imply doing one thing at a time and adding functionality as we go.
  - What are potential chunks we could do?
    - tao: move to lifeitself.org/tao/
    - front page: take over front page
      - incremental switch-over of wordpress site
    - sutras: minor and easy
    - notes: publish what we already have
    - ecosystem: migrate it over
- Outflow
  - General aspect of a blog/wiki (bliki) is highly attractive in many ways. content does age and knowing the timestamp is very helpful. posting on a forum or something that allows interaction is great - it builds community and content. The aspect of a forum is that things are not perfect which is psychologically very beneficial.
    - Downside can be that people are put off coming to a site that is unpolished and/or chaotic (so much material) 

Practice circles and project circles.

## Potential layouts

```bash
/          # home page
/ecosystem
/tao
/notes     # do we merge notes with forum? 
/forum
/sutras

# extras
books      # surely this merges with notes
journal    # merge under notes as a distinct folder? do we have personal journals
~{your-name}/   # folder for your personal stuff
projects   # distinct folder for projects following para principles
```

Questions

- do we merge ecosystem into the root or in a subdirectory?
  - what are options
    - ecosystem merges up with home page disappearing => do something with profile search => end up having somewhere for index page maybe at `/profiles/`
      - backend-wise: have to merge content into the main site repo
    - ecosystem lives at subdirectory `/ecosystem/` so we have stuff like `/ecosystem/profiles/`
      - backend-wise: could keep separate and do url proxying. kind of a hassle (e.g. `_next` directory stuff) but has advantage you can plug and play.
- Notes and forum: would really to merge these, to make these one
  - All notes should be date-stamped.
  - Some stuff can be in draft
  - When ready to go we mark as published and it goes out with that date
- Do we commit obsidian config (?). useful at least for some stuff e.g. some plugin config?

## 2022-11-08 - re the tao

What goes in the Tao vs the Notebook?

Conclusion: we go with option 3 based on principle that only items in tao are those re culture, practices and ops of Life Itself. Furthermore, info on standard practices, howtos etc go in notebook and get linked.

Options

- Everything in notebook except for an index page in Tao that references pages and hence makes them "part of the Tao"
- No tao section at all and just the notebook with a tao page in it (or even "Tao of Life Itself")
- Tao has some pages. Those pages are distinct in being specifically about the culture, philosophy and practice of life itself
  - Examples?
    - Where does an item about how we close issues or manage git go? My instinct is it goes to notebook
      - ditto for 'once-upon-a-time' and other random-ish items we wish to record
    - What about `glossary`? This is more specific to culture etc so would put it in
  - Sense from these examples is that principles are:
    - General howtos e.g. re git go to notebook and get referenced from tao
      - Other generic items like key texts would go to notebook and get referenced from the tao e.g. five mindfulness trainings go to notebook. If we have a special version of five mindfulness trainings that could be in the tao
    - Items re culture, practices and ops of Life Itself go in Tao

# Archive (Obsolete)

### Tech Stack especially how we have a "content layer" (Jan 2022)

> [!info]
> **UPDATE March 2022:** use contentlayer.dev

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
