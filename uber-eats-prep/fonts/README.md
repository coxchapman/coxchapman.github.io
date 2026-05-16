# Fonts

Uber's brand typeface is **Uber Move** — Uber Move Display, Uber Move Text, and Uber Move Mono. It is exclusively licensed to Uber and is not freely redistributable, so this design system **substitutes** the nearest free equivalents:

| Uber face | Substitute (used here) | Why |
|---|---|---|
| Uber Move Display | **Hanken Grotesk** | Same slightly-condensed geometric sans, tight letter-spacing on display sizes, very similar `a`, `g`, `R`, and tabular numerals. |
| Uber Move Text | **Hanken Grotesk** | Hanken's text weights match Move Text's x-height and stroke contrast. |
| Uber Move Mono | **JetBrains Mono** | Geometric mono, similar proportions to Move Mono. |

## How fonts are loaded

`colors_and_type.css` defines an `@font-face` family called `UberMoveSub` that `src: local()`-resolves to Hanken Grotesk if the user has it installed. UI Kit pages **also** include the Google Fonts CDN link in `<head>` so the substitute always loads:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## To swap in the real Uber Move

When you have access to Uber Move font files (Uber-internal use), drop them into this folder as:

- `UberMove-Regular.woff2`
- `UberMove-Medium.woff2`
- `UberMove-Bold.woff2`
- `UberMoveText-Regular.woff2`
- `UberMoveText-Medium.woff2`
- `UberMoveMono-Regular.woff2`

Then update the `@font-face` blocks in `colors_and_type.css` to point at these files instead of `local("Hanken Grotesk")`.
