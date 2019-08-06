<template>
  <div id="WorkPanel">
    <div class="content">
      <!-- top展示栏 -->
      <work-welcome></work-welcome>
      <!-- 待办事项 -->
      <remain-task></remain-task>
      <!-- 站内用户 & 提醒事项 -->
      <div class="remain">
        <!-- 待办任务 -->
        <remain-tasks></remain-tasks>
        <!-- 提醒事项 -->
        <remind-tasks></remind-tasks>
      </div>
    </div>
  </div>
</template>
<script>
  import WorkWelcome from '@/pages/ProductManager/WorkPanel/WorkWelcome'
  import RemainTask from '@/pages/Manager/workPanel/RemainTask'
  import StationUser from '@/pages/Manager/workPanel/StationUser'
  import RemindTasks from '@/pages/Manager/workPanel/RemindTasks'


  export default {
    name: "WorkPanel",
    data () {
      return {

      }
    },
    components: {
      WorkWelcome,
      RemainTask,
      StationUser,
      RemindTasks
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
    .remain
      width 1400px
      center()
</style>