<template>
  <div id="RemindTasks">
    <!-- 顶栏 -->
    <div class="headLine">
      <span>提醒事项</span>
      <i class="el-icon-plus"></i>
    </div>
    <div class="cont">
      <!-- 滑块 -->
      <el-slider
        v-model="slide"
        :step="25"
        class="slide"
        :marks="marks"
        vertical
        show-stops
      >
      </el-slider>
      <!-- 右边提示信息 -->
      <span class="rtInfo">
        <div class="common">
          <span class="mainInfo"
            ><div class="circle"></div>
            会议室</span
          >
          <span class="info">需求会议</span>
        </div>
        <div class="common">
          <!-- <span class="mainInfo">会议室</span>
          <span>需求会议</span> -->
        </div>
        <div class="common">
          <span class="mainInfo"
            ><div class="circle c2"></div>
            会议室</span
          >
          <span class="info">需求会议</span>
        </div>
        <span class="common">
          <!-- <span class="mainInfo">会议室</span>
          <span>需求会议</span> -->
        </span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RemindTasks',
    data () {
      return {
        slide: 0,
        marks: {
          0: 'now',
          25: '14:00',
          50: '16:00',
          75: '19:00',
          100: '20:00',
        },
      }
    }
  }
</script>

<style lang="stylus" scoped>
#RemindTasks
  width 370px
  height 450px
  border 1px solid lightgray
  display flex
  flex-direction column
  box-shadow 5px 5px 5px gray
  color rgb(99,98,98)
  // 顶栏
  .headLine
    width 100%
    height 40px
    background-color rgb(245,245,245)
    display flex
    justify-content space-between
    align-items center
    span
      margin-left 1rem
      color rgb(125,123,123)
    i
      margin-right 1rem
      font-size 14px
      color gray
      cursor pointer
  // 内容部分
  .cont
    width 100%
    height 360px
    display flex
    align-items center
    justify-content space-around
    // 滚动条
    .slide
      height 300px
      margin-left 3rem
      margin-top 3rem
    // 说明部分
    .rtInfo
      height 300px
      display flex
      flex-direction column
      justify-content space-around
      margin-right 4rem
      // 共同样式
      .common
        width 120px
        height 50px
        display flex
        flex-direction column
        align-items center
        font-size 14px
        // 主要信息
        .mainInfo
          font-size 24px
          margin-bottom .5rem
          display flex
          // 小圆点
          .circle
            width 18px
            height 18px
            border-radius 9px
            background-color rgb(164,223,192)
            align-self center
            margin-right 10px
          .c2
            background-color rgb(245,165,35)
        .info
          text-indent 2rem

</style>
