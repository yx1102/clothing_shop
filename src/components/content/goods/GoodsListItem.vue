<template>
  <!-- <div @click="$router.push('/detail/' + goodItem.iid)"> -->
  <router-link :to="/detail/ + goodItem.iid">
    <img :src="showImg" alt="" v-if="showImg" @load="imageLoad"/>
    <div class="desc">
      <p>{{ goodItem.title }}</p>
      <p>
        <span class="price">￥{{ goodItem.price }}</span> ☆
        <span>{{ goodItem.cfav }}</span>
      </p>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "GoodsListItem",
  props: {
    goodItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imageLoad(){
      if(this.$route.path.indexOf('/home') !== -1 ){
        this.$bus.$emit('homeImageLoad')
      }else{
        this.$bus.$emit('detailImageLoad')
      }
    }
  },
  computed: {
    showImg(){
      return this.goodItem.image || this.goodItem.show.img
    }
  },
};
</script>
<style lang="less" scoped>
img {
  width: 100%;
  height: 271.75px;
  vertical-align: center;
  border-radius: 5px;
}
.desc {
  padding-bottom: 10px;
  text-align: center;

  p {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-size: 14px;
    margin: 3px 0;
  }

  .price {
    color: var(--color-tint);
  }
}
</style>
