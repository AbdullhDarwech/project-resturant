// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  
  experimental: {
    scanPageMeta: 'after-resolve',
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    normalizeComponentNames: false,
    spaLoadingTemplateLocation: 'within',
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  },
  
  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },
  css: ["./assets/css/tailwind.css"],   
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'vuetify-nuxt-module'
  ],
  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/my-icons'
      },
    ],
  },
  googleFonts: {
   families:{
    Montserrat: true
   }

  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap',
          
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lobster&display=swap'
        }
      ]
   
    }
  }

  
})