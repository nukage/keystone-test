<template>
  <div>
    <NuxtLayout>
      </NuxtLayout>
  </div>
</template>

<script setup>
// import { useTodoStore } from "~/store/index";

// const todoStore = useTodoStore();


const route = useRoute()
// const {data, error} = useFetch("http://jamstack.local/wp-json/wp/v2/posts")


</script>

<script>

export default {
  head() {
    return { 
      link: [ 
        {
          rel: 'stylesheet', href: "https://use.typekit.net/dmo2uqb.css",
      }
      ],
      script: [
        {
          src: 'https://kit.fontawesome.com/bbdd504845.js',
          crossorigin: 'anonymous'
        }
      ]
    }
  }
}

</script>