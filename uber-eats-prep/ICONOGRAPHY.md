# Iconography

## Uber's icon system

Uber maintains an in-house icon library that ships with Base. Icons are designed with four principles (from the public Base documentation):

1. **Simple** — bold, geometric, composed of basic shapes. Minimize complexity but stay recognizable.
2. **Clear** — legible at small sizes (16–24px) since most usage is in-app.
3. **Focused** — always paired with text, so the icon doesn't have to over-explain.
4. **Flexible** — multiple interpretations possible so a single icon can be reused across contexts.

Visually:
- **24px design grid**, 2px keyline padding.
- **2px stroke** for outlined icons; **fully filled** geometric shapes for active/selected states.
- **Miter joins, square caps** — no rounded line ends.
- **Transportation-inspired metaphors** — pins, arrows, vehicles, roads.
- **Single color** (currentColor) — icons never have gradient fills, never have a secondary tint.
- **No emoji.** Not in product UI, not in marketing.

## Substitution: Lucide Icons

Uber's production icon set is not publicly available as a font, sprite, or package. We substitute **Lucide Icons** (`https://lucide.dev`), which is the closest free match — same 24px grid, same 2px stroke, same geometric/minimal style.

**Usage in this kit:**

```html
<!-- via CDN -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="map-pin"></i>
<script>lucide.createIcons();</script>
```

In JSX:

```jsx
import { MapPin, Clock, Star, CreditCard } from "https://esm.sh/lucide-react@latest";
<MapPin size={24} strokeWidth={2} />
```

**Required Lucide overrides for Base style match:**

```css
[data-lucide], .lucide {
  stroke-width: 2;
  stroke-linecap: square;
  stroke-linejoin: miter;
}
```

(Lucide defaults are `round` caps and `round` joins — we override to `square`/`miter` to match Uber's harder geometry.)

## Uber-specific marks we recreated

These aren't in Lucide and live as standalone SVGs under `../assets/`:

| File | What it is |
|---|---|
| `uber-wordmark.svg` | The "Uber" wordmark (post-2018 redesign, set in Uber Move Bold). |
| `uber-app-icon.svg` | The black-square white-"U" app icon. |
| `uber-eats-wordmark.svg` | "Uber Eats" wordmark with the green accent. |
| `vehicle-car.svg` | Generic car icon used in ride-tier picker. |
| `vehicle-uberx.svg` | UberX-tier car silhouette. |
| `vehicle-uberblack.svg` | Black-tier sedan silhouette. |

## Where each icon is used

| Surface | Common icons |
|---|---|
| Rider — Where to? | `search`, `map-pin`, `clock`, `home`, `briefcase`, `bookmark` |
| Rider — Ride options | `users`, `wallet`, `credit-card`, `info` |
| Rider — Trip in progress | `phone`, `message-square`, `shield`, `share-2`, `more-horizontal` |
| Eats — Browse | `search`, `map-pin`, `clock`, `star`, `chevron-right`, `shopping-bag` |
| Eats — Restaurant | `arrow-left`, `heart`, `share-2`, `info`, `plus`, `minus` |
| Marketing nav | (text-only — no icons in the nav itself) |

## Emoji & unicode chars

**Never used.** If you find yourself reaching for an emoji, use a Lucide icon or omit it.
