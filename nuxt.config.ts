import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    baseURL: "/milk-dashboard/",
  },

  runtimeConfig: {
    piyoLogFeedUrl: "https://example.com/FIXME",
    public: {
      dailyTarget: 800,
      historyCount: 8,
      timeZone: "Asia/Tokyo",
    },
  },

  modules: ["@nuxt/eslint", "@nuxt/test-utils/module"],

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },
});
