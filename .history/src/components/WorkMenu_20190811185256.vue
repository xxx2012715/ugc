<template>
  <div id="WorkMenu">
    <img :src="avatar" class="avatar" />
    <span class="userName">苏宸</span>
    <span class="userPosition">产品经理</span>
    <div class="menu">
      <!-- 原菜单 -->
      <!-- <div
        v-for="(item, index) in menu"
        :key="index"
        @click="changeTab(index)"
        :class="{ selectedTab: selectedTab == index }"
        router
      >
        {{ item.menuName }}
      </div> -->
      <el-menu
        :default-active="this.$router.path"
        router
        mode="vertical"
        background-color="rgb(0,122,163)"
        text-color="#fff"
        active-text-color="#ffd04b"
        id="elMenu"
      >
        <el-menu-item v-for="(item, i) in menu" :key="i" :index="item.name">
          {{ item.menuName }}
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WorkMenu',
    mounted () {
      // 不同用户跳不同界面
      switch (localStorage.getItem('userType')) {
        // 研发
        case 'rd':
          this.menu[0].name = '/ProgrammerWorkPanel'
          break;
        // 产品经理
        case 'pm':
          this.menu[0].name = '/workPanel'
          break;
        // 测试
        case 'test':
          this.menu[0].name = '/workPanel'
          break;
        // 管理员
        case 'admin':
          // console.log('succ')
          this.menu[0].name = '/managerWorkPanel'
          break;
        // 出现未知错误
        default:
          console.log('unKnown error')
      }
    },
    data () {
      return {
        avatar: 'static/imgs/avatar.jpg',
        menu: [
          {
            name: '',
            menuName: '工作面板',
          },
          {
            name: '/questionPool',
            menuName: '问题池',
          },
          {
            name: '/workForum',
            menuName: '论坛',
          },
          {
            name: '/permissionApply',
            menuName: '权限申请',
          },
        ],
        selectedTab: 0,
      }
    },
  }
</script>

<style lang="stylus" scoped>
@import '~stylus/common.styl'
#WorkMenu
  width 15%
  height 100%
  background-color rgb(0,122,163)
  flex-center()
  flex-direction column
  color white
  position fixed
  top 60
  left 0
  z-index 99
  // 菜单栏头像
  .avatar
    width 100px
    border-radius 50px
    margin-top 1rem
  // 用户名
  .userName
    font-size 22px
    margin 1rem 0
  // 职位
  .userPosition
    font-size 19px
    margin-bottom 2rem
  // 菜单
  .menu
    width 100%
    text-align center
    flex-center()
    flex-direction column
    #elMenu
      width 100%
      .el-menu-item
        font-size 20px
      .el-menu-item:hover
        background-color rgb(0,74,108) !important

    // 原菜单css
    // div
    //   width 100%
    //   height 50px
    //   line-height 50px
    //   cursor pointer
    // .selectedTab
    //   background-color rgb(0,74,108)


</style>
