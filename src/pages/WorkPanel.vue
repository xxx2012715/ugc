<template>
  <div id="WorkPanel">
    <div class="headEmpty"></div>
    <!-- 顶栏 -->
    <common-head></common-head>
    <div class="cont">
      <!-- 左边tab栏 -->
      <work-menu></work-menu>
      <!-- 左边栏空白div -->
      <div class="emptyMenu"></div>
      <div class="content">
        <!-- top展示栏 -->
        <work-welcome></work-welcome>
        <!-- middle展示栏 -->
        <div class="remain">
          <!-- 待办任务 -->
          <remain-tasks></remain-tasks>
          <!-- 提醒事项 -->
          <remind-tasks></remind-tasks>
        </div>
        <!-- 本月工作总结 图表 -->
        <work-statistics></work-statistics>
        <!-- 评论 & 任务 -->
        <comments-task></comments-task>
      </div>
    </div>
    <div class="empty"></div>
  </div>
</template>

<script>
  import CommonHead from '@/components/CommonHead'
  import WorkMenu from '@/components/WorkMenu'
  import WorkWelcome from '@/pages/WorkPanel/WorkWelcome'
  import RemainTasks from '@/pages/WorkPanel/RemainTasks'
  import RemindTasks from '@/pages/WorkPanel/RemindTasks'
  import WorkStatistics from '@/pages/WorkPanel/WorkStatistics'
  import CommentsTask from '@/pages/WorkPanel/CommentsTask'

  export default {
    name: 'WorkPanel',
    components: {
      CommonHead,
      WorkMenu,
      WorkWelcome,
      RemainTasks,
      RemindTasks,
      WorkStatistics,
      CommentsTask,
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
    .emptyMenu
      width 280px
      height 1000px
    .content
      flex 1
      display flex
      flex-direction column
      justify-content center
      align-items center
      .remain
        width 1400px
        center()
  .empty
    width 100%
    height 150px
      
</style>