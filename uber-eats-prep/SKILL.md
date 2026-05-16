---
name: uber-design
description: Use this skill to generate well-branded interfaces and assets for Uber, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. The CSS variables in `colors_and_type.css` and the assets in `assets/` are the source of truth — import the CSS first, then reuse components from `ui_kits/`.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick start

1. **Always include the tokens first:**
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;700;800&family=JetBrains+Mono&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="colors_and_type.css">
   ```
2. **Use the CSS variables** — `var(--content-primary)`, `var(--background-primary)`, `var(--font-display)`, `var(--scale-400)`, `var(--radius-300)`, etc. The full list is in `colors_and_type.css`.
3. **Iconography**: load Lucide via CDN and apply the `stroke-linecap: square; stroke-linejoin: miter` override (see `ICONOGRAPHY.md`). Lucide is a substitute for Uber's internal icon set.
4. **Voice**: sentence case, direct, you-based, no emoji. See README → Content fundamentals.

## What's where

- `README.md` — brand context, voice, visual foundations.
- `ICONOGRAPHY.md` — icon system + Lucide substitution rules.
- `colors_and_type.css` — all tokens.
- `assets/` — logos, vehicle marks, photo placeholders.
- `preview/` — design system tab cards (also useful as visual reference).
- `ui_kits/rider/` — mobile Rider app components.
- `ui_kits/eats/` — Uber Eats mobile components.
- `ui_kits/marketing/` — uber.com web components.

## Substitutions to be aware of

- **Uber Move → Hanken Grotesk** (Google Fonts). Uber Move is exclusively licensed.
- **Uber icons → Lucide** at 2px stroke, square caps, miter joins.
- **Photography** is placeholder SVG; swap in real editorial imagery for production work.
