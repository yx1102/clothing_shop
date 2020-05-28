import Vue from 'vue'
import Vuex from 'vuex'
import {ADD_CART,ADD_COUNT, HANDEL_ITEM_CHANGE, HANDEL_ALLCHECKED} from './mutations-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 购物车数组
    cartList:[]
  },
  mutations: {
    // 加入购物车
    /* [ADD_CART](state, good){
      Vue.set(good, "count", 1)
      state.cartList.push(good)
    },

    [ADD_COUNT](state, good){
      good.count ++
    }, */

    [ADD_CART](state, good){
      Vue.set(good, "count", 1)
      state.cartList.push(good)
    },

    [ADD_COUNT](state, index){
      state.cartList[index].count ++
    },

    // 单个CheckBox
    [HANDEL_ITEM_CHANGE](state, index){
      state.cartList[index].checked = !state.cartList[index].checked
    },

    // 全选CheckBox
    [HANDEL_ALLCHECKED](state, checked){
      checked = !checked
      state.cartList.forEach(item => item.checked = checked)
    }
  },
  actions: {
    // 加入购物车
  /* addToCart({commit, state}, good){
    let oldProduct = null
    state.cartList.some(item => {
      if(item.iid === good.iid){
        oldProduct = item
      }
    })
    if(oldProduct){
      commit(ADD_COUNT, good)
    }else{
      commit(ADD_CART, good)
    } */
    addToCart({commit, state}, good){
      const index = state.cartList.findIndex(item => item.iid === good.iid)

      if(index === -1){
        commit(ADD_CART, good)
      }else{
        commit(ADD_COUNT, index)
      }
    },

    // 单个CheckBox
    handelItemChange({commit}, index){
      commit(HANDEL_ITEM_CHANGE, index)
    },

    allChecked({commit},checked){
      commit(HANDEL_ALLCHECKED, checked)
    }
  },
  getters:{
    // 全选属性的计算
    allSelect: state => {
       if(state.cartList.length > 0){
        return state.cartList.every(item => item.checked)
      }else{
        return false
      }
    },
    // 总价格
    totalPrice: state =>{
      let total = 0
      state.cartList.forEach(item => {
        if(item.checked){
          total += item.count * item.nowPrice
        }
      })
      return total
    },
    // 总数量
    totalNum: state =>{
      return state.cartList.reduce((pre,item) => pre + item.count, 0)
    },
    // 选中的数量
    selectNum: state =>{
      let num = 0
      state.cartList.forEach(item => {
        if(item.checked){
          num += item.count
        }
      })
      return num
    },
  },
  modules: {
  }
})
