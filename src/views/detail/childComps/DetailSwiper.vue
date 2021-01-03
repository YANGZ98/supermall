<template>
  <Swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in images" :key="index">
      <img :src="item" alt @load="imgLoad" />
    </swiper-item>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  name: 'DetailSwiper',
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    images: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper, SwiperItem
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('detailImgLoad')
    }
  },
}
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
