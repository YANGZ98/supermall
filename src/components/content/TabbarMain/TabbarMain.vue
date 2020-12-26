<template>
  <div class="tabbar">
    <TabbarItem path="/home" activeColor="#E5737E">
      <img slot="icon" src="@/assets/img/tabbar/home.svg" alt />
      <img slot="icon_active" src="@/assets/img/tabbar/home_active.svg" alt />
      <div slot="text">主页</div>
    </TabbarItem>
    <TabbarItem path="/category" activeColor="#E5737E">
      <img slot="icon" src="@/assets/img/tabbar/category.svg" alt />
      <img slot="icon_active" src="@/assets/img/tabbar/category_active.svg" alt />
      <div slot="text">分类</div>
    </TabbarItem>
    <TabbarItem path="/cart" activeColor="#E5737E">
      <img slot="icon" src="@/assets/img/tabbar/shopcart.svg" alt />
      <img slot="icon_active" src="@/assets/img/tabbar/shopcart_active.svg" alt />
      <div slot="text">购物车</div>
    </TabbarItem>
    <TabbarItem path="/profile" activeColor="#E5737E">
      <img slot="icon" src="@/assets/img/tabbar/profile.svg" alt />
      <img slot="icon_active" src="@/assets/img/tabbar/profile_active.svg" alt />
      <div slot="text">我的</div>
    </TabbarItem>
  </div>
</template>

<script>
import TabbarItem from 'components/common/tabbar/TabbarItem'
export default {
  data() {
    return {

    }
  },
  components: {
    TabbarItem
  }
}
</script>

<style>
.tabbar {
  position: fixed;
  z-index: 9;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 49px;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, .1);
  background: #fff;
  font-size: 14px;
}
</style>
