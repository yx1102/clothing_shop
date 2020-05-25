import Vue from 'vue'
import Vuex from 'vuex'
import {ADD_CART} from './mutations-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 购物车数组
    cartList:[]
  },
  mutations: {
    [ADD_CART](state, good){
      if(good.count){
        good.count ++
      }else{
        Vue.set( good, "count", 1 )
        // 添加到购物车数组中
        state.cartList.push(good)
      }
    }
  },
  actions: {
    // 加入购物车
    addToCart({commit, state}, good){
      commit(ADD_CART, good)
    }
  },
  modules: {
  }
})
