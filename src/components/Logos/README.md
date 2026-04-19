# Logos Component

Displays a horizontally scrolling, looping row of brand logos with left/right fade edges. Import from `@components/Logos/`.

---

## Usage

```astro
import Logos from "@components/Logos/Logos.astro";

<Logos />
```

No props required. The component automatically picks up every `*.png` placed in `src/assets/logos/`.

---

## Adding logos

Drop PNG files into `src/assets/logos/`. They are picked up at build time via `import.meta.glob` — no code changes needed.

```
src/assets/logos/
  acme.png
  globex.png
  initech.png
```

---

## Behaviour

| Concern | Detail |
|---|---|
| Image processing | Each logo is rendered via `<Image />` — Astro compresses and resizes at build time |
| Loop | The logo list is duplicated; a CSS `translateX(0 → -50%)` animation creates a seamless infinite scroll |
| Sizing | Fixed `2rem` height per logo, width scales naturally |
| Style | Logos are greyscale + dimmed at rest, full colour on hover. Remove `filter`/`opacity` from `.logos__item img` in `Logos.scss` to always show full colour |
| Fade edges | Left/right overlays use `linear-gradient` against `--color-canvas` |
| Reduced motion | When `prefers-reduced-motion` is set, the animation is disabled and logos wrap into a centred static grid |
| Accessibility | `alt=""` on each logo image (decorative) and `aria-label="Brands I've worked with"` on the section |
