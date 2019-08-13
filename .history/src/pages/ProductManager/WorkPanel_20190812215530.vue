<template>
  <div id="WorkPanel">
    <div class="content">
      <!-- top展示栏 -->
      <work-welcome></work-welcome>
      <!-- middle展示栏 -->
      <div class="remain">
        <!-- 待办任务 -->
        <remain-tasks
          @changeRemainTasksNumber="remainTasksNumberChangeHandle(num)"
        ></remain-tasks>
        <!-- 提醒事项 -->
        <remind-tasks></remind-tasks>
      </div>
      <!-- 本月工作总结 图表 -->
      <work-statistics></work-statistics>
      <!-- 评论 & 任务 -->
      <comments-task></comments-task>
    </div>
  </div>
</template>
<script>

  import WorkWelcome from '@/pages/ProductManager/WorkPanel/WorkWelcome'
  import RemainTasks from '@/pages/ProductManager/WorkPanel/RemainTasks'
  import RemindTasks from '@/pages/ProductManager/WorkPanel/RemindTasks'
  import WorkStatistics from '@/pages/ProductManager/WorkPanel/WorkStatistics'
  import CommentsTask from '@/pages/ProductManager/WorkPanel/CommentsTask'

  export default {
    name: "WorkPanel",
    data () {
      return {

      }
    },
    components: {
      WorkWelcome,
      RemainTasks,
      RemindTasks,
      WorkStatistics,
      CommentsTask,
    },
    mounted () {
      let queryTabInfoUrl = `/questionNum`;
      this.getRequest(queryTabInfoUrl)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        })
    },
    methods: {
      remainTasksNumberChangeHandle (num) {
        console.log('num', num);
      }
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