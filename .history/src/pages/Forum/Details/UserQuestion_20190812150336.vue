<template>
  <div id="UserQuestion">
    <!-- 提问人信息 -->
    <div class="questioner">
      <!-- 上边栏 -->
      <div class="quesTop">
        <el-avatar :size="120" :src="questioner.avatar"></el-avatar>
        <div class="quesInfo">
          <span class="quesName">{{ questioner.name }}</span>
          <span class="quesPosi">{{ questioner.account }}</span>
        </div>
      </div>
      <!-- 下边栏 -->
      <div class="quesBtm">
        <span class="quesTit">最新动态</span>
        <span v-for="item in requestList" :key="item.index"
          >发布新需求: &nbsp; {{ item }}</span
        >
        <span v-for="item in focusList" :key="item.index"
          >关注问题: &nbsp; {{ item }}</span
        >
      </div>
    </div>

    <!-- 热门问题 -->
    <div class="popularQues">
      <span class="popuTit">热门问题</span>
      <!-- 热门问题列表 -->
      <div class="questionList">
        <!-- 每一项 -->
        <div class="quesLi" v-for="(item, index) in quesList" :key="index">
          <!-- 热门问题标题 -->
          <span class="quesTitle">{{ item.msg }}</span>
          <!-- 图标 -->
          <div class="quesIcon">
            <span class="iconfont browers">&#xe679;</span>
            <span class="browersNum">{{ item.browersNum }}</span>
            <span class="iconfont comments">&#xe601;</span>
            <span class="browersNum">{{ item.commentsNum }}</span>
          </div>
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
        // 提问人信息
        questioner: {
          name: '',
          account: '',
          avatar: '',
        },
        requestList: ['需求1需求1需求1需求1需求1需求1需求1需求1', '需求2求2需求2求2需求2求2需求2求2',],
        focusList: ['关注关注关注关注关注关注'],
        quesList: [
          {
            msg: '安卓手机端页面自适应大家是怎么解决的？解决的？页面自适应大家是怎么解决的？页面自适',
            browersNum: 21,
            commentsNum: 20
          },
          {
            msg: '安卓手机端页面自适应大家是怎么解决的？',
            browersNum: 21,
            commentsNum: 20
          },
          {
            msg: '安卓手机端页面自适应大家是怎么解决的？',
            browersNum: 21,
            commentsNum: 20
          },
          {
            msg: '安卓手机端页面自适应大家是怎么解决的？',
            browersNum: 21,
            commentsNum: 20
          },
          {
            msg: '安卓手机端页面自适应大家是怎么解决的？页面自适应大家是怎么解决的？页面自适应大家是怎么解决的？',
            browersNum: 21,
            commentsNum: 20
          },
        ]
      }
    },
    mounted () {
      this.questioner.name = localStorage.getItem('questionerName');
      this.questioner.account = localStorage.getItem('questionerAccount');
      this.questioner.avatar = localStorage.getItem('questionerAvatar');
    }
  }
</script>

<style lang="stylus" scoped>
@import '~stylus/common.styl'

#UserQuestion
  width 450px
  height 800px
  font-size 16px
  color rgb(79,79,79)

  // 提问人信息
  .questioner
    width 450px
    height 300px
    background-color #FFF3E6
    border-radius 10px
    flex-center()
    flex-direction column
    justify-content center
    // 上边栏
    .quesTop
      display flex
      margin-bottom 1rem
      // 提问人信息
      .quesInfo
        width 180px
        font-size 32px
        color rgb(79,79,79)
        flex-around()
        flex-direction column
    // 下边栏
    .quesBtm
      display flex
      flex-direction column
      width 370px
      .quesTit
        font-size 18px
        font-weight bold
        margin-bottom 1rem
      span
        ellipsis()
        margin 2px 0
  // 热门问题
  .popularQues
    width 416px
    height 400px
    margin-top 2rem
    padding 1rem 1rem
    // 顶栏
    .popuTit
      font-size 18px
      font-weight bold
    // 热门问题列表
    .questionList
      margin-top 1rem
      .quesLi
        height 40px
        display flex
        flex-direction column
        justify-content space-between
        margin 1.5rem 0
        .quesTitle
          color rgb(92,154,228)
          text-indent 2rem
          ellipsis()
          width 380px
        .quesIcon
          text-indent 2rem
          color gray
          .comments
            margin-left 1rem


</style>