// https://nuxt.com/docs/api/configuration/nuxt-config
const urlProd = 'https://test.ru'
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  ssr: true,

  devtools: { enabled: false },

  app: {
    head: {
      titleTemplate: '%s',
      htmlAttrs: {
        lang: 'ru'
      },
      title: 'Intelligent Systems Test Task',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow' },

        { name: 'description', content: 'Intelligent Systems Test Task' },
        { property: 'og:title', content: 'Intelligent Systems Test Task' },
        { property: 'og:description', content: 'Intelligent Systems Test Task' },
        { property: 'og:site_name', content: 'Intelligent Systems Test Task' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: `${urlProd}/share.jpg` },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: '1446' },
        { property: 'og:image:height', content: '936' },
        { property: 'og:url', content: urlProd },

        { name: 'apple-mobile-web-app-title', content: 'Intelligent Systems Test Task' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon/favicon.ico', },
        { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' }
      ]
    }
  },

  css: ['@/assets/styles/global.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/mixins.scss" as *;'
        }
      }
    }
  }
})
