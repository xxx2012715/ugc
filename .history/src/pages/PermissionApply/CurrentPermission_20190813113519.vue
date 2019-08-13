<template>
  <div id="CurrentPermission">
    <div class="headLine">
      <span>现有权限</span>
    </div>
    <div class="cont">
      <el-table :data="tableData" height="220" style="width: 100%">
        <el-table-column
          prop="applyRoleName"
          label="权限名称"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="createTime"
          label="获得时间"
          width="200"
        ></el-table-column>
        <!-- <el-table-column prop="avatar" label="" width="130" align="right">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" class="avatar" />
          </template>
        </el-table-column> -->
        <el-table-column
          prop="applyUsrName"
          label="经办管理员"
          width="200"
        ></el-table-column>
        <el-table-column prop="删除此权限" label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >
              移除
            </el-button>
          </template></el-table-column
        >
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CurrentPermission',
    data () {
      return {
        tableData: []
      };
    },
    inject: ['reload'],
    mounted () {
      this.getPermissionInfo();
    },
    methods: {
      // 获取权限信息
      getPermissionInfo () {
        let currentPermissionUrl = `/getOwnedRightForPage?currentIndex=1&pageSize=4`;
        this.postRequest(currentPermissionUrl)
          .then((res) => {
            console.log(res);
            this.tableData = res.data;
          })
          .catch((error) => {
            console.log('error')
          })
      },
      // 移除权限
      deleteRow (rowData) {
        //   let deletePermissionUrl = `/deleteRoleByApplyRoleId?roleId=${}`;
        //   this.postRequest(deletePermissionUrl)
        //     .then((res) => {
        //       console.log(res.data);
        //       // 消息提醒
        //       if (res.data.success == 1) {
        //         this.$message({
        //           message: '移除权限成功',
        //           type: 'success'
        //         });
        //         // 刷新面板
        //         this.reload();
        //       } else {
        //         this.$message.error('拒绝失败');
        //       }

        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
        //   // 重置当前待办任务表
        //   this.getRemainTasks();
        // }
      }
    }
</script>

<style lang="stylus" scoped>
@import url('//unpkg.com/element-ui@2.11.0/lib/theme-chalk/index.css');
@import '~stylus/common.styl';

#CurrentPermission 
  width: 850px;
  height: 400px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 5px gray;
  color: rgb(127, 195, 181);
  margin-left: -650px;

  .headLine {
    width: 100%;
    height: 50px;
    background-color: rgb(127, 195, 181);
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      margin-left: 1rem;
      color: #fff;
    }
  }

  .cont
    height: 300px;
    margin-top: 1.5rem;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .avatar
      width 30px
      height 30px
      border-radius 15px
      transition transform 1s ease
    .avatar:hover
      transform scale(1.25)
      z-index 99

</style>

