import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: "English | %s",
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ],
      script: [
        {
          src: "https://code.responsivevoice.org/responsivevoice.js?key=Vk66Qo77",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@kevinmarrec/nuxt-pwa",
    "@nuxthq/studio",
  ],
  colorMode: {
    classSuffix: "",
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
      darkMode: "class",
    },
  },
  pwa: {
    manifest: {
      name: "English 2nd year",
      short_name: "English 2nd",
      theme_color: "#0d9488",
      lang: "es",
    },
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
    experimental: {
      search: true,
    },
  },
  compatibilityDate: "2024-09-10",
});
