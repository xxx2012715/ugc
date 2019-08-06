<template>
  <div id="RemainTask">
    <!-- 顶栏 -->
    <div class="headLine">
      <span>待办任务</span>
    </div>
    <!-- 待办事项表 -->
  </div>
</template>
<script>
  export default {
    name: "RemainTask",
    data () {
      return {

      };
    }
  }
</script>
<style lang="stylus" scoped>
#RemainTask
  width 1300px
  height 450px
  border 1px solid lightgray
  margin-top 3rem
  display flex
  flex-direction column
  align-items center
  color rgb(99,98,98)
  .headLine
    width 100%
    height 40px
    background-color rgb(245,245,245)
    display flex
    justify-content space-between
    align-items center
    text-indent 1rem

</style>