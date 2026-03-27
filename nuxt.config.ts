// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    prerender: {
      routes: ['/', '/about', '/menu', '/contacts'],
      crawlLinks: true
    }
  },
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  experimental: {
    appManifest: false,
    payloadExtraction: false,
  },
  app: {
    head: {
      title: 'Cozina de Marray | Premium Grill & Bar',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
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