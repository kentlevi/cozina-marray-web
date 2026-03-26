// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  experimental: {
    appManifest: process.env.NODE_ENV === 'production',
    payloadExtraction: process.env.NODE_ENV === 'production',
  },
  nitro: {
    prerender: {
      routes: ['/', '/about', '/menu', '/contacts'],
    },
  },
  app: {
    head: {
      title: 'Cozina de Marray | Premium Grill & Bar',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preload', as: 'image', href: '/videos/cozina-de-marray/video-hero-poster.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@300;400;500;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
})