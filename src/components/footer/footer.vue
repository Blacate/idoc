<template>
  <footer class="footer">
    <div class="inner">
      <div>
        <ul class="about">
          <li class="title">关于多火</li>
          <li v-for="(link,index) in about" :key="index"><a :href="link.link" class="link">{{link.title}}</a></li>
        </ul>
      </div>
      <div>
        <ul class="friend">
          <li class="title">友情链接</li>
          <li v-for="(link,index) in friend" :key="index"><a :href="link.link" class="link">{{link.title}}</a></li>
          <li><a href="mailto:reply@duohuo.org" class="link">反馈邮箱</a></li>
        </ul>
      </div>
      <div>
        <ul class="focus">
          <li class="title">关注我们</li>
          <li v-for="(link,index) in focus" :key="index"><a :href="link.link" class="link">{{link.title}}</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import {API} from 'config'
export default {
  data () {
    return {
      about: [],
      friend: [],
      focus: []
    }
  },
  created () {
    this.$http.get(`${API}/links`).then((res) => {
      let links = res.body.links
      this.focus = links.filter((link) => {
        return link.category === 'duohuo'
      })
      this.friend = links.filter((link) => {
        return link.category === 'friendship'
      })
      this.about = links.filter((link) => {
        return link.category === 'about'
      })
    })
  }
}
</script>

<style lang="sass">
.footer
  width: 100%
  background: #333333
  overflow: auto
  .inner
    width: 1280px
    margin: 40px auto 50px
    display: flex
    &>div
      flex: 1 0 auto
    .about,.friend,.focus
      margin-left: 100px
      &>li:not(:first-child)
        font-family: NSimSun
        font-size: 26.6px
        margin-top: 35px
      .title
        font-weight: 700
        font-size: 28.17px
        font-family: NSimSun
        color: white
      .link
        color: #ababab
</style>
