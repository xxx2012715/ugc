<template>
  <div id="ForumDetails">
    <!-- 问题 & 描述 -->
    <forum-question></forum-question>
  </div>
</template>

<script>
  import ForumQuestion from '@/pages/Forum/Details/ForumQuestion'

  export default {
    name: "ForumDetails",
    components: {
      ForumQuestion
    }
  }
</script>

<style lang="stylus" scoped>
#ForumDetails
  margin-left 15%
  width 1600px
  flex-center()
</style>