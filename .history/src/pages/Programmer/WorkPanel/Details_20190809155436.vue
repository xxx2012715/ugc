<template>
  <div id="Details">
    <!-- tabs组件 -->
    <el-tabs type="border-card" class="tabs">
      <!-- 评论栏 -->
      <el-tab-pane>
        <!-- tab -->
        <span slot="label" class="commonTab">
          <span class="iconfont">&#xe654;</span>
          <!-- <i class="el-icon-chat-line-square"></i> -->
          待开发
        </span>
        <!-- 评论显示表格 -->
        <el-table :data="tableData" stripe style="width: 100%;font-size:18px">
          <!-- 编号 -->
          <el-table-column
            prop="no"
            label="编号"
            width="200"
            align="left"
            class="blue"
          ></el-table-column>
          <!-- 优先级 -->
          <el-table-column
            prop="pior"
            label="优先级"
            width="200"
            align="center"
            class="red"
          >
            <i class="el-icon-top"></i>
            <i class="el-icon-top"></i>
          </el-table-column>
          <!-- 测试头像 -->
          <el-table-column prop="avatarTester" label width="250" align="right">
            <template slot-scope="scope">
              <img :src="scope.row.avatarTester" class="avatar" />
            </template>
          </el-table-column>
          <!-- 测试人员 -->
          <el-table-column
            prop="tester"
            label="测试人员"
            align="left"
            width="150"
          ></el-table-column>
          <!-- 产品头像 -->
          <el-table-column prop="avatarPM" label width="250" align="right">
            <template slot-scope="scope">
              <img :src="scope.row.avatarPM" class="avatar" />
            </template>
          </el-table-column>
          <!-- 产品经理 -->
          <el-table-column
            prop="pm"
            label="产品经理"
            align="left"
            width="150"
          ></el-table-column>
        </el-table>
      </el-tab-pane>

      <!-- 开发中 -->
      <el-tab-pane label="开发中">
        <!-- tab -->
        <span slot="label" class="commonTab">
          <span class="iconfont">&#xe60c;</span>
          <!-- <i class="el-icon-loading"></i> -->
          开发中
        </span>
        <!-- 任务显示表格--暂时copy评论面板 -->
        <el-table :data="tableData" stripe style="width: 100%;font-size:18px">
          <!-- 编号 -->
          <el-table-column
            prop="no"
            label="编号"
            width="180"
            align="left"
          ></el-table-column>
          <!-- 优先级 -->
          <el-table-column
            prop="pior"
            label="优先级"
            width="170"
            align="center"
          ></el-table-column>
          <!-- 测试头像 -->
          <el-table-column prop="avatar" label width="130" align="right">
            <template slot-scope="scope">
              <img :src="scope.row.avatar" class="avatar" />
            </template>
          </el-table-column>
          <!-- 测试人员 -->
          <el-table-column
            prop="tester"
            label="测试人员"
            align="center"
            width="520"
          ></el-table-column>
          <!-- 产品头像 -->
          <el-table-column prop="avatar" label width="130" align="right">
            <template slot-scope="scope">
              <img :src="scope.row.avatar" class="avatar" />
            </template>
          </el-table-column>
          <!-- 产品经理 -->
          <el-table-column
            prop="pm"
            label="产品经理"
            align="center"
            width="520"
          ></el-table-column>
        </el-table>
      </el-tab-pane>

      <!-- 测试中 -->
      <el-tab-pane label="测试中">
        <!-- tab -->
        <span slot="label" class="commonTab">
          <span class="iconfont">&#xe600;</span>
          <!-- <i class="el-icon-loading"></i> -->
          测试中
        </span>
        <!-- 任务显示表格--暂时copy评论面板 -->
        <el-table :data="tableData" stripe style="width: 100%;font-size:18px">
          <!-- 编号 -->
          <el-table-column
            prop="no"
            label="编号"
            width="180"
            align="left"
          ></el-table-column>
          <!-- 优先级 -->
          <el-table-column
            prop="pior"
            label="优先级"
            width="170"
            align="center"
          ></el-table-column>
          <!-- 测试头像 -->
          <el-table-column prop="avatarTester" label width="130" align="right">
            <template slot-scope="scope">
              <img :src="scope.row.avatar" class="avatar" />
            </template>
          </el-table-column>
          <!-- 测试人员 -->
          <el-table-column
            prop="tester"
            label="测试人员"
            align="center"
            width="520"
          ></el-table-column>
          <!-- 产品头像 -->
          <el-table-column prop="avatarPM" label width="130" align="right">
            <template slot-scope="scope">
              <img :src="scope.row.avatar" class="avatar" />
            </template>
          </el-table-column>
          <!-- 产品经理 -->
          <el-table-column
            prop="pm"
            label="产品经理"
            align="center"
            width="520"
          ></el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="待上线">
        <!-- tab -->
        <span slot="label" class="commonTab">
          <span class="iconfont">&#xe629;</span>
          <!-- <i class="el-icon-loading"></i> -->
          待上线
        </span>
        <!-- 任务显示表格--暂时copy评论面板 -->
        <el-table :data="tableData" stripe style="width: 100%;font-size:18px">
          <!-- 头像 -->

          <!-- 编号 -->
          <el-table-column
            prop="no"
            label="编号"
            width="180"
            align="left"
          ></el-table-column>
          <!-- 优先级 -->
          <el-table-column
            prop="pior"
            label="优先级"
            width="170"
            align="center"
          ></el-table-column>
          <!-- 测试头像 -->
          <el-table-column prop="avatarTester" label width="130" align="right">
            <template slot-scope="scope">
              <img :src="scope.row.avatarTester" class="avatar" />
            </template>
          </el-table-column>
          <!-- 测试人员 -->
          <el-table-column
            prop="tester"
            label="测试人员"
            align="center"
            width="520"
          ></el-table-column>
          <!-- 产品头像 -->
          <el-table-column prop="avatarPM" label width="130" align="right">
            <template slot-scope="scope">
              <img :src="scope.row.avatarPM" class="avatar" />
            </template>
          </el-table-column>
          <!-- 产品经理 -->
          <el-table-column
            prop="pm"
            label="产品经理"
            align="center"
            width="520"
          ></el-table-column>
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
        tableData: [
          {
            no: "IP-007",
            pior: "陈伟",
            tester: "陈伟",
            pm: "徐凯特",
            avatarTester: "static/imgs/chenwei.jpg",
            avatarPM: "static/imgs/kate.jpg"
          },
          {
            no: "IP-007",
            pior: "陈伟",
            tester: "陈伟",
            pm: "徐凯特",
            avatarTester: "static/imgs/chenwei.jpg",
            avatarPM: "static/imgs/kate.jpg"
          }
        ]
      };
    }
  };
</script>
<style lang="stylus" scoped>
#Details {
  margin-top: 2rem;
  color: rgb(99, 98, 98);
  margin-left 160px

  .tabs {
    width: 1300px;
    height: 600px;

    .commonTab {
      font-size: 20px;
    }

    .red{
      color:rgb(225,0,0)
    }

    .blue{
      color rgb(73,143,255);
    }

    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      transition: transform 1s ease;
    }

    .avatar:hover {
      transform: scale(1.25);
      z-index: 99;
    }
  }
}
</style>