# Add research notes here

Create a NEW `.md` file in this folder and add frontmatter like:

```yaml
---
title: "Understanding graph neural networks"
date: 2026-10-10
description: "A personal reading note on message passing."
tags: ["GNN", "Learning"]
draft: false
---
```

The remainder is your Markdown writing. `draft: true` hides it from the website. This README is not included as a note because it does not have YAML frontmatter; the glob loader is configured below to exclude README files.
