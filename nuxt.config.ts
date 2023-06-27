// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/strapi",
    '@nuxt/content',
  ],
  strapi: {
    url: import.meta.env.VITE_API_URL
  },
})