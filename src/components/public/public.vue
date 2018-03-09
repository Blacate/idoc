<template>
  <section class="public">
    <router-link :to="'/course/'+course._id" class="media" v-for="(course,index) in courses" :key="index">
      <figure>
        <img :src="course.qiniuPath" alt="" class="media-img">
        <figcaption class="media-title">{{course.courseName}}</figcaption>
      </figure>
    </router-link>
    <a class="media" style="visibility:hidden;" v-for="i in supplement" :key="i + courses.length"></a>
  </section>
</template>

<script>
import { API } from 'config'

export default {
  created () {
    this.$http.get(`${API}/search/courses?type=general`).then((res) => {
      let data = res.body
      this.courses = data.courses
      this.supplement = 4 - (this.courses.length + 4) % 5
    })
  },
  data () {
    return {
      courses: [],
      supplement: 0
    }
  }
}
</script>

<style lang="sass">
.public
  width: 1138px
  margin: 10px auto 100px
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  .media
    width: 180px
    height: 140px
    margin: 30px 5px
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
</style>
