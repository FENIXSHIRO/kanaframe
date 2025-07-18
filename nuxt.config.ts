// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  devServer: {
    port: 3001,
  },
  compatibilityDate: "2025-07-15",
  vite: { plugins: [tailwindcss()] },
});
