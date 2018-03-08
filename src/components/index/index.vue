<template>
  <div class="index">
      <div class="main">
        <section class="hot">
          <h1 class="title"><img src="./hot-logo.png" class="hot-logo" alt="hot-logo">热门文档</h1>
          <article class="content">
            <figure class="img"><img src="./hot.jpg" alt="hot"  width="454" height="327"></figure>
            <div class="list">
              <table class="table">
                <thead class="thead">
                  <tr><th class="doc-name">&nbsp;文档名称</th><th class="download-times">下载次数</th></tr>
                </thead>
                <tbody class="tbody">
                  <tr v-for="(doc,index) in hotest" :key="index">
                    <td class="doc-title"><img src="./arrow.png" alt="arrow">&nbsp;<a :href="doc.link" class="link">{{doc.title}}</a> </td>
                    <td class="times">{{doc.downloads}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </section>
        <section class="latest">
          <h1 class="title"><img src="./latest-logo.png" class="latest-logo" />最新上传</h1>
          <article class="content">
            <figure class="img"><img src="./latest.jpg" alt="latest" width="454" height="327"></figure>
            <div class="list">
              <table class="table">
                <thead class="thead">
                  <tr><th class="doc-name">&nbsp;文档名称</th><th class="upload-time">上传时间</th></tr>
                </thead>
                <tbody class="tbody">
                  <tr v-for="(doc,index) in latest" :key="index">
                    <td class="doc-title"><img src="./arrow.png" alt="arrow">&nbsp;<a :href="doc.link" class="link">{{doc.title}}</a> </td>
                    <td>{{doc.updateTime | handleTime | timeParse}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </section>
        <section class="public-index">
          <article class="content">
            <figure class="img"><img src="./public.jpg" alt="public" width="526" height="350"></figure>
            <div class="detail">
              <div class="media">
                <h1 class="media-title">公共课</h1>
                <p class="media-intro">公共课是指高等教育自学考试中任何专业或部分同类专业的学生都必须学习的课程。</p>
                <div class="media-button"><router-link to="/public">点击查看</router-link></div>
              </div>
            </div>
          </article>
        </section>
        <section class="professional-index">
          <article class="content">
            <div class="detail">
              <div class="media">
                <h1 class="media-title">专业课</h1>
                <p class="media-intro">公共课是指高等教育自学考试中任何专业或部分同类专业的学生都必须学习的课程。</p>
                <div class="media-button"><router-link to="/professional">点击查看</router-link></div>
              </div>
            </div>
            <figure class="img"><img src="./professional.jpg" alt="professional" width="526" height="350"></figure>
          </article>
        </section>
      </div>
  </div>
</template>

<script>
import { API } from 'config'
import moment from 'moment'

export default {
  data () {
    return {
      latest: [],
      hotest: []
    }
  },
  created () {
    this.$http.get(`${API}/search/docs?sort=downloads`).then((res) => {
      this.hotest = res.body.docs
    })
    this.$http.get(`${API}/search/docs?sort=updateTime`).then((res) => {
      this.latest = res.body.docs
    })
  },
  filters: {
    handleTime: (value) => {
      return moment(value).format('x') * 1000
    }
  }
}
</script>

<style lang="sass">
.index
  .main
    width: 1280px
    margin: auto
    .hot,.latest
      margin: 50px auto 0
      .title
        font-size: 40px
        height: 64px
        line-height: 64px
        font-family: NSimSun
        .hot-logo,.latest-logo
          width: 63px
          height: 63px
          vertical-align: bottom
          margin-right: 20px
      .content
        margin-left: 11px
        margin-top: 39px
        display: flex
        .img
          flex: 0 0 454px
          height: 327px
        .list
          flex: 1 0 auto
          .table
            margin-left: 35px
            width: 100%
            .thead
              text-align: left
              font-size: 30px
              font-family: NSimSun
              .doc-name
                padding-left: 12px
                font-weight: 700
                padding-bottom: 10px
              .download-times
                font-weight: 700
                padding-bottom: 10px
              .upload-time
                font-weight: 700
            .tbody
              font-family: NSimSun
              font-size: 23.38px
              line-height: 48px
              .link
                color: black
              .times
                padding-left: 36px
              .doc-title
                width: 660px
                overflow: hidden
                white-space: nowrap
    .public-index,.professional-index
      margin: 60px auto 60px
      .content
        margin-left: 11px
        display: flex
        .img
          flex: 0 0 526px
          height: 350px
        .detail
          background: #f4f4f4
          flex: 1 0 auto
          .media
            margin-top: 30px
            margin-left: 100px
            .media-title
              font-size: 30px
              font-weight: 600
              font-family: NSimSun
            .media-intro
              width: 455px
              margin-top: 15px
              font-size: 23.33px
              font-family: NSimSun
              line-height: 40px
            .media-button
              width: 126px
              height: 46px
              margin-top: 70px
              border: 2px solid #c4c4c4
              border-radius: 8px
              font-size: 21.66px
              font-family: NSimSun
              text-align: center
              line-height: 46px
</style>

