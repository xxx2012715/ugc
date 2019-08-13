<template>
  <div id="QuestionOperation">
    <!-- 工作面板 -->
    <div class="nav">
      <span class="iconfont home">&#xe60b;</span>
      <span class="depart">/</span>
      <span class="panelTit">问题池</span>
      <span class="depart">/</span>
      <span class="panelTit">{{questionNumber}} {{questionName}}</span>
    </div>
    <div class="content">
      <div class="content-title">{{questionNumber}} {{questionName}}</div>
      <div class="button-area">
        <el-row>
          <el-col :span="3" align="center">
              <el-button class="allBtn" v-if="followVisible" round>关注</el-button>
          </el-col>
          <el-col :span="3" align="center">
              <el-button class="allBtn" v-if="commentVisible" round @click="comment()">评论</el-button>
          </el-col>
          <el-col :span="3" align="center">
              <el-button class="allBtn" v-if="modifyVisible" round @click="modify()">编辑</el-button>
          </el-col>
          <el-col :span="3" align="center">
              <el-button class="allBtn" v-if="linkVisible" round @click="linkTask()">链接任务</el-button>
          </el-col>
          <el-col :span="3" align="center">
              <el-button class="allBtn" v-if="startVisible" @click="handleTask()" round>{{taskName}}</el-button>
          </el-col>
          <el-col :span="3" align="center">
              <el-button class="allBtn" v-if="closeVisible" round>关闭任务</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="detail">
        <div class="detail-left">
          <!-- 详情 -->
          <section>
            <el-row>
              <el-col :span="2">详情</el-col>
              <el-col :span="20"><hr></el-col>
            </el-row>
            <el-row>
              <el-col :span="10" :offset="2">类型：{{type}}</el-col>
              <el-col :span="10">状态：{{status}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="10" :offset="2">优先级：<span style="color:red">{{priority}}</span></el-col>
              <el-col :span="10">解决结果：{{result}}</el-col>
            </el-row>
          </section>
          <!-- 描述 -->
          <section>
            <el-row>
              <el-col :span="2">描述</el-col>
              <el-col :span="20"><hr></el-col>
            </el-row>
            <el-row>
              <el-col :offset="2">{{describe}}</el-col>
            </el-row>
          </section>
          <!-- 链接任务 -->
          <section>
            <el-row>
              <el-col :span="3">链接任务</el-col>
              <el-col :span="19"><hr></el-col>
            </el-row>
            <el-row>
              <el-col :offset="2"><a style="color:blue;cursor:pointer;" target="_blank" @click="goLinkTask()">{{linkConnect}}</a></el-col>
            </el-row>
          </section>
          <!-- 附件 -->
          <section>
            <el-row>
              <el-col :span="2">附件</el-col>
              <el-col :span="20"><hr></el-col>
            </el-row>
            <el-row>
              <el-col :span="16" :offset="2"><a style="color:blue">需求稿.zip</a></el-col>
              <el-col :span="4">{{createTime}}</el-col>
            </el-row>
          </section>
          <!-- 动态 -->
          <section>
            <el-row>
              <el-col :span="2">动态</el-col>
              <el-col :span="20"><hr></el-col>
            </el-row>
          </section>
        </div>
        <div class="detail-right">
          <!-- 人员 -->
          <section>
            <el-row style="line-height:1" class="headArea">
              <el-col :span="3">人员</el-col>
              <el-col :span="21"><hr></el-col>
            </el-row>
            <el-row style="margin-top:-25px" class="headArea">
              <el-col :span="5" :offset="3">产品经理：</el-col>
              <el-col :span="4" :offset="1">
                <img class="headImg" :src="pmImg" alt="">
              </el-col>

              
              <el-col :span="5">{{productManager}}</el-col>
            </el-row>
            <el-row class="headArea">
              <el-col :span="5" :offset="3">研发：</el-col>
              <el-col :span="4" :offset="1">
                <img class="headImg" :src="devImg1" alt="">
              </el-col>
              <el-col :span="5">{{developer1}}</el-col>
            </el-row>
            <el-row class="headArea">
              <el-col :span="4" :offset="9">
                <img class="headImg" :src="devImg2" alt="">
              </el-col>
              <el-col :span="5">{{developer2}}</el-col>
            </el-row>
             <el-row class="headArea">
              <el-col :span="5" :offset="3">测试：</el-col>
              <el-col :span="4" :offset="1">
                <img class="headImg" :src="testImg" alt="">
              </el-col>
              <el-col :span="5">{{tester}}</el-col>
            </el-row>
          </section>
          <!-- 时间 -->
          <section style="margin-top: 25px;">
            <el-row class="timeArea">
              <el-col :span="3">时间</el-col>
              <el-col :span="21"><hr></el-col>
            </el-row>
            <el-row class="timeArea">
              <el-col :offset="3">创建时间：{{createTime}}</el-col>
            </el-row>
            <el-row class="timeArea">
              <el-col :offset="3">最近修改时间：{{modifyTime}}</el-col>
            </el-row>
          </section>
        </div>
      </div>
    </div>
    <div class="comment">
      <single-question></single-question>
    </div>
    <!-- 评论弹窗 -->
    <el-dialog title="评论" :visible.sync="commentFormVisible" width="40%">
      <el-row>
        <el-col :span="20" :offset="2">
          <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 6}" placeholder="请输入内容" v-model="commentContent"></el-input>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="commentFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitComment()">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑问题 -->
    <el-dialog title="编辑问题" :visible.sync="dialogFormVisible">
      <el-form>
        <!-- 问题名称 -->
        <el-form-item label="问题名称" :label-width="formLabelWidth">
          <el-input autofocus autocomplete="off" v-model="questionName" focus></el-input>
        </el-form-item>
        <!-- 部门--固定，不传 -->
        <el-form-item label="部门" :label-width="formLabelWidth">
          <el-select placeholder="请选择部门" v-model="dept">
            <el-option label="研发部" value="研发"></el-option>
          </el-select>
        </el-form-item>
        <!-- 问题类型 -->
        <el-form-item label="问题类型" :label-width="formLabelWidth">
          <el-select placeholder="请选择问题类型"  v-model="type">
            <el-option label="移动端IOS" value="移动端IOS"></el-option>
            <el-option label="移动端Android" value="移动端Android"></el-option>
            <el-option label="大数据研发" value="大数据研发"></el-option>
            <el-option label="物联网研发" value="物联网研发"></el-option>
          </el-select>
        </el-form-item>
        <!-- 问题描述 -->
        <el-form-item label="问题描述" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="describe"></el-input>
        </el-form-item>
        <!-- 优先级 -->
        <el-form-item label="优先级" :label-width="formLabelWidth">
          <el-select placeholder="请选择优先级" v-model="priority">
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
        <el-form-item label="开发人员" :label-width="formLabelWidth">
          <el-input autocomplete="off" v-model="dev"></el-input>
        </el-form-item>
        <!-- 测试人员 -->
        <el-form-item label="测试人员" :label-width="formLabelWidth">
          <el-input autocomplete="off" v-model="tester"></el-input>
        </el-form-item>
        <!-- 链接问题 -->
        <el-form-item label="链接问题" :label-width="formLabelWidth">
          <el-input autocomplete="off"  v-model="lintask"></el-input>
        </el-form-item>
      </el-form>
      <!-- 两个按钮 -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitModify()">确 定</el-button>
      </div>
    </el-dialog>
     <!-- 链接任务弹窗 -->
    <el-dialog title="链接任务" :visible.sync="linkTaskFormVisible" width="40%">
      <el-row>
        <el-col :span="20" :offset="2">
          <el-input type="text" placeholder="请输入内容" v-model="linkConnect"></el-input>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="linkTaskFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitLinkTask()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import SingleQuestion from '@/pages/QuestionPool/SingleQuestion'
  export default {
    name: 'QuestionOperation',
    inject : ['reload'],
    data () {
      return {
        followVisible:true,
        commentVisible:true,
        modifyVisible:true,
        linkVisible:true,
        startVisible:true,
        closeVisible:true,
        commentFormVisible:false,
        dialogFormVisible:false,
        linkTaskFormVisible:false,
        formLabelWidth: '80px',
        questionNumber:'',
        questionName:'',
        type:'',
        status:'',
        priority:'',
        result:'',
        describe:'',
        lintask:'',
        connectname:'',
        linkConnect:'',
        createTime:'',
        progressTime:'',
        modifyTime:'',
        productManager:'',
        developer1:'',
        developer2:'',
        tester:'',
        taskName:'',
        commentContent:'',
        dept:'研发',
        dev:'',
        pmImg:'',
        devImg1:'',
        devImg2:'',
        testImg:''
      }
    },
    components: {
      SingleQuestion,
    },
    mounted(){
      this.questionNumber = this.$route.query.number;
      console.log(this.questionNumber);
      this.getQuestionDetail();
    },
    methods: {
      getQuestionDetail(){
        let url = '/questionDetails?questionDetailId=' + this.questionNumber;
        this.postRequest(url).then((res) => {
            let data = res.data;
            this.questionName = data.question;
            this.type = data.type;
            this.status = data.state;
            this. priority = data.Priority;
            this.result = data.result;
            this.describe = data.description;
            this.lintask = data.connect;
            this.connectname = data.connectname;
            this.linkConnect = this.lintask + ' ' +this.connectname;
            this.createTime = data.date;
            this.modifyTime = data.lastsaved;
            this.productManager = data.pm;
            this.pmImg = data.pmImg;
            this.developer1 = data.dev1;
            this.devImg1 = data.dev1Img;
            this.developer2 = data.dev2;
            this.devImg2 = data.dev2Img;
            this.dev = this.developer1 + ';' + this.developer2;
            this.tester = data.tester;
            this.testImg = data.testerImg;
            this.startVisible = data.buttonIsShow;
            if(this.startVisible == true){
              this.taskName = data.button;
            };
            this.modifyVisible = data.编辑任务
            this.closeVisible = data.关闭任务;
            this.linkVisible = data.链接任务;
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
      },
      comment(){
        this.commentFormVisible = true;
      },
      modify(){
        this.dialogFormVisible = true;
      },
      linkTask(){
        this.linkTaskFormVisible = true;
      },
      handleTask(){
        let url = '/questionStateChange?state=' + this.taskName + '&id=' + this.questionNumber;
        this.postRequest(url).then((res) => {
            this.$swal("操作成功!", "", "success");
            this.reload();
        })
        .catch((error) => {
            console.log(error);
        });
      },
      submitComment(){
        let url = '/questionNewComment?comment=' + this.commentContent + '&questionId=' + this.questionNumber;
        this.postRequest(url).then((res) => {
            this.$swal("操作成功!", "", "success");
            this.reload();
        })
        .catch((error) => {
            console.log(error);
        });
      },
      submitModify(){
        if(this.lintask == null){
            this.lintask = '';
        }
        let url = '/questionEdit?question=' + this.questionName + '&dept=研发部&type=' + this.type + '&description=' + this.describe + '&priority=' + this.priority + '&dev=' + this.dev + '&tester=' + this.tester + '&connect=' + this.lintask  + '&id=' + this.questionNumber;
        console.log(url);
        this.postRequest(url).then((res) => {
            this.$swal("修改成功!", "", "success");
            this.reload();
        })
        .catch((error) => {
            console.log(error);
        });
      },
      submitLinkTask(){
        if(this.lintask == null){
            this.lintask = '';
        }
        let url = '/questionConnectUpdate?connect=' + this.lintask + '&questionId=' + this.questionNumber;
        console.log(url);
        this.postRequest(url).then((res) => {
            this.$swal("操作成功!", "", "success");
            this.reload();
        })
        .catch((error) => {
            console.log(error);
        });
      },
      goLinkTask(){
        let gotoTask = this.lintask;
        console.log(gotoTask);
        let routeData = this.$router.resolve({
            path: '/questionDetail',
            query :{
                number : gotoTask
            }
        });
        window.open(routeData.href, '_blank');
      }
    }
  };
</script>

<style lang="stylus" scoped>
@import '~stylus/common.styl'
#QuestionKind
    width 1600px
    height 360px
    display flex
    flex-direction column
  // 顶边栏
  .nav
    width 450px
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
  .content
    width 1300px
    .content-title
      font-size 40px
      color #676363
      padding-left 45px
      padding-top 15px
      font-weight 900
    .button-area
      width  100%
      padding-left 20px
      margin-top 35px
      .allBtn
        width 120px
        background #5e9ce6
        color #fff
        font-size 17px
        height 40px
    .detail
      padding-left 45px
      margin-top 55px
      .detail-left
        float left
        width 700px
        height 100px
        .el-row
          height 55px
      .detail-right
        margin-left 750px
        .headArea
          height 55px
          line-height 55px
          .headImg
            width 40px
            height 40px
            border-radius 40px
            display flex
            align-items center
        .timeArea
          height 55px
  .comment
    display flex
    flex-direction column
    justify-content center
    align-items center
    margin-left 45px
    margin-top 15px

</style>
