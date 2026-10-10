# Research notebook — content guide

Each Markdown file here becomes a note when `draft: false`.

No public notes are bundled with the site. Use `_note-template.example` in the root of this folder as a starting point, or create a new `.md` file. **Do not publish a draft until you are ready.**

Example metadata:

```yaml
---
title: "My real research note"
date: 2026-10-10
description: "What I learned or investigated."
tags: ["Graph learning", "Materials"]
draft: true
---
```

You can write normal Markdown headings, tables, images, links, footnotes (standard Markdown link references), blockquotes and fenced code blocks. Code blocks are highlighted by Astro/Shiki. The note page adds a copy button to fenced code blocks.

For mathematics, use KaTeX delimiters:

```text
Inline math: $E_g$

Display math:
$$
E_g = E_{\mathrm{CBM}}-E_{\mathrm{VBM}}
$$
```

Link citations using Markdown references, e.g. `[1]` pointing to a verified DOI or publication URL. Don't fabricate references.

## Recommended notes

Use a descriptive heading order (`##` then `###`) so the in-page reading navigation is useful. Keep draft notes as `draft: true`; they're excluded from the archive, search index, sitemap, and static page generation.
