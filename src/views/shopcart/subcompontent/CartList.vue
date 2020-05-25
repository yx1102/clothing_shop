<template>
  <div id="cart_list">
    <scroll ref="scroll" class="cart_scroll">
      <template>
        <cart-list-item></cart-list-item>
        <cart-list-item></cart-list-item>
        <cart-list-item></cart-list-item>
      </template>
    </scroll>
  </div>
</template>
<script>
import Scroll from "components/content/scroll/Scroll.vue";
import CartListItem from "./CartListItem.vue";
export default {
  name:"CartList",
  data() {
    return {};
  },
  components: {
    Scroll,
    CartListItem
  },
  methods: {},
};
</script>
<style scoped>
#cart_list {
  font-size: 0.68rem;
  height: calc(100vh - 1.9rem - 2.09rem - 1.9rem);
}
/**
* scroll
*/
.cart_scroll {
  height: 100%;
  overflow: hidden;
}
</style>