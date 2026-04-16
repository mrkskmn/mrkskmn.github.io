import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const notes = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/notes" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    subline: z.string(),
    image: image(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
  }),
});

export const collections = { notes };
