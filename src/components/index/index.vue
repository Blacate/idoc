<template>
  <div class="index">
      <v-slide-show></v-slide-show>
      <div class="main">
        <section class="hot">
          <h1 class="title"><span></span>热门文档</h1>
          <article class="content">
            <figure class="img"></figure>
            <div class="list">
              <table>
                <thead>
                  <tr><th>文档名称</th><th>下载次数</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>操作系统试题</td>
                    <td>1747</td>
                  </tr>
                  <tr>
                    <td>操作系统试题</td>
                    <td>1747</td>
                  </tr>
                  <tr>
                    <td>操作系统试题</td>
                    <td>1747</td>
                  </tr>
                  <tr>
                    <td>操作系统试题</td>
                    <td>1747</td>
                  </tr>
                  <tr>
                    <td>操作系统试题</td>
                    <td>1747</td>
                  </tr>
                  <tr>
                    <td>操作系统试题</td>
                    <td>1747</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </section>
        <section class="latest">
          <h1 class="title"><span class="hot-logo"></span>热门文档</h1>
          <article class="content">
            <figure class="img"></figure>
            <div class="list">
              <table>
                <thead>
                  <tr><th>文档名称</th><th>下载次数</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>操作系统试题</td>
                    <td>1747</td>
                  </tr>
                  <tr>
                    <td>操作系统试题</td>
                    <td>1747</td>
                  </tr>
                  <tr>
                    <td>操作系统试题</td>
                    <td>1747</td>
                  </tr>
                  <tr>
                    <td>操作系统试题</td>
                    <td>1747</td>
                  </tr>
                  <tr>
                    <td>操作系统试题</td>
                    <td>1747</td>
                  </tr>
                  <tr>
                    <td>操作系统试题</td>
                    <td>1747</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </section>
        <section class="public">
          <article class="content">
            <figure class="img"></figure>
            <div class="detail">
              <div class="media">
                <h1 class="media-title">公共课</h1>
                <p class="media-intro">公共课是指高等教育自学考试中任何专业或部分同类专业的学生都必须学习的课程</p>
                <div class="media-button">点击查看</div>
              </div>
            </div>
          </article>
        </section>
        <section class="professional">
          <article class="content">
            <div class="detail">
              <div class="media">
                <h1 class="media-title">公共课</h1>
                <p class="media-intro">公共课是指高等教育自学考试中任何专业或部分同类专业的学生都必须学习的课程</p>
                <div class="media-button">点击查看</div>
              </div>
            </div>
            <figure class="img"></figure>
          </article>
        </section>
      </div>
  </div>
</template>

<script>
import slideShow from "components/slideshow/slideshow.vue";

export default {
  components: {
    "v-slide-show": slideShow
  }
};
</script>

<style lang="sass">
.index
  .main
    width: 1280px
    margin: auto
    .hot,.latest
      margin: 30px auto 0
      .title
        font-size: 20px
        height: 64px
        line-height: 64px
      .content
        margin-left: 11px
        margin-top: 39px
        display: flex
        .img
          flex: 0 0 454px
          height: 327px
          background: yellow
        .list
          flex: 1 0 auto
    .public,.professional
      margin: 30px auto 60px
      .content
        margin-left: 11px
        display: flex
        .img
          flex: 0 0 526px
          height: 350px
          background: yellow
        .detail
          .media
            margin-top: 30px
            margin-left: 78px

</style>

