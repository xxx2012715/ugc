<template>
  <div id="WorkForum">
    <div class="content">
      <!-- 提问栏 -->
      <forum-head></forum-head>
    </div>
  </div>
</template>
<script>
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
  margin-left 15%
  .content
    display flex
    flex-direction column
    justify-content center
    align-items center

</style>