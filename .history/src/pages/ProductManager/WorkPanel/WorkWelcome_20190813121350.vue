<template>
  <div id="WorkWelcome">
    <!-- 工作面板 -->
    <div class="nav">
      <span class="iconfont home">&#xe60b;</span>
      <span class="depart">/</span>
      <span class="panelTit">工作面板</span>
    </div>

    <!-- 日历 -->
    <div class="calender">
      <el-date-picker
        v-model="value2"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
        class="calenderr"
      ></el-date-picker>
    </div>

    <!-- 三个小栏 -->
    <div class="threeShow">
      <div class="totalQ common">
        <div class="commonLf">
          <span class="number">{{ totalQuestionNumber }}</span>
          <span>总问题量</span>
        </div>
        <span class="iconfont spe">&#xe6a7;</span>
      </div>
      <div class="todayQ common">
        <div class="commonLf">
          <span class="number">{{ todayQuestionNumber }}</span>
          <span>今日问题</span>
        </div>
        <span class="iconfont">&#xe613;</span>
      </div>
      <div class="remainTasks common">
        <div class="commonLf">
          <span class="number">{{ totalTasksNumber }}</span>
          <span>待办事项</span>
        </div>
        <span class="iconfont">&#xe62b;</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WorkWelcome',
    data () {
      return {
        totalQuestionNumber: 0,
        todayQuestionNumber: 0,
        pickerOptions: {
          shortcuts: [
            {
              text: '最近一周',
              onClick (picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
              }
            },
            {
              text: '最近一个月',
              onClick (picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
              }
            },
            {
              text: '最近三个月',
              onClick (picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
              }
            }
          ]
        },
        value2: ''
      }
    },
    // 接收总任务数
    props: ['totalTasksNumber'],
    mounted () {
      let queryTabInfoUrl = '/questionNum';
      this.getRequest(queryTabInfoUrl)
        .then((res) => {
          console.log(res);
          this.totalQuestionNumber = res.data.totalNum;
          this.todayQuestionNumber = res.data.todayNum;

        })
        .catch((error) => {
          console.log(error);
        })
    },
    methods: {}
  };
</script>

<style lang="stylus" scoped>
@import '~stylus/common.styl'
#WorkWelcome
  width 1600px
  height 360px
  display flex
  flex-direction column
  // 顶边栏
  .nav
    width 130px
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
  // 日历
  .calender
    width 100%
    display flex
    justify-content flex-end
    .calenderr
      margin-right 3rem
  // 三个小栏
  .threeShow
    width 1450px
    align-self center
    display flex
    justify-content space-around
    margin-top 2.5rem
    // 三个小栏目通用样式
    .common
      width 350px
      height 150px
      border-radius 15px
      color white
      // border()
      display flex
      justify-content center
      align-items center
      transition transform .5s ease
      .commonLf .commonRt
        width 100px
        height 90px
      .commonLf
        display flex
        flex-direction column
        align-items center
        .number
          font-size 40px
          margin-bottom 1.5rem
      .iconfont
        font-size 70px
        color white
        margin-left 3.5rem
      // 特殊颜色
      .spe
        color rgb(236 255 186)
    // 悬浮动画
    .common:hover
      transform scale(1.1)

    // 个性颜色
    .totalQ
      background-color #A0EEE1
    .todayQ
      background-color #BEE7E9 
    .remainTasks
      background-color #BEEDC7
</style>
