<template>
  <div id="ForumAnswer">
    <!-- 顶栏 -->
    <div class="headLine">
      <span>发现新内容 点击查看</span>
      <i class="el-icon-loading"></i>
    </div>
    <!-- 新内容 -->
    <div class="cont">
      <div class="newCont">
        <!-- 每一条 -->
        <div class="li">
          <!-- 回答 -->
          <div class="answer common">
            <span class="Num">4</span>
            <span class="Text">回答</span>
          </div>
          <!-- 阅读 -->
          <div class="read common">
            <span class="Num">78</span>
            <span class="Text">阅读</span>
          </div>
          <!-- 问题信息 -->
          <div class="quesInfo">
            <!-- 问题标题 -->
            <span class="quesTit"></span>
            <div class="quesBtm">
              <span class="questioner">提问者: 苏宸</span>
              <span class="linkQues">链接问题: <span>IP-009</span></span>
            </div>
          </div>
        </div>
      </div>
      <!-- 广告 -->
      <div class="advertisement">
        <!-- 广告图片 -->
        <el-image
          class="banner"
          v-for="item in banner"
          :src="item"
          :key="item.index"
        ></el-image>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ForumAnswer",
    data () {
      return {
        banner: [
          'static/imgs/banner1.jpg',
          'static/imgs/banner2.jpg',
          'static/imgs/banner3.jpg',
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '~stylus/common.styl'

#ForumAnswer
  width 1400px
  height 900px
  border 1px solid black
  // 顶栏
  .headLine
    width 900px
    height 40px
    background-color rgb(189,221,232)
    center()
    margin 0 0 1rem 0
    cursor pointer
    border-radius 20px
    span
      margin-left 1rem
      color rgb(125,123,123)
    i
      margin-left 1rem
      font-size 26px
      color gray
      cursor pointer
  .cont
    width 100%
    flex-between()
    // 最新内容
    .newCont
      width 900px
      height 900px
      flex-around()
      flex-direction column
      .li
        width 100%
        height 80px
        border 1px solid black
        flex-between()
        .common
          width 60px
          height 60px
          flex-center()
          flex-direction column
          .Num
            color rgb(0,122,163)
          .Text

    // 广告
    .advertisement
      width 450px
      height 900px
      display flex
      flex-direction column
      .banner
        width 400px
        height 150px
        margin-bottom 3rem

</style>