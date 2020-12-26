<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="scroll" ref="scroll">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" />
      <goods-list v-show="tabIndex===0" :goods="goods.pop.list" />
      <goods-list v-show="tabIndex===1" :goods="goods.new.list" />
      <goods-list v-show="tabIndex===2" :goods="goods.sell.list" />
    </scroll>
    <TopBack @click.native="TopBack"/>
  </div>
</template>

<script>
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
      tabIndex: 0
    }
  },
  created() {
    //1.请求首页数据
    this.getHomeMultidata()
    //2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  methods: {
    /**
     * 事件监听
     */
    tabClick(index) {
      this.tabIndex = index
    },
    TopBack(){
      //通过refs 调用组件中的.scroll 的scrollTo方法
      this.$refs.scroll.scroll.scrollTo(0,0,500)
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
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
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
.scroll{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.home-nav {
  background: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
