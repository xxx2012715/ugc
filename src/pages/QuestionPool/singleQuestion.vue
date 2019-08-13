<template>
  <div id="SingleQuestion">
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
        <el-table :data="commentsData" stripe height="597" style="width: 100%;font-size:18px">
          <!-- 头像 -->
          <el-table-column prop="头像" label="" width="130" align="right">
            <template slot-scope="scope">
              <img :src="scope.row.头像" class="avatar" />
            </template>
          </el-table-column>
          <!-- 用户名 -->
          <el-table-column prop="姓名" label="用户" width="220" align="left">
          </el-table-column>
          <!-- 日期 -->
          <el-table-column prop="时间" label="日期" width="220"  align="center">
          </el-table-column>
          <!-- 内容 -->
          <el-table-column prop="内容" label="内容" align="center" width="695">
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
        <el-table :data="processData" stripe  height="597" style="width: 100%;font-size:18px;">
          <!-- 头像 -->
          <el-table-column prop="头像" label="" width="130" align="right">
            <template slot-scope="scope">
              <img :src="scope.row.头像" class="avatar" />
            </template>
          </el-table-column>
          <!-- 用户名 -->
          <el-table-column prop="姓名" label="用户"   width="220" align="left">
          </el-table-column>
          <!-- 日期 -->
          <el-table-column prop="时间" label="日期"   width="220"  align="center">
          </el-table-column>
          <!-- 内容 -->
          <el-table-column prop="操作" label="操作记录" align="center" width="695">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    name: "SingleQuestion",
    data () {
      return {
        commentsData: [],
        processData: [],
        questionNumber:'',
      };
    },
    created(){
      this.questionNumber = this.$route.query.number;
      console.log(this.questionNumber);
      this.getCommentData();
      this.getTaskData();
    },
    methods: {
      getCommentData(){
        let url = '/getQuestionOneComment?questionid=' + this.questionNumber;
        this.postRequest(url).then((res) => {
            this.commentsData = res.data; 
            console.log(this.commentsData);
        })
        .catch((error) => {
            console.log(error);
        });
      },
      getTaskData(){
        let url = '/getQuestionOneProcess?questionid=' + this.questionNumber;
        this.postRequest(url).then((res) => {
            this.processData = res.data; 
            console.log(this.commentsData);
        })
        .catch((error) => {
            console.log(error);
        });
      }

    }
  }
</script>
<style lang="stylus" scoped>
#SingleQuestion
  margin-top 7rem
  color rgb(99,98,98)
  .tabs
    width 1300px
    height 690px
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