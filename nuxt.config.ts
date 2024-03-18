// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindTypography from '@tailwindcss/typography'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: 'English | %s',
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxtjs/color-mode',
    "@nuxt/content",
    "@kevinmarrec/nuxt-pwa",
    '@nuxthq/studio'
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
      name: 'English 2nd year',
      short_name: 'English 2nd',
      theme_color: '#0d9488',
      lang: 'es',
    }
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
  build: {
    transpile: [
      'lunr-languages/lunr.stemmer.support',
      'lunr-languages/lunr.es',
    ]
  },
  nitro: {
    prerender: {
      routes: ['/searcher.json']
    }
  }
})