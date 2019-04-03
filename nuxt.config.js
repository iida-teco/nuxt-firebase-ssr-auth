const pkg = require('./package')

const environment = process.env.NODE_ENV || 'development'
const fs = require('fs')
const envSet = JSON.parse(
  fs.readFileSync(`./config/${environment}.json`, 'utf8')
)

module.exports = {
  mode: 'universal',
  srcDir: 'app',
  buildDir: 'functions/nuxt',

  env: envSet,

  watchers: {
    webpack: {
      poll: true
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/auth', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['cookie-universal-nuxt', { parseJSON: false }]
  ],

  /*
  ** Build configuration
  */
  build: {
    publicPath: '/assets/',
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
