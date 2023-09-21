// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      applicationServerUrl: process.env.APPLICATION_SERVER_URL,
    },
  },
  modules: ["nuxt-vitest"],
  devtools: { enabled: true },
});
