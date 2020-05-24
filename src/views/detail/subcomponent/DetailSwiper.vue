<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="item in topImages" :key="item" class="swiper_item">
      <img :src="item" alt="" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      // 轮播图数据
      swiperOption: {
        notNextTick: true,
        observer: true,
        observeParents: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true,
        autoplay: {
          disableOnInteraction: false
        }
      }
    };
  },
  props: {
    topImages: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
};
</script>
<style lang="less" scoped>
.swiper_item {
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
}
</style>
