// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "assets/scss/themes/dark/app-dark.scss",
    "assets/scss/app.scss",
    "assets/scss/iconly.scss",
  ],
  modules: [
    '@pinia/nuxt',    
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    '@sidebase/nuxt-auth'
  ],
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
    githubId: process.env.NUXT_GITHUB_ID,
    githubSecret: process.env.NUXT_GITHUB_SECRET,
    googleId: process.env.NUXT_GOOGLE_ID,
    googleSecret: process.env.NUXT_GOOGLE_SECRET,
  },
  plugins: [
    { src: '~/plugins/bootstrap.client', mode: 'client' },
  ],
  colorMode: {
    classPrefix: 'theme-',
    classSuffix: ''
  },
  googleFonts: {
    families: {
      'Nunito': true,
    }
  }
})
