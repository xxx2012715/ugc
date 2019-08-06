<template>
  <div id="PerssionApply">
    <div class="content">
      <apply-welcome></apply-welcome>
    </div>
  </div>
</template>
<script>
  import ApplyWelcome from '@/pages/PermissionApply/ApplyWelcome'

  export default {
    name: "PerssionApply",
    data () {
      return {

      }
    },
    components: {
      ApplyWelcome
    }
  }
</script>
<style lang="stylus" scoped>
#PerssionApply
  margin-left 15%
  .content
    display flex
    flex-direction column
    justify-content center
    align-items center
    
</style>