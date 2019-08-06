<template>
  <div id="StationUser">
    <!-- 顶栏 -->
    <div class="headLine">
      <span>提醒事项</span>
      <i class="el-icon-plus"></i>
    </div>
  </div>
</template>
<script>
  export default {
    name: "StationUser",
    data () {
      return {

      };
    }
  }
</script>
<style lang="stylus" scoped>
#StationUser
  width 850px
  height 450px
  border 1px solid lightgray
  display flex
  flex-direction column
  box-shadow 5px 5px 5px gray
  color rgb(99,98,98)
  margin-right 5rem
  // 顶栏
  .headLine
    width 100%
    height 40px
    background-color rgb(245,245,245)
    display flex
    justify-content space-between
    align-items center
    text-indent 2rem
  
</style>