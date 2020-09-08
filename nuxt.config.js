require("dotenv").config();

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Ajim portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Global CSS
   */
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "~/node_modules/highlight.js/styles/atom-one-dark.css"
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~/plugins/markdownit",
    "~plugins/contentful",
    "~plugins/font-awesome"
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/dotenv",
    "@nuxtjs/markdownit",
    "@nuxtjs/pwa",
    "nuxt-fontawesome"
  ],

  fontawesome: {
    component: "fa"
  },

  env: {
    // contentful
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },

  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: "work"
        }),
        client.getEntries({
          content_type: "category"
        }),
        client.getEntries({
          content_type: "tag"
        })
      ]).then(([works, categories, tags]) => {
        return [
          ...works.items.map(work => `work/${work.fields.slug}`),
          ...categories.items.map(
            category => `category/${category.fields.slug}`
          ),
          ...tags.items.map(tag => `tag/${tag.sys.id}`)
        ];
      });
    }
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
