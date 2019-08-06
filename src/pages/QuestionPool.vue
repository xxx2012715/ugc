<template>
  <div id="QuestionPool">
    <div class="content">
      <question-kind></question-kind>
      <question-list></question-list>
    </div>
  </div>
</template>
<script>
  import QuestionKind from '@/pages/QuestionPool/QuestionKind'
  import QuestionList from '@/pages/QuestionPool/QuestionList'
  export default {
    name: "QuestionPool",
    data () {
      return {

      };
    },
    components: {
      QuestionKind,
      QuestionList,
    }
  }
</script>
<style lang="stylus" scoped>
@import '~stylus/common.styl';
#QuestionPool
  margin-left 15%
  .content
    display flex
    flex-direction column
    justify-content center
    align-items center
</style>