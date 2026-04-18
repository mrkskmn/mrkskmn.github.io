# Note Components

Reusable MDX components for note pages. Import from `@components/Note/`.

---

## WideGrid

A multi-item media grid that breaks out of the note body column. Supports images, raw SVGs, and arbitrary slot content.

### Props

| Prop          | Type                     | Default | Description                                              |
|---------------|--------------------------|---------|----------------------------------------------------------|
| `amount`      | `number`                 | —       | Total number of grid frames to render (required)         |
| `columns`     | `number`                 | `2`     | Number of columns in the desktop grid                    |
| `srcs`        | `(string \| ImageObject \| null \| undefined)[]` | `[]` | Image sources for each frame (index-matched) |
| `ratio`       | `string`                 | —       | CSS `aspect-ratio` applied to all frames, e.g. `"3/2"`  |
| `mobileRatio` | `string`                 | —       | Overrides `ratio` on mobile breakpoint                   |
| `style`       | `string`                 | —       | Passthrough inline styles on the outer wrapper           |

Mobile layout is always a single column regardless of `columns`.

### Content resolution per frame

For each index `i`, the frame renders the first match:

1. **Named slot** `item-{i}` — if the slot is provided, it takes priority over `srcs`
2. **`srcs[i]`** — rendered as a `<img>` or inlined SVG (`?raw` imports)
3. **Empty** — the frame renders as a blank card

### Examples

**Image grid (existing usage)**

```mdx
import WideGrid from "@components/Note/WideGrid.astro"
import img1 from "./img1.png"
import img2 from "./img2.png"

<WideGrid amount={2} columns={2} srcs={[img1, img2]} ratio="3/2" />
```

**Slot-based custom content**

```mdx
<WideGrid amount={2} columns={2} ratio="1/1">
  <div slot="item-0">Left panel</div>
  <div slot="item-1">Right panel</div>
</WideGrid>
```

**Mixed — slot overrides a specific index, srcs fills the rest**

```mdx
<WideGrid amount={3} columns={3} srcs={[img1, undefined, img3]} ratio="4/3">
  <video slot="item-1" src="/demo.mp4" autoplay muted loop />
</WideGrid>
```

**Empty placeholder cards**

```mdx
<WideGrid amount={4} columns={2} ratio="1/1" />
```

**Single item, different ratios per breakpoint**

```mdx
<WideGrid amount={1} columns={1} srcs={[img1]} ratio="2/1" mobileRatio="1/1" />
```
