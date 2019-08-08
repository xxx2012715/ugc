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
        <!-- 表单 -->
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLabelAlign"
          id="form"
          label-position="top"
        >
          <!-- 问题标题 -->
          <el-form-item label="问题">
            <el-input
              v-model="form.title"
              placeholder="请填写你的问题"
            ></el-input>
          </el-form-item>
          <!-- 问题描述 -->
          <el-form-item label="描述">
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请对你的问题补充描述"
              v-model="form.description"
              resize="none"
            >
            </el-input>
          </el-form-item>
          <!-- 问题关联项目 -->
          <el-form-item label="关联">
            <el-input
              v-model="form.link"
              placeholder="填写你要关联的项目,例如IP-007..."
            ></el-input>
          </el-form-item>
          <!-- 提交按钮 -->
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
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
  font-size 20px
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
      border 1px solid lightgray
      border-radius 26px
      center()
      #form
        width 750px
        height 450px
    // 个人信息
    .selfInfo
      width 450px
      height 400px
      border 1px solid black
</style>