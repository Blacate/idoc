<template>
  <footer class="footer">
    <div class="inner">
      <div>
        <ul class="about">
          <li class="title">关于多火</li>
          <li>关于idocument</li>
          <li>加入我们</li>
          <li>广告联系</li>
        </ul>
      </div>
      <div>
        <ul class="friend">
          <li class="title">关于多火</li>
          <li>关于idocument</li>
          <li>加入我们</li>
          <li>广告联系</li>
        </ul>
      </div>
      <div>
        <ul class="focus">
          <li class="title">关于多火</li>
          <li>关于idocument</li>
          <li>加入我们</li>
          <li>广告联系</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="sass">
.footer
  width: 100%
  height: 289px
  background: #333333
  overflow: auto
  .inner
    width: 1280px
    margin: 40px auto 0
    display: flex
    &>div
      flex: 1 0 auto
    .about,.friend,.focus
      &>li:not(:first-child)
        color: #ababab
        font-family: NSimSun
        font-size: 26.6px
        margin-top: 35px
      .title
        font-weight: 700
        font-size: 28.17px
        font-family: NSimSun
        color: white
</style>
