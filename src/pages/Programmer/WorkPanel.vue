<template>
  <div id="WorkPanel">
    <div class="content">
      <StateType></StateType>
      <Details></Details>
      <CommentsTask class="comment"></CommentsTask>
    </div>
  </div>
</template>

<script>
  import StateType from '@/pages/Programmer/WorkPanel/StateType'
  import Details from '@/pages/Programmer/WorkPanel/Details'
  import CommentsTask from '@/pages/ProductManager/WorkPanel/CommentsTask'
  export default {
    name: "WorkPanel",
    data () {
      return {

      }
    },
    components: {
      StateType,
      Details,
      CommentsTask
    },
    mounted () {
      // 获取用户角色
      let url = '/getAllRole';
      // 请求登录
      this.postRequest(url)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          alert(error);
        });
    },
  }
</script>
<style lang="stylus" scoped>
@import '~stylus/common.styl'
#WorkPanel
  margin-left 15%
  .comment
    margin-left 160px
    margin-top 6rem
</style>

