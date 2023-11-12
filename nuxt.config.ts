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
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' }
      ]
    }
  },

  devtools: {
    enabled: process.env.NODE_ENV === 'development'
  },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.css'
  ],

  modules: [
    '@vite-pwa/nuxt',
    '@nuxt/ui',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/robots'
  ],

  pwa: {
    manifest: {
      name: 'UEC Smart Plug',
      short_name: 'UEC Plug',
      description: 'UEC Smart Plug，隨時隨地看護用電安全',
      background_color: '#28A7E1',
      icons: [
        {
          src: 'android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg}']
    },
    useCredentials: true,
    devOptions: {
      enabled: process.env.NODE_ENV === 'development'
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})