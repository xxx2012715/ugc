<template>
  <div id="ForumQuestion">
    <div class="question">
      <!-- 标题 -->
      <span class="quesTitle"
        >手机营业厅的基础业务逻辑还有什么可以优化的么？的吗?????</span
      >
      <!-- 用户信息 -->
      <div class="questioner">
        <el-avatar :size="40" :src="questionerAvatar"></el-avatar>
        <span class="">苏宸</span>
        <span class="date">2019-08-01 &nbsp; 12:22</span>
        <span class="quesLink">链接问题: <span>IP-009</span></span>
      </div>
      <!-- 问题描述 -->
      <div class="description">
        这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容
      </div>
      <!-- 添加回答按钮 -->
      <el-button type="primary" @click="answer" class="answerBtn"
        >添加回答</el-button
      >
      <el-button type="primary" @click="focus" class="focusQues"
        >关注问题</el-button
      >
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
    },
    methods: {
      answer () {
        console.log('添加回答');
      },

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