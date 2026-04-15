# mrkskmn.github.io

Personal site built with Astro + MDX + SCSS.

## Commands

| Command        | Action                                          |
| :------------- | :---------------------------------------------- |
| `pnpm install` | Install dependencies                            |
| `pnpm dev`     | Start local dev server at `localhost:4321`      |
| `pnpm build`   | Build production site to `./dist/`              |
| `pnpm preview` | Preview production build locally                |

---

## Note components

MDX components available inside any note (`.mdx` file) in `src/content/notes/`.

### WideImage

`src/components/Note/WideImage.astro`

Renders a single image that breaks out of the note body column, up to 1200px wide.

| Prop    | Type     | Required | Description |
| :------ | :------- | :------- | :---------- |
| `src`   | `string \| ImageObject \| rawSVG` | yes | Image URL, Astro imported image, or `?raw` SVG string |
| `ratio` | `string` | no | CSS `aspect-ratio` value (e.g. `"16/9"`). If set, image is cropped to fill via `object-fit: cover`. Without it the image renders at its natural dimensions. |
| `style` | `string` | no | Inline styles passed to the outer wrapper |

**Raster image**
```mdx
import heroShot from "../../assets/hero.jpg";

<WideImage src={heroShot} />
```

**With a fixed aspect ratio**
```mdx
<WideImage src={heroShot} ratio="21/9" />
```

**Inline SVG (so CSS variables / theming apply)**
```mdx
import illustration from "../../assets/illustration.svg?raw";

<WideImage src={illustration} ratio="2/1" />
```

> SVGs must be imported with `?raw`. Fills in the SVG should use `fill="var(--color-text)"` / `fill="var(--color-accent)"` etc. so they respond to the active theme.

---

### WideGrid

`src/components/Note/WideGrid.astro`

Renders a 2-column wide media grid. Accepts any mix of images and inline SVGs. Empty slots render as surface-colored placeholder cards (useful when combined with `ratio`).

On mobile the grid always collapses to a single column. When `amount` is odd, the first item spans both columns.

| Prop     | Type       | Required | Description |
| :------- | :--------- | :------- | :---------- |
| `amount` | `number`   | yes | Total number of grid cells to render |
| `srcs`   | `(string \| ImageObject \| rawSVG \| undefined)[]` | no | Sources for each cell in order. Cells beyond the array length render as empty cards. |
| `ratio`  | `string`   | no | CSS `aspect-ratio` value applied to every cell (e.g. `"3/2"`) |
| `style`  | `string`   | no | Inline styles passed to the outer wrapper |

**2-column grid, all filled**
```mdx
import img1 from "../../assets/photo-1.jpg";
import img2 from "../../assets/photo-2.jpg";
import img3 from "../../assets/photo-3.jpg";
import img4 from "../../assets/photo-4.jpg";

<WideGrid amount={4} srcs={[img1, img2, img3, img4]} ratio="3/2" />
```

**3 items — first spans full width, two below**
```mdx
<WideGrid amount={3} srcs={[img1, img2, img3]} ratio="4/3" />
```

**Mixed: image + SVG**
```mdx
import illustration from "../../assets/illustration.svg?raw";

<WideGrid amount={2} srcs={[illustration, img1]} ratio="1/1" />
```

**Sparse: some slots left empty**
```mdx
<WideGrid amount={4} srcs={[img1, img2]} ratio="3/2" />
```

**All empty — placeholder cards**
```mdx
<WideGrid amount={4} ratio="1/1" />
```
