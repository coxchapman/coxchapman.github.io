# Uber Design System

A working recreation of Uber's **Base design system** for use by design agents. Base is Uber's unified design language across all its products — Rider, Driver, Uber Eats, the corporate web, internal tooling, and partner portals.

## Sources

The following public sources informed this recreation. Treat them as the authoritative references; this folder is a derivative useful for prototyping at high fidelity, not a substitute for Uber's internal Figma libraries.

- **Base design system docs (Figma-published)** — https://base.uber.com/6d2425e9f/p/294ab4-base-design-system
- **Base Web (open-source React library)** — https://github.com/uber/baseweb — the React implementation of Base. Color tokens, spacing, and component anatomy are derived from this.
- **Base design system docs repo** — https://github.com/uber/base-design-docs
- **Uber Move typeface** — Uber's exclusive custom typeface (Move Display, Move Text, Move Mono). Not redistributable; we substitute **Hanken Grotesk** + **JetBrains Mono** from Google Fonts as the nearest free equivalents. See `fonts/README.md` for the substitution rationale.
- **Uber Design — "Uber Design Platform"** by Marco Paglia (Medium) — design-platform philosophy.

## Products covered

Uber operates a family of products under one design language. The UI kits in this folder cover three:

1. **Rider app** (`ui_kits/rider/`) — the mobile booking flow most people know. Map-centric, black primary, big sheet-based UI.
2. **Uber Eats** (`ui_kits/eats/`) — food delivery marketplace. Same Base foundations, but skewed toward photography, browse/search, and an accent green (#06C167).
3. **Uber.com marketing** (`ui_kits/marketing/`) — the corporate/consumer-facing web. Black backgrounds, large Uber Move display type, minimal line illustrations, big editorial photography.

Driver app and the freight/business portals share the same foundations; their distinct surfaces aren't recreated here but the components in `rider/` and `marketing/` cover their vocabulary.

---

## Content fundamentals — voice, tone, copy

Uber's voice is **direct, confident, and human**. The whole product is a series of transactions where someone is going somewhere or expecting something, so copy reads like a competent friend, not a brand mascot.

**Tone**
- Plain language. No jargon. No "synergy," no "delight." Read like an SMS from a friend who knows what they're doing.
- Confident but warm. "Get a ride" not "Request a ride," "Order now" not "Please consider ordering."
- Helpful when something goes wrong. State the problem, state the fix, no apology theatre.
- Inclusive defaults — "Pick up by 8:30 PM" works in any geography, in any culture.

**Casing**
- **Sentence case** everywhere except the **Uber wordmark** itself. Buttons, nav items, section headers, settings — all sentence case. Never ALL CAPS for body content.
- Title case appears occasionally in marketing for product names (e.g. "Uber Black," "Uber Eats") but never for UI labels.

**Person**
- **You** for the user, almost always. "Where to?" "Your driver is on the way." "You'll arrive at 8:14 PM."
- Uber refers to itself rarely. Almost never "we" or "Uber" — the brand is implicit.
- Imperative second-person for actions: "Sign in," "Add a card," "Confirm pickup."

**Numbers, time, money**
- Numerals always (`3 mins`, `$12.50`), never spelled out.
- Time as `7:42 PM` or `Arrives in 3 min`. Use `min` not `minute`.
- Currency with localized symbol; round trip-style pricing (e.g. `$12.50` not `$12.5`).

**Emoji**
- **No emoji** in product UI. Ever. Iconography is handled by the bold geometric icon system (see ICONOGRAPHY).
- Marketing site is also emoji-free.

**Vibe in one line**: a competent operator who values your time. Tells you what's happening, what's next, what to tap.

**Examples** (lifted from real Uber surfaces):
- `Where to?`
- `Choose a ride`
- `4 min away · Honda Civic · 7XYZ123`
- `Trip complete — How was Marco?`
- `$12.50 charged to •••• 4242`
- `Schedule a ride for later`
- `Add a payment method`
- `Order again`

---

## Visual foundations

**Color philosophy.** Uber Base is a **monochrome-first** system. Black (`#000000`) is the primary color, white (`#FFFFFF`) is the surface, and the canvas is built almost entirely out of the **mono** ramp (mono-50 → mono-1000). Color appears sparingly: an **accent** (blue or green depending on product), **positive** (Uber Green), **warning** (yellow), **negative** (red). On the marketing site and in major app surfaces (the Rider map, video splash hero) the screen often goes **fully black** — full-bleed black is part of the brand, not an accident.

**Typography.** **Uber Move** (display + text + mono). Geometric, slightly condensed, friendly. Hierarchy is driven by **weight and scale, not color**. Headlines are huge — display sizes go to **96px+** on web hero units. Body is normally **16px** with generous line height (`1.4–1.5`). Letter-spacing is **tight** on display sizes (`-0.02em` to `-0.04em`), normal on body.

**Spacing.** **4px base grid**. Components snap to the 4px scale (`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128`). Layout uses a 12-column grid with **24px gutters** on desktop, **16px** on mobile.

**Backgrounds.** Surfaces are mostly **flat white** in light mode, **flat black** in dark mode (and the Rider map screen). Marketing pages alternate **full-bleed black sections** and **full-bleed white sections**, with **no gradients**. Editorial photography (full-bleed) is used for hero units and category headers in Eats. There are **no decorative patterns or textures**; the illustration vocabulary is **thin line drawings** (1-2px stroke) representing roads, maps, vehicles, and infrastructure.

**Animation.** **Fast and decisive.** Most transitions are **200–300ms** with `ease-out` or a custom Base cubic-bezier (`cubic-bezier(0, 0, 0.2, 1)`). Bottom sheets slide up over the map at ~280ms. Buttons have **no bounce, no overshoot** — they fade in opacity or scale down on press. Loading states use a discrete **3-dot dot loader** or a subtle skeleton shimmer; never a spinner.

**Hover states.** On web: a **subtle background darken** (mono-100 → mono-200), or **opacity 0.85** on primary buttons. **No glow, no underline-grow, no transform.** Links underline on hover.

**Press states.** **Scale 0.97** combined with a **darker fill** (mono-200 → mono-300 on light buttons, or alpha-overlay on dark). 100ms.

**Borders.** Thin. **1px solid mono-300** for inputs, cards, and dividers. Borders are **never colored** for emphasis — color comes from the **fill**, not the stroke. Disabled and ghost borders use mono-200.

**Shadows.** Used minimally. The shadow system has 4 tiers:
- `shadow-100` — `0 1px 2px rgba(0,0,0,0.08)` — resting cards
- `shadow-200` — `0 2px 8px rgba(0,0,0,0.1)` — popovers, menus
- `shadow-300` — `0 8px 24px rgba(0,0,0,0.12)` — modals, bottom sheets
- `shadow-400` — `0 16px 48px rgba(0,0,0,0.16)` — feature dialogs

No inner shadows. No colored shadows. Mobile sheets prefer a **single 1px top border** over a shadow.

**Corner radii.** Conservative.
- `radius-100` — 4px (chips, small badges)
- `radius-200` — 8px (inputs, buttons, small cards)
- `radius-300` — 12px (cards, sheets in marketing)
- `radius-400` — 16px (bottom sheets in app)
- **Pill** — fully rounded (`9999px`) for circular action buttons, avatars, and select tags.

**Cards.** Flat white surface with a **1px mono-200 border** OR a **shadow-100**, never both. Padding is **16px or 24px**. Corner radius is **radius-300 (12px)** by default. Eats product cards sometimes drop the border entirely and rely on whitespace + the 8/12px radius photo at the top.

**Transparency & blur.** Mostly avoided. The Rider map screen overlays UI on top of the map using **solid white sheets**, not glass. Backdrop blur is used **only** for the iOS status-bar overlay on the marketing site and for transient toasts pinned to a photo background.

**Imagery vibe.** **Editorial, photographic, slightly warm but never filtered.** Real people, real cars, real food. No stock-photo gloss. Eats photography is bright and overhead; Rider photography is candid and street-level. Marketing illustrations are **thin black line drawings** on white — never colored, never gradient-filled.

**Layout rules.**
- Persistent black bar / wordmark in the marketing nav.
- App screens are **sheet-based**: full-screen map/photo behind, a sheet rises from the bottom that holds 90% of the UI.
- Generous horizontal **24px** margin on mobile, **80–120px** on desktop containers.
- Marketing hero units are **full-bleed**, headline + 1 CTA, nothing else.

---

## Iconography

See **`ICONOGRAPHY.md`** for the full breakdown.

In short: Uber uses a custom **bold, geometric, transportation-inspired** icon set. Icons are **2px-stroke or solid-filled**, ~24px design size, no rounded line caps, no decorative gradients. There is **no emoji** in product UI. Where we don't have the exact Uber icon assets, the kit substitutes **Lucide Icons** at `stroke-width="2"` with `stroke-linecap="square"` and `stroke-linejoin="miter"` — see `ICONOGRAPHY.md` for the swap details and how to override.

---

## Index — what's in this folder

| File / folder | What it is |
|---|---|
| `README.md` | This file. |
| `SKILL.md` | Agent-skills-compatible entry point. |
| `ICONOGRAPHY.md` | Icon system docs + Lucide substitution rules. |
| `colors_and_type.css` | All design tokens as CSS variables. Import this first. |
| `fonts/` | Font files (Hanken Grotesk + JetBrains Mono substitutions for Uber Move). |
| `assets/` | Logos (Uber wordmark SVGs), brand marks, sample illustrations, placeholder imagery. |
| `preview/` | Cards that populate the Design System tab — colors, type, spacing, components. |
| `ui_kits/rider/` | Mobile Rider app recreation. `index.html` is the interactive prototype; `*.jsx` are the components. |
| `ui_kits/eats/` | Uber Eats marketplace recreation. |
| `ui_kits/marketing/` | Uber.com marketing site recreation. |

---

## ⚠️ Substitutions to flag

These are not exact assets — flag them to the user and replace with the originals when available:

- **Font: Uber Move → Hanken Grotesk.** Uber Move is exclusively licensed and not redistributable. Hanken Grotesk is the closest free Google Font (similar x-height, weight axis, slightly geometric). For the mono face, **JetBrains Mono** stands in for Uber Move Mono.
- **Icon set: Uber's internal icons → Lucide Icons (CDN).** Uber's production icons aren't publicly available as a font/sprite. Lucide matches the stroke style and geometric simplicity closely; we use it at 2px stroke and miter joins. Some Uber-specific marks (the Uber wordmark, the "U" app icon, vehicle icons) are recreated as SVGs in `assets/`.
- **Photography.** All editorial photos in marketing and Eats kits are placeholders.
