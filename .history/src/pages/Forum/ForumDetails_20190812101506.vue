<template>
  <div id="ForumDetails">
    <!-- 问题描述 & 评论 -->
    <forum-question></forum-question>
    <!-- 用户信息 & 热门问题 -->
    <user-question></user-question>
  </div>
</template>

<script>
  import ForumQuestion from '@/pages/Forum/Details/ForumQuestion'
  import UserQuestion from '@/pages/Forum/Details/UserQuestion'

  export default {
    name: "ForumDetails",
    components: {
      ForumQuestion,
      UserQuestion
    },
    mounted () {
      let id = this.$router.params.id;
      console.log(id);
    }
  }
</script>

<style lang="stylus" scoped>
#ForumDetails
  margin-top 3rem
  margin-left 15%
  width 1600px
  display flex
  justify-content center

</style>