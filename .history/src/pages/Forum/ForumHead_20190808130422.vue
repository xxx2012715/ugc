<template>
  <div id="ForumHead">
    <!-- 工作面板 -->
    <div class="nav">
      <span class="iconfont home">&#xe60b;</span>
      <span class="depart">/</span>
      <span class="panelTit">论坛</span>
    </div>
    <!-- 内容部分 -->
    <div class="cont">
      <!-- 提问栏 -->
      <div class="question">
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLabelAlign"
        >
          <el-form-item label="名称" label-width="form.labelWidth">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-input v-model="form.description"></el-input>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input v-model="form.link"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <!-- 个人信息 -->
      <div class="selfInfo">
        selfInfo
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ForumHead",
    data () {
      return {
        form: {
          title: '',
          description: '',
          link: '',
          labelWidth: '100px'
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '~stylus/common.styl'
#ForumHead
  width 1600px
  height 450px
  display flex
  flex-direction column
  // 顶边栏
  .nav
    width 130px
    flex-center()
    justify-content space-between
    margin 2rem 3rem
    .home
      font-size 20px
      cursor pointer
      font-weight bold
    .depart
      color gray
    .panelTit
      color blue
      cursor pointer
  // 内容部分
  .cont
    width 100%
    height 450px
    flex-around()
    margin-top 2rem
    border 1px solid black
    // 提问框
    .question
      width 900px
      height 450px
      border 1px solid black
    // 个人信息
    .selfInfo
      width 450px
      height 400px
      border 1px solid black
</style>