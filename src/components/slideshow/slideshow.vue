<template>
  <div class="slideshow">
    <div class="slide">
      <div class="slide-group" ref="slideGroup" v-if="banners.length">
        <div class="slide-item"><a :href="banners[total - 1].bannerLink" class="slide-item-a"><img :src="banners[total - 1].bannerPic" :alt="banners[total - 1].bannerName"></a></div>
        <div class="slide-item" v-for="(banner, index) in banners" :key="index"><a :href="banner.bannerLink" class="slide-item-a"><img :src="banner.bannerPic" :alt="banner.bannerName" /></a></div>
        <div class="slide-item"><a :href="banners[0].bannerLink" class="slide-item-a"><img :src="banners[0].bannerPic" :alt="banners[0].bannerName"></a></div>
      </div>
    </div>
    <div class="dot">
      <div class="dot-item" v-for="dot in total" :key="dot" :class="{ dotItemActive: (now + total - 1) % total + 1 === dot}"></div>
    </div>
    <div class="slide-left"><img src="./slide-left.png" alt="" @click="last_pic"></div>
    <div class="slide-right"><img src="./slide-left.png" alt="" class="slide-right-img" @click="next_pic"></div>
  </div>
</template>

<script>
import { API } from 'config'

export default {
  data () {
    return {
      now: 1,
      total: 1,
      banners: {}
    }
  },
  methods: {
    _init_slide () {
      // 初始化，设置group宽度以及第一张显示的图片
      let el = this.$refs.slideGroup
      el.style.width = `${this.total * 1280}px`
      el.style.webkitTransform = `translate(-${this.now * 1280}px,0)`
      el.style.transform = `translate(-${this.now * 1280}px,0)`
      // 绑定transitionend事件，检查为最后一张或第0张图片
      el.addEventListener('transitionend', check)
      let self = this
      function check () {
        if (self.now === self.total + 1 || self.now === 0) {
          if (self.now === 0) {
            self.now = self.total
          } else {
            self.now = 1
          }
          el.style['transition-property'] = 'transform'
          el.style['transition-duration'] = '0ms'
          el.style.webkitTransform = `translate(-${self.now * 1280}px,0)`
          el.style.transform = `translate(-${self.now * 1280}px,0)`
        }
      }
    },
    next_pic () {
      let el = this.$refs.slideGroup
      this.now++
      el.style['transition-property'] = 'transform'
      el.style['transition-duration'] = '500ms'
      el.style.webkitTransform = `translate(-${this.now * 1280}px,0)`
      el.style.transform = `translate(-${this.now * 1280}px,0)`
    },
    last_pic () {
      let el = this.$refs.slideGroup
      this.now--
      el.style['transition-property'] = 'transform'
      el.style['transition-duration'] = '500ms'
      el.style.webkitTransform = `translate(-${this.now * 1280}px,0)`
      el.style.transform = `translate(-${this.now * 1280}px,0)`
    }
  },
  created () {
    this.$http.get(`${API}/banners`).then((response) => {
      this.banners = response.body.banners
      this.total = response.body.total
      this.$nextTick(() => {
        this._init_slide()
      })
    })
  }
}
</script>

<style lang="sass">
.slideshow
    width: 100%
    height: 500px
    position: relative
    .slide
      width: 1280px
      height: 500px
      margin: 0 auto
      display: block
      overflow: hidden
      .slide-group
        width: 3000px
        margin-top: 60px
        display: block
        white-space: nowrap
      .slide-item
        width: 1280px
        display: inline-block
        text-align: center
        vertical-align: middle
        .slide-item-a
          display: inline-block
    .dot
      position: absolute
      display: inline-block
      bottom: 15px
      left: 50%
      margin-right: -26px
      font-size: 0
      .dot-item
        width: 10px
        height: 10px
        display: inline-block
        border-radius: 5px
        background: #00a0e9
        &.dotItemActive
          width: 20px
        &:not(:last-child)
          margin-right: 6px
    .slide-left
      position: absolute
      display: inline-block
      left: 20px
      top: 50%
      margin-top: -19px
      cursor: pointer
    .slide-right
      position: absolute
      display: inline-block
      right: 20px
      top: 50%
      margin-top: -19px
      cursor: pointer
      .slide-right-img
        transform: rotate(180deg)
</style>
