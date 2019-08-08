<template>
  <div id="ForumDetails">
    <!-- 问题 & 描述 -->
    <forum-question></forum-question>
  </div>
</template>

<script>
  import ForumDetails from '@/pages/Forum/Details/ForumDetails'

  export default {
    name: "ForumDetails",
    components: {

    }
  }
</script>

<style lang="stylus" scoped>
#ForumDetails
  margin-left 15%
</style>