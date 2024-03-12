import { prerender } from 'nitropack'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['nuxt-og-image'],

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  app: {
    head: {
      title: 'Bruno Carsten de Araújo',
      meta: [
        {
          hid: 'og:locale',
          name: 'og:locale',
          content: 'pt_br'
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'Bruno Carsten de Araújo'
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://brunocarstenaraujo.com.br'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Bruno é um desenvolvedor de software que cria produtos acessiveis e experiências digitais na web.'
        }
      ]
    }
  },

  routeRules: {
    '/**': { prerender: true }
  }
})
