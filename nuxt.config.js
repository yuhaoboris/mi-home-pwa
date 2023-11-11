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
    '~/assets/css/tailwind.css'
  ],

  modules: [
    '@vite-pwa/nuxt',
    '@nuxt/ui',
    'nuxt-icon'
  ],

  pwa: {
    manifest: {
      name: '米家App',
      short_name: '米家',
      description: '米家，开启智能生活',
      background_color: '#14b8a6',
      icons: [
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
