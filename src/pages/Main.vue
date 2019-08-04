<template>
  <div id="WorkPanel">
    <div class="headEmpty"></div>
    <!-- 顶栏 -->
    <common-head></common-head>
    <div class="cont">
      <!-- 左边tab栏 -->
      <work-menu></work-menu>
      <!-- 路由加载 -->
      <router-view></router-view>
    </div>
    <div class="empty"></div>
  </div>
</template>

<script>
  import CommonHead from '@/components/CommonHead'
  import WorkMenu from '@/components/WorkMenu'


  export default {
    name: 'WorkPanel',
    components: {
      CommonHead,
      WorkMenu,
    }
  }
</script>

<style scoped lang="stylus">
@import '~stylus/common.styl'
#WorkPanel
  font-size 20px
  .headEmpty
    width 100%
    height 60px
  .cont
    display flex
  .empty
    width 100%
    height 150px
      
</style>