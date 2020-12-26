<template>
  <div class="tabbar-item" @click="routeTo">
    <div v-if="isActive">
      <slot name="icon_active"></slot>
    </div>
    <div v-else>
      <slot name="icon"></slot>
    </div>
    <div :style="active_Color" :class="{text_active:isActive}">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabbar-item',
  data() {
    return {

    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#E5737E'
    }
  },
  computed: {
    isActive() {
      // console.log(this.$route.path)
      return this.$route.path.indexOf(this.path) != -1
    },
    active_Color() {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    routeTo() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
.tabbar-item{
  margin-top: 3px;
  flex: 1;
  text-align: center;
}
.tabbar-item img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>
