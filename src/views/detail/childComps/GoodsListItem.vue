<template>
  <div class="goods-item" @click="toDetail(goods)">
    <img v-lazy="goods.image" alt @load="imgLoad" />
    <div class="goods-info">
      <div class="goods-title">{{goods.title}}</div>
      <span class="goods-price">{{goods.price}}</span>
      <span class="goods-cfav">{{goods.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImgLoad')
    },
    toDetail(goods) {
      console.log(goods.item_id);
      this.$router.push('/detail/' + goods.item_id)

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
