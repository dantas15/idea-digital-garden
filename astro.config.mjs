import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";

const baseIfThereIsOne =
  process.env.NODE_ENV === "development" ? undefined : "/garden";

// https://astro.build/config
export default defineConfig({
  site: "https://ist4.github.com",
  base: baseIfThereIsOne,
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sitemap(),
    mdx({
      drafts: true,
      remarkPlugins: [
        remarkToc,
        [
          remarkCollapse,
          {
            test: "Table of contents",
          },
        ],
      ],
      shikiConfig: {
        theme: "dracula",
        wrap: true,
      },
      extendDefaultPlugins: true,
    }),
  ],
});
