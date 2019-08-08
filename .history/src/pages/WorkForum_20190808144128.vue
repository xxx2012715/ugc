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
  import ForumHead from '@/pages/Forum/ForumHead'
  import ForumHead from '@/pages/Forum/ForumHead'

  export default {
    name: "WorkForum",
    data () {
      return {
      }
    },
    components: {
      ForumHead,
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