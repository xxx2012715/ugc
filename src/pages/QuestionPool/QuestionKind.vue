<template>
  <div id="QuestionKind">
    <!-- 工作面板 -->
    <div class="nav">
      <span class="iconfont home">&#xe60b;</span>
      <span class="depart">/</span>
      <span class="panelTit">问题池</span>
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
    <div class="QuestionKindDetail">
        <!-- 顶栏 -->
        <div class="headLine">
            <span>问题类型</span>
        </div>
        <div class="taskProgress" style="width: 1400px;height:200px;">
          <div class="progress">
            <div class="percent-left">
               <el-progress :percentage="50" :stroke-width="15" :color="iosColor" :format="format"></el-progress>
            </div>
            <div class="percent-right">
              <div class="circle" style="background:#007aa3"></div>
              移动端ios端问题
            </div> 
          </div>
          <div class="progress">
            <div class="percent-left">
               <el-progress :percentage="68" :stroke-width="15" :color="andriodColor" :format="format"></el-progress>
            </div>
            <div class="percent-right">
              <div class="circle" style="background:#6dc0b0"></div>
              移动端安卓问题
            </div> 
          </div>
          <div class="progress">
            <div class="percent-left">
              <el-progress :percentage="79" :stroke-width="15" :color="bigDataColor" :format="format"></el-progress>
            </div>
            <div class="percent-right">
              <div class="circle" style="background:#b0dabf"></div>
              大数据研发问题
              </div> 
          </div>
          <div class="progress">
            <div class="percent-left">
               <el-progress :percentage="32" :stroke-width="15" :color="internetColor" :format="format"></el-progress>
            </div>
            <div class="percent-right">
              <div class="circle" style="background:#ecffba"></div>
              物联网研发问题
              </div> 
          </div> 
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'QuestionKind',
    data () {
      return {
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
        value2: '',
        iosColor:'#007aa3',
        andriodColor:'#6dc0b0',
        bigDataColor:'#b0dabf',
        internetColor:'#ecffba'
      }
    },
    methods: {
      format(percentage) {
        return percentage = `${percentage}`;
      }
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
 //问题类型
  .QuestionKindDetail
    width 1500px
    height 450px
    border 1px solid lightgray
    margin-top 3rem
    display flex
    flex-direction column
    align-items center
    color rgb(99,98,98)
    margin 50px auto
    .headLine
        width 100%
        height 40px
        background-color rgb(245,245,245)
        display flex
        justify-content space-between
        align-items center
        text-indent 1rem
  .taskProgress
    margin-top 40px
    .percent-left
      display inline-block 
      width 1000px
    .percent-right
      display inline-block
      margin-left 130px
      .circle
        display inline-block
        width 15px
        height 15px
        border-radius 15px
    .el-progress
      line-height 2
      .el-progress-bar
        width 100%
        .el-progress-bar__outer
          background  none    
          .el-progress__text
            width 320px
            padding-left 60px 
</style>
