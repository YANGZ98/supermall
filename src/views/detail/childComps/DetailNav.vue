<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div class="tabList" slot="center">
        <div
          class="tabList-item"
          v-for="(item,index) in tabList"
          :key="index"
          :class="{active:currentIndex===index}"
          @click="tabClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNav',
  data() {
    return {
      tabList: ["商品", "参数", "评论", "推荐"]
    }
  },
  props:{
    currentIndex:{
      type:Number,
      default:0
    },
  },
  components: {
    NavBar
  },
  methods: {
    tabClick(index) {
      this.$emit('tabIndexClick',index)
    },
    backClick() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
.tabList {
  display: flex;
  align-items: center;
  font-size: 13px;
}
.tabList .tabList-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back img {
  vertical-align: middle;
}
</style>
