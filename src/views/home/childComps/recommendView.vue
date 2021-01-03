<template>
  <div>
    <div class="list">
      <div class="list-item" v-for="(item, index) in recommends" :key="index">
        <a :href="item.link">
          <img v-lazy="item.image" />
          <div class="list-text">{{item.title}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommendView',
  props: {
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {

  }
}
</script>

<style>
.list{
  display: flex;
  width: 100%;
  padding: 10px 0 15px;
  text-align: center;
  font-size: 12px;
  border-bottom: 8px solid #eee;
}
.list-item{
  flex: 1;
}
.list-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
