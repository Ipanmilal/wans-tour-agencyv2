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
})