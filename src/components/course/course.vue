<template>
  <section class="course">
    <h1 class="title">{{course.courseName}}</h1>
    <div class="main" v-if="docs.length">
      <a class="media" v-for="(doc,index) in docs" :key="index" :href="'https://idoc.api.blacat.top/api/v1/download/'+ doc._id">
        <figure>
          <img src="./doc1.jpg" alt="" class="media-img">
          <figcaption class="media-title">{{doc.title}}</figcaption>
        </figure>
      </a>
      <a class="media" style="visibility:hidden;" v-for="i in supplement" :key="i + docs.length"></a>
    </div>
    <p class="tip" v-else>没有找到任何文档！</p>
  </section>
</template>

<script>
import {API} from 'config'

export default {
  data () {
    return {
      docs: [],
      course: {},
      supplement: 0
    }
  },
  created () {
    this.$http.get(`${API}/courses/${this.$route.params.courseId}/docs`).then((res) => {
      this.docs = res.body.docs
      this.course = res.body.course
      this.supplement = 4 - (this.docs.length + 4) % 5
    })
  }
}
</script>

<style lang="sass">
.course
  width: 1138px
  margin: 10px auto 100px
  .title
    margin-left: 28px
    font-family: "Microsoft YaHei"
    font-size: 30px
    font-weight: 700
  .main
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    .media
      width: 200px
      margin: 30px 28px
      overflow: hidden
      box-shadow: 2px 5px 5px 0 rgba(100,146,188,.4)
      border-radius: 2px
      cursor: pointer
      .media-img
        transform: translateX(-100px)
      .media-title
        margin-top: -2px
        text-align: center
        line-height: 20px
        color: black
        font-family: STHeiti
        padding: 5px
      &:hover
        transform: translateY(-2px)
        transition: transform .4s
  .tip
    margin-left: 28px
    margin-top: 30px
</style>
