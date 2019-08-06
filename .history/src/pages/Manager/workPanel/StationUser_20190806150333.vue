<template>
  <div id="StationUser">
    <!-- 顶栏 -->
    <div class="headLine">
      <span>站内用户</span>
    </div>
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
    mounted () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('main'))

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '站内人员比例饼图',
          left: 'center',
          top: '15'
        },
        legend: {
          orient: 'vertical',
          left: '15',
          top: '30',
          data: ['研发人员', '测试人员', '产品经理', '管理员']
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: false,
        series: (function () {
          var series = [];
          for (var i = 0; i < 30; i++) {
            series.push({
              name: '浏览器（数据纯属虚构）',
              type: 'pie',
              itemStyle: {                normal: {
                  label: { show: i > 28 },
                  labelLine: { show: i > 28, length: 20 }
                }              },
              radius: [i * 4 + 40, i * 4 + 43],
              data: [
                { value: i * 64 + 160, name: '测试人员' },
                { value: i * 32 + 320, name: '管理员' },
                { value: i * 16 + 640, name: '产品经理' },
                { value: i * 32 + 320, name: '研发人员' },
              ]
            })
          }
          series[0].markPoint = {
            symbol: 'emptyCircle',
            symbolSize: series[0].radius[0],
            effect: { show: true, scaleSize: 12, color: 'rgba(250,225,50,0.8)', shadowBlur: 10, period: 30 },
            data: [{ x: '50%', y: '50%' }]
          };
          return series;
        })()
      };
      // 使用刚指定的配置项和数据显示图表。
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