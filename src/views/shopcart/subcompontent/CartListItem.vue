<template>
  <div class="cart_list_item">
    <!-- <cart-check-button/> -->
    <input type="checkbox" class="checkedbox">
    <div class="item_img">
      <img src="//s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg" alt="" />
    </div>
    <div class="item_info">
      <p class="item_title">"2018秋季新款韩版百搭格子长袖衬衫"</p>
      <p class="item_desc">"2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装"</p>
      <span class="item_price">￥299</span>
      <span class="item_count">x1</span>
    </div>
  </div>
</template>
<script>
import CartCheckButton from "./CartCheckButton.vue";
export default {
  name: 'cartListItemPage',
  methods: {
  },
  components: {
    CartCheckButton
  }
};
</script>

<style scoped lang="less">
.cart_list_item {
  width: 100%;
  height: 5.5rem;
  border-bottom: 0.04rem solid rgba(128, 128, 128, 0.4);
  display: flex;
  padding: 0.4rem;
  padding-left: 0rem;
  margin: 10px 0;

  .checkedbox{
    position: relative;
    top: calc(50% - 0.35rem);
    width: 0.9rem;
    height: 0.9rem;
    margin: 0 auto;
    padding: 0 5px;
  }
}
.item_img {
  width: 3.6rem;
  height: 100%;
}
.item_img img {
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
}
.item_info {
  position: relative;
  width: calc(100% - 4rem - 2rem - 0.6rem);
  margin-left: 0.4rem;
}
.item_info p {
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item_title {
  font-size: 0.75rem;
  padding-bottom: 0.5rem;
}
.item_desc {
  font-size: 0.6rem;
  color: gray;
}
.item_price {
  position: absolute;
  left: 0;
  bottom: 0.4rem;
  font-size: 0.75rem;
  color: orangered;
}
.item_count {
  position: absolute;
  right: 0.4rem;
  bottom: 0.4rem;
  font-size: 0.75rem;
}
</style>