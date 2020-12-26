<template>
  <div class="goods-list">
    <div class="goods-item" v-for="(item, index) in goods" :key="index">
      <img :src="item.show.img" alt />
      <div class="goods-info">
        <div class="goods-title">{{item.title}}</div>
        <span class="goods-price">{{item.price}}</span>
        <span class="goods-cfav">{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
.goods-item {
  width: 48%;
  padding-bottom: 10px;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  text-align: center;
  font-size: 14px;
}
.goods-info .goods-title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.goods-info .goods-price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .goods-cfav {
  position: relative;
}
.goods-info .goods-cfav::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
