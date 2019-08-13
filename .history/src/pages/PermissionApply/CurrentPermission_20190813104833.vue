<template>
  <div id="CurrentPermission">
    <div class="headLine">
      <span>现有权限</span>
    </div>
    <div class="cont">
      <el-table :data="tableData" height="200" style="width: 100%">
        <el-table-column
          prop="name"
          label="权限名称"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="获得时间"
          width="180"
        ></el-table-column>
        <el-table-column prop="avatar" label="" width="130" align="right">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" class="avatar" />
          </template>
        </el-table-column>
        <el-table-column
          prop="admin"
          label="经办管理员"
          width="180"
        ></el-table-column>
        <el-table-column prop="act" label="操作" width="180"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CurrentPermission',
    data () {
      return {
        tableData: [
          {
            avatar: "static/imgs/chenwei.jpg",
            name: "产品经理",
            date: "2019-7-26",
            admin: "陈伟",
            act: "删除此权限"
          },
          {
            name: "管理员",
            date: "2019-7-26",
            admin: "陈伟",
            act: "删除此权限",
            avatar: "static/imgs/chenwei.jpg"
          },
          {
            name: "产品经理",
            date: "2019-7-26",
            admin: "陈伟",
            act: "删除此权限",
            avatar: "static/imgs/chenwei.jpg"
          },
          {
            name: "测试",
            date: "2019-7-26",
            admin: "易杭杭",
            act: "删除此权限",
            avatar: "static/imgs/chenwei.jpg"
          }
        ]
      };
    },
    mounted () {
      // 现有权限数据
      let currentPermissionUrl = ``
    }
  };
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

