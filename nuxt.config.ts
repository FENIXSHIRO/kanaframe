// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@element-plus/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  ssr: false,
  devtools: { enabled: true },

  app: {
    head: {
      title: 'KANAFRAME',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  css: ['~/assets/styles/main.css'],

  devServer: {
    port: 3001,
  },

  compatibilityDate: '2025-07-15',
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/index.scss" as element;',
        },
      },
    },
  },

  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },
});
