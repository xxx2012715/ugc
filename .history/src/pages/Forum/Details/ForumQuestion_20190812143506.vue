<template>
  <div id="ForumQuestion">
    <div class="question">
      <!-- 标题 -->
      <span class="quesTitle"
        >手机营业厅的基础业务逻辑还有什么可以优化的以优化的以优化的以优化的么？的吗?????</span
      >
      <!-- 用户信息 -->
      <div class="questioner">
        <el-avatar :size="30" :src="questioner.avatar"></el-avatar>
        <span class="">{{ questioner.name }}</span>
        <span class="date">{{ questioner.date }} &nbsp;</span>
        <span class="quesLink"
          >链接问题: <span>{{ questioner.link }}</span></span
        >
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
                <span class="userName">{{ item.userName }}</span>
                <span class="userPosi">{{ item.userPosi }}</span>
              </div>
              <div class="infoBtm">
                2019-08-01 &nbsp; 23:22
              </div>
            </div>
          </div>
          <!-- 评论内容 -->
          <div class="comments">
            {{ item.comments }}
          </div>
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
        userName: '',
        userPosi: '',
        questioner: {
          avatar: '',
          name: 'waiting',
          date: 'waiting',
          link: 'waiting'
        },
        commentsList: [
          {
            avatar: 'waiting',
            userName: 'waiting',
            userPosi: 'waiting',
            commentsNum: 'waiting',
            praiseNum: 'waiting',
            comments: 'waiting'
          }
        ]
      }
    },
    mounted () {
      // 页面参数获取id
      let id = this.$route.params.id;
      // console.log(id);
      this.getInfo(id);
    },
    methods: {
      // 初始化页面数据加载
      getInfo (id) {
        let questionerUrl = `/getForumContentById?forumContentId=${id}`;
        // 更新提问者信息
        this.postRequest(questionerUrl)
          .then((res) => {
            console.log(res)
            let data = res.data;
            let usr = data.usr;
            this.questioner.avatar = usr.usrHeadportraitUrl;
            this.questioner.name = usr.usrName;
            this.questioner.date = data.createTime;
            this.questioner.link = data.linkTaskId;

          })
          .catch((error) => {
            console.log(error);
          });
        // 更新评论内容
        let commentsUrl = `/getForumCommentByForumAnswerId?forumAnswerId=${id}`;
        this.postRequest(commentsUrl)
          .then((res) => {

          })
          .catch((error) => {
            console.log(error);
          });
      },
      answer () {
        console.log('添加回答');
      },
      focus () {
        console.log('关注问题')
      },
    }
  }
</script>

<style lang="stylus" scoped>
@import '~stylus/common.styl'
#ForumQuestion
  width 900px
  margin-right 3rem
  display flex
  flex-direction column
  // 问题及描述
  .question
    width 100%
    max-height 280px
    display flex
    flex-direction column
    overflow auto
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
      text-indent 2rem
      overflow hidden
    // 按钮
    .button
      margin-top 1rem
      .focusQues
        margin-left 1rem
  // 评论部分
  .comments
    // 头部
    margin 2rem 0
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
        margin 3rem 0
        // 用户信息
        .userInfo
          display flex
          height 60px
          font-size 16px
          .information
            margin-left .5rem
            flex-around()
            flex-direction column
            color rgb(124,124,124)
            .infoTop
              .userName
                font-size 24px
                color black
        // 评论内容
        .comments
          max-height 120px
          line-height 24px
          font-size 18px
          text-indent 2rem
          overflow auto
          margin .5rem 0
        // 按钮
        .praise
          display flex
          .commentsBtn
            width 450px
            height 40px




</style>