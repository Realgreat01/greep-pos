// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg", href: "/greep.svg" }],
    },
  },
  spaLoadingTemplate: true,
  css: ["~/assets/index.scss", "~/assets/main.css"],
  colorMode: {
    preference: "light",
  },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss"],
  compatibilityDate: "2024-11-17",
});