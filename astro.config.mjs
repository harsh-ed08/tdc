// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { loadEnv } from "vite";

import sanity from "@sanity/astro";

const env = loadEnv(process.env.NODE_ENV || "production", process.cwd(), "");
const site = env.SITE_URL || env.CF_PAGES_URL || "http://localhost:4321";

export default defineConfig({
  site,

  // Demo site: do not generate or publish a sitemap.
  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/inter-regular.woff2"],
          },
        ],
      },
    },
  ],

  vite: { build: { cssTarget: "safari15.4" } },
   integrations: [
    sanity({
      projectId: "9y08w03c",
      dataset: "production",
      apiVersion: "2026-03-01",
      useCdn: false,
    }),
  ],
});