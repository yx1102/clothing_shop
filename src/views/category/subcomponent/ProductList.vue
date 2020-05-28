<template>
  <div class="goods_content">
      <div class="h_title" v-if="goods.info">
      <span class="delimit">/</span>
      <span>{{ goods.info.title }}</span>
      <span class="delimit">/</span>
    </div>
    <div class="cate_list">
      <a :href="item.link" class="list_item"  v-for="(item, index) in goods.list" :key="index" >
        <img :src="item.image" @load="loadImg"/>
        <div class="right_text">
          {{ item.title }}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  
  methods: {
    loadImg: debounce(function(){
      this.$emit('loadImg')
    },500),
  },
};
</script>

<style scoped lang="less">
.goods_content {
  flex: 6;
  color: #333333;
  text-align: center;
  font-size: 14px;
  box-sizing: border-box;
  .h_title {
    width: 100%;
    color: #999;
    padding: 10px 0;
    .delimit {
      padding: 0 10px;
    }
  }
  .cate_list {
    display: flex;
    flex-wrap: wrap;
    .list_item {
      width: 33.33%;
      padding: 10px 0 15px;
      img {
        width: 60%;
      }
    }
  }
}
</style>
