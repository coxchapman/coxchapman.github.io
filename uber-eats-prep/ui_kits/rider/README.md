# Rider UI Kit

High-fidelity recreation of Uber's Rider app surfaces using the Base design tokens.

Open `index.html` for the interactive prototype:
- Home — Where to? sheet over the map
- Search — recent destinations + saved places
- Choose a ride — UberX / XL / Black tier picker
- Confirm pickup — pickup point + payment method
- Trip in progress — driver card + ETA + safety bar

Components are split into focused JSX files, each exporting to `window` so the next file can use them.

## Files

| File | Purpose |
|---|---|
| `ios-frame.jsx` | iPhone device frame starter |
| `primitives.jsx` | Buttons, fields, icons, sheet chrome |
| `screens.jsx` | The 5 Rider screens, composed from primitives |
| `index.html` | Interactive multi-screen prototype |
