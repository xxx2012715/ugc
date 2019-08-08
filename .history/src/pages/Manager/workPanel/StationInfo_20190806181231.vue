<template>
  <div id="StationInfo">
    <!-- 顶栏 -->
    <div class="headLine">
      <span>站内用户</span>
    </div>
    <!--  -->
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