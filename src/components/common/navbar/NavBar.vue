<template>
 <div class="navBar">
   <div class="left">
     <slot name="left"></slot>
   </div>
   <div class="center">
     <slot name="center"></slot>
   </div>
   <div class="right">
     <slot name="right"></slot>
   </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style>
.navBar{
  display: flex;
  line-height: 44px;
  height: 44px;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, .1);
  
}
.left,.right{
  width: 60px;
  text-align: center;
}
.center{
  flex: 1;
  text-align: center;
}
</style>
