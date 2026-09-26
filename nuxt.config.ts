export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  runtimeConfig: {
    dailyTarget: 800,
    piyoLogFeedUrl: "https://example.com/FIXME",
    public: {
      timeZone: "Asia/Tokyo",
    },
  },

  modules: ["@nuxtjs/tailwindcss"],
});
