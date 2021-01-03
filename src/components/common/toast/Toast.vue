<template>
  <div class="toast" v-show="isShow">{{message}}</div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message = '提示', times = 1500) {
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.message = ''
        this.isShow = false
      }, times);
    }
  },
  // props: {
  //   toastMessage: {
  //     type: String,
  //     defalut: ''
  //   },
  //   toastShow:{
  //     type:Boolean,
  //     defalut:false
  //   }
  // }
}
</script>

<style>
.toast {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 8px 10px;
  border-radius: 4px;
}
</style>
