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
    methods: {
      genData (count) {
        var nameList = [
          '产品经理', '研发', '测试', '管理员',
        ];
        var legendData = [];
        var seriesData = [];
        var selected = {};
        for (var i = 0; i < 4; i++) {
          name = Math.random() > 0.65
            ? makeWord(4, 1) + '·' + makeWord(3, 0)
            : makeWord(2, 1);
          legendData.push(name);
          seriesData.push({
            name: name,
            value: Math.round(Math.random() * 100000)
          });
          selected[name] = i < 6;
        }



        function makeWord (max, min) {
          var nameLen = Math.ceil(Math.random() * max + min);
          var name = [];
          for (var i = 0; i < nameLen; i++) {
            name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
          }
          return name.join('');
        }
      }
    },
    mounted () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('main'))
      var data = this.genData(4);
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '站内用户',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          data: data.legendData,

          selected: data.selected
        },
        series: [
          {
            name: '姓名',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: data.seriesData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
        // 

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