<template>
  <div id="WorkPanel">
    <div class="content">
      <!-- top展示栏 -->
      <!-- <work-welcome></work-welcome> -->
      <!-- 待办事项 -->
      <remain-task></remain-task>
      <!-- 站内用户 & 提醒事项 -->
      <div class="remain">
        <!-- 站内用户 -->
        <station-user></station-user>
        <!-- 提醒事项 -->
        <remind-tasks></remind-tasks>
      </div>
      <!-- 站内信息 -->
      <station-info></station-info>
      <!-- 评论 & 任务 -->
      <comments-task></comments-task>
    </div>
  </div>
</template>
<script>
  import WorkWelcome from '@/pages/ProductManager/WorkPanel/WorkWelcome'
  import RemainTask from '@/pages/Manager/workPanel/RemainTask'
  import StationUser from '@/pages/Manager/workPanel/StationUser'
  import RemindTasks from '@/pages/Manager/workPanel/RemindTasks'
  import StationInfo from '@/pages/Manager/workPanel/StationInfo'
  import CommentsTask from '@/pages/ProductManager/WorkPanel/CommentsTask'


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
      RemindTasks,
      StationInfo,
      CommentsTask,
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
      margin 4rem 0 0 0 
</style>