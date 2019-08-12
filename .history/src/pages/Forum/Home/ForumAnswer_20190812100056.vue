<template>
  <div id="ForumAnswer">
    <!-- 顶栏 -->
    <div class="headLine" @click="addComments">
      <span>发现新内容 点击查看</span>
      <i class="el-icon-loading"></i>
    </div>
    <!-- 新内容 -->
    <div class="cont">
      <div class="newCont">
        <!-- 每一条 -->
        <div
          class="li"
          v-for="item in msgList"
          :key="item.forumContentId"
          @click="newsGoto(item.forumContentId)"
        >
          <!-- 回答 -->
          <div class="answer common">
            <span>{{ item.answerCount }}</span>
            <span>回答</span>
          </div>
          <!-- 阅读 -->
          <div class="read common">
            <span>{{ item.viewCount }}</span>
            <span>阅读</span>
          </div>
          <!-- 问题信息 -->
          <div class="quesInfo">
            <!-- 问题标题 -->
            <span class="quesTit">{{ item.forumContentTitle }}</span>
            <div class="quesBtm">
              <span class="questioner">提问者: {{ item.usr.usrName }}</span>
              <span class="quesLink"
                >链接问题: <span>{{ item.linkTaskId }}</span></span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- 广告 -->
      <div class="advertisement">
        <!-- 广告图片 -->
        <el-image
          class="banner"
          v-for="item in banner"
          :src="item"
          :key="item.index"
        ></el-image>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ForumAnswer",
    data () {
      return {
        // 页数
        page: 1,
        banner: [
          'static/imgs/banner1.jpg',
          'static/imgs/banner2.jpg',
          'static/imgs/banner3.jpg',
        ],
        msgList: []
      }
    },
    mounted () {
      this.getCommentsContent();
    },
    methods: {
      newsGoto () {

      },
      // 获取评论信息
      getCommentsContent () {
        let url = `/getForumContentForPage?currentIndex=${this.page}&pageSize=8`;
        this.postRequest(url)
          .then((res) => {
            this.msgList = res.data;
            console.log(this.msgList)
          })
          .catch((error) => {
            console.log(error);
          });
      },
      // 加载更多
      addComments () {
        // 页数++
        this.page++;
        let url = `/getForumContentForPage?currentIndex=${this.page}&pageSize=8`;
        console.log(this.page)
        this.postRequest(url)
          .then((res) => {
            if (res.data.length != 0) {
              this.msgList.push(...res.data);
              console.log(this.msgList)
            } else {
              alert('no more data')
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '~stylus/common.styl'

#ForumAnswer
  width 1400px
  height 850px
  margin-bottom 5rem

  // 顶栏
  .headLine
    width 900px
    height 40px
    background-color rgb(189,221,232)
    center()
    margin 0 0 1rem 0
    cursor pointer
    border-radius 20px
    span
      margin-left 1rem
      color rgb(125,123,123)
    i
      margin-left 1rem
      font-size 26px
      color gray
      cursor pointer
  .cont
    width 100%
    flex-between()
    // 最新内容
    .newCont
      width 900px
      height 860px
      display flex
      flex-direction column
      // 每一条
      .li
        width 100%
        height 75px
        flex-between()
        font-size 23px
        margin-bottom 1rem
        cursor pointer
        // 前两个公共样式
        .common
          width 80px
          height 60px
          flex-between()
          flex-direction column
          ellipsis()
        // 回答
        .answer
          color rgb(0,122,163)
        // 阅读
        .read
          color rgb(155,154,155)
        // 提问信息
        .quesInfo
          margin-right 3rem
          width 650px
          height 60px
          display flex
          flex-direction column
          justify-content space-between
          .quesTit
            ellipsis()
          .quesBtm
            width 350px
            flex-between()
            color rgb(155,154,155)
            // 链接问题
            .quesLink
              span
                color rgb(73,143,225)
    // 广告
    .advertisement
      width 450px
      height 900px
      display flex
      flex-direction column
      .banner
        width 400px
        height 150px
        margin-bottom 3rem

</style>