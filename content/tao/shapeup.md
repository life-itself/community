# How to shape work

How to shape work based on Shapeup by Ryan Singer of Basecamp.

[Shapeup: Stop Running in Circles and Ship Work that Matters](https://basecamp.com/shapeup) is a guide for doing product development, based on the author's experience at Basecamp. Although it refers to software development, most of the principles and techniques behind it are widely applicable and may be of interest to staff at Datopian and Life Itself. 

This document focuses on how to 'shape' work as described in the first part of the book. Shaping is a process for defining the key elements of a solution, before deciding to commit to the project ('betting') and start working on it ('building').

> **Shaping** is a **pattern** for creating **pitches** that can be **bet** on


## Table of Contents

## Chapter 2: Principles of Shaping

> When we shape the work, we need to do it at the right level of abstraction: not too vague and not too concrete.

You should not define too much detail too early, so as to leave designers room for creativity. It's hard for people to design something different if you’re giving them something concrete from the start. 

You should not define projects in a few words (e.g. ‘build calendar view’), as it's too vague. Teams need context in order to decide which trade-offs to make.

Shaped work is *rough* (leaves room for designers to apply their judgment and expertise); it's *solved* (the main elements of the solution are there); and it's *bounded* (indicates what *not* to do, how much time to spend on it).

### Who shapes?

Shaping requires a combination of skills. It combines design work, technical work (judging what's possible, what's easy and what's hard), and strategic work (being critical about the problem you're trying to solve, e.g. what counts as success). If you're not a generalist, you should collaborate with others who have these skills.

### Two tracks

Shaping and building should be kept as separate tracks within a cycle to manage the risk and uncertainty involved in shaping.

### Steps to shaping

(These are covered in the next four chapters)

1. **Set boundaries.**
2. **Rough out the elements.**
3. **Address risks and rabbit holes.**
4. **Write the pitch**.

## Chapter 3: Set Boundaries

> The first step of shaping is setting boundaries on what we’re trying to do. The conversations we have are going to be entirely different if people think we’re talking about a small improvement or a major redesign.

### Setting the appetite

First, you should determine how much time and attention the subject deserves. This is called the *appetite*. Appetite is typically set in two batches: a *small batch* may take a team of 2-3 people one or two weeks to complete, while a *big batch* may take the same-size team a full six weeks.

### Fixed time, variable scope

The appetite acts as a creative constraint on the design process. It fixes the time that can be spent on the project, but leaves the scope open. E.g. if you have a week left to finish a book, you have to choose between fixing typos or adding a new section, which is a tension between time, quality and scope. If the scope wasn't variable, you'd *have* to include the extra section at the expense of quality. Appetite is different from an *estimate*, which starts with a design and ends with a number.

The fixed time, variable scope principle can be applied at each stage, from shaping projects to building and shipping them.

### "Good" is relative

The 'best' solution is relative to your constraints, including how much time you want to spend on the project.

### Responding to raw ideas

Don't shut down an idea before you understand whether it might be important, and don't commit to something before you know how it fits into the broader context of what you want to do.

> Our default response to any idea that comes up should be: “Interesting. Maybe some day.” In other words, a very soft “no” that leaves all our options open.

### Narrow down the problem

> In addition to setting the appetite, we usually need to narrow down our understanding of the problem.

Understand what is really driving the request for the project (i.e. get clear on what the [job story](https://www.datopian.com/playbook/job-stories) is.) Rather than asking "What could we build?", ask "What's really going wrong?". Sometimes this can change the solution entirely.

### Watch out for grab-bags

> When it comes to unclear ideas, the worst offenders are “redesigns” or “refactorings” that aren’t driven by a single problem or use case. When someone proposes something like “redesign the Files section,” that’s a grab-bag, not a project. It’s going to be very hard to figure out what it means, where it starts, and where it ends. Here’s a more productive starting point: “We need to rethink the Files section because sharing multiple files takes too many steps.”

### Boundaries in place

> When we have all three things—a raw idea, an appetite, and a narrow problem definition—we’re ready to move to the next step and define the elements of a solution.


## Chapter 4: Find the Elements

The next step is to determine the elements of a solution. There could be many approaches, so you should move fast and cover a lot of different ideas without getting dragged down.

### Move at the right speed

Two things enable you to move at the right speed at this stage. 

First, work with the right people (or just by yourself) – someone who can keep pace with you, has the same background knowledge and can give you honest feedback.

Second, be concrete enough so you can make progress as you sketch out a solution, but don't get stuck on unnecessary details so you can explore widely. 

### Breadboarding

> We borrow a concept from electrical engineering to help us design at the right level of abstraction. A breadboard is an electrical engineering prototype that has all the components and wiring of a real device but no industrial design.

Identify the components and their connections, rather than focusing on the (visual) end-result. This should allow you to judge whether your approach serves the use case you're trying to solve.

### Fat marker sketches

If the idea you're working on is a visual one, you can use fat marker sketches. 

> A fat marker sketch is a sketch made with such broad strokes that adding detail is difficult or impossible.

### Elements are the output

Work out the main elements of the solution, which are narrow and specific. 

### Room for designers

> Later, when it’s time to involve a designer, you don’t want to have to say “I know I drew it like this but ignore that…”. Regardless of what you say, any specific mockups are going to bias what other people do after you [...] By leaving details out, the breadboard and fat marker methods give room to designers in subsequent phases of the project.

### Not deliverable yet

> We’ve gone from a cloudy idea [...] to a specific approach and a handful of concrete elements. But the form we have is still very rough and mostly in outline.

The next step to make this ready to hand off to a team is to do some stress-testing and de-risking, to check for anything that could hinder the project from being shipped.

### No conveyor belt

> at this stage, we could walk away from the project. We haven’t bet on it. We haven’t made any commitments or promises about it. What we’ve done is added value to the `raw idea` (i.e. a request or feature idea that is expressed in words and hasn't been shaped) by making it more actionable.


## Chapter 5: Risks and Rabbit Holes

> We may trust from our experience that the elements we fleshed out in the previous chapter are buildable within the appetite (six weeks). But we need to look closer, because all it takes is one hole in the concept to derail that.

### Different categories of risk

>In terms of risk, well-shaped work looks like a thin-tailed probability distribution. There’s a slight chance it could take an extra week but, beyond that, the elements of the solution are defined enough and familiar enough that there’s no reason it should drag on longer than that.
>
> However, if there are any rabbit holes in the shaping—technical unknowns, unsolved design problems, or misunderstood interdependencies—the project could take _multiple times_ the original appetite to complete. The right tail stretches out.

### Look for rabbit holes

> In this step, we slow down and look critically at what we came up with. Did we miss anything? Are we making technical assumptions that aren’t fair?

One way to analyse this is to walk through the solution in slow motion, and then question the viability of each part.

### Declare out of bounds

It may help to be explicit about the cases or features you are going to keep out of the scope of the project, by declaring them 'out of bounds'.

### Cut back

There might be parts of the solution that are exciting but not really necessary. You may flag them as 'nice-to-have', but start from the assumption that they are not part of the core project.

### Present to technical experts

If you are not sure about any parts of the concept, now is the time to talk to technical experts. Don't ask "is this possible?"; ask if it's possible within the constraints set by your appetite, e.g. "is this possible within six weeks?". Focus on identifying risks that could blow up the project. When sharing the idea with technical experts, cover the work you've already done in broad strokes, and then invite suggestions or revisions.

### De-risked and ready to write up

> At the end of this stage, we have the elements of the solution, patches for potential rabbit holes, and fences around areas we’ve declared out of bounds. We’ve gone from a roughly formed solution with potential risk in it to a solid idea that we now hope to bet on in the future.
> 
> That means we’re ready to make the transition from privately shaping and getting feedback from an inner-circle to presenting the idea at the betting table. To do that, we write it up in a form that communicates the boundaries and spells out the solution so that people with less context will be able to understand and evaluate it. This “pitch” will be the document that we use to lobby for resources, collect wider feedback if necessary, or simply capture the idea for when the time is more ripe in the future.


## Chapter 6: Write the Pitch

This chapter lays out five key ingredients of a pitch.

### Ingredient 1. Problem

You should present the problem and solution together. The problem provides context for judging whether the solution is good or bad. The problem also allows us to judge whether the idea is worth betting on (e.g. does it only benefit a small proportion of customers that have a low retention rate?)

> The best problem definition consists of a single specific story that shows why the status quo doesn’t work. This gives you a `baseline` to test fitness against (i.e. what customers are doing without the thing you're currently building).

### Ingredient 2. Appetite

Appetite is also part of problem definition – we don't just want to solve this problem, we want to do it in X weeks or months. Stating the appetite prevents unproductive conversations about 'better' solutions that don't fit within your constraints.

### Ingredient 3. Solution

> A problem without a solution is unshaped work.

You should stay high-level, but add a little more concreteness so that people who read the pitch without much context are able to understand the idea. 

If you need to, you can embed sketches into the pitch to help people see what the elements are. Annotated fat marker sketches are also an option, if the idea is inherently visual.

### Ingredient 4. Rabbit Holes

> Sometimes addressing a rabbit hole just requires a few lines of text. [...] This is the kind of thing that’s not central to the concept, but spelling it out patches a potential rabbit hole.

### Ingredient 5. No Gos

> if there’s anything we’re _not_ doing in this concept, it’s good to mention it here.

### Ready to present

> The next step will be to make the case that this pitch describes a bet worth making.

It is recommended to post the pitch somewhere that stakeholders can read in it their own time, ahead of sitting down at the `betting table` (a meeting where stakeholders decide which pitches to bet on in the next cycle.)
















