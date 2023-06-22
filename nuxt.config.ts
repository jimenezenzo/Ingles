// https://nuxt.com/docs/api/configuration/nuxt-config
import { type Post } from './types';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"]
})