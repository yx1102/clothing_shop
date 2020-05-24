<template>
  <div>
    <swiper
      class="swiper"
      :options="swiperOption"
      v-if="banner.length > 0"
      ref="mySwiper"
      @mouseenter.native="onEnter"
      @mouseleave.native="onLeave"
    >
      <swiper-slide v-for="(item, index) in banner" :key="index">
        <img :src="item.image" alt="" @load="loadedImg" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
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
      },
      isShowImg: false
    };
  },

  props: {
    banner: {
      type: Array
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  methods: {
    onEnter() {
      this.mySwiper.autoplay.stop();
    },
    onLeave() {
      this.mySwiper.autoplay.start();
    },

    loadedImg() {
      // 只需要发送一次事件即可
      if (!this.isShowImg) {
        this.$emit("loadedImg");
        this.isShowImg = true
      }
    }
  },
  computed: {
    //获取可以操作的swiper
    mySwiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>
<style lang="less" scoped>
.swiper-container {
  height: 195px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
