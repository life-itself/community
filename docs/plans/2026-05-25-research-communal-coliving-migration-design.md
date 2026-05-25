# Research Communal Coliving Migration Design

## Goal

Migrate the `research-communal-coliving-space-usage-2021` source bundle from the `community` repository into the `intentional-communities` repository in a way that preserves provenance, keeps the materials together, and restores the useful explanatory context that was deleted from the source repo.

## Approved Direction

Use a self-contained subfolder in `intentional-communities` rather than flattening files into the repository root.

Recommended destination:

`research/communal-coliving-space-usage-2021/`

This keeps the CSV, figures, and explanatory note together as one research package and avoids forcing a larger information-architecture decision onto the target repo today.

## Source Scope

Current source files in `community`:

- `research-communal-coliving-space-usage-2021/open_data/ic data historical - Sheet1.csv`
- `research-communal-coliving-space-usage-2021/figures/duration_active.png`
- `research-communal-coliving-space-usage-2021/figures/mapping.png`
- `research-communal-coliving-space-usage-2021/figures/sahhss.PNG`

Do not migrate:

- `.DS_Store`

## Provenance Findings

The source bundle previously included `research-communal-coliving-space-usage-2021/README.md`, which was deleted in commit `78d9085` on May 25, 2026 as part of a broader source-note cleanup.

That historical `README.md` is the best explanatory source for this package. It is richer than the related `research-community-living/index.md`, which contains a shorter overlapping summary.

There is no evidence that the deleted README was moved into the target `intentional-communities` repository. There is evidence that it existed in published-content history inside `community`.

## README Strategy

Create a new package `README.md` in the destination folder that:

- states what the package is
- records provenance from `life-itself/community`
- notes that the README content is adapted from historical source material
- lists the included data and figures
- preserves the useful research questions and mapping-method summary from the deleted historical README
- links to the historical method documentation URL already present in the source material

Also create `research/README.md` as a lightweight index for research packages if the `research/` directory does not already exist.

## Verification

Verification for this migration is content-oriented:

- confirm the target folder contains the expected four migrated assets plus the new `README.md`
- confirm `.DS_Store` was not copied
- confirm the README includes provenance and a source inventory
- confirm the source historical context has been preserved in adapted form
