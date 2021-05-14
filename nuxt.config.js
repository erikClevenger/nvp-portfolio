import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Erik Clevenger's Design Portfolio",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&family=Oxygen&display=swap',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
  },

  // Customized progress-bar color
  loading: { color: '#00a8d2' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/prismicLinks', ssr: false }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://prismic-nuxt.js.org/
    '@nuxtjs/prismic',
    // https://github.com/nuxt-community/style-resources-module#readme
    '@nuxtjs/style-resources',
    // https://image.nuxtjs.org/
    '@nuxt/image',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      default: 'light',
      themes: {
        dark: {
          primary: colors.cyan,
          secondary: colors.teal.base,
          tertiary: colors.purple.base,
          accent: colors.orange.lighten1,
          info: colors.teal.lighten1,
          warning: colors.amber.darken1,
          error: colors.red.darken2,
          success: colors.green.accent3,
        },
        light: {
          primary: colors.cyan,
          secondary: colors.teal.base,
          tertiary: colors.purple.base,
          accent: colors.orange.lighten1,
          info: colors.teal.lighten1,
          warning: colors.amber.darken1,
          error: colors.red.darken2,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Prismic module config (https://prismic.nuxtjs.org/)
  prismic: {
    endpoint: 'https://nuxtportfolio.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },

  // Style Resources config
  styleResources: {
    scss: ['~/assets/scss/styles.scss', '~/assets/scss/variables.scss'],
  },

  // Nuxt Image config
  image: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    },
  },

  generate: {
    fallback: '404.html',
  },
}
