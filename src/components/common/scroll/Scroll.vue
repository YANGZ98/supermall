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
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:1
    },
    pullUpLoad:{
      type:Boolean,
      default:true
    }
  },
  mounted() {
    // 创建BScroll 对象
    this.scroll = new BScroll(this.$refs.warpper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      // pullDownRefresh: true,
      click: true
      // movable: true
    })
    // 监听滚动位置
    this.scroll.on('scroll', (position) => {
      //将滚动距离 回到调用组件的父组件
      this.$emit('scroll',position)
    })
    // 监听上拉事件
    this.scroll.on('pullingUp',()=>{
      // console.log('pullingUp');
      this.$emit('pullUpLoad')
    })
  },
  // updated() {
  //   // better-scroll 2.x 没有像1.x自动监听变化高度 导致高度没有更新
  //   // 需要调用refresh()方法重新确定高度
  //   this.scroll.refresh()
  // }
  methods: {
    //refresh的bug 通过img 的load监听 来修改高度
    refresh(){
           
      this.scroll && this.scroll.refresh()
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    scrollTo(x,y,time){
      this.scroll && this.scroll.scrollTo(x,y,time)
    }
  }


}
</script>

<style>
</style>
