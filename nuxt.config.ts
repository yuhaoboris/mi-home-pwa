// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'UEC Smart Plug',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      meta: [
        { name: 'description', content: 'UEC Smart Plug，隨時隨地看護用電安全' },
        { name: 'keywords', content: '物聯網,智慧插座' },
        { name: 'theme-color', content: '#28A7E1' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'icon', sizes: '64x64', href: '/pwa-64x64.png' },
        { rel: 'icon', sizes: '192x192', href: '/pwa-192x192.png' },
        { rel: 'icon', sizes: '512x512', href: '/pwa-512x512.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-180x180.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ]
    }
  },

  devtools: {
    enabled: true
  },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.css'
  ],

  modules: [
    '@nuxt/ui',
    'nuxt-icon',
    '@nuxt/image'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})