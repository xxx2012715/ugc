<template>
  <div id="WorkPanel">
    <div class="headEmpty"></div>
    <!-- 顶栏 -->
    <common-head @openDialog="createQuestion"></common-head>
    <!-- 左边tab栏 -->
    <work-menu></work-menu>
    <div class="cont">
      <!-- 路由加载 -->
      <keep-alive>
        <router-view v-if="isRouterAlive"></router-view>
      </keep-alive>
    </div>
    <div class="empty"></div>

    <!-- 创建问题弹出对话框 -->
    <el-dialog title="创建问题" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form">
        <!-- 问题名称 -->
        <el-form-item
          label="问题名称"
          :label-width="formLabelWidth"
          prop="name"
        >
          <el-input
            autofocus
            v-model="form.name"
            autocomplete="off"
            focus
          ></el-input>
        </el-form-item>
        <!-- 部门--固定，不传 -->
        <el-form-item
          label="部门"
          :label-width="formLabelWidth"
          prop="department"
        >
          <el-select v-model="form.department" placeholder="请选择部门">
            <el-option label="研发部" value="研发"></el-option>
          </el-select>
        </el-form-item>
        <!-- 问题类型 -->
        <el-form-item
          label="问题类型"
          :label-width="formLabelWidth"
          prop="type"
        >
          <el-select v-model="form.type" placeholder="请选择问题类型">
            <el-option label="移动端IOS" value="移动端IOS"></el-option>
            <el-option label="移动端Android" value="移动端Android"></el-option>
            <el-option label="大数据研发" value="大数据研发"></el-option>
            <el-option label="物联网研发" value="物联网研发"></el-option>
          </el-select>
        </el-form-item>
        <!-- 问题描述 -->
        <el-form-item
          label="问题描述"
          :label-width="formLabelWidth"
          prop="description"
        >
          <el-input type="textarea" v-model="form.description"></el-input>
        </el-form-item>
        <!-- 优先级 -->
        <el-form-item
          label="优先级"
          :label-width="formLabelWidth"
          prop="priority"
        >
          <el-select v-model="form.priority" placeholder="请选择优先级">
            <el-option label="高" value="高"></el-option>
            <el-option label="中" value="中"></el-option>
            <el-option label="低" value="低"></el-option>
          </el-select>
        </el-form-item>
        <!-- 附件--disabled -->
        <el-form-item label="附件" :label-width="formLabelWidth">
          <el-input disabled></el-input>
        </el-form-item>
        <!-- 开发人员 -->
        <el-form-item
          label="开发人员"
          :label-width="formLabelWidth"
          prop="developer"
        >
          <el-input v-model="form.developer" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 测试人员 -->
        <el-form-item
          label="测试人员"
          :label-width="formLabelWidth"
          prop="tester"
        >
          <el-input v-model="form.tester" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 链接问题 -->
        <el-form-item
          label="链接问题"
          :label-width="formLabelWidth"
          prop="linkQuestion"
        >
          <el-input v-model="form.linkQuestion" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <!-- 两个按钮 -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import CommonHead from '@/components/CommonHead'
  import WorkMenu from '@/components/WorkMenu'


  export default {
    name: 'WorkPanel',
    provide () {
      return {
        reload: this.reload
      }
    },
    data () {
      return {
        // 页面刷新
        isRouterAlive: true,
        // 表单可见性
        dialogFormVisible: false,
        // 表单内容
        form: {
          name: '',
          type: '',
          department: '',
          description: '',
          priority: '',
          developer: '',
          tester: '',
          linkQuestion: '',

        },
        // 表单验证
        rules: {
          name: [
            { required: true, message: '请输入问题名称', trigger: 'blur' },
          ],
          type: [
            { required: true, message: '请选择问题类型', trigger: 'blur' },
          ],
          department: [
            { required: true, message: '请选择部门', trigger: 'blur' },
          ],
          description: [
            { required: true, message: '请输入问题描述', trigger: 'blur' },
          ],
          priority: [
            { required: true, message: '请选择优先级', trigger: 'blur' },
          ],
          developer: [
            { required: true, message: '请输入开发人员', trigger: 'blur' },
          ],
          tester: [
            { required: true, message: '请输入测试人员', trigger: 'blur' },
          ],
          linkQuestion: [
            { required: true, message: '请输入链接问题', trigger: 'blur' },
          ],
        },
        // 标签宽度
        formLabelWidth: '80px'
      }
    },
    components: {
      CommonHead,
      WorkMenu,
    },
    methods: {
      // 页面刷新
      reload () {
        this.isRouterAlive = false
        this.$nextTick(function () {
          this.isRouterAlive = true
        })
      },
      // 创建问题打开面板
      createQuestion () {
        this.dialogFormVisible = true;
      },
      // 提交表单
      onSubmit (form) {
        // 校验
        this.$refs[form].validate((valid) => {
          if (valid) {
            alert('提交成功');
            // 提交后台\
            let url = `/questionCreate?question=${this.form.name}&dept=${this.form.department}&type=${this.form.type}&description=${this.form.description}&priority=${this.form.priority}&pm=&dev=${this.form.developer}&tester=${this.form.tester}&connect=${this.form.linkQuestion}`;
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
        console.log('submit!');

      }
    }

  }
</script>

<style scoped lang="stylus">
@import '~stylus/common.styl'
#WorkPanel
  font-size 20px
  .headEmpty
    width 100%
    height 60px
  .cont
    display flex
    padding-bottom 150px
  .empty
    width 100%
    height 150px
      
</style>