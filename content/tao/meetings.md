# Patterns for Meetings

- Take meeting notes in hackmd in markdown or google docs. Markdown is the preference.
- At end of meeting, process the material from the meeting (see next section)

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

Anti-patterns

- Creating issues like "Actions from the last meeting" or issues which are just list of issues without a common purpose (i.e. NOT an epic but just a list of issues). E.g. something like "Stuff to be done by date X", or "Priority items as of XXX". What is ok is something like "Build XXX Feature" which then mainly link to subissues (this is an epic)
- Deleting meeting note content ... Instead use "MOVED" or 🚚 logo with info on where it was processed to. Why? So we can find the original log (sometimes stuff will get mis-processed).
