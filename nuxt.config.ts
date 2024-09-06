// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/image'],
 
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900], // Include all weights
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900], // Include all weights
    },
    display: 'swap', // Optional: improves font loading performance
  },
  css: ['~/assets/css/tailwind.css'],

  pages: true,
  typescript: {
    shim: false
  },
  components: [{
    path: '~/components',
    pathPrefix: false
  }]
})