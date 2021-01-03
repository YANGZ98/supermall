import {
  ADD_COUNTER,
  ADD_TO_CART
}
from './mutations-types'
export default {
  // mutations 唯一的目的就是修改state
  // mutations中的方法尽可能职责单一
  [ADD_COUNTER](state,payload){
    payload.count += 1
  },
  [ADD_TO_CART](state,payload){
    state.cartList.push(payload)
  }
}