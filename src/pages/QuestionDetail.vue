<template>
  <div id="QuestionOperation">
    <div class="content">
      <question-operation></question-operation>
    </div>
  </div>
</template>
<script>
  import QuestionOperation from '@/pages/QuestionPool/QuestionOperation'
  export default {
    name: "QuestionPool",
    data () {
      return {

      };
    },
    components: {
      QuestionOperation,
    }
  }
</script>
<style lang="stylus" scoped>
@import '~stylus/common.styl';
#QuestionOperation
  margin-left 15%
  .content
    display flex
    flex-direction column
    justify-content center
    align-items center
</style>