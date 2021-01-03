import TopBack from 'components/content/topBack/TopBack'
import {POP, NEW, SELL} from "./const";

export const backTopMixin = {
  components:{
    TopBack
  },
  data(){
    return {
      backTopShow: false
      // 需要在滚动处监听 做判断
    }
  },
  methods: {
    TopBack() {
      //通过refs 调用组件中的.scroll 的scrollTo方法
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
}
export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
