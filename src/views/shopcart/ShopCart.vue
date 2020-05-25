<template>
  <div class="cart">
    <!-- 导航栏 -->
    <nav-bar class="navbar">
      <div slot="center">购物车(6)</div>
    </nav-bar>
    <CartList></CartList>
    <CartTabbar></CartTabbar>
  </div>
</template>
<script>
import NavBar from "common/navbar/NavBar"

import CartList from "./subcompontent/CartList.vue";
import CartTabbar from "./subcompontent/CartTabbar.vue";

export default {
  name: 'cartPage',
  data() {
    return {
      
    }
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