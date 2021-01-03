<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{active:index===currentIndex}"
      @click="tabClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex:0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    },
    tabIndex:{
      type:Number,
      default:0
    }
  },
  watch: {
    tabIndex(){
      this.currentIndex = this.tabIndex
    }
  },
  methods: {
    tabClick(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style>
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: 15px;
  background: #fff;
  text-align: center;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item.active{
  color: var(--color-high-text);
}
.tab-control-item.active span{
  padding: 3px;
  border-bottom: 2px solid var(--color-tint);
}
</style>
