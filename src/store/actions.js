import {
  ADD_TO_CART,
  ADD_COUNTER
}
  from './mutations-types'
export default {
  //数组的方法 push/pop/shift/unshift/filter/map/reduce/find/findIndex/splice
  // 
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 业务需求：添加前判断数组中有无此商品 有则数量加1 无则添加商品
      // 1.判断是否有该商品
      let oldProduct = context.state.cartList.find(item => item.goodsId === payload.goodsId)
      // 2.有则数量加1 无则添加商品
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve('商品数量加一')
      } else {
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        resolve('已经添加到购物车')
      }
    })

  }
}