<template>
  
  <goods-list :goods="categoryDetail"></goods-list>
</template>

<script>
  import GridView from 'components/common/gridView/GridView'
  // import GoodsListItem from 'views/home/childComps/GoodsListItem'
  import GoodsList from 'components/content/goods/GoodsList'
  export default {
    name: "TabContentDetail",
    components: {
      GridView,
      GoodsList
    },
    props: {
      categoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
