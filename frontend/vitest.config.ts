import { defineVitestConfig } from "nuxt-vitest/config";

export default defineVitestConfig({
  plugins: [],

  test: {
    include: ["**/*.{test,spec,steps}.?(c|m)[jt]s?(x)"],
    // environment: require("@happy-dom/jest-environment"),
    environment: "nuxt",
  },
});
