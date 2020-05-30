<template>
  <div class="cart">
    <!-- 导航栏 -->
    <nav-bar class="navbar">
      <div slot="center">购物车({{ totalNum }})</div>
    </nav-bar>
    <div v-if="hasToken">
      <CartList></CartList>
      <CartTabbar></CartTabbar>
    </div>
    <div v-else>
      <button class="to_login">去登陆</button>
    </div>
  </div>
</template>
<script>
import NavBar from "common/navbar/NavBar";

import CartList from "./subcompontent/CartList.vue";
import CartTabbar from "./subcompontent/CartTabbar.vue";

import { mapGetters } from "vuex";

export default {
  name: "cartPage",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["totalNum"]),
    hasToken(){
      if(JSON.parse(localStorage.getItem('token'))){
        return true
      }else{
        return false
      }
    }
  },
  components: {
    NavBar,
    CartList,
    CartTabbar
  }
};
</script>
<style lang="less" scoped>
.cart {
  .navbar {
    background-color: #00a5f9;
    color: #fff;
  }
  .to_login {
    width: 50%;
    height: 40px;
    border: none;
    outline: none;
    background: red;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
</style>
