# Niloy — Research & Exploration (V6)

A GitHub Pages-ready personal academic website for **Nafiz Fuad Niloy**, a fourth-year Energy Science and Engineering undergraduate at Khulna University of Engineering & Technology (KUET).

Designed as an editable Astro website with a Deep Ocean teal-to-plum palette and independently selectable light/dark themes.

## What's new in V6

- **Flowing interactive background:** quiet animated contours + sparse particle connections. Pointer-responsive on desktop, lower-density on mobile, disabled by reduced-motion preference.
- **Interactive Materials Explorer:** switch between a schematic crystal lattice, its illustrative atom graph, and a conceptual feature vector. The crystal view supports drag-to-rotate, keyboard-accessible tabs, and responsive canvas drawing. This is an explanatory visual, **not a numerical simulation or a scientific finding**.
- **Redesigned project case studies:** editorial title and facts, optional physical-project image with view-original link, project resources, overview and section navigation. Thesis details remain minimal.
- **Advanced research notebook:** Markdown notes with LaTeX math (remark-math + KaTeX), Astro/Shiki code highlighting, copy-code buttons, heading-based contents, reading-time estimate, reading progress, mobile layouts, reference links and searchable/featured archives. No fictional public notes added.
- **Hero refinement:** updated headline hierarchy and calmer transitions while preserving the 3D rotating crystal lattice.
- **Mobile/accessibility:** responsive 375/430/768/1440px-oriented CSS, contrast-consistent light/dark colors, `prefers-reduced-motion`, keyboard focus styles, keyboard-accessible Materials Explorer and performance-aware canvas rendering.

### Real work displayed

- **Ongoing undergraduate thesis (2026–27):** *Reliability-Aware Graph Learning for the Discovery of Lead-Free Halide Perovskite Photovoltaic Absorbers.* The website shows only a short description, the Ongoing status, keywords, and supervisor **Md. Mahmodul Alam**, Assistant Professor, Department of Energy Science and Engineering, KUET. It does **not** publish the thesis PDF, detailed methodology, or unpublished results.
- **Completed 2025 engineering project:** Arduino-Based Intelligent Battery Thermal Management System for Real-Time Monitoring and Multi-Stage Temperature Control. The physical setup image and technical report link point to the existing public repository.

## Local preview

Install [Node.js LTS](https://nodejs.org/) (Node 22 recommended), then:

```powershell
cd "D:\niloy-research-site"
npm.cmd install
npm.cmd run dev
```

Open the localhost address reported in the terminal. To test production output locally:

```powershell
npm.cmd run build
npm.cmd run preview
```

You do not need to upload the generated `dist/` or `node_modules/` directories; they are ignored in `.gitignore`.

## Replace V5 with V6 and deploy

1. Back up your existing local website folder if you want to preserve earlier changes.
2. Extract the ZIP, and **copy the contents inside `niloy-research-site-v6/`** into `D:\niloy-research-site`, replacing files. Preserve the original hidden `.git` directory.
3. Ensure the hidden `.github/workflows/deploy.yml` workflow was copied too.
4. Run:

```powershell
cd "D:\niloy-research-site"
git add .
git commit -m "Website V6 — explorer and research notebook"
git push origin main
```

Then check the GitHub repository's **Actions** tab. The workflow installs dependencies and publishes your site if GitHub Pages' Source is **GitHub Actions**.

Your website address is <https://nf-niloy.github.io/>.

## Update site content

| Content or design | File/folder |
| --- | --- |
| Name, headline, bio, research interests, links | `src/data/profile.ts` |
| Add or edit a project / thesis metadata | `src/content/projects/*.md` |
| Add a research note | `src/content/notes/*.md` |
| Research notebook authoring guide and draft template | `src/content/notes/README.md` |
| Main page layout | `src/pages/index.astro` |
| Materials Explorer | `src/components/MaterialsExplorer.astro` |
| Crystal hero model and controls | `src/components/Graph.astro` |
| Animated ambient contours and particles | `src/scripts/ambient.ts` |
| Project detail view | `src/pages/projects/[slug].astro` |
| Note detail / code-copy / reading progress | `src/pages/notes/[slug].astro` |
| Global styling and mobile breakpoints | `src/styles.css` |
| Theme switcher and `Ctrl + K` command palette | `src/layouts/Base.astro` |

### Write a note

Create `src/content/notes/your-note-slug.md`:

~~~~md
---
title: "Your actual note title"
date: 2026-10-10
description: "Brief real summary."
tags: ["Materials", "GNN"]
draft: true
---

## Background

Write your real observations here. Inline math: $E_g$.

$$
E_g = E_{\mathrm{CBM}} - E_{\mathrm{VBM}}
$$

```python
print('Hello, notebook!')
```

## References

- Add a verified DOI or source URL.
~~~~

**Important:** That inner markdown code fencing is a conceptual example; if your Markdown editor has trouble with nesting, use the ready-made template `src/content/notes/_note-template.example` and copy it to a `.md` filename. Set `draft: false` only when you want to publish.

Markdown notes use `remark-math`/`rehype-katex` + `katex` for math, Astro/Shiki for code. No paid CMS or backend is required. Images may go under `public/images/` and be linked using `/images/filename.png`.

## Color, accessibility and performance

The palette is centralized in CSS custom properties in `src/styles.css`. Both themes use distinct backgrounds and text colors; browser toolbar colors follow the selected theme. Decorative canvas animations are noninteractive and respect reduced-motion preferences. The hero and Materials Explorer have separate accessible controls, and native page scrolling remains possible on mobile.

## Validation status

The complete source ZIP contains no dependencies or generated files. It is structured for Astro 5 and GitHub Pages. If installation cannot access npm in the current environment, a full local production build cannot be certified; GitHub Actions will provide the definitive build result after you push. Inspect its logs for errors.


### V6.1 mobile navigation and contact fix

- Header and hamburger menu remain fixed at the top of the viewport on phones and tablets.
- The navigation opens immediately beneath the top-right hamburger button without jumping back to the start of the document. Tap outside or press Escape to close.
- Bottom **Get in touch** links to the public Linktree profile in the same tab, avoiding mobile pop-up blocking. The button is also elevated above decorative effects for reliable touch input.
- Theme toggle, project content, materials explorer and command palette are unchanged.


### V6.2 — Dhaka footer clock

The footer includes a compact live digital clock and date using `Asia/Dhaka` (UTC+06:00). The clock uses the browser's built-in `Intl.DateTimeFormat` API, so no external time API or credentials are needed.

- Edit the clock markup/behavior in `src/components/FooterClock.astro`.
- Edit typography, colours and spacing in the `/* V6.2 */` section at the end of `src/styles.css`.
- The text uses the same **IBM Plex Mono 10px** sizing as the existing copyright section.
- On mobile, the footer displays links, clock and copyright in separate, readable rows.

Note: the time is formatted for Dhaka irrespective of the visitor's local timezone. Like other JavaScript clocks it relies on the visitor's device clock being accurate.


### V6.3 Footer layout

The footer now has a centered two-tier layout. The first row groups the logo and tagline and shows a compact live Dhaka clock; the second row groups social links and copyright. On mobile the elements stack neatly. No other pages or content were changed.
