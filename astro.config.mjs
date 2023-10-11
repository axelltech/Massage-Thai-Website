import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://axelltech.github.io',
  base: '/Massage-Thai-Website',
  // https://github.com/axelltech/Massage-Thai-Website
  integrations: [
    tailwind({
      // configFile: "./postcss.config.cjs",
    }),
  ],
  styles: {
    content: [
      './src/**/*.html',
      './src/**/*.astro',
      './src/styles/**/*.css', // Adăugați aici calea către fișierele CSS
    ],
  },
});

