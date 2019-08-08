<template>
  <div id="forumHead">
    a
  </div>
</template>

<script>
  export default {
    name: "forumHead",
    data () {
      return {

      }
    }
  }
</script>

<style lang="stylus" scoped>
#forumHead
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