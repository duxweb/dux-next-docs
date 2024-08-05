// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  compatibilityDate: '2024-07-06',
  mdc: {
    highlight: {
      langs: ['php', 'mermaid', 'typescript', 'tsx', 'http']
    }
  }
});