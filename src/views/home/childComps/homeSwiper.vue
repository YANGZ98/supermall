<template>
  <div>
    <Swiper>
      <swiper-item v-for="item in banners" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" alt  @load="imgLoad"/>
        </a>
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  data() {
    return {
      isLoad:false
    }
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    Swiper, SwiperItem
  },
  methods: {
    imgLoad(){
      if(this.isLoad) return
      this.$emit('swiperImageLoad')
      this.isLoad = true      
    }
  },
}
</script>

<style>
</style>
