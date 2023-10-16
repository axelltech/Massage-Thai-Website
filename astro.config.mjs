import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://thaisensation.ro/',
  integrations: [
    tailwind({
      // configFile: "./postcss.config.cjs",
    }),
  ],
 
});

