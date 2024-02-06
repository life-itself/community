# Patterns for Meetings

- Take meeting notes in hackmd in markdown or google docs. Markdown is the preference.
- At end of meeting, process the material from the meeting (see next section)

## Types of meeting

There are different **types** of meeting (or, more specifically *types of content* in a meeting if the meeting is a "mixed" meeting).

- **Briefing**: these meetings are about briefing and/or making choices. This is the classic meeting type.
- **Explore**: this is a meeting which is about working or exploring together.
- **Connect** meeting: primary purpose is connection perhaps with some exchange of ideas etc.

> [!note]
> What about coworking meetings? That is, events in which people are just together to work individually or collectively. We prefer to term these coworking sessions as they aren't really meetings -- they don't require the designated participants to actually be present. 

| Type of meeting | Agenda? | Prepared materials? | Outputs  | Intention |
| --------------- | ------- | ------------------------------------ | --- | --------------------------------- |
| **Briefing**  | Yes  | Yes | Yes. Agreements and next actions. | Briefing happen. Agreements made. |
| **Explore**   | No | No  | Yes, usually. | Exploration happens and some output from that. |
| **Connect** | Maybe | No  | No | Connection made, next steps if identified (if any)  |

#### Why are these distinctions useful?

These distinctions are useful because it allows us to be clear on *what type of meeting you are having*, and, thus, on the *form*, *function* and expected *outputs*.

Clarity also falling into "sync meeting anti-pattern" and other meeting anti-patterns.

## Processing material from meetings

When we have a meeting we want to process notes and actions out of the meeting so that we add to consolidated/distilled body of knowledge and actions don't get lost (and we do this with reasonable 80/20 approach)

Suggested patterns

- **Accountability** Be clear who is processing post meeting
- Allow time after the meeting (for that person) to process notes. A rough rule of thumb is 25% of time of the meeting for processing e.g. for a 2h meeting allow 30m.
  - Or allow time *in meeting* for that to happen (and for some people to leave early).
  - NB: Not all meetings require this 😄
- **Meeting note logs**: For meetings on a specific topic we have a single ongoing (github) discussion thread or google doc for collecting the ongoing meeting notes
- **Actions from meetings** SHOULD get processed to relevant location *AND* stay in list of next actions in the meeting 
  - To be clear this shouldn't be duplication per se - in a perfect world the meeting notes are updated to link to issues or parts of issue they relate to. Usually using the truck emoji 🚚
  - For example, if action in meeting was `- [ ] Announce project X` then that action item should move to a relevant existing issue or into its own new issue and in the meeting notes we would put a `🚚2024-01-17 LINK TO WHERE IT WENT`
- If there was useful discussion in the recording then add a brief note of that (with approx timestamp if possible)

## Anti-patterns

### Anti-pattern: Creating issues like "Actions from last meeting"

Creating issues like "Actions from the last meeting" or issues which are just list of issues without a common purpose (i.e. NOT an epic but just a list of issues). E.g. something like "Stuff to be done by date X", or "Priority items as of XXX". What is ok is something like "Build XXX Feature" which then mainly link to subissues (this is an epic)

### Anti-pattern: Deleting meeting note content

Deleting meeting note content ... Instead use "MOVED" or 🚚 logo with info on where it was processed to. Why? So we can find the original log (sometimes stuff will get mis-processed).

### Anti-pattern: Sync meetings

Syncs are ambiguous. If this is a sync to update someone on something then it's a briefing meeting. If this is a sync to brainstorm or explora topic then it is working.

### Anti-pattern: Large group "Explore" meetings

Large group "Explore" meetings are an anti-pattern. Keep explore groups to the minimum people needed then arrange a Briefing meeting with the larger group. Why? the larger the group the more people's time you are using. secondly, exploring is often slower with more people. Exceptions are things where participation in the journey is essential to the output or to buy-in to the output (e.g. some parts of strategy)

### Anti-pattern: Lack of outputs from Briefing and Explore meetings

If it isn't documented, it didn't happen!
