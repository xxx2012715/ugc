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
          共 &nbsp;<span class="answerTotalNum"> 9 </span> &nbsp; 个回答
        </div>
        <span class="answerSort">
          <span class="iconfont sortClock">&#xe6a1;</span>
          <span>按时间排序</span>
        </span>
      </div>
      <!-- 内容 -->
      <div class="cont">
        <!-- 循环输出评论 -->
        <div class="li" v-for="item in commentsList" :key="item.index">
          <!-- 用户信息 -->
          <div class="userInfo">
            <el-avatar :size="60" :src="item.avatar"></el-avatar>
            <div class="information">
              <div class="infoTop">
                <span class="user">{{ item.userName }}</span>
                <span class="userPosi">{{ item.userPosi }}</span>
              </div>
              <div class="infoBtm">
                2019-08-01 &nbsp; 23:22
              </div>
            </div>
          </div>
          <!-- 评论内容 -->
          <div class="comments"></div>
          <!-- 按钮: 评论 & 点赞 -->
          <div class="praise">
            <el-button class="commentsBtn"
              >评论 {{ item.commentsNum }}</el-button
            >
            <el-button class="commentsBtn">点赞 {{ item.praiseNum }}</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ForumQuestion",
    data () {
      return {
        questionerAvatar: 'static/imgs/avatar.jpg',
        commentsList: [
          {
            avatar: 'static/imgs/kate.jpg',
            userName: '徐凯特',
            userPosi: '研发人员',
            commentsNum: '9',
            praiseNum: '21'
          }
        ]
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
    height 280px
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
    // 问题描述
    .description
      font-size 18px
      line-height 22px
      width 100%
      height 110px
      overflow auto
      text-indent 2rem
    // 按钮
    .button
      margin-top 1rem
      .focusQues
        margin-left 1rem
  // 评论部分
  .comments
    // 头部
    .headSum
      flex-between()
      width 100%
      .totalNum
        font-weight bold
        .answerTotalNum
          color blue
      .answerSort
        margin-right 2rem
    // 内容
    .cont
      .li
        margin 1rem 0
        // 用户信息
        .userInfo
          display flex
          width 400px
          height 60px
          font-size 16px




</style>