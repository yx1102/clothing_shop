<template>
     <tab-bar>
      <tab-bar-item path="/home" activeColor="#00a5f9">
        <img src="../../assets/img/tabbar/home.svg" alt="" class="icon" slot="icon-img">
        <img src="../../assets/img/tabbar/home_active.svg" alt="" class="icon" slot="icon-img-active">
        <span slot="icon-text">首页</span>
      </tab-bar-item>
      <tab-bar-item path="/category"  activeColor="#00a5f9">
        <img src="../../assets/img/tabbar/category.svg" alt="" class="icon" slot="icon-img">
        <img src="../../assets/img/tabbar/category_active.svg" alt="" class="icon" slot="icon-img-active">
        <span slot="icon-text">分类</span>
      </tab-bar-item>
      <tab-bar-item path="/shopcart"  activeColor="#00a5f9">
        <img src="../../assets/img/tabbar/shop_cart.svg" alt="" class="icon" slot="icon-img">
        <img src="../../assets/img/tabbar/shop_cart_active.svg" alt="" class="icon" slot="icon-img-active">
        <span slot="icon-text">购物车</span>
      </tab-bar-item>
      <tab-bar-item path="/profile"  activeColor="#00a5f9">
         <img src="../../assets/img/tabbar/profile.svg" alt="" class="icon" slot="icon-img">
         <img src="../../assets/img/tabbar/profile_active.svg" alt="" class="icon" slot="icon-img-active">
        <span slot="icon-text">我的</span>
      </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from '../common/tabbar/tabbar'
import TabBarItem from '../common/tabbar/TabBarItem.vue'
export default {
  components:{
    TabBar,
    TabBarItem
  }
}
</script>