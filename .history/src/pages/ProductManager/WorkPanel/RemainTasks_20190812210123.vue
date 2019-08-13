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
          <span class="blue">{{ IP }}</span> / {{ question }}
        </span>
        <div class="status">{{ status }}</div>
      </div>
      <!-- 优先级 -->
      <div class="second common">
        <span class="priority">
          优先级&nbsp; :
          <span class="prio">{{ priority }}</span>
          <i class="el-icon-top"></i>
        </span>
        <!-- 开始任务 -->
        <el-button
          class="start"
          type="success"
          @click="startTask"
          round
          :disabled="startBtnDisabled"
          >{{ buttonMsg }}</el-button
        >
      </div>
      <!-- 开发人员 -->
      <div class="third common1">
        <span class="develop">
          开发人员&nbsp; :
        </span>
        <div class="developer">
          <el-image :src="developer1Avatar" class="developAvatar"></el-image>
          <span class="developerName">{{ develop1Name }}</span>
        </div>
        <div class="developer">
          <el-image :src="developer2Avatar" class="developAvatar"></el-image>
          <span class="developerName">{{ develop2Name }}</span>
        </div>
      </div>
      <!-- 测试人员 -->
      <div class="forth common1">
        <span class="develop">
          测试人员&nbsp; :
        </span>
        <div class="developer">
          <el-image :src="testerAvatar" class="developAvatar"></el-image>
          <span class="developerName">{{ testerName }}</span>
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
        // 任务编号
        IP: '',
        // 开发 & 测试人员
        develop1Name: '',
        develop2Name: '',
        testerName: '',
        // 头像暂时写死
        developer1Avatar: 'static/imgs/chenwei.jpg',
        developer2Avatar: 'static/imgs/kate.jpg',
        testerAvatar: 'static/imgs/yhh.png',
        priority: '',
        status: '',
        question: '',
        // 开始任务按钮
        startBtnDisabled: false,
        // 按钮问题变更
        buttonMsg: '',
      }
    },
    mounted () {
      // 刷新待办任务数据
      this.refleshRemainTask();
    },
    methods: {
      // 刷新待办任务数据
      refleshRemainTask () {
        let remainTasksUrl = `/questionToDo?currentIndex=${this.pagination.currentIndex}&pageSize=1`;
        this.postRequest(remainTasksUrl)
          .then((res) => {
            let data = res.data;
            console.log(data);
            let msg = data.array[0];
            // 更新任务相关信息
            this.pagination.totalNum = data.count.totalNum;
            this.IP = msg.IP;
            this.develop1Name = msg.develop1Name;
            this.develop2Name = msg.develop2Name;
            this.testerName = msg.testerName;
            // this.developer1Avatar = msg.developer1Avatar;
            // this.developer2Avatar = msg.developer2Avatar;
            // this.testerAvatar = msg.testerAvatar;
            this.priority = msg.priority;
            this.status = msg.status;
            this.question = msg.question;
            this.buttonMsg = msg.buttonMsg;
          })
          .catch((error) => {
            console.log(error);
          })
      },
      // 分页器改变
      change () {
        // console.log(this.remainTask.currentIndex)
        this.refleshRemainTask();
      },
      // 开始任务
      startTask () {
        // console.log('start')
        // 开始提交
        let statusChangeUrl = `/questionStateChange?state=${this.buttonMsg}&id=${this.IP}`;
        this.postRequest(statusChangeUrl)
          .then((res) => {
            this.startBtnDisabled = true;
            // 消息提示
            this.$message({
              message: '开始任务成功',
              type: 'success'
            });
          })
          .catch((error) => {
            console.log('error')
          })
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
      // 状态
      .status
        width 150px
        height 40px
        border-radius 20px
        line-height 40px
        text-align center
        background-color rgb(239,19,46)
        color white
      // 开启任务
      .start
        font-size 16px
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
