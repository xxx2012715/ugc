<template>
  <div id="WorkMenu">
    <img :src="avatar" class="avatar" />
    <span class="userName">苏宸</span>
    <span class="userPosition">产品经理</span>
    <div class="menu">
      <div
        v-for="(item, index) in menu"
        :key="index"
        @click="changeTab(index)"
        :class="{ selectedTab: selectedTab == index }"
      >
        {{ item }}
      </div>
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
          '工作面板',
          '问题池',
          '论坛',
          '申请权限'
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
