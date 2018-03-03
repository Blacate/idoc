<template>
  <section class="professional">
    <div class="main">
      <router-link :to="'/professional/college/'+ college._id" class="media" v-for="(college,index) in colleges" :key="index">
        <figure><img  alt="" class="media-img"></figure>
        <figcaption>{{college.collegeName}}</figcaption>
      </router-link>
    </div>
  </section>
</template>

<script>
import {API} from 'config'

export default {
  data () {
    return {
      colleges: []
    }
  },
  created () {
    this.$http.get(`${API}/colleges`).then((res) => {
      this.colleges = res.body.colleges
      console.log(this.colleges)
    })
  }
}
</script>

<style lang="sass">
.professional
  width: 1280px
  margin: 10px auto 100px
  display: flex
  .menu-wrapper
    flex: 0 0 288px
    .menu-title
      width: 288px
      height: 100px
      line-height: 100px
      text-align: center
      font-size: 33.33px
      font-family: SimSun
      font-weight: 700
      background: #f7f7f5
      color: black
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
      &.selected
        background: #009fe9
  .content-wrapper
    flex 1 0 auto
</style>
