export default defineNuxtConfig({
  experimental: {
    reactivityTransform: true,
  },
  app: {
    head: {
      script: [
        {
          defer: true,
          src: 'https://plausible.io/js/script.js',
          'data-domain': 'gaunt.me',
        },
      ],
    },
  },
  modules: [
    '@unocss/nuxt',
    '@nuxt-themes/tokens',
    '@nuxt/content',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
  ],
  unocss: {
    preflight: true,
  },
  pinceau: {
    configFileName: 'tokens.config',
  },
  image: {
    provider: 'vercel',
  },
  content: {
    highlight: {
      theme: 'dracula',
      preload: [
        'php',
      ],
    },
  },
})
