<template>
  <div id="Detail">
    <DetailNav :currentIndex="currentIndex" @tabIndexClick="tabIndexClick" />
    <scroll ref="scroll" class="content" @pullUpLoad="pullUpLoad" @scroll="scroll">
      <detail-swiper :images="topImages" />
      <detail-base-info :Goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" />
      <detail-param-info :param-info="paramInfo" ref="detailParamInfo" />
      <detail-comment-info :comment-info="commentInfo" ref="detailCommentInfo" />
      <goods-list :goods="recommendList" ref="detailCommendInfo" />
    </scroll>
    <top-back @click.native="TopBack" v-show="backTopShow" />
    <detail-bottom-bar @addToCart="addToCart" />
  </div>
</template>

<script>
import { debounce } from '@/common/util'

import DetailNav from './childComps/DetailNav'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShoInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import GoodsList from 'components/content/goods/GoodsList'
import DetailBottomBar from './childComps/DetailBottomBar'


import Scroll from 'components/common/scroll/Scroll'

import { getDetail, getRecommend, Goods, Shop, GoodsParam } from 'network/detail'
import { backTopMixin } from '@/common/mixin'
export default {
  name: 'Detail',
  data() {
    return {
      goodsId: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      offsetTopArr: [],
      currentIndex: 0
    }
  },
  mixins: [backTopMixin],
  created() {
    // 1.保存商品id
    this.goodsId = this.$route.params.id
    // 2.根据id请求获取信息
    this._getDetail(this.goodsId)
    // 3.获取推荐内容
    this._getRecommend()
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    const getThemeTop = debounce(this.getThemeTop, 200)
    this.$bus.$on('detailImgLoad', () => {
      refresh()
      getThemeTop()
    })
  },
  methods: {
    _getDetail(id) {
      getDetail(id).then(res => {
        const data = res.result
        // 1.1.轮播图图片数组
        this.topImages = data.itemInfo.topImages
        // 1.2.商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // 1.3.获取商家信息
        this.shop = new Shop(data.shopInfo)
        // 1.4.获取商品详细
        this.detailInfo = data.detailInfo
        // 1.5.获取商品参数
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
        // 1.6获取评论数据
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
      })
    },
    _getRecommend() {
      getRecommend().then((res, error) => {
        if (error) return
        this.recommendList = res.data.list
      })
    },

    getThemeTop() {  //theme 主题  获取高度
      this.offsetTopArr = []
      this.offsetTopArr.push(0)
      this.offsetTopArr.push(this.$refs.detailParamInfo.$el.offsetTop)
      this.offsetTopArr.push(this.$refs.detailCommentInfo.$el.offsetTop)
      this.offsetTopArr.push(this.$refs.detailCommendInfo.$el.offsetTop)
      console.log(this.offsetTopArr);
    },
    pullUpLoad() { },
    tabIndexClick(index) {
      this.currentIndex = index
      this.$refs.scroll.scrollTo(0, -this.offsetTopArr[index], 500)
    },
    scroll(options) {
      this.backTopShow = (-options.y) > 1000
      let y = options.y
      if (y <= 0 && y > -this.offsetTopArr[1]) {
        this.currentIndex = 0
      } else if (y <= -this.offsetTopArr[1] && y > -this.offsetTopArr[2]) {
        this.currentIndex = 1
      } else if (y <= -this.offsetTopArr[2] && y > -this.offsetTopArr[3]) {
        this.currentIndex = 2
      } else {
        this.currentIndex = 3
      }
    },
    addToCart() {
      // 1.准备好商品信息
      let product = {
        goodsId: this.goodsId,
        title: this.goods.title,
        image: this.topImages[0],
        desc: this.goods.desc,
        price: this.goods.realPrice,
        checked: true
      }
      // 2.将数据存储到vuex
      this.$store.dispatch('addCart', product).then(res => {
        console.log(this.$toast);
        this.$toast.show(res)
        
      })

    }
  },
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    Scroll,
    DetailBottomBar
  }
}
</script>

<style scoped>
#Detail {
  position: relative;
  z-index: 10;
  background: #fff;
  height: 100vh;
}
.content {
  position: relative;
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>
