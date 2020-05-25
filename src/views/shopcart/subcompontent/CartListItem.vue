<template>
  <div class="cart_list">
    <div class="cart_list_item" v-for="(item, index) in cartList" :key="index">
      <!-- <cart-check-button/> -->
      <input type="checkbox" class="checkedbox" :checked="item.checked" @click="handelItemChange(item.iid)">
      <div class="item_img">
        <img :src="item.imgURL" />
      </div>
      <div class="item_info">
        <p class="item_title">{{item.title}}</p>
        <p class="item_desc">{{item.desc}}</p>
        <span class="item_price">￥{{item.nowPrice}}</span>
        <span class="item_count">x{{item.count}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import CartCheckButton from "./CartCheckButton.vue"
import {mapState} from 'vuex'
export default {
  name: 'cartListItemPage',
  methods: {
    handelItemChange(id){
      const index = this.cartList.findIndex(item => item.iid === id)
      this.$store.dispatch('handelItemChange', index)
      // this.cartList[index].checked = !this.cartList[index].checked
    }
  },
  computed: {
    ...mapState({
      cartList: state => state.cartList
    })
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