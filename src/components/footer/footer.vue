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
  height: 250px
  background: #444749
  overflow: auto
  .inner
    width: 1280px
    margin: 20px auto
    display: flex
    &>div
      flex: 1 0 auto
  .title
    font-weight: 700

</style>
