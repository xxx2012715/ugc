<template>
  <div id="ForumHead">
    <!-- 工作面板 -->
    <div class="nav">
      <span class="iconfont home">&#xe60b;</span>
      <span class="depart">/</span>
      <span class="panelTit">论坛</span>
    </div>
    <!-- 内容部分 -->
    <div class="cont">
      <!-- 提问栏 -->
      <div class="question">
        question
      </div>
      <!-- 个人信息 -->
      <div class="selfInfo">
        selfInfo
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ForumHead",
    data () {
      return {

      }
    }
  }
</script>

<style lang="stylus" scoped>
#ForumHead
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
</style>