import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "hybrid",
  adapter: vercel(),
  i18n: {
    defaultLocale: 'pt-br',
    locales: ["en", "pt-br"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
