<template>
  <div id="ForumQuestion">
    <div class="question">
      <span class="quesTitle"
        >手机营业厅的基础业务逻辑还有什么可以优化的么？的吗?????</span
      >
      <div class="questioner">
        <el-avatar :size="50" :src="questionerAvatar"></el-avatar>
      </div>
    </div>
    <div class="comments">
      pinglun
    </div>
  </div>
</template>

<script>
  export default {
    name: "ForumQuestion",
    data () {
      return {
        questionerAvatar: 'static/imgs/avatar.jpg'
      }
    }
  }
</script>

<style lang="stylus" scoped>
#ForumQuestion
  width 900px
  border 1px solid black
  margin-right 3rem
  display flex
  flex-direction column

</style>