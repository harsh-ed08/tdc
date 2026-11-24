// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { loadEnv } from "vite";
import { isNoindexRoute } from "./src/utils/seo.ts";

const env = loadEnv(process.env.NODE_ENV || "production", process.cwd(), "");
const site = env.SITE_URL || env.CF_PAGES_URL || "http://localhost:4321";

export default defineConfig({
  site,
  integrations: [
    sitemap({
      filter: (page) => !isNoindexRoute(new URL(page).pathname),
    }),
  ],
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
});
