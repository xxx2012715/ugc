<template>
  <div id="WorkPanel">
    <div class="content">
      <!-- top展示栏 -->
      <work-welcome></work-welcome>
      <!-- 待办事项 -->
      <remain-task></remain-task>
      <!-- 站内用户 & 提醒事项 -->
    </div>
  </div>
</template>
<script>
  import WorkWelcome from '@/pages/ProductManager/WorkPanel/WorkWelcome'
  import RemainTask from '@/pages/Manager/workPanel/RemainTask'


  export default {
    name: "WorkPanel",
    data () {
      return {

      }
    },
    components: {
      WorkWelcome,
      RemainTask,
    }
  }
</script>
<style lang="stylus" scoped>
@import '~stylus/common.styl';
#WorkPanel
  margin-left 15%
  .content
      display flex
      flex-direction column
      justify-content center
      align-items center
</style>