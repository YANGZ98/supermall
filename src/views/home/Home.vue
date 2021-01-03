<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
        class="tab-control"
        v-show="isTabFixed"
        :tabIndex = "tabIndex"
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"
      />
    <scroll
      class="scroll"
      ref="scroll"
      :probeType="3"
      @scroll="scroll"
      :pull-up-load="true"
      @pullUpLoad="pullUpLoad"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行','新款','精选']"
        :tabIndex = "tabIndex"
        @tabClick="tabClick"
        ref="tabControl"
      />
      <goods-list :goods="goodsShow" key="pop" />
    </scroll>
    <TopBack @click.native="TopBack" v-show="backTopShow" />
  </div>
</template>

<script>
import {debounce} from '@/common/util'
import { getHomeMultidata, getHomeGoods } from 'network/home'

import Scroll from 'components/common/scroll/Scroll'
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/common/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import TopBack from 'components/content/topBack/TopBack'

import HomeSwiper from './childComps/homeSwiper'
import RecommendView from './childComps/recommendView'
import FeatureView from './childComps/FeatureView'
export default {
  name: 'home',
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      tabIndex: 0,
      tabType: 'pop',
      backTopShow: false,
      tabControlTop: 0,
      isTabFixed: false
    }
  },
  computed: {
    goodsShow() {
      return this.goods[this.tabType].list
    }
  },
  created() {
    //1.请求首页数据
    this.getHomeMultidata()
    //2.请求商品数据
    this.getHomeGoods(0)
    this.getHomeGoods(1)
    this.getHomeGoods(2)

  },
  mounted() {
    //3.注册图片加载完成事件
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.$bus.$on('itemImgLoad', () => {
      refresh()
    })
  },
  methods: {
    /**
     * 事件监听
     */
    tabClick(index) {
      this.tabIndex = index
      switch (this.tabIndex) {
        case 0:
          this.tabType = 'pop'
          break;
        case 1:
          this.tabType = 'new'
          break;
        case 2:
          this.tabType = 'sell'
          break;
      }
    },
    TopBack() {
      //通过refs 调用组件中的.scroll 的scrollTo方法
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    scroll(position) {
      this.isTabFixed = (-position.y) > this.tabControlTop
      // console.log(position);
      this.backTopShow = (-position.y) > 1000
    },
    pullUpLoad() {
      // console.log('上拉加载更多');
      this.getHomeGoods(this.tabIndex)
    },
    swiperImageLoad() {
      this.tabControlTop = this.$refs.tabControl.$el.offsetTop
    },
    /**
     * 网络请求
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res.data)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(index) {
      let type = ''
      switch (index) {
        case 0:
          type = 'pop'
          break;
        case 1:
          type = 'new'
          break;
        case 2:
          type = 'sell'
          break;
      }
      console.log(type)
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })
    }
  },
  activated () {
    console.log('activated');
    
    this.$refs.scroll.refresh()
  },
  components: {
    Scroll,
    NavBar,
    TabControl,
    GoodsList,
    TopBack,
    HomeSwiper,
    RecommendView,
    FeatureView
  }
}
</script>

<style scoped>
#home {
  position: relative;
  /* padding: 44px 0 0px; */
  height: 100vh;
}
/* .scroll {
  position: relative;
  height: calc(100% - 93px);
  margin-top: 44px;
  overflow: hidden;
} */
.scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.home-nav {
  background: var(--color-tint);
  color: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}
.tab-control {
  position: relative;
  z-index: 9;
}
</style>
