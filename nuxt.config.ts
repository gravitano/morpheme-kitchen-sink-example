// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@morpheme/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],

  typescript: {
    shim: false,
  },

  morpheme: {
    theme: 'morpheme',
    sass: true,
    darkMode: true,
  },

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.scss'],

  colorMode: {
    classSuffix: '',
  },

  vite: {
    vue: {
      script: {
        propsDestructure: true,
        defineModel: true,
      },
    },
    optimizeDeps: {
      include: ['quill-delta', 'quill'],
    },
  },

  experimental: {
    viewTransition: true
  }
});
