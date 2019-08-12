<template>
  <div id="WorkForum">
    <div class="content">
      <!-- 提问栏 -->
      <forum-head></forum-head>
      <!-- 回答\评论 & 广告 -->
      <forum-answer></forum-answer>
    </div>
  </div>
</template>
<script>
  import ForumHead from '@/pages/Forum/Home/ForumHead'
  import ForumAnswer from '@/pages/Forum/Home/ForumAnswer'

  export default {
    name: "WorkForum",
    data () {
      return {
      }
    },
    mounted () {
      let usrType = localStorage.getItem('usrType');
      console.log(usrType)
    },
    components: {
      ForumHead,
      ForumAnswer,
    }
  }
</script>
<style lang="stylus" scoped>
#WorkForum
  width 1600px
  margin-left 15%
  .content
    display flex
    flex-direction column
    justify-content center
    align-items center

</style>