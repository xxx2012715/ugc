<template>
  <div id="apply">
    <div class="headLine">
      <span>权限申请</span>
    </div>
    <div class="cont">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item class="department" label="申请部门" prop="dep">
          <el-select v-model="ruleForm.dep" placeholder="请选择申请部门">
            <el-option label="研发部" value="develop"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="department" label="权限类型" prop="type">
          <el-select v-model="ruleForm.type" placeholder="请选择权限类型">
            <el-option label="产品经理" value="PM"></el-option>
            <el-option label="研发" value="programmer"></el-option>
            <el-option label="测试" value="tester"></el-option>
            <el-option label="管理员" value="admin"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="经办管理员" prop="desc">
          <el-input
            resize="none"
            class="text"
            type="textarea"
            v-model="ruleForm.desc"
          ></el-input>
        </el-form-item>
        <el-form-item class="post">
          <el-button
            class="submit"
            type="primary"
            @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button class="repo" @click="resetForm('ruleForm')"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        ruleForm: {
          dep: "",
          type: "",
          desc: ""
        },
        rules: {
          dep: [{ required: true, message: "请选择申请部门", trigger: "change" }],
          type: [
            { required: true, message: "请选择权限类型", trigger: "change" }
          ],
          desc: [{ required: true, message: "请填写经办管理员", trigger: "blur" }]
        }
      };
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate(valid => {
          // 字符转换
          let manager = '';
          switch (this.ruleForm.type) {
            case '产品经理':
              manager = 'pm';
              break;
            case '研发':
              manager = 'rd';
              break;
            case '测试':
              manager = 'test';
              break;
            case '管理员':
              manager = 'admin';
              break;
            default:
              console.log('权限类型错误');
              break;
          }
          if (valid) {
            alert("申请提交成功!");
            let applyUrl = `/saveApplyRightProgress?applyRoleId=${manager}&applyUsrAccount=${this.ruleForm.desc}`
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm (formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>


<style lang="stylus" scoped>
#apply {
  width: 550px;
  height: 400px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 5px gray;
  color: rgb(127, 195, 181);
  margin-right: -60rem;
  margin-top: -402px;

  .headLine {
    width: 100%;
    height: 50px;
    background-color: rgb(240, 182, 127);
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      margin-left: 1rem;
      color: #fff;
    }
  }

  .cont {
    margin-top: 50px;
    margin-left: 80px;

    .text {
      width: 217px;
    }

    .post {
      margin-top: 30px;

      .submit {
        border: none;
        outline: none;
        background-color: rgb(240, 182, 127);
      }

      .repo {
        margin-left: 30px;
      }
    }
  }
}
</style>
