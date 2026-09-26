export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    baseURL: "/milk-dashboard/",
  },

  runtimeConfig: {
    dailyTarget: 800,
    piyoLogFeedUrl: "https://example.com/FIXME",
    public: {
      timeZone: "Asia/Tokyo",
    },
  },

  modules: ["@nuxt/test-utils/module", "@nuxtjs/tailwindcss"],
});
