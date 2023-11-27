// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  experimental: {
    payloadExtraction: true,
    inlineSSRStyles: false
  },
  vue: {
    defineModel: true,
    propsDestructure: true
  },
  vite: {
    vue: {
      customElement: true
    },
    vueJsx: {
      mergeProps: true
    }
  }
})
