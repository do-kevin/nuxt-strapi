// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      applicationServerUrl: process.env.APPLICATION_SERVER_URL,
    },
  },
  routeRules: {
    "/": {
      ssr: true,
    },
    "/[lang]/**": {
      swr: true,
    },
  },
  modules: ["nuxt-vitest"],
  devtools: { enabled: true },
});
