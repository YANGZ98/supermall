<template>
  <div class="warpper" ref="warpper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null
    }
  },
  updated() {
    this.$nextTick(() => {
      // console.log(this.$refs.warpper)
      this.scroll = new BScroll(this.$refs.warpper, {
        pullUpLoad: true,
        // pullDownRefresh: true,
        click:true
        // movable: true
      })
    })
  }
}
</script>

<style>
</style>
