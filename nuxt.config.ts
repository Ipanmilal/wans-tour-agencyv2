export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.css',
    "assets/css/style.css",
    "assets/css/bootstrap.min.css",
    "assets/animate/animate.css",
    "assets/animate/animate.min.css",
  ],

  runtimeConfig: {
    public: {
      apiUrl:'https://mock-api.binaryboxtuts.com',
      apiKey:'put_the_api_key_here'
    }
  },
  appConfig: {
    apikey: process.env.SUPABASE_API_KEYS,
    baseurl: process.env.SUPABASE_URL,
    secretkey: process.env.SUPABASE_SECRET_KEYS
  },
  modules: ["@pinia/nuxt"],
  app: {
    head: {
      title: "WTA",
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { charset: "utf-8" },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js' },
        // {
        //   src: 'https://kit.fontawesome.com/27ed9d2a8a.js',
        //   crossorigin: 'anonymous',
        //   defer: true
        // }
      ],
      link: [
        // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css' },
        {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'},
        
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
        },
        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css",
        // },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        }
      ],
    }
    
  },
})