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
        <el-button
          type="primary"
          @click="answerVisi = !answerVisi"
          class="answerBtn"
          round
          >添加回答</el-button
        >
        <!-- 关注问题按钮 -->
        <el-button @click="focus" class="focusQues" round>关注问题</el-button>
      </div>
    </div>
    <!-- 添加回答 -->
    <div class="answer" v-if="answerVisi">
      <el-input
        type="textarea"
        :rows="4"
        placeholder="请输入内容"
        v-model="answerContent"
        resize="none"
      >
      </el-input>
      <!-- 提交回答 -->
      <el-button @click="answerSubmit" class="answerBtn">回复</el-button>
    </div>

    <!-- 评论部分 -->
    <div class="comments">
      <!-- 头部 -->
      <div class="headSum">
        <div class="totalNum">
          共 &nbsp;<span class="answerTotalNum">
            {{ commentsList.length }}
          </span>
          &nbsp; 个回答
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
            <el-avatar
              :size="60"
              :src="item.usr.usrHeadportraitUrl"
            ></el-avatar>
            <div class="information">
              <div class="infoTop">
                <span class="userName">{{ item.usr.usrName }}</span>
                <span class="userPosi">{{ item.usr.usrAccount }}</span>
              </div>
              <div class="infoBtm">
                {{ item.createTime }}
              </div>
            </div>
          </div>
          <!-- 评论内容 -->
          <div class="comments">
            {{ item.forumComment }}
          </div>
          <!-- 按钮: 评论 & 点赞 -->
          <div class="praise">
            <el-button class="commentsBtn" disabled>评论 1</el-button>
            <el-button class="commentsBtn" disabled>点赞 1</el-button>
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
        // 回答框显示
        answerVisi: true,
        answer: '',
        userName: '',
        userPosi: '',
        answerContent: '',
        questioner: {
          avatar: '',
          name: 'waiting',
          date: 'waiting',
          link: 'waiting'
        },
        commentsList: []
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
            console.log('comments', res);
            this.commentsList = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      // 提交回复
      answerSubmit () {
        // console.log('回答');
        let answerUrl = `/saveForumAnswer?forumContentId=${this.$route.params.id}&answerContent=${this.answerContent}`;
        this.getRequest(answerUrl)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          })
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
  // 添加回答
  .answer
    margin 5px
    .answerBtn
      float right

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