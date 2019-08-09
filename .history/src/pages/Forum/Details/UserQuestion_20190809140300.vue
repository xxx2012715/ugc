<template>
  <div id="UserQuestion">
    <!-- 提问人信息 -->
    <div class="questioner">
      <!-- 上边栏 -->
      <div class="quesTop">
        <el-avatar :size="120" :src="questionerAvatar"></el-avatar>
        <div class="quesInfo">
          <span class="quesName">苏宸</span>
          <span class="quesPosi">产品经理</span>
        </div>
      </div>
      <!-- 下边栏 -->
      <div class="quesBtm">
        <span class="quesTit">最新动态</span>
        <span v-for="item in requestList" :key="item.index"
          >发布新需求: {{ item }}</span
        >
        <span v-for="item in focusList" :key="item.index"
          >关注问题: {{ item }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserQuestion",
    data () {
      return {
        requestList: ['aaaaaaaaa', 'bbbbbbbbb',],
        focusList: ['ccccccc'],
        questionerAvatar: 'static/imgs/avatar.jpg'
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '~stylus/common.styl'

#UserQuestion
  width 450px
  height 800px
  border 1px solid black
  font-size 16px
  // 提问人信息
  .questioner
    width 450px
    height 300px
    border 1px solid black
    background-color #FFF3E6
    border-radius 10px
    flex-center()
    flex-direction column
    justify-content center
    // 上边栏
    .quesTop
      display flex
      margin-bottom 1rem
      // 提问人信息
      .quesInfo
        width 180px
        font-size 32px
        color rgb(79,79,79)
        flex-around()
        flex-direction column
    // 下边栏
    .quesBtm
      display flex
      flex-direction column
      width 400px
      .quesTit
        font-size 18px
        font-weight bold
        margin-bottom 1rem
</style>