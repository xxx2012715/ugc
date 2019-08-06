<template>
  <div id="QuestionOperation">
    <!-- 工作面板 -->
    <div class="nav">
      <span class="iconfont home">&#xe60b;</span>
      <span class="depart">/</span>
      <span class="panelTit">问题池</span>
      <span class="depart">/</span>
      <span class="panelTit">IP-007 移动端ios手机营业厅bug修改</span>
    </div>
    <div class="content">
      <div class="content-title">IP-007 移动端ios手机营业厅bug修改</div>
      <div class="button-area">
        <el-row>
          <el-col :span="3" align="center">
              <el-button class="allBtn" round>关注</el-button>
          </el-col>
          <el-col :span="3" align="center">
              <el-button class="allBtn" round>评论</el-button>
          </el-col>
          <el-col :span="3" align="center">
              <el-button class="allBtn" round>编辑</el-button>
          </el-col>
          <el-col :span="3" align="center">
              <el-button class="allBtn" round>链接任务</el-button>
          </el-col>
          <el-col :span="3" align="center">
              <el-button class="allBtn" round>开始任务</el-button>
          </el-col>
          <el-col :span="3" align="center">
              <el-button class="allBtn" round>关闭任务</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="detail">
        <div class="detail-left">
          <!-- 详情 -->
          <section>
            <el-row>
              <el-col :span="2">详情</el-col>
              <el-col :span="20"><hr></el-col>
            </el-row>
            <el-row>
              <el-col :span="10" :offset="2">类型：移动端ios</el-col>
              <el-col :span="10">状态：未开始</el-col>
            </el-row>
            <el-row>
              <el-col :span="10" :offset="2">优先级：高</el-col>
              <el-col :span="10">解决结果：未解决</el-col>
            </el-row>
          </section>
          <!-- 描述 -->
          <section>
            <el-row>
              <el-col :span="2">描述</el-col>
              <el-col :span="20"><hr></el-col>
            </el-row>
            <el-row>
              <el-col :offset="2">手机营业厅有bug</el-col>
            </el-row>
          </section>
          <!-- 链接任务 -->
          <section>
            <el-row>
              <el-col :span="3">链接任务</el-col>
              <el-col :span="19"><hr></el-col>
            </el-row>
            <el-row>
              <el-col :offset="2">IP-001 移动端ios手机营业厅bug</el-col>
            </el-row>
          </section>
          <!-- 附件 -->
          <section>
            <el-row>
              <el-col :span="2">附件</el-col>
              <el-col :span="20"><hr></el-col>
            </el-row>
            <el-row>
              <el-col :span="16" :offset="2">需求稿.zip</el-col>
              <el-col :span="4">2019/7/30</el-col>
            </el-row>
          </section>
          <!-- 动态 -->
          <section>
            <el-row>
              <el-col :span="2">动态</el-col>
              <el-col :span="20"><hr></el-col>
            </el-row>
          </section>
        </div>
        <div class="detail-right">
          <!-- 人员 -->
          <section>
            <el-row style="line-height:1" class="headArea">
              <el-col :span="3">人员</el-col>
              <el-col :span="21"><hr></el-col>
            </el-row>
            <el-row style="margin-top:-25px" class="headArea">
              <el-col :span="5" :offset="3">产品经理：</el-col>
              <el-col :span="4" :offset="1">
                <img class="headImg" src="../../../static/imgs/avatar.jpg" alt="">
              </el-col>
              <el-col :span="5">陈珍益</el-col>
            </el-row>
            <el-row class="headArea">
              <el-col :span="5" :offset="3">研发：</el-col>
              <el-col :span="4" :offset="1">
                <img class="headImg" src="../../../static/imgs/chenwei.jpg" alt="">
              </el-col>
              <el-col :span="5">陈伟</el-col>
            </el-row>
            <el-row class="headArea">
              <el-col :span="4" :offset="9">
                <img class="headImg" src="../../../static/imgs/kate.jpg" alt="">
              </el-col>
              <el-col :span="5">徐凯特</el-col>
            </el-row>
             <el-row class="headArea">
              <el-col :span="5" :offset="3">测试：</el-col>
              <el-col :span="10" :offset="3">无</el-col>
            </el-row>
          </section>
          <!-- 时间 -->
          <section style="margin-top: 25px;">
            <el-row class="timeArea">
              <el-col :span="3">时间</el-col>
              <el-col :span="21"><hr></el-col>
            </el-row>
            <el-row class="timeArea">
              <el-col :offset="3">创建时间：2019/7/28</el-col>
            </el-row>
            <el-row class="timeArea">
              <el-col :offset="3">进行时间：4days</el-col>
            </el-row>
            <el-row class="timeArea">
              <el-col :offset="3">最近修改时间：2019/7/31</el-col>
            </el-row>
          </section>
        </div>
      </div>
    </div>
    <div class="comment">
      <comments-task></comments-task>
    </div>
  </div>
</template>

<script>
  import CommentsTask from '@/pages/ProductManager/WorkPanel/CommentsTask'
  export default {
    name: 'QuestionOperation',
    data () {
      return {
      }
    },
    components: {
      CommentsTask,
    },
    methods: {
    }
  };
</script>

<style lang="stylus" scoped>
@import '~stylus/common.styl'
#QuestionKind
    width 1600px
    height 360px
    display flex
    flex-direction column
  // 顶边栏
  .nav
    width 450px
    flex-center()
    justify-content space-between
    margin 2rem 3rem
    .home
      font-size 20px
      cursor pointer
      font-weight bold
    .depart
      color gray
    .panelTit
      color blue
      cursor pointer
  .content
    width 1300px
    .content-title
      font-size 40px
      color #676363
      padding-left 45px
      padding-top 15px
      font-weight 900
    .button-area
      width  100%
      padding-left 20px
      margin-top 35px
      .allBtn
        width 120px
        background #5e9ce6
        color #fff
        font-size 17px
        height 40px
    .detail
      padding-left 45px
      margin-top 55px
      .detail-left
        float left
        width 700px
        height 100px
        .el-row
          height 55px
      .detail-right
        margin-left 750px
        .headArea
          height 55px
          line-height 55px
          .headImg
            width 40px
            height 40px
            border-radius 40px
            display flex
            align-items center
        .timeArea
          height 55px
  .comment
    display flex
    flex-direction column
    justify-content center
    align-items center
    margin-left 45px
    margin-top 15px
</style>
