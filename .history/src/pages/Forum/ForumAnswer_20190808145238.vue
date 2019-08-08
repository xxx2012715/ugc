<template>
  <div id="ForumAnswer">
    <!-- 顶栏 -->
    <div class="headLine">
      <span>提醒事项</span>
      <i class="el-icon-plus"></i>
    </div>
    <!-- 新内容 -->
    <div class="cont">
      <!-- 资讯 -->
      <!-- 广告 -->
      <div class="advertisement">
        <el-image
          class="banner"
          v-for="(item, index) in banner"
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
#ForumAnswer
  width 1400px
  height 900px
  border 1px solid black
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
</style>