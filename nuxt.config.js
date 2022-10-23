export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jaco',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
    ]
  },

  router: {
    extendRoutes(routes) {
      routes.push({
        path: '/',
        component: 'pages/welcome/_index.vue'
      })
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      { path: '~/components/direct-chat', extensions: ['vue'] },
      { path: '~/components/home-top-bar', extensions: ['vue'] },
      { path: '~/components/server-list', extensions: ['vue'] },
      { path: '~/components/user-list', extensions: ['vue'] },
      { path: '~/components/message', extensions: ['vue'] },
      { path: '~/components/alerts/handling', extensions: ['vue'] },
      { path: '~/components/profile', extensions: ['vue'] },
      { path: '~/components/friend', extensions: ['vue'] },
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseUrl: 'http://localhost:8000/api/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  googleFonts: {
    families: {
      'Architects Daughter': true
    },
  },
}
