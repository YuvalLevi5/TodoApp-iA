<template>
  <app-header />
  <router-view />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import appHeader from './components/app-header.vue';
export default {
  created() {
  },
  components: {
    appHeader,
  },
}
</script>
