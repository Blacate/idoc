<template>
  <div class="index">
      <div class="main">
        <section class="hot">
          <h1 class="title"><img src="./hot-logo.png" class="hot-logo" alt="hot-logo">热门文档</h1>
          <article class="content">
            <figure class="img"><img src="./hot.jpg" alt="hot"  width="454" height="327"></figure>
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
          <h1 class="title"><img src="./latest-logo.png" class="latest-logo" />最新上传</h1>
          <article class="content">
            <figure class="img"><img src="./latest.jpg" alt="latest" width="454" height="327"></figure>
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
            <figure class="img"><img src="./public.jpg" alt="public" width="526" height="350"></figure>
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
            <figure class="img"><img src="./professional.jpg" alt="professional" width="526" height="350"></figure>
          </article>
        </section>
      </div>
  </div>
</template>

<script>

export default {}
</script>

<style lang="sass">
.index
  .main
    width: 1280px
    margin: auto
    .hot,.latest
      margin: 30px auto 0
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
          background: #f4f4f4
    .public,.professional
      margin: 30px auto 60px
      .content
        margin-left: 11px
        display: flex
        .img
          flex: 0 0 526px
          height: 350px
        .detail
          background: #f4f4f4
          .media
            margin-top: 30px
            margin-left: 78px
</style>

