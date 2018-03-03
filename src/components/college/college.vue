<template>
  <section class="college">
    <router-link :to="'/course/'+course._id" class="media" v-for="(course,index) in courses" :key="index">
      <figure>
        <img :src="course.qiniuPath" alt="" class="media-img">
        <figcaption class="media-title">{{course.courseName}}</figcaption>
      </figure>
    </router-link>
  </section>
</template>

<script>
import { API } from 'config'

export default {
  created () {
    this.$http.get(`${API}/colleges/${this.$route.params.collegeId}/courses/docs`).then((res) => {
      let data = res.body
      this.courses = data.courses
    })
  },
  data () {
    return {
      courses: []
    }
  }
}
</script>

<style lang="sass">
.college
  width: 1280px
  margin: 10px auto 100px
  display: flex
  flex-wrap: wrap
  .media
    width: 180px
    height: 140px
    margin: 30px 38px
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
