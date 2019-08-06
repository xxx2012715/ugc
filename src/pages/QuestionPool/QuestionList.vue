<template>
  <div id="QuestionList">
    <!-- 顶栏 -->
    <div class="headLine">
      <span>问题池</span>
    </div>
    <!-- 表格 -->
    <div class="main" style="width: 1500px;height:400px;">
        <div class="tableTitle">
            <el-form label-width="80px">
                <el-row>
                    <el-col :span="4" :offset="1">
                        <el-form-item label="类型">
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="创建人">
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="时间">
                            <el-row>
                                <el-col  :span="10">
                                    <el-date-picker type="date" value-format="yyyy-MM-dd" format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
                                </el-col>
                                <el-col  :span="4" align="center">
                                    <span>——</span>
                                </el-col>
                                <el-col  :span="10">
                                    <el-date-picker type="date" value-format="yyyy-MM-dd" format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
                                </el-col>
                            </el-row>
                        </el-form-item>      
                    </el-col> 
                    <el-col :span="3" align="center">
                        <el-button class="handle-del mr10">筛选</el-button>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <el-table :data="tableData" stripe style="width: 100%;font-size:18px">
          <!-- 用户名 -->
          <el-table-column prop="number" label="编号" align="center">
            <template slot-scope="scope">
                <a @click="checkDetail()" style="cursor:pointer;color:#007aa3;">{{scope.row.number}}</a>
            </template>
          </el-table-column>
          <!-- 名称 -->
          <el-table-column prop="name" label="名称" align="center">
          </el-table-column>
          <!-- 类型 -->
          <el-table-column prop="type" label="类型" align="center">
               <template slot-scope="scope">
                   <div style="color:#fff;width:145px;height:28px;background:#007aa3;border-radius:15px;margin:0 auto;">{{scope.row.type}}</div>
               </template>
          </el-table-column>
          <!-- 创建人 -->
          <el-table-column prop="person" label="创建人" align="center">
          </el-table-column>
          <!-- 时间 -->
          <el-table-column prop="date" label="时间" align="center">
          </el-table-column>
        </el-table>
        <!-- 分页器 -->
        <div class="pagination">
            <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "QuestionList",
    data () {
      return {
        tableData: [
            {
                number: 'IP-078',
                name: '移动端ios端修改',
                type: '移动端ios问题',
                person: '苏宸',
                date: '2019/7/26'
            }, {
               number: 'IP-078',
                name: '移动端ios端修改',
                type: '移动端ios问题',
                person: '苏宸',
                date: '2019/7/26'
            }, {
                number: 'IP-078',
                name: '移动端ios端修改',
                type: '移动端ios问题',
                person: '苏宸',
                date: '2019/7/26'
            }, {
                number: 'IP-078',
                name: '移动端ios端修改',
                type: '移动端ios问题',
                person: '苏宸',
                date: '2019/7/26'
            }, {
               number: 'IP-078',
                name: '移动端ios端修改',
                type: '移动端ios问题',
                person: '苏宸',
                date: '2019/7/26'
            }, {
               number: 'IP-078',
                name: '移动端ios端修改',
                type: '移动端ios问题',
                person: '苏宸',
                date: '2019/7/26'
            },
        ]
      };
    },
    methods:{
        checkDetail(){
            this.$router.push({
                path: '/questionDetail'
            })
        }
    }
  }
</script>
<style lang="stylus" scoped>
@import '~stylus/common.styl'
#QuestionList
  width 1500px
  height 600px
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