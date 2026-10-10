# Niloy — Research & Exploration

Personal research website for **Nafiz Fuad Niloy**. Astro 5, static hosting, responsive layout, animated scientific graph, light/dark theme switcher, Markdown-managed projects and notes.

## Quick start

You need **Node.js 22** and npm.

```bash
npm install
npm run dev
```

Open the localhost URL printed by Astro. Production build:

```bash
npm run build
npm run preview
```

## Change your personal information

Edit **`src/data/profile.ts`**. This controls the name, tagline, university, research interests, contact links and homepage text. The email and social links that aren't known have been left empty, not invented.

## Add a project

1. Copy `src/content/projects/battery-thermal-management.md` to a new descriptive filename, for example `new-materials-study.md`.
2. Change its YAML frontmatter (`title`, `year`, `status`, `summary`, `tags`, optional `image`, `github`, `report`).
3. Write the project details below `---` with normal Markdown.
4. Commit and push. The home/projects pages and the individual project page update automatically.

`image` accepts a full image URL; you can also put an image in `public/images/` and set its URL accordingly (for subpath hosting, use an absolute remote URL, or write an image URL using `import.meta.env.BASE_URL` in a component). For best results, use landscape images.

## Add a research note

Create a Markdown file such as `src/content/notes/graph-neural-networks.md`:

```md
---
title: "Graph neural networks: a reading note"
date: 2026-10-10
description: "Notes on message passing and atomistic learning."
tags: ["GNN", "Materials"]
draft: false
---

# Introduction

Your writing goes here.
```

Set `draft: true` to hide an unfinished note. The `README.md` in the notes folder is excluded from the collection.

## Reports and CV

You can add PDFs to `public/reports/` and link them from a project Markdown file, or point `report:` to a hosted PDF (the first project uses its public GitHub report link). There is no fabricated CV or publications section; add those when you have content. For a static PDF you want accessible from either GitHub Pages hosting mode, linking through Markdown using external URLs is simplest; to link local PDFs for project-site hosting, prefix them with the deployment base path.

## Host on GitHub Pages

**Recommended: user site**

1. Make a repository named **`nf-niloy.github.io`**.
2. Upload these files into the repo root (or push your local clone).
3. Ensure the default branch is named `main`.
4. In GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
5. Push to `main`. The included `.github/workflows/deploy.yml` installs, builds and deploys the site.
6. Your URL: `https://nf-niloy.github.io/`.

**Alternative: any repo name**

The workflow automatically sets Astro's `BASE_PATH=/<repository-name>/` and creates a Pages site at `https://nf-niloy.github.io/<repository-name>/`.

If your GitHub username is different, change the repo name or SITE_URL/BASE_PATH environment values as appropriate. For a custom domain, update `site` configuration and deployment settings.

## Customize design

- Theme colors and responsive layout: `src/styles.css`, in `:root` and `html[data-theme=dark]`.
- Animated graph: `src/components/Graph.astro`.
- Hero, sections and wording: `src/pages/index.astro`.
- Header and navigation: `src/layouts/Base.astro`.
- Project card: `src/components/ProjectCard.astro`.

Accessibility: visible focus navigation, mobile menu, responsive pages, alt text, reduced-motion support. The graph is decorative and does not require pointer interaction to access content.

## Attribution

The original project repository, setup photograph and report belong to their corresponding project creator. Google Fonts are fetched from Google's font CDN; the site otherwise does not require a backend, database or API key.


## Version 2 — Copper / Ivory redesign

- Homepage features the ongoing undergraduate thesis with **only** its title, short summary, keywords, status and supervisor. The private thesis PDF is **not** published.
- Edit thesis details in `src/content/projects/reliability-aware-perovskite-thesis.md`.
- Theme colors and interactions are in `src/styles.css`; light/dark mode continues to work.
- New responsive research constellation and improved pointer-reactive crystal graph. Both respect reduced-motion settings.
- Existing finished battery-management project and its external links are preserved.

To replace a previous installation, extract this ZIP and copy the **contents of `niloy-research-site-v2`** into your existing `D:\niloy-research-site` folder, replacing older files. Keep your `.git` folder; do not copy `.git` from elsewhere. Then run `npm install`, `npm run build`, `git add .`, `git commit -m "Redesign portfolio and add thesis"`, `git push`.
