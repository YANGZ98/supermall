<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <TabbarMain />
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
