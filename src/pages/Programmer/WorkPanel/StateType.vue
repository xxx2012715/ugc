<template>
  <div id="WorkWelcome">
    <!-- 工作面板 -->
    <div class="nav">
      <span class="iconfont home">&#xe60b;</span>
      <span class="depart">/</span>
      <span class="panelTit">工作面板</span>
    </div>



    <!-- 三个小栏 -->
    <div class="threeShow">
      <div class="await common">
        <div class="commonLf">
          <span class="number">7</span>
          <span>待开发</span>
        </div>
        <span class="iconfont spe">&#xe654;</span>
      </div>
      <div class="developing common">
        <div class="commonLf">
          <span class="number">3</span>
          <span>开发中</span>
        </div>
        <span class="iconfont">&#xe60c;</span>
      </div>
      <div class="testing common">
        <div class="commonLf">
          <span class="number">4</span>
          <span>测试中</span>
        </div>
        <span class="iconfont">&#xe600;</span>
      </div>
            <div class="beOnLine common">
        <div class="commonLf">
          <span class="number">5</span>
          <span>待上线</span>
        </div>
        <span class="iconfont">&#xe629;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>


<style lang="stylus" scoped>
@import '~stylus/common.styl'
#WorkWelcome
  width 1600px
  height 360px
  display flex
  flex-direction column
  // 顶边栏
  .nav
    width 130px
    flex-center()
    justify-content space-between
    margin 2rem 3rem
    .home
      font-size 20px
      cursor pointer
      font-weight bold
    .depart
      color gray
    .panelTit
      color blue
      cursor pointer
  // 三个小栏
  .threeShow
    width 1450px
    align-self center
    display flex
    justify-content space-around
    margin-top 2.5rem
    // 三个小栏目通用样式
    .common
      width 300px
      height 150px
      border-radius 15px
      color white
      // border()
      display flex
      justify-content center
      align-items center
      transition transform .5s ease
      .commonLf .commonRt
        width 100px
        height 90px
      .commonLf
        display flex
        flex-direction column
        align-items center
        .number
          font-size 40px
          margin-bottom 1.5rem
      .iconfont
        font-size 70px
        color white
        margin-left 3.5rem
      // 特殊颜色
      .spe
        color rgb(236,255,186)
    // 悬浮动画
    .common:hover
      transform scale(1.1)

    // 个性颜色
    .await
      background-color rgb(112,190,176)
    .developing
      background-color rgb(166,157,197)
    .testing
      background-color rgb(240,182,127)
    .beOnLine
      background-color rgb(150,178,214)
</style>
