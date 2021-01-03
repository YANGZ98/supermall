<template>
  <div class="baseInfo" v-if="Object.keys(Goods).length !==0">
    <div class="title">{{Goods.title}}</div>
    <div class="priceInfo">
      <div class="nowPrice">{{Goods.newPrice}}</div>
      <div class="oldPrice">{{Goods.oldPrice}}</div>
      <div class="discount" :style="'background:'+Goods.discountBgColor">{{Goods.discount}}</div>
    </div>
    <div class="colums">
      <div class="columns-item" v-for="(item, index) in Goods.colums" :key="index">{{item}}</div>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="(item,index) in Goods.services" :key="index">
        <img :src="item.icon" />
        <span>{{item.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  data() {
    return {

    }
  },
  props: {
    Goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {

  }
}
</script>

<style scoped>
.baseInfo {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.title {
  color: #222;
  font-size: 16px;
  margin-bottom: 8px;
}
.priceInfo {
  display: flex;
  align-items: flex-end;
  margin-bottom: 15px;
}
.priceInfo .nowPrice {
  font-size: 24px;
  color: var(--color-tint);
  margin-right: 6px;
}
.priceInfo .oldPrice {
  font-size: 14px;
  text-decoration: line-through;
  margin-right: 6px;
  color: #999;
}
.priceInfo .discount {
  font-size: 12px;
  color: #fff;
  padding: 2px 8px;
  border-radius: 10px;
  margin-bottom: 5px;
}
.colums {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #999;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-service {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  line-height: 26px;
  padding: 15px 0;
}
.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
.info-service-item span {
  font-size: 13px;
  color: #333;
}
</style>
