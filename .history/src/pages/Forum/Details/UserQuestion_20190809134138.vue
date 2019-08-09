<template>
  <div id="UserQuestion">
    <!-- 提问人信息 -->
    <div class="questioner">
      <!-- 上边栏 -->
      <div class="quesTop">
        <el-avatar :size="120"></el-avatar>
        <div>
          <span class="quesName">苏宸</span>
          <span class="quesPosi">产品经理</span>
        </div>
      </div>
    </div>
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