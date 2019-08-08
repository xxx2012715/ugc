<template>
  <div id="ForumAnswer">
    <!-- 顶栏 -->
    <div class="headLine">
      <span>发现新内容 点击查看</span>
      <i class="el-icon-loading"></i>
    </div>
    <!-- 新内容 -->
    <div class="cont">
      msg
    </div>
    <!-- 广告 -->
    <div class="advertisement">
      <el-image
        class="banner"
        v-for="item in banner"
        :src="item"
        :key="item.index"
      ></el-image>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ForumAnswer",
    data () {
      return {
        banner: [
          '',
          '',
          '',
          '',
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
  .cont
    display flex
  // 顶栏
  .headLine
    width 900px
    height 40px
    background-color rgb(189,221,232)
    center()
    margin 0 0 1rem 0
    span
      margin-left 1rem
      color rgb(125,123,123)
    i
      margin-left 2rem
      font-size 22px
      color gray
      cursor pointer
</style>