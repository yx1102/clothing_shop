<template>
  <div class="cart_total">
    <div style="display: flex;">
      <label><input type="checkbox" class="checkedbox" :checked="this.allSelect" @click="allChecked"><span>全选</span></label>
    </div>
    <div class="calc">总计：{{totalPrice | formatePrice}}</div>
    <div class="buy" @click="pay">去购买({{selectNum}})</div>
  </div>
</template>
<script>
import CartCheckButton from "./CartCheckButton.vue"
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['allSelect','totalPrice','selectNum'])
  },
  components: {
    CartCheckButton
  },
  
  methods: {
    // 全选
    allChecked(){
      this.$store.dispatch('allChecked',this.allSelect)
    },

    pay(){
      if(this.totalPrice === 0){
        return this.$toast.show('请选择商品')
      }else{
        this.$toast.show('请支付')
      }
    }
  },
  filters:{
    formatePrice(val){
      return '￥' + val.toFixed(2)
    }
  }
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