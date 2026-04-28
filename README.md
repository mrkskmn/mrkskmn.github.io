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

## TODOs

- [ ] Remove the `/notes` sitemap filter in `astro.config.mjs` when notes content is finalized (`/styleguide` is permanently excluded)

---

## Working with assets in notes

### Where to put files

| Asset type | Location | Notes |
| :--------- | :------- | :---- |
| Note hero images | `src/assets/notes/` | Referenced in frontmatter as `image: "../../assets/notes/my-image.jpg"` |
| In-body images | `src/assets/` | Imported in MDX with `import img from "../../assets/my-image.jpg"` |
| Themed SVGs | `src/assets/` | Imported with `?raw` so CSS variables apply when inlined |

### Raster images (jpg, png, webp…)

Import the file directly in the MDX — Astro processes it through the image pipeline (format conversion, lazy loading, correct dimensions):

```mdx
import myPhoto from "../../assets/my-photo.jpg";
```

Pass the imported object to any component's `src` prop. Do **not** use public-folder paths (`/my-photo.jpg`) for in-body images.

### SVGs with theme-aware fills

SVGs that use design tokens must be imported with `?raw` so they are inlined into the DOM — only then do CSS variables like `var(--color-text)` resolve correctly. A plain `<img src>` loads the SVG as an isolated document and the variables have no effect.

```mdx
import illustration from "../../assets/illustration.svg?raw";
```

In the SVG file itself, use CSS custom properties for fills that should follow the theme:

```svg
<path fill="var(--color-text)" … />
<path fill="var(--color-accent)" … />
```

---

## Note components

MDX components available inside any note (`.mdx` file) in `src/content/notes/`.

### WideImage

`src/components/Note/WideImage.astro`

Renders a single image (or SVG) that breaks out of the note body column, up to the full content width.

| Prop    | Type | Required | Description |
| :------ | :--- | :------- | :---------- |
| `src` | `string \| ImageObject \| rawSVG` | no | Imported image object, public URL string, or `?raw` SVG string. Omit to render an empty placeholder card. |
| `ratio` | `string` | no | CSS `aspect-ratio` value (e.g. `"16/9"`). Raster images crop to fill; SVGs scale to fit within the frame. Without it the content renders at its natural dimensions. |
| `style` | `string` | no | Inline styles passed to the outer wrapper. |

**Raster image at natural dimensions**
```mdx
import WideImage from "@components/Note/WideImage.astro";
import photo from "../../assets/photo.jpg";

<WideImage src={photo} />
```

**With a fixed aspect ratio**
```mdx
<WideImage src={photo} ratio="21/9" />
```

**Themed inline SVG**
```mdx
import WideImage from "@components/Note/WideImage.astro";
import illustration from "../../assets/illustration.svg?raw";

<WideImage src={illustration} ratio="2/1" />
```

**Empty placeholder card**
```mdx
<WideImage ratio="16/9" />
```

---

### WideGrid

`src/components/Note/WideGrid.astro`

Renders a multi-column wide media grid. Accepts any mix of raster images and inline SVGs. Empty slots render as surface-colored placeholder cards. On mobile the grid always collapses to a single column.

| Prop      | Type | Required | Description |
| :-------- | :--- | :------- | :---------- |
| `amount`  | `number` | yes | Total number of grid cells to render. |
| `columns` | `number` | no | Number of columns. Default `2`. |
| `srcs`    | `(ImageObject \| rawSVG \| string \| undefined)[]` | no | Source for each cell in order. Cells beyond the array length render as empty cards. |
| `ratio`   | `string` | no | CSS `aspect-ratio` value applied to every cell (e.g. `"3/2"`). |
| `style`   | `string` | no | Inline styles passed to the outer wrapper. |

**2 columns, all filled**
```mdx
import WideGrid from "@components/Note/WideGrid.astro";
import img1 from "../../assets/photo-1.jpg";
import img2 from "../../assets/photo-2.jpg";
import img3 from "../../assets/photo-3.jpg";
import img4 from "../../assets/photo-4.jpg";

<WideGrid amount={4} columns={2} srcs={[img1, img2, img3, img4]} ratio="3/2" />
```

**3 columns**
```mdx
<WideGrid amount={3} columns={3} srcs={[img1, img2, img3]} ratio="1/1" />
```

**Mixed: images and a themed SVG**
```mdx
import illustration from "../../assets/illustration.svg?raw";

<WideGrid amount={3} columns={3} srcs={[illustration, img1, img2]} ratio="4/3" />
```

**Sparse: some slots left empty**
```mdx
<WideGrid amount={4} columns={2} srcs={[img1, img2]} ratio="3/2" />
```

**All empty — placeholder cards**
```mdx
<WideGrid amount={6} columns={3} ratio="1/1" />
```
