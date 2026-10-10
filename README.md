# Niloy — personal research website (Version 5)

Static Astro website for **Nafiz Fuad Niloy**, a fourth-year Energy Science and Engineering undergraduate at KUET. The site is configured for `nf-niloy.github.io` on GitHub Pages.

## What's included

- Deep Ocean palette with independent light and dark themes, respecting your saved theme selection.
- Interactive 3D crystal-lattice hero with pause/reset, drag rotation and reduced-motion support.
- Lightweight ambient particles and short connecting lines behind every page. They throttle on mobile and stop when the tab is hidden.
- **About:** four professional icon-led horizontal chips for degree, university, academic field and location.
- **Projects:** ongoing lead-free-perovskite undergraduate thesis (only title, brief summary, keywords, status, supervisor) and completed 2025 battery thermal management project.
- **Research notes:** Markdown notes library with real-note-only featured article, keyword filters and a designed zero-entry state. No fictional notes are published.
- **Command palette:** Ctrl+K / Cmd+K, with projects and published notes in the search index.
- Responsive layouts, plus editorial typography (Plus Jakarta Sans headings, Source Sans 3 reading text, IBM Plex Mono labels).

## Install and preview

You need Node.js 22 (includes npm). From the folder that contains `package.json`:

```bash
npm install
npm run dev
```

Open the localhost address Astro prints (typically `http://localhost:4321`). Before deployment run `npm run build`.

## Deploy on GitHub Pages

1. Unzip this project and **copy the contents of `niloy-research-site-v5/`** into your existing local repository folder `D:\niloy-research-site`. The ZIP has no `.git` directory: **preserve your existing `.git` folder**.
2. Make sure the hidden `.github/workflows/deploy.yml` directory is copied too.
3. Commit and push:

```powershell
cd "D:\niloy-research-site"
git add .
git commit -m "Refresh website design and content — V5"
git push origin main
```

4. In GitHub → Settings → Pages, set **Source: GitHub Actions**. The included workflow builds and deploys the site.

Site: <https://nf-niloy.github.io/>

## Maintain content without changing components

| What to change | File / folder |
| --- | --- |
| Name, university, bio, research interests, social links | `src/data/profile.ts` |
| Projects, including thesis, project metadata and reports | `src/content/projects/*.md` |
| Research notes | `src/content/notes/*.md` |
| Main page headings and sections | `src/pages/index.astro` |
| About page icon chips | `src/pages/about/index.astro` |
| Color variables and layouts | `src/styles.css` |
| Hero crystal lattice | `src/components/Graph.astro` |
| Ambient particles and lines | `src/scripts/ambient.ts` |
| Navigation/theme/command palette | `src/layouts/Base.astro` |

### Publish a note

Add `src/content/notes/my-research-note.md`:

```md
---
title: "A reading note on crystal graph networks"
date: 2026-10-10
description: "Some observations from a paper I studied."
tags: ["GNN", "Materials"]
draft: false
---

Your actual note goes here.
```

The example above is documentation only; it is **not published**. To hide an unfinished note, set `draft: true`.

### Reports and PDF files

PDFs can be placed under `public/reports/` and linked from a project. The battery project's report points directly to its existing GitHub repository. The undergraduate thesis PDF is deliberately not included or published.

## Accessibility and performance

The ambient animation and automatic lattice rotation honor `prefers-reduced-motion`. The ambient canvas is decorative and doesn't capture clicks. Lattice controls can be used without dragging. The site avoids a backend and is suitable for static hosting.

**Build status:** The source is packaged and scripts are statically checked; a complete Astro production build was not verified in this environment because npm dependency installation timed out. The GitHub Actions deployment will run the full build after you push.
