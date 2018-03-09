<template>
  <section class="professional">
    <div class="menu-wrapper">
      <ul>
        <li class="menu-item" v-for="(college,index) in colleges" :class="{selected:selectedId === college._id}" :key="index" @click="select(college._id)">{{college.collegeName}}</li>
      </ul>
    </div>
    <div class="content-wrapper">
      <div class="content" v-if="courses.length">
        <router-link :to="'/course/'+course._id" class="media" v-for="(course,index) in courses" :key="index">
          <figure>
            <img :src="course.qiniuPath" alt="" class="media-img">
            <figcaption class="media-title">{{course.courseName}}</figcaption>
          </figure>
        </router-link>
        <a class="media hide" v-for="count in seize" :key="count + courses.length"></a>
      </div>
      <p class="content" v-else>没有相关文档！</p>
    </div>
  </section>
</template>

<script>
import {API} from 'config'

export default {
  data () {
    return {
      colleges: [],
      selectedId: '',
      courses: [],
      seize: 0
    }
  },
  created () {
    this.$http.get(`${API}/colleges`).then((res) => {
      this.colleges = res.body.colleges
      this.selectedId = this.colleges[0]._id
      this.notfirstload = 0
    })
  },
  watch: {
    selectedId: function () {
      this.$http.get(`${API}/colleges/${this.selectedId}/courses/docs`).then((res) => {
        this.courses = res.body.courses
        this.seize = 3 - ((this.courses.length + 2) % 3) - 1
        if (this.notfirstload) {
          this.slowToTop()
        }
        this.notfirstload ++
      })
    }
  },
  methods: {
    select (id) {
      this.selectedId = id
    },
    slowToTop () {
      let totop = window.scrollY
      const TARGET = 600
      const INTERVAL = 50
      let timer = setInterval(() => {
        totop = window.scrollY
        if (totop - TARGET > INTERVAL) {
          window.scrollTo(0, totop - INTERVAL)
        } else if (TARGET - totop > INTERVAL) {
          window.scrollTo(0, totop + INTERVAL)
        } else {
          window.scrollTo(0, TARGET)
          clearInterval(timer)
        }
      }, 20)
    }
  }
}
</script>

<style lang="sass">
.professional
  width: 1138px
  margin: 10px auto 100px
  display: flex
  align-items: stretch
  .menu-wrapper
    flex: 0 0 288px
    .menu-item
      width: 288px
      height: 100px
      margin-top: 3px
      text-align: center
      overflow: hidden
      line-height: 100px
      font-size: 30px
      font-family: SimSun
      font-weight: 500
      background: #f7f7f5
      color: black
      &.selected,&:hover
        background: #009fe9
  .content-wrapper
    margin-top: 3px
    margin-left: 8px
    flex: 1 0 auto
    background: #f7f7f5
    .content
      width: 838px
      margin-top: 30px
      display: flex
      flex-wrap: wrap
      justify-content: space-around
      .media
        width: 180px
        height: 140px
        margin: 30px 40px
        box-shadow: 2px 5px 5px 0 rgba(100,146,188,.3)
        .media-img
          width: 180px
          height: 110px
          filter: grayscale(30%)
        .media-title
          margin-top: -2px
          font-family: PingFangSC-Regular
          text-align: center
          line-height: 30px
          color: black
        &:hover
          transform: translate(0,2px)
          transition: transform .2s
        &.hide
          visibility: hidden
</style>
