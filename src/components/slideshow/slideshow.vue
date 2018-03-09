<template>
  <div class="slideshow">
    <div class="slide">
      <transition-group name="slide-banner" tag="ul" class="slide-group" ref="slideGroup" v-if="banners.length">
        <li class="slide-item" v-for="(banner,index) in banners" :key="banner._id"  :class="{hide:index == needToHide}">
          <a :href="banner.bannerLink" class="slide-item-a">
            <img :src="banner.bannerPic" :alt="banner.bannerName" />
          </a>
        </li>
      </transition-group>
      <div style="display:none" class="slide-banner-move"></div>
    </div>
    <div class="dot">
      <div class="dot-item" v-for="dot in total" :key="dot" :class="{ dotItemActive: dots[dot - 1]}"></div>
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
      total: 1,
      banners: [],
      needToHide: -1,
      dots: []
    }
  },
  methods: {
    last_pic: function () {
      this.needToHide = 0
      this.banners.unshift(this.banners.pop())
      this.dots.push(this.dots.shift())
    },
    next_pic: function () {
      this.needToHide = this.total - 1
      this.banners.push(this.banners.shift())
      this.dots.unshift(this.dots.pop())
    }
  },
  created () {
    this.$http.get(`${API}/banners`).then((response) => {
      this.banners = response.body.banners
      // 修改图片连接
      this.banners[0].bannerPic = 'https://pic.blacat.top/idoc.png'
      this.banners[1].bannerPic = 'https://pic.blacat.top/duohuo.png'
      this.banners[2].bannerPic = 'https://pic.blacat.top/study.png'
      this.total = response.body.total
      // 生成底部对应的点
      this.dots.length = this.total
      this.dots.fill(0)
      this.dots[0] = 1
      setInterval(() => {
        // this.next_pic()
      }, 5000)
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
      width: 1138px
      height: 500px
      position: absolute
      left: 50%
      margin-left: -569px
      display: block
      overflow: hidden
      .slide-group
        width: 3000px
        position: relative
        left: -1138px
        margin-top: 60px
        display: block
        white-space: nowrap
        .slide-item
          width: 1138px
          display: inline-block
          text-align: center
          vertical-align: middle
          .slide-item-a
            display: inline-block
          &.hide
            visibility: hidden
      .slide-banner-move
        transition: transform 1s
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
