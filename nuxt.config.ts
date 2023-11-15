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
      // link: [
      //   { rel: 'icon', href: '/favicon.ico' },
      //   { rel: 'icon', sizes: '64x64', href: '/pwa-64x64.png' },
      //   { rel: 'icon', sizes: '192x192', href: '/pwa-192x192.png' },
      //   { rel: 'icon', sizes: '512x512', href: '/pwa-512x512.png' },
      //   { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-180x180.png' },
      //   { rel: 'manifest', href: '/manifest.webmanifest' }
      // ]
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
    '@nuxt/image',
    '@vite-pwa/nuxt'
  ],

  pwa: {
    strategies: 'injectManifest',
    // registerType: 'autoUpdate',
    srcDir: './',
    filename: 'sw.js',
    scope: '/',
    manifest: {
      name: 'UEC Smart Plug',
      short_name: 'UEC Plug',
      description: 'UEC Smart Plug，隨時隨地看護用電安全',
      background_color: '#28A7E1',
      theme_color: '#28A7E1',
      display: 'standalone',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    },
    // workbox: {
    //   navigateFallback: null,
    //   globPatterns: ['*/**.{js,css,html,png,jpg,svg,ico}']
    // },
    // client: {
    //   installPrompt: true
    // },
    // periodicSyncForUpdates: 3600,
    devOptions: {
      enabled: true,
      type: 'module',
      navigateFallbackAllowlist: [/^\/$/]
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})