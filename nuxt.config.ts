// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindTypography from '@tailwindcss/typography'

export default defineNuxtConfig({
  devtools: { enabled: true },
  // ssr: false,
  app: {
    head: {
      titleTemplate: 'Literatura | %s',
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxtjs/color-mode',
    "@nuxtjs/strapi",
  ],
  strapi: {
    url: import.meta.env.VITE_API_URL
  },
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
      darkMode: 'class',
    }
  }
})