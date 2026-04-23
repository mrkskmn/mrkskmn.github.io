// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";
import path from "path";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@consts": path.resolve(__dirname, "./src/consts.ts"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: [path.resolve(__dirname, "./src")],
        },
      },
    },
  },

  server: {
    host: true,
  },

  devToolbar: {
    enabled: false,
  },

  integrations: [mdx(), sitemap()],
});