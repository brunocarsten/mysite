// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  sourcemap: false,
  devtools: { enabled: true },

  modules: ['nuxt-og-image', '@nuxt/fonts', '@nuxt/fonts'],

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-br'
      },
      charset: 'utf-8',
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
      ],
      link: [
        {
          rel: 'prefetch',
          as: 'script',
          href: `https://www.googletagmanager.com/gtag/js?id=${process.env.NUXT_TAG_MANAGER_ID}`
        }
      ],
      script: [
        {
          type: 'text/javascript',
          defer: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NUXT_TAG_MANAGER_ID}`
        },
        {
          type: 'text/javascript',
          defer: true,
          src: '/gtag.js'
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      TAG_MANAGER_ID: process.env.NUXT_TAG_MANAGER_ID
    }
  },

  site: {
    url: 'https://brunocarstenaraujo.com.br/'
  },

  routeRules: {
    '/**': { prerender: true }
  },

  experimental: {
    componentIslands: {
      selectiveClient: true
    }
  },

  nitro: {
    static: true
  }
})
