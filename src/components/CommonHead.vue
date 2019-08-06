<template>
  <div id="head">
    <!-- 顶栏左侧 -->
    <div class="headLf">
      <span class="headTit">浙江联通项目管理交流平台</span>
      <div>
        <el-input
          v-model="searchInput"
          class="searchInput"
          placeholder="请输入内容"
        ></el-input>
        <span class="iconfont searchIcon">&#xe678;</span>
      </div>
    </div>

    <!-- 顶栏右侧 -->
    <div class="headRt">
      <div class="createQues" @click="openDialog">
        <i class="el-icon-circle-plus-outline quesIcon"></i>
        创建问题
      </div>
      <div class="focusList">
        <i class="el-icon-star-off quesIcon"></i>
        关注列表
      </div>
      <div class="self">
        <el-image :src="selfUrl" class="selfAvatar" fit="contain"></el-image>
        <span class="userName">苏宸</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommonHead',
    data () {
      return {
        // 搜索框内容
        searchInput: '',
        // 头像地址
        selfUrl: 'static/imgs/avatar.jpg',
      };
    },
    methods: {
      openDialog () {
        this.$emit('openDialog')
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~stylus/common.styl'
#head
  width 100%
  height 60px
  position fixed
  top 0
  left 0
  flex-center()
  justify-content space-between
  box-shadow 0 3px 3px lightgray
  z-index 98
  background-color white
  .headLf
    width 700px
    flex-around()
    .headTit
      font-size 18px
      color rgb(103, 99, 99)
      min-width 240px
      text-indent 2rem
    div
      flex-center()
      .searchInput
        width 250px
        margin-left 70px
      .searchIcon
        color lightgray
        font-size 26px
        margin-left 10px
        cursor pointer
  .headRt
    width 500px
    margin-right 3rem
    flex-around()
    .createQues
      cursor pointer
      // margin-right 6rem
      flex-center()
      .quesIcon
        margin-right 5px
        font-size 30px
    .focusList
      cursor pointer
      flex-center()
      .quesIcon
        font-size 30px
        margin-right 5px
    .self
      flex-center()
      // margin-left 6rem
      cursor pointer
      .selfAvatar
        width 45px
        height 45px
        border-radius 22.5px
        margin-right 10px
</style>
