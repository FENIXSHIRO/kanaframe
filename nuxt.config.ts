// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    port: 3001
  },
  ssr: false,
  vite: {    plugins: [      tailwindcss(),    ],  },
  css: ['~/assets/css/main.css'],
})
