<template>
  <div>
    <div id="cart_list" v-if="cartList.length > 0">
      <scroll ref="scroll" class="cart_scroll">
        <template>
          <cart-list-item></cart-list-item>
        </template>
      </scroll>
    </div>
    <div v-else>
      <img src="http://img2.imgtn.bdimg.com/it/u=3214428190,3968304704&fm=26&gp=0.jpg" alt="" width="100%">
    </div>
  </div>
</template>
<script>
import Scroll from "components/content/scroll/Scroll.vue";
import CartListItem from "./CartListItem.vue";
import {mapState} from 'vuex'
export default {
  name: "CartList",
  data() {
    return {};
  },
  components: {
    Scroll,
    CartListItem
  },
  methods: {},
  computed: {
    ...mapState({
      cartList: state => state.cartList
    })
  },
};
</script>
<style scoped>
#cart_list {
  font-size: 0.68rem;
  height: calc(100vh - 93px);

  padding-bottom: 42px;
}
/**
* scroll
*/
.cart_scroll {
  height: 100%;
  overflow: hidden;
}
</style>
