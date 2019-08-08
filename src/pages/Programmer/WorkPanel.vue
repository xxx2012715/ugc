<template>
    <div id="WorkPanel">
        <div class="content">
            <StateType></StateType>
            <Details></Details>
        </div>
    </div>
</template>

<script>
import StateType from '@/pages/Programmer/WorkPanel/StateType'
import Details from '@/pages/Programmer/WorkPanel/Details'
  export default {
    name: "WorkPanel",
    data () {
      return {

      }
    },
    components: {
        StateType,
        Details
    }
  }
</script>
<style lang="stylus" scoped>
@import '~stylus/common.styl'
#WorkPanel
  margin-left 15%
</style>

