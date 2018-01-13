<template>
  <div id="app">
    <v-header></v-header>
    <v-slide-show></v-slide-show>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from 'components/header/header.vue'
import footer from 'components/footer/footer.vue'
import slideShow from 'components/slideshow/slideshow.vue'

export default {
  name: 'app',
  components: {
    'v-header': header,
    'v-footer': footer,
    'v-slide-show': slideShow
  }
}
</script>

<style>
</style>
