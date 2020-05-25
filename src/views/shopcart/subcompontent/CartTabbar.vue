<template>
  <div class="cart_total">
    <div style="display: flex;">
      <label><input type="checkbox" class="checkedbox"><span>全选</span></label>
    </div>
    <div class="calc">总计：1111</div>
    <div class="buy">去购买(6)</div>
  </div>
</template>
<script>
import CartCheckButton from "./CartCheckButton.vue";
export default {
  computed: {
  },
  components: {
    CartCheckButton
  },
  
  methods: {}
   
};
</script>
<style scoped>
.cart_total {
  font-size: 1rem;
  height: 2.5rem;
  display: flex;
  background-color: #eee;
  line-height: 2.5rem;
  text-align: center;
  position: fixed;
  bottom: 3.2rem;
  left: 0;
  right: 0;
  /* padding-left: 10px; */
}
.calc {
  flex: 1;
}
.buy {
  width: 5rem;
  background-color: #f03;
  color: white;
}

.checkedbox{
  margin: 0 10px;
  }
</style>