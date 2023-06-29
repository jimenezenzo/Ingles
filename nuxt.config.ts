// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindTypography from '@tailwindcss/typography'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: 'Literatura | %s',
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/strapi",
  ],
  strapi: {
    url: import.meta.env.VITE_API_URL
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography]
    }
  }
})