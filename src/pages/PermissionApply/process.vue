<template>
  <div id="CurrentPermission">
    <div class="headLine">
      <span>申请进程</span>
    </div>
    <div class="cont">
      <el-table :data="tableData" height="200" style="width: 100%">
        <el-table-column
          prop="createTime"
          label="申请时间"
          width="320"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="applyRoleName"
          label="权限类型"
          align="center"
          width="320"
        ></el-table-column>
        <el-table-column
          prop="applyUsrName"
          label="经办管理员"
          width="320"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="applyStateName"
          label="状态"
          width="320"
          align="center"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [
          {
            date: "2019-7-31",
            type: "测试",
            admin: "陈伟",
            state: "申请成功",
          },
          // {
          //   date: "2019-7-26",
          //   type: "管理员",
          //   admin: "陈伟",
          //   state: "申请失败",
          // },
          // {
          //   date: "2019-7-26",
          //   type: "产品经理",
          //   admin: "徐凯特",
          //   state: "申请中",
          // },
          // {
          //   date: "2019-7-26",
          //   type: "管理员",
          //   admin: "吴萍萍",
          //   state: "申请成功",
          // }
        ]
      }
    },
    mounted () {
      this.getProcessInfo();
    },
    methods: {
      // 获取进程信息
      getProcessInfo () {
        let getProcessInfoUrl = `/getApplyRightProgress`;
        this.postRequest(getProcessInfoUrl)
          .then((result) => {
            // console.log('申请进程数据',result)
            this.tableData = result.data;

          }).catch((err) => {
            console.log(err)
          });
      }
    }
  };
</script>

<style lang="stylus" scoped>
@import '~stylus/common.styl';

#CurrentPermission 
  width: 1508px;
  height: 400px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 5px gray;
  color: rgb(127, 195, 181);
  margin-top: 50px;

  .headLine {
    width: 100%;
    height: 50px;
    background-color: rgb(150, 178 214);
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
    margin-left: 100px;
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

