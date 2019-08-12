<template>
  <div class="login-wrap">
    <div class="loginModel">
      <div class="ms-title">
        <img src="../../static/imgs/nlogo.png" alt="联通logo" class="logoImg" />
        <div class="pName">项目管理交流平台</div>
      </div>
      <div class="ms-login">
        <el-form label-width="0px" class="ms-content">
          <el-col :span="24" class="lableName">账号</el-col>
          <el-form-item prop="account">
            <el-input placeholder="手机号或邮箱" v-model="usrName">
              <el-button slot="prepend" icon="el-icon-user"></el-button>
            </el-input>
          </el-form-item>
          <el-row class="lableName">
            <el-col :span="12">密码</el-col>
            <el-col :span="12" align="right"
              ><span style="color:#2b90b2">忘记密码？</span></el-col
            >
          </el-row>
          <el-form-item prop="password">
            <el-input type="password" placeholder="请输入密码" v-model="usrPwd">
              <el-button slot="prepend" icon="el-icon-lock"></el-button>
            </el-input>
          </el-form-item>
          <div class="login-btn">
            <el-button @click="submitForm()">登录</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        usrName: '',
        usrPwd: '',
      }
    },
    methods: {
      submitForm () {
        // 获取登录地址
        let url = '/doLogin?usrName=' + this.usrName + '&passWord=' + this.usrPwd;
        // let url = '/doLogin?usrName=waichan&passWord=123456';

        // 请求登录
        this.postRequest(url)
          .then((res) => {
            // console.log(data);
            // 若登录成功
            let data = res.data;
            console.log(data)
            if (data.isSuccess) {
              // 用户类型存储
              let usrType = '';
              let pathU = '';
              localStorage.setItem('userType', data.roleId);
              localStorage.setItem('usrName', data.usrName);
              localStorage.setItem('avatarUrl', data.avatarUrl);
              // 判断用户类型
              switch (data.roleId) {
                case 'rd':
                  usrType = '研发人员';
                  pathU = '/ProgrammerWorkPanel';
                  break;
                case 'pm':
                  usrType = '产品经理';
                  pathU = '/workPanel';
                  break;
                case 'test':
                  usrType = '测试人员';
                  pathU = '/workPanel';
                  break;
                case 'admin':
                  usrType = '管理员';
                  pathU = '/managerWorkPanel';
                  break;
                // 出现未知错误
                default:
                  console.log('unKnown error')

              }
              // 路由跳转
              this.$router.push({
                path: pathU
              })
            } else {
              alert('登录失败，请重新登录！')
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
    }
  }
</script>

<style lang="stylus" scoped>
@import '~stylus/common.styl';
    .login-wrap
        position relative
        width 100%
        background-image url(../../static/imgs/background.png)
        background-size 100%
        height 979px
        .loginModel
            position absolute
            left 75%
            top 45%
            margin -190px 0 0 -175px
            .ms-title
                width 100%
                line-height 50px
                text-align left
                font-size 20px
                color #fff
                display flex
                align-items center
                margin-bottom 40px
                .logoImg
                    width  85px
                    height 65px
                .pName
                    display inline-block
                    margin-left 20px
                    font-size 45px
                    font-weight 900
            .ms-login
                width 500px
                height 380px
                border-radius 5px 
                background #fff
                overflow hidden
                .ms-content
                    padding 50px 30px
                    .lableName
                        font-size 20px
                        margin-bottom 10px
                .login-btn
                    text-align center
                    margin-top 50px
                .login-btn button
                    width 100%
                    height 55px
                    margin-bottom 10px
                    font-size 20px
                    border-radius 10px
                    background #f60
                    color #fff
</style>
