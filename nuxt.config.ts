import { defineNuxtConfig } from 'nuxt'



export default defineNuxtConfig({
    // ssr: true,
    buildModules: ["@nuxtjs/svg"],
    css: [
        "~/assets/css/tailwind.css",
        
    ],
    build:{
        postcss: {
            postcssOptions:{
                plugins: {
                    'tailwindcss/nesting':{},
                    'tailwindcss':{},
                    // 'postcss-nested': {},
                    // 'postcss-nested-ancestors': {},
                    'autoprefixer': {},
                }
            }
        }
    },
    modules: ['@pinia/nuxt'],
    // nitro: {
    //     preset: 'nitro-prerender',
    //   },
    //   target: 'static'


})
