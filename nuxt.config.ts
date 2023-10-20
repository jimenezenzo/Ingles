// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindTypography from '@tailwindcss/typography'

export default defineNuxtConfig({
  devtools: { enabled: true },
  // ssr: false,
  app: {
    head: {
      titleTemplate: 'English | %s',
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxtjs/color-mode',
    "@nuxt/content",
    "@kevinmarrec/nuxt-pwa"
  ],
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
      darkMode: 'class',
    }
  },
  pwa: {
    manifest: {
      name: 'Literatura app',
      short_name: 'Literatura app',
      theme_color: '#0d9488',
      lang: 'es',
    }
  },
  content: {
    markdown: {
      anchorLinks: false,
    }
  },
})