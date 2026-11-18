import { defineConfig } from "astro/config"
import tailwind from "@tailwindcss/vite"

export default defineConfig({
  integrations: [tailwind()],
  site: "https://fvs7-beauty-pro.vercel.app",
})