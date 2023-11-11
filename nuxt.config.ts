// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
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
    '@vite-pwa/nuxt',
    '@nuxt/ui',
    'nuxt-icon',
    '@nuxt/image'
  ],

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'UEC Smart Plug',
      short_name: 'UEC Plug',
      description: 'UEC Smart Plug，隨時隨地看護用電安全',
      background_color: '#28A7E1',
      icons: [
        {
          src: 'icons/pwa-128x128.png',
          sizes: '128x128',
          type: 'image/png'
        },
        {
          src: 'icons/pwa-144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: 'icons/pwa-152x152.png',
          sizes: '152x152',
          type: 'image/png'
        },
        {
          src: 'icons/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icons/pwa-256x256.png',
          sizes: '256x256',
          type: 'image/png'
        },
        {
          src: 'icons/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      clientsClaim: true,
      skipWaiting: true,
      navigateFallback: '/'
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})