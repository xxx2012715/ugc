<template>
  <div id="ApplyWelcome">
    <!-- 工作面板 -->
    <div class="nav">
      <span class="iconfont home">&#xe60b;</span>
      <span class="depart">/</span>
      <span class="panelTit">工作面板</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ApplyWelcome',
    data () {
      return {

      }
    },
    methods: {}
  };
</script>

<style lang="stylus" scoped>
@import '~stylus/common.styl'
#ApplyWelcome
  width 1600px
  height 100px
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
