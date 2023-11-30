import { defineConfig } from "astro/config";
import UnoCSS from "@unocss/astro";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://murunah.id',
  integrations: [UnoCSS()],
  output: "server",
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  adapter: vercel({
    imageService: true,})
});