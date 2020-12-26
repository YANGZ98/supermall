<template>
  <div>
    <Swiper>
      <swiper-item v-for="item in banners" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" alt />
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
  }
}
</script>

<style>
</style>
