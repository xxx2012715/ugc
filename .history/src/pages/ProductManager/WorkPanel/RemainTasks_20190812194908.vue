<template>
  <div id="RemainTasks">
    <!-- 顶栏 -->
    <div class="headLine">
      <span>待办任务</span>
      <i class="el-icon-more-outline"></i>
    </div>
    <div class="cont">
      <!-- 任务名 -->
      <div class="first common">
        <span class="task">
          <span class="blue">IP-017</span> / 移动端IOS页面bug修复
        </span>
        <div class="unstart">未开始</div>
      </div>
      <!-- 优先级 -->
      <div class="second common">
        <span class="priority">
          优先级&nbsp; :
          <span class="prio">高</span>
          <i class="el-icon-top"></i>
        </span>
        <div class="start">开始任务</div>
      </div>
      <!-- 开发人员 -->
      <div class="third common1">
        <span class="develop">
          开发人员&nbsp; :
        </span>
        <div class="developer">
          <el-image :src="developer1" class="developAvatar"></el-image>
          <span class="developerName">陈伟</span>
        </div>
        <div class="developer">
          <el-image :src="developer2" class="developAvatar"></el-image>
          <span class="developerName">徐凯特</span>
        </div>
      </div>
      <!-- 测试人员 -->
      <div class="forth common1">
        <span class="develop">
          测试人员&nbsp; :
        </span>
        <div class="developer">
          <el-image :src="tester" class="developAvatar"></el-image>
          <span class="developerName">王子威</span>
        </div>
      </div>
    </div>
    <!-- 分页器 -->
    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        @current-change="change"
        :total="pagination.totalNum * 10"
        :current-page.sync="pagination.currentIndex"
        size="5"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RemainTasks',
    data () {
      return {
        // 分页器
        pagination: {
          currentIndex: 1,
          totalNum: 1,
        },
        developer1: 'static/imgs/chenwei.jpg',
        developer2: 'static/imgs/kate.jpg',
        tester: 'static/imgs/ziwei.jpg'
      }
    },
    mounted () {
      // 获取待办任务
      let remainTasksUrl = `/questionToDo?currentIndex=${this.remainTask.currentIndex}&pageSize=1`;
      this.postRequest(remainTasksUrl)
        .then((res) => {
          console.log(res);
          // this.pagination.totalNum = res.data.count.总数;
        })
        .catch((error) => {
          console.log(error);
        })
    },
    methods: {
      handleEdit (index, row) {
        console.log(index, row);
      },
      handleDelete (index, row) {
        console.log(index, row);
      },
      // 分页器改变
      change () {
        // console.log(this.remainTask.currentIndex)

      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '~stylus/common.styl'
#RemainTasks
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
    span
      margin-left 1rem
      color rgb(125,123,123)
    i
      margin-right 1rem
      font-size 30px
      color gray
      cursor pointer
  // 内容部分
  .cont
    width 100%
    height 300px
    margin-top 1.5rem
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    // 前两个li公共属性
    .common
      width 90%
      height 30px
      // border()
      flex-between()
      // 任务
      .task
        .blue
          color rgb(73,143,255)
      // 未启动
      .unstart
        width 90px
        height 30px
        border-radius 15px
        line-height 30px
        text-align center
        background-color rgb(239,19,46)
        color white
      // 开启任务
      .start
        width 90px
        height 30px
        border-radius 15px
        line-height 30px
        text-align center
        background-color rgb(245,165,35)
        color white
        cursor pointer
      // 优先级
      .priority
        font-weight bold
        .prio
          color rgb(239,19,46)
          margin-left 1rem
        .el-icon-top
          color rgb(239,19,46)
          font-size 20px
          font-weight bolder
    // 后两个公共样式
    .common1
      width 90%
      height 40px
      // border()
      flex-center()
      // 开发人员
      .developer
        // 开发人员头像
        flex-center()
        .developAvatar
          width 40px
          height 40px
          border-radius 20px
          margin 0 .5rem 0 2rem
  // 分页器
  .pagination
    display flex
    justify-content flex-end
    margin 2rem

</style>
