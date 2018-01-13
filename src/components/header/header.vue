<template>
  <header class="header">
      <span class="logo">iDocument</span>
      <nav class="nav">
          <ul class="menu">
              <li class="menu-item">首页</li>
              <li class="menu-item">公共课</li>
              <li class="menu-item">专业课</li>
          </ul>
      </nav>
      <form class="search">
          <input type="text" class="search-item" />
          <input type="hidden" />
          <span class="search-button">+</span>
      </form>
  </header>
</template>
<script>
export default {}
</script>
<style lang="sass">
    $themeColor: #87CEFA
    .header 
        height: 100px
        width: 1280px
        margin: 0 auto
        .logo 
            height: 100px
            line-height: 100px
            font-size: 60px
            color: $themeColor        
        .nav 
            display: inline-block
            margin-top: 27px
            margin-left: 100px
            .menu
                .menu-item 
                    width: 120px
                    height: 60px
                    display: inline-block
                    margin-right: 47px
                    border-radius: 6px
                    background: white
                    color: black
                    font-size: 30px
                    line-height: 60px
                    text-align: center
                    &:hover 
                        background: $themeColor
                        color: white
        .search
            width: 276px
            height: 38px
            float: right
            margin-top: 31px
            border: 2px solid gray
            border-radius: 4px
            .search-item
                width: 100%
                height: 100%
                float: left
            .search-button
                width: 30px
                height: 40px
                float: right
                margin-left: -41px
                margin-right: 11px
                line-height: 40px
</style>

