<template>
  <div id="StationInfo">
    <!-- 顶栏 -->
    <div class="headLine">
      <span>站内信息</span>
    </div>
    <!-- 站内信息图表 -->
    <div id="main" style="width: 1000px;height:460px;"></div>
  </div>
</template>
<script>
  export default {
    name: "StationInfo",
    data () {
      return {

      };
    }
  }
</script>
<style lang="stylus" scoped>
 #StationInfo
  width 1300px
  height 500px
  margin-top 5rem
  border 1px solid lightgray
  display flex
  flex-direction column
  box-shadow 5px 5px 5px gray
  color rgb(99,98,98)
  // 顶栏
  .headLine
    width 100%
    height 40px
    background-color rgb(245,245,245)
    display flex
    justify-content space-between
    align-items center
    text-indent 1rem
</style>