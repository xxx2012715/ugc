<template>
  <div id="WorkStatistics">
    <!-- 顶栏 -->
    <div class="headLine">
      <span>本月工作统计</span>
    </div>
    <!-- echarts -->
    <div id="main" style="width: 1000px;height:400px;"></div>
  </div>
</template>
<script>
  export default {
    name: "WorkStatistics",
    data () {
      return {

      };
    },
    mounted () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('main'))

      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: [{ name: '开始任务量', textStyle: { fontSize: '20' } }, { name: '验收任务量', textStyle: { fontSize: '20' } },]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
            restore: { show: true },
            saveAsImage: { show: true },
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['6.30', '7.3', '7.7', '7.11', '7.15', '7.19', '7.23', '7.27', '7.31', '8.3', '8.7', '8.11', '8.14', '8.18'],
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '开始任务量',
            type: 'line',
            smooth: true,
            data: [4, 2, 3, 4, 2, 4, 3, 5, 3, 4, 4, 5, 6, 3, 4],
            itemStyle: { color: 'rgb(46,199,201)' },
            areaStyle: { color: 'rgb(143, 220, 221)' },
            lineStyle: { color: 'rgb(46,199,201)' }
          },
          {
            name: '验收任务量',
            type: 'line',
            smooth: true,
            data: [3, 2, 2, 3, 2, 4, 3, 5, 3, 4, 4, 4, 5, 3, 4],
            itemStyle: { color: 'rgb(90,177,139)' },
            areaStyle: { color: 'rgb(168, 211, 242)' },
            lineStyle: { color: 'rgb(90,177,139)' }
          },

        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
</script>
<style lang="stylus" scoped>
@import '~stylus/common.styl'
#WorkStatistics
  width 1300px
  height 450px
  border 1px solid lightgray
  margin-top 3rem
  display flex
  flex-direction column
  align-items center
  color rgb(99,98,98)
  .headLine
    width 100%
    height 40px
    background-color rgb(245,245,245)
    display flex
    justify-content space-between
    align-items center
    text-indent 1rem
  #main
    margin-top 1rem

</style>