<template>
  <div>
    <img :src="goodItem.show.img" alt="" v-if="goodItem.show.img" @load="imageLoad"/>
    <div class="desc">
      <p>{{ goodItem.title }}</p>
      <p>
        <span class="price">￥{{ goodItem.price }}</span> ☆
        <span>{{ goodItem.cfav }}</span>
      </p>
    </div>
  </div>
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
      this.$bus.$emit('imageLoad')
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
