<template>
  <div>
    <transition-group tag="ul" name="test">
      <li v-for="i in all" :key="i">{{i}}</li>
    </transition-group>
    <button @click="next">next</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      all: [1,2,3,4,5]
    }
  },
  methods: {
    next () {
      this.all.unshift(this.all.pop())
    }
  }
}
</script>

<style lang='scss'>
.test-move {
  transition: transform 1s
}
</style>
