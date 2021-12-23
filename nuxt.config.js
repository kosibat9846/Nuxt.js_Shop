export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'matalshop-app3',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/chunk-6e330181.3ac0fe58.css',
    '@/assets/css/chunk-61d858f3.fa8260be.css',
    '@/assets/css/chunk-e73e6cfa.2ef35e05.css',
    '@/assets/css/chunk-ea2f5008.9a985b88.css',
    '@/assets/css/app.dd63dd34.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  axios: {
    baseURL: 'http://localhost:3000',
    proxyHeaders: false,
    credentials: false
  }
}
