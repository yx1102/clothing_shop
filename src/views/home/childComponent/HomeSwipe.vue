<template>
    <swiper>
      <swiper-item v-for="item in banner" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title">
        </a>
      </swiper-item>
    </swiper>
</template>
<script>
// 轮播图
import {Swiper, SwiperItem} from 'common/swiper/index'
export default {
    name: 'HomeSwipe',
    props:{
        banner:{
            type: Array,
            default: []
        }
    },
    components:{
        Swiper, 
        SwiperItem
  },
}
</script>