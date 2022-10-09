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
  ],

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
      'Architects Daughter': true,
      // or:
      // Lato: [100, 300],
      // Raleway: {
      //   wght: [100, 400],
      //   ital: [100]
      // },
    },
  },
}
