<template>
  <div id="WorkForum">
    <div class="content">
      <!-- 提问栏 -->
      <forum-request></forum-request>
    </div>
  </div>
</template>
<script>
  import '@/pages/Forum/ForumHead'
  export default {
    name: "WorkForum",
    data () {
      return {
        ForumRequest
      }
    },
    componnets: {

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