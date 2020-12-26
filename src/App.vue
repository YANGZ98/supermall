<template>
  <div id="app">
    <router-view/>
    <TabbarMain/>
  </div>
</template>
<script>
import TabbarMain from '@/components/content/TabbarMain/TabbarMain'
export default {
  components: {
    TabbarMain
  }
}
</script>
<style>
@import "assets/css/base.css";


</style>
