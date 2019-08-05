<template>
  <div id="WorkMenu">
    <img :src="avatar" class="avatar" />
    <span class="userName">苏宸</span>
    <span class="userPosition">产品经理</span>
    <div class="menu">
      <!-- <div
        v-for="(item, i) in menu"
        :key="i"
        :index="item.name"
        @click="changeTab(index)"
        :class="{ selectedTab: selectedTab == index }"
      >
        {{ item.menuName }}
      </div> -->
      <el-menu :default-active="this.$router.path" router mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item v-for="(item,i) in menu" :key="i" :index="item.name">
            {{item.menuName}}
        </el-menu-item>
    </el-menu>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'WorkMenu',
    data () {
      return {
        avatar: 'static/imgs/avatar.jpg',
        menu: [
          {
            name:'/workPanel',
            menuName:'工作面板',
          },
          {
            name:'/questionPool',
            menuName:'问题池',
          },
          {
            name:'',
            menuName:'论坛',
          },
          {
            name:'',
            menuName:'申请权限',
          },
        ],
        selectedTab: 0,
      }
    },
    methods: {
      changeTab (index) {
        //   console.log(index)
        this.selectedTab = index;
      }
    }
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
  .avatar
    width 100px
    border-radius 50px
    margin-top 1rem
  .userName
    font-size 22px
    margin 1rem 0
  .userPosition
    font-size 19px
    margin-bottom 2rem
  .menu
    width 100%
    text-align center
    flex-center()
    flex-direction column
    div
      width 100%
      height 50px
      line-height 50px
      cursor pointer
    .selectedTab
      background-color rgb(0,74,108)


</style>
