<template>
  <div id="UserQuestion">
    <!-- 提问人信息 -->
    <div class="questioner"></div>
  </div>
</template>

<script>
  export default {
    name: "UserQuestion",
    data () {
      return {

      }
    }
  }
</script>

<style lang="stylus" scoped>
#UserQuestion
  width 450px
  height 800px
  border 1px solid black
  // 提问人信息
  .questioner
    width 450px
    height 300px
    border 1px solid black
</style>