<template>
  <div id="QuestionList">
    <!-- 顶栏 -->
    <div class="headLine">
      <span>问题池</span>
    </div>
    <!-- 表格 -->
    <div class="main" style="width: 1500px;height:400px;">
      <div class="tableTitle">
        <el-form ref="form" :model="form" label-width="80px">
          <el-row>
            <el-col :span="4" :offset="1">
              <el-form-item label="类型">
                <el-select v-model="form.type">
                  <el-option
                    key="移动端ios问题"
                    label="移动端ios问题"
                    value="移动端ios问题"
                  ></el-option>
                  <el-option
                    key="移动端安卓问题"
                    label="移动端安卓问题"
                    value="移动端安卓问题"
                  ></el-option>
                  <el-option
                    key="大数据研发问题"
                    label="大数据研发问题"
                    value="大数据研发问题"
                  ></el-option>
                  <el-option
                    key="物联网研发问题"
                    label="物联网研发问题"
                    value="物联网研发问题"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="创建人">
                <el-input v-model="form.writer"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="时间">
                <el-row>
                  <el-col :span="10">
                    <el-date-picker
                      type="date"
                      value-format="yyyy-MM-dd"
                      format="yyyy-MM-dd"
                      style="width: 100%;"
                      v-model="form.data1"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="4" align="center">
                    <span>——</span>
                  </el-col>
                  <el-col :span="10">
                    <el-date-picker
                      type="date"
                      value-format="yyyy-MM-dd"
                      format="yyyy-MM-dd"
                      style="width: 100%;"
                      v-model="form.data2"
                    ></el-date-picker>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-col>
            <el-col :span="3" align="center">
              <el-button class="handle-del mr10" @click="getAllData(1)"
                >筛选</el-button
              >
            </el-col>
          </el-row>
        </el-form>
      </div>
      <el-table
        :data="tableData"
        stripe
        style="width: 98%;font-size:18px;margin-left:1%"
      >
        <!-- 用户名 -->
        <el-table-column prop="编号" label="编号" width="240" align="center">
          <template slot-scope="scope">
            <a
              @click="checkDetail(scope.row.编号)"
              style="cursor:pointer;color:#007aa3;"
              >{{ scope.row.编号 }}</a
            >
          </template>
        </el-table-column>
        <!-- 名称 -->
        <el-table-column prop="名称" label="名称" width="280" align="center">
        </el-table-column>
        <!-- 类型 -->
        <el-table-column prop="类型" label="类型" width="320" align="center">
          <template slot-scope="scope">
            <div
              style="color:#fff;width:145px;height:28px;background:#007aa3;border-radius:15px;margin:0 auto;"
            >
              {{ scope.row.类型 }}
            </div>
          </template>
        </el-table-column>
        <!-- 创建人 -->
        <el-table-column
          prop="创建人"
          label="创建人"
          width="220"
          align="center"
        >
        </el-table-column>
        <!-- 时间 -->
        <el-table-column prop="时间" label="时间" width="410" align="center">
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <div class="pagination">
        <el-pagination
          layout="prev, pager, next"
          :total="total"
          :current-page.sync="currentIndex"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "QuestionList",
    data () {
      return {
        form: {
          type: '',
          writer: '',
          data1: '',
          data2: '',
        },
        tableData: [],
        currentIndex: '1',
        pageSize: '10',
        total: ''
      };
    },
    created () {
      this.getAllData();
    },
    methods: {
      getAllData (flag) {
        // 若为空
        if (this.form.type == '' || this.form.writer == '' || this.form.data1 == '' || this.form.data2 == '') {

        }
        if (flag == 1) {
          this.currentIndex = 1;
        }
        let url = '/screen?type=' + this.form.type + '&writer=' + this.form.writer + '&date1=' + this.form.data1 + '&date2=' + this.form.data2 + '&currentIndex=' + this.currentIndex + '&pageSize=' + this.pageSize;
        this.getRequest(url).then((res) => {
          this.tableData = res.data.array;
          this.total = res.data.count.总数;
        })
          .catch((error) => {
            console.log(error);
          });
      },
      handleCurrentChange (page) {
        // 跳转页数
        console.log(page);
        //获取当前页
        this.currentIndex = page;
        this.getAllData();
      },
      checkDetail (number) {
        let questionNumber = number;
        console.log(questionNumber);
        this.$router.push({
          path: '/questionDetail',
          query: {
            number: questionNumber
          }
        })
      },
    }
  }
</script>
<style lang="stylus" scoped>
@import '~stylus/common.styl'
#QuestionList
  width 1500px
  height 815px
  border 1px solid lightgray
  margin-top 3rem
  display flex
  flex-direction column
  align-items center
  color rgb(99,98,98)
  margin 150px auto
  .headLine
    width 100%
    height 40px
    background-color rgb(245,245,245)
    display flex
    justify-content space-between
    align-items center
    text-indent 1rem
  .main
    margin-top 1rem 
    .tableTitle
        margin-top 20px
        margin-bottom 10px
        .el-form-item
            .el-form-item__label
                font-size 20px !important
        .handle-del
            background #007aa3
            color #fff
            font-size 18px
            width 100px
            border-radius 20px
            border none
     .pagination
        display flex
        justify-content flex-end
        margin 2rem
</style>