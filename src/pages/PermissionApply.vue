<template>
  <div id="PerssionApply">
    <div class="content">
      <apply-welcome></apply-welcome>
      <CurrentPermission></CurrentPermission>
      <apply></apply>
      <process></process>
    </div>
  </div>
</template>
<script>
import ApplyWelcome from "@/pages/PermissionApply/ApplyWelcome";
import CurrentPermission from "@/pages/PermissionApply/CurrentPermission";
import apply from "@/pages/PermissionApply/apply";
import process from "@/pages/PermissionApply/process";

export default {
  name: "PerssionApply",
  data() {
    return {};
  },
  components: {
    ApplyWelcome,
    CurrentPermission,
    apply,
    process
  }
};
</script>
<style lang="stylus" scoped>
#PerssionApply {
  margin-left: 15%;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>