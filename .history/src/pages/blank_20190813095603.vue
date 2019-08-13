<template>
  <div id="blank"></div>
</template>

<script>
  export default {
    name: "black",
    data () {
      return {

      }
    },
    mounted () {
      this.$router.push({
        path: this.$route.params.path,

      })
    }
  }
</script>

<style lang="stylus" scoped>
  
</style>