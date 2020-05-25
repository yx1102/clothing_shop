<template>
  <div class="cart">
    <!-- 导航栏 -->
    <nav-bar class="navbar">
      <div slot="center">购物车({{totalNum}})</div>
    </nav-bar>
    <CartList></CartList>
    <CartTabbar></CartTabbar>
  </div>
</template>
<script>
import NavBar from "common/navbar/NavBar"

import CartList from "./subcompontent/CartList.vue";
import CartTabbar from "./subcompontent/CartTabbar.vue";

import {mapGetters} from 'vuex'

export default {
  name: 'cartPage',
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters(['totalNum'])
  },
  components:{
    NavBar,
    CartList,
    CartTabbar
  }
}
</script>
<style lang="less" scoped>
.cart{
  .navbar{
    background-color: #00a5f9;
    color: #fff;
  }
}
</style>