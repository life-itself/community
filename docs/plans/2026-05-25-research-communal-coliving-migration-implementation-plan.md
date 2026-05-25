# Research Communal Coliving Migration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Move the `research-communal-coliving-space-usage-2021` package from `community` into `intentional-communities` as a self-contained research subfolder with restored provenance documentation.

**Architecture:** Create a new `research/` area in the target repo, add a package folder for the imported materials, copy the source CSV and figures without `.DS_Store`, and write a new package README adapted from the deleted historical README. Add a lightweight `research/README.md` index only if it improves discoverability.

**Tech Stack:** Git repositories, Markdown, shell file operations, image/CSV assets

---

### Task 1: Prepare target structure

**Files:**
- Create: `/Users/rgrp/src/lifeitself/intentional-communities/research/README.md`
- Create: `/Users/rgrp/src/lifeitself/intentional-communities/research/communal-coliving-space-usage-2021/README.md`
- Create: `/Users/rgrp/src/lifeitself/intentional-communities/research/communal-coliving-space-usage-2021/figures/`
- Create: `/Users/rgrp/src/lifeitself/intentional-communities/research/communal-coliving-space-usage-2021/open_data/`

**Step 1: Inspect the target repo state**

Run: `git status --short`
Expected: existing uncommitted changes are understood before editing

**Step 2: Create the destination directories**

Run: `mkdir -p /Users/rgrp/src/lifeitself/intentional-communities/research/communal-coliving-space-usage-2021/figures /Users/rgrp/src/lifeitself/intentional-communities/research/communal-coliving-space-usage-2021/open_data`
Expected: directories exist for docs, figures, and data

**Step 3: Verify directory creation**

Run: `find /Users/rgrp/src/lifeitself/intentional-communities/research -maxdepth 3 | sort`
Expected: shows the new `research/communal-coliving-space-usage-2021` tree

### Task 2: Copy source assets

**Files:**
- Copy: `/Users/rgrp/src/lifeitself/community/research-communal-coliving-space-usage-2021/figures/duration_active.png`
- Copy: `/Users/rgrp/src/lifeitself/community/research-communal-coliving-space-usage-2021/figures/mapping.png`
- Copy: `/Users/rgrp/src/lifeitself/community/research-communal-coliving-space-usage-2021/figures/sahhss.PNG`
- Copy: `/Users/rgrp/src/lifeitself/community/research-communal-coliving-space-usage-2021/open_data/ic data historical - Sheet1.csv`

**Step 1: Copy only the intended assets**

Run: `cp <source files> <target files>`
Expected: the CSV and three figures are copied without `.DS_Store`

**Step 2: Verify the copied file set**

Run: `find /Users/rgrp/src/lifeitself/intentional-communities/research/communal-coliving-space-usage-2021 -type f | sort`
Expected: exactly the copied assets plus README files after documentation is written

### Task 3: Restore documentation with provenance

**Files:**
- Create: `/Users/rgrp/src/lifeitself/intentional-communities/research/README.md`
- Create: `/Users/rgrp/src/lifeitself/intentional-communities/research/communal-coliving-space-usage-2021/README.md`

**Step 1: Write package README**

Content requirements:
- title and short description
- provenance note from `life-itself/community`
- note that context is adapted from the historical deleted README
- inventory of included assets
- research questions
- mapping-method summary
- historical method-documentation links

**Step 2: Write research index README**

Content requirements:
- short explanation of the `research/` directory
- bullet pointing the imported package

**Step 3: Verify the README content**

Run: `sed -n '1,220p' /Users/rgrp/src/lifeitself/intentional-communities/research/communal-coliving-space-usage-2021/README.md`
Expected: provenance, inventory, and historical context are present

### Task 4: Final verification

**Files:**
- Verify: `/Users/rgrp/src/lifeitself/intentional-communities/research/communal-coliving-space-usage-2021/README.md`
- Verify: `/Users/rgrp/src/lifeitself/intentional-communities/research/README.md`

**Step 1: Check target git status**

Run: `git status --short`
Expected: only intended new files appear, alongside any pre-existing unrelated changes

**Step 2: Confirm no junk files were copied**

Run: `find /Users/rgrp/src/lifeitself/intentional-communities/research -name '.DS_Store'`
Expected: no output

**Step 3: Confirm final file inventory**

Run: `find /Users/rgrp/src/lifeitself/intentional-communities/research -maxdepth 4 -type f | sort`
Expected: two README files, one CSV, and three figures
