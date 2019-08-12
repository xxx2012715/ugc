<template>
  <div id="ForumDetails">
    <!-- 问题描述 & 评论 -->
    <forum-question :res="res"></forum-question>
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
      let id = this.$route.params.id;
      let questionerUrl = `/getForumContentById?forumContentId=${id}`;
      // 更新提问者信息
      this.postRequest(questionerUrl)
        .then((res) => {
          console.log(111, res)
          this.res = res;
        })
        .catch((error) => {
          console.log(error);
        });
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