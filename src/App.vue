<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import footer from './components/footer/footer.vue'

export default {
  name: 'app',
  components: {
    'v-header': header,
    'v-footer': footer
  }
}
</script>

<style>
</style>
