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
      <div class="question">
        <!-- 表单 -->
        <el-form
          label-width="80px"
          id="form"
          label-position="left"
          :rules="rules"
          ref="form"
        >
          <!-- 问题标题 -->
          <el-form-item label="问题" prop="title">
            <el-input
              v-model="form.title"
              placeholder="请填写你的问题"
            ></el-input>
          </el-form-item>
          <!-- 问题描述 -->
          <el-form-item label="描述" prop="description">
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
          <el-form-item label="关联" prop="link">
            <el-input
              v-model="form.link"
              placeholder="填写你要关联的项目,例如IP-007..."
            ></el-input>
          </el-form-item>
          <!-- 提交按钮 -->
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit('form')"
              class="formSubmit"
              >提交</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <!-- 个人信息 -->
      <el-card class="selfInfo">
        <!-- 用户信息 -->
        <div class="userInfo">
          <el-avatar class="image" :src="quesAvatar"></el-avatar>
          <span class="user">{{ quesName }}</span>
          <span class="user">{{ quesPosi }}</span>
        </div>
        <div class="info">
          <span class="quesNum">问题量: &nbsp;{{ quesNumber }}</span>
          <span class="praiseNum">被赞数: &nbsp;{{ praiseNumber }}</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ForumHead",
    data () {
      return {
        quesAvatar: '',
        quesName: '',
        quesPosi: '',
        quesNumber: 12,
        praiseNumber: 37,
        // 表单信息
        form: {
          title: '',
          description: '',
          link: '',
        },
        // 表单校验
        rules: {
          title: [
            { required: true, message: '请输入问题名称', trigger: 'blur' },
          ],
          description: [
            { required: true, message: '请输入问题描述', trigger: 'blur' },
          ],
          link: [
            { required: true, message: '请输入问题关联', trigger: 'blur' },
          ],
        }
      }
    },
    methods: {
      // 提交操作
      onSubmit (form) {
        console.log('提交')
        // 校验
        this.$refs[form].validate((valid) => {
          if (valid) {
            alert('提交成功');
            // 提交后台\
            let url = ``;
            this.postRequest(url)
              .then((res) => {
                let data = res.data;
                console.log(data)
              })
              .catch((error) => {
                console.log(error);
              });

            // 关闭窗口
            this.dialogFormVisible = false;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    mounted () {
      // 初始化用户信息
      this.quesName = localStorage.getItem('usrType');
      this.quesPosi = localStorage.getItem('usrName');
      this.quesAvatar = localStorage.getItem('avatarUrl');
      console.log(this.quesAvatar)
      // 获取用户问题数 & 点赞数

    }
  }
</script>

<style lang="stylus" scoped>
@import '~stylus/common.styl'
#ForumHead
  width 1600px
  height 550px
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
    width 90%
    align-self center
    flex-center()
    margin-top 1rem
    // 提问框
    .question
      width 850px
      height 400px
      border 1px solid lightgray
      border-radius 26px
      center()
      .el-form
        width 700px
        height 300px
        .formSubmit
          width 200px
          float right
    // 个人信息
    .selfInfo
      width 400px
      height 350px
      border 1px solid lightgray
      border-radius 26px
      flex-direction column
      // 自身
      align-self flex-start
      center()
      margin-left 7.5rem
      // background-color #FFF3E6
      .userInfo
        flex-center()
        flex-direction column
        font-size 24px
        margin-bottom 1rem
        .image
          width 160px
          height 160px
          border-radius 80px
          margin-bottom .2rem
        .user
          margin .2rem 0
      .info
        width 250px
        flex-between()
</style>