<template>
  <div id="StationUser">
    <!-- 顶栏 -->
    <div class="headLine">
      <span>站内用户</span>
    </div>
    <!-- 站内用户比例饼图 -->
    <div id="main" style="width: 850px;height:410px;"></div>
  </div>
</template>

<script>
  export default {
    name: "StationUser",
    data () {
      return {

      }
    },
    methods: {

    },
    mounted () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('main'))
      var data = this.genData(4);
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '站内用户比例图',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: '15',
          top: '15',
          data: ['研发人员', '测试人员', '管理员', '产品经理']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              { value: 1, name: '产品经理', itemStyle: { color: 'rgb(60,138,239)' } },
              { value: 1, name: '管理员', itemStyle: { color: 'rgb(113,246,249)' } },
              { value: 1, name: '测试人员', itemStyle: { color: 'rgb(236,255,186)' } },
              { value: 1, name: '研发人员', itemStyle: { color: 'rgb(255,174,139)' } },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表
      myChart.setOption(option);
    }
  }
</script>

<style lang="stylus" scoped>
#StationUser
  width 850px
  height 450px
  border 1px solid lightgray
  display flex
  flex-direction column
  box-shadow 5px 5px 5px gray
  color rgb(99,98,98)
  margin-right 5rem
  // 顶栏
  .headLine
    width 100%
    height 40px
    background-color rgb(245,245,245)
    display flex
    justify-content space-between
    align-items center
    text-indent 1rem
  
</style>