<template>
  <div id="CommentsTask">
    <!-- tabs组件 -->
    <el-tabs type="border-card" class="tabs">
      <!-- 评论栏 -->
      <el-tab-pane>
        <!-- tab -->
        <span slot="label" class="commonTab">
          <i class="el-icon-chat-line-square"></i>
          评论中心
        </span>
        <!-- 评论显示表格 -->
        <el-table
          :data="commentsData"
          stripe
          style="width: 100%;font-size:18px"
        >
          <!-- 头像 -->
          <el-table-column prop="avatar" label="" width="130" align="right">
            <template slot-scope="scope">
              <img :src="scope.row.avatar" class="avatar" />
            </template>
          </el-table-column>
          <!-- 用户名 -->
          <el-table-column prop="name" label="用户" width="180" align="left">
          </el-table-column>
          <!-- 日期 -->
          <el-table-column prop="date" label="日期" width="170" align="center">
          </el-table-column>
          <!-- 内容 -->
          <el-table-column prop="msg" label="内容" align="center" width="520">
          </el-table-column>
          <!-- 操作 -->
          <el-table-column
            prop="task"
            label="任务名"
            align="center"
            width="260"
          >
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <!-- 进程栏 -->
      <el-tab-pane label="任务中心">
        <!-- tab -->
        <span slot="label" class="commonTab">
          <i class="el-icon-loading"></i>
          进程中心
        </span>
        <!-- 任务显示表格--暂时copy评论面板 -->
        <el-table :data="processData" stripe style="width: 100%;font-size:18px">
          <!-- 头像 -->
          <el-table-column prop="avatar" label="" width="130" align="right">
            <template slot-scope="scope">
              <img :src="scope.row.avatar" class="avatar" />
            </template>
          </el-table-column>
          <!-- 用户名 -->
          <el-table-column prop="name" label="用户" width="180" align="left">
          </el-table-column>
          <!-- 日期 -->
          <el-table-column prop="date" label="日期" width="170" align="center">
          </el-table-column>
          <!-- 内容 -->
          <el-table-column
            prop="opt"
            label="操作记录"
            align="center"
            width="520"
          >
          </el-table-column>
          <!-- 操作 -->
          <el-table-column prop="task" label="任务" align="center" width="260">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    name: "CommentsTask",
    data () {
      return {
        commentsData: [
          {
            date: '2016-05-02',
            name: '陈伟',
            msg: '完成咯，真开心啊啊啊啊啊啊啊啊啊啊啊啊哈哈',
            task: '疗休养云',
            avatar: 'static/imgs/chenwei.jpg'
          }, {
            date: '2016-05-04',
            name: '徐凯特',
            msg: '完成咯，真开心',
            task: '欧E办',
            avatar: 'static/imgs/kate.jpg'
          }, {
            date: '2016-05-01',
            name: '王子威',
            msg: '完成咯，真开心',
            task: '安防数据',
            avatar: 'static/imgs/ziwei.jpg'
          }, {
            date: '2016-05-03',
            name: '谢鲁圣',
            msg: '完成咯，真开心',
            task: '沃先锋',
            avatar: 'static/imgs/avatar.jpg'
          }, {
            date: '2016-05-03',
            name: '谢鲁圣',
            msg: '完成咯，真开心',
            task: '沃当家',
            avatar: 'static/imgs/avatar.jpg'
          }, {
            date: '2016-05-03',
            name: '谢鲁圣',
            msg: '完成咯，真开心',
            task: '沃当家',
            avatar: 'static/imgs/avatar.jpg'
          }, {
            date: '2016-05-03',
            name: '谢鲁圣',
            msg: '完成咯，真开心',
            task: '沃当家',
            avatar: 'static/imgs/avatar.jpg'
          }, {
            date: '2016-05-03',
            name: '谢鲁圣',
            msg: '完成咯，真开心',
            task: '沃当家',
            avatar: 'static/imgs/avatar.jpg'
          }
        ],
        processData: [
          {
            date: '2016-05-02',
            name: '陈伟',
            opt: '项目启动',
            task: 'IP-007',
            avatar: 'static/imgs/chenwei.jpg'
          }, {
            date: '2016-05-04',
            name: '徐凯特',
            opt: '项目启动',
            task: 'IP-007',
            avatar: 'static/imgs/kate.jpg'
          }, {
            date: '2016-05-01',
            name: '王子威',
            opt: '项目启动',
            task: 'IP-007',
            avatar: 'static/imgs/ziwei.jpg'
          }, {
            date: '2016-05-03',
            name: '谢鲁圣',
            opt: '项目启动',
            task: 'IP-007',
            avatar: 'static/imgs/avatar.jpg'
          }, {
            date: '2016-05-03',
            name: '谢鲁圣',
            opt: '项目启动',
            task: 'IP-007',
            avatar: 'static/imgs/avatar.jpg'
          }, {
            date: '2016-05-03',
            name: '谢鲁圣',
            opt: '项目启动',
            task: 'IP-007',
            avatar: 'static/imgs/avatar.jpg'
          }, {
            date: '2016-05-03',
            name: '谢鲁圣',
            opt: '项目启动',
            task: 'IP-007',
            avatar: 'static/imgs/avatar.jpg'
          }, {
            date: '2016-05-03',
            name: '谢鲁圣',
            opt: '项目启动',
            task: 'IP-007',
            avatar: 'static/imgs/avatar.jpg'
          }
        ]

      };
    },
    methods: {
      handleEdit (index, row) {
        console.log(index, row);
      },
      handleDelete (index, row) {
        console.log(index, row);
      },

    }
  }
</script>
<style lang="stylus" scoped>
#CommentsTask
  margin-top 3rem
  color rgb(99,98,98)
  .tabs
    width 1300px
    height 600px
    .commonTab
      font-size 20px
    .avatar
      width 30px
      height 30px
      border-radius 15px
      transition transform 1s ease
    .avatar:hover
      transform scale(1.25)
      z-index 99
        
</style>