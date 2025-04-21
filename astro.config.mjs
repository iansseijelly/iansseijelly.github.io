import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://iansseijelly.github.io',
  base: '/astrofy', // Remove if deploying to a custom domain or using username.github.io repo
})