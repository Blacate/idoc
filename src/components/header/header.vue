<template>
  <header class="header">
    <div class="logo"><img src="./logo.png" alt="logo"></div>
    <nav class="nav">
        <ul class="menu">
            <li class="menu-item"><router-link to="/" class="link">首页</router-link></li>
            <li class="menu-item"><router-link to="/public" class="link">公共课</router-link></li>
            <li class="menu-item"><router-link to="/professional" class="link">专业课</router-link></li>
        </ul>
    </nav>
    <form class="search">
        <input type="text" class="search-item" @keyup.stop.enter="search" v-model="keywords" />
        <input type="text" style="display:none;" />
        <img src="./search.png" alt="search" class="search-button" @click="search">
    </form>
  </header>
</template>
<script>
export default {
  methods: {
    search () {
      this.$router.push({path: '/search', query: {q: this.keywords}})
    }
  },
  data () {
    return {
      keywords: ''
    }
  },
  watch: {
    '$route.path': function () {
      if (this.$route.path !== '/search') {
        this.keywords = ''
      }
    }
  }
}
</script>
<style lang="sass">
  $themeColor: #00a0e9
  .header
    height: 100px
    width: 1138px
    margin: 0 auto
    .logo
      display: inline-block
      margin-top: 35px
    .nav
      display: inline-block
      margin-top: 27px
      margin-left: 120px
      vertical-align: top
      .menu
        .menu-item
          width: 120px
          height: 60px
          display: inline-block
          margin-right: 35px
          background: white
          line-height: 60px
          text-align: center
          .link
            width: 100%
            height: 100%
            display: inline-block
            border-radius: 6px
            color: black
            font-size: 23.33px
            font-family: SimSun
            &:hover,&.router-link-exact-active
              background: $themeColor
              .link
                color: white
    .search
        width: 276px
        height: 38px
        float: right
        margin-top: 31px
        .search-item
          width: 100%
          height: 100%
          border: 2px solid gray
          border-radius: 4px
          float: left
        .search-button
          height: 25px
          margin-top: 8px
          margin-left: -31px
</style>

