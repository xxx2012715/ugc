<template>
  <div id="ForumQuestion">
    <div class="question">
      <!-- 标题 -->
      <span class="quesTitle"
        >手机营业厅的基础业务逻辑还有什么可以优化的以优化的以优化的以优化的么？的吗?????</span
      >
      <!-- 用户信息 -->
      <div class="questioner">
        <el-avatar :size="30" :src="questionerAvatar"></el-avatar>
        <span class="">苏宸</span>
        <span class="date">2019-08-01 &nbsp; 12:22</span>
        <span class="quesLink">链接问题: <span>IP-009</span></span>
      </div>
      <!-- 问题描述 -->
      <div class="description">
        这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容这里是描述呢容内容内容
      </div>
      <div class="button">
        <!-- 添加回答按钮 -->
        <el-button type="primary" @click="answer" class="answerBtn" round
          >添加回答</el-button
        >
        <!-- 关注问题按钮 -->
        <el-button @click="focus" class="focusQues" round>关注问题</el-button>
      </div>
    </div>
    <!-- 评论部分 -->
    <div class="comments">
      <!-- 头部 -->
      <div class="headSum">
        <div class="totalNum">
          共 <span class="answerTotalNum"> 9 </span> & 个回答
        </div>
        <span class="answerSort">
          <span class="iconfont sortClock">&#xe6a1;</span>
          <span>按时间排序</span>
        </span>
      </div>
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
      focus () {
        console.log('关注问题')
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '~stylus/common.styl'
#ForumQuestion
  width 900px
  border 1px solid black
  margin-right 3rem
  display flex
  flex-direction column
  // 问题及描述
  .question
    width 100%
    height 300px
    display flex
    flex-direction column
    // 问题标题
    .quesTitle
      width 85%
      font-size 28px
      font-weight bold
      ellipsis()
    // 用户信息
    .questioner
      width 48%
      height 40px
      line-height 40px
      margin .5rem 0
      overflow hidden
      font-size 18px
      flex-between()
      .quesLink
        color rgb(96,157,229)
        cursor pointer
        




</style>