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
    data () {
      res
    },
    mounted () {
      let questionerUrl = `/getForumContentById?forumContentId=${id}`;
      // 更新提问者信息
      this.postRequest(questionerUrl)
        .then((res) => {
          console.log(res)
          this.res = res;
        })
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