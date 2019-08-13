<template>
  <div id="RemainTask">
    <!-- 顶栏 -->
    <div class="headLine">
      <span>待办任务</span>
    </div>
    <!-- 待办事项表 -->
    <el-table :data="tableData" stripe style="width: 100%;font-size:18px;">
      <!-- 头像 -->
      <el-table-column prop="avatar" label="" width="130" align="right">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" class="avatar" />
        </template>
      </el-table-column>
      <!-- 用户名 -->
      <el-table-column prop="usrName" label="用户" width="180" align="left">
      </el-table-column>
      <!-- 权限 -->
      <el-table-column
        prop="roleName"
        label="申请权限"
        width="170"
        align="center"
      >
      </el-table-column>
      <!-- 时间 -->
      <el-table-column
        prop="createTime"
        label="时间"
        align="center"
        width="520"
      >
      </el-table-column>
      <!-- 操作 -->
      <el-table-column label="操作" align="center" width="260">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="pass(scope.$index, scope.row)"
            type="success"
            >通过</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="refuse(scope.$index, scope.row)"
            >拒绝</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器--暂时先隐藏 -->
    <el-pagination
      v-if="false"
      layout="prev, pager, next"
      :total="pagination.page * 10"
    >
    </el-pagination>
  </div>
</template>
<script>
  export default {
    name: "RemainTask",
    data () {
      return {
        // 分页器
        pagination: {
          page: 5,
        },
        // 当前页数
        currentIndex: 1,
        // 表格内容
        tableData: []
      }
    },
    mounted () {
      this.getRemainTasks();
    },
    methods: {
      // 获取待办任务信息
      getRemainTasks () {
        let getRemainTasksUrl = `/getAdminBackLogForPage?currentIndex=${this.currentIndex}&pageSize=6`;
        this.postRequest(getRemainTasksUrl)
          .then((res) => {
            let data = res.data;
            // console.log(data);
            this.tableData = data;
          })
          .catch((error) => {
            console.log(error);
          })
      },
      pass (index, row) {
        console.log(index, row);
        this.$message({
          message: '已通过',
          type: 'success'
        });
        // 通过权限申请
        let passUrl = `/acceptApplyRight?usrAccount=waichan&applyRoleId=test`;
        this.postRequest(passUrl)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });

        // 重置当前待办任务表
        this.getRemainTasks();

      },
      refuse (index, row) {
        console.log(index, row);
      },
    }
  }
</script>
<style lang="stylus" scoped>
#RemainTask
  width 1300px
  height 480px
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
  .avatar
    width 30px
    height 30px
    border-radius 15px
    transition transform 1s ease
    .avatar:hover
      transform scale(1.25)
      z-index 99

</style>