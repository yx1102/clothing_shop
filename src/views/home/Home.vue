<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav-bar class="navbar">
      <div slot="center">购物商店</div>
    </nav-bar>
    <!-- 到达指定位置出现的tab栏 -->
      <tab-control
        :title="title"
        class="tab_control1"
        @tabClick="tabClick"
        ref="tabcontrol1"
        v-show="isShowTab"
      ></tab-control>
    <scroll
      class="content"
      :probeType="3"
      :pullUpLoad="true"
      ref="scroll"
      @scrollPosition="scrollPosition"
      @pullingUp="loadMore"
    >
      <!-- 轮播图 -->
      <home-swipe
        :banner="banner"
        class="home_swiper"
        @loadedImg="loadedImg"
      ></home-swipe>

      <!-- 推荐列表 -->
      <home-recommend :recommend="recommend"></home-recommend>

      <!-- 本周流行 -->
      <div><img src="../../assets/img/home/recommend_bg.jpg" alt="" /></div>

      <div class="settabtop">
        <!-- 选项卡 -->
        <tab-control
          :title="title"
          class="tab_control"
          @tabClick="tabClick"
          ref="tabcontrol"
          v-show="!isShowTab"
        ></tab-control>
      </div>

      <!-- 商品列表 -->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <BackTop @click.native="backTop" v-show="scrollY > 1000"></BackTop>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import { backTopMixin } from '../../utils/mixin'

import HomeSwipe from "views/home/childComponent/HomeSwipe"
import HomeRecommend from "views/home/childComponent/HomeRommend"
import GoodsList from "components/content/goods/GoodsList"

import NavBar from "common/navbar/NavBar"
import TabControl from "components/content/tabcontrol/TabControl"
import Scroll from "components/content/scroll/Scroll"
import BackTop from "components/common/backtop/BackTop"

import { reqHomeData, reqHomeGoodsList } from "api/home"
export default {
  name: "home",
  mixins: [backTopMixin],
  components: {
    NavBar,
    HomeSwipe,
    HomeRecommend,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      // 轮播图
      banner: [],
      // 推荐
      recommend: [],
      // 选项卡标题
      title: ["流行", "新歌", "精选"],
      // 商品列表数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      scrollY: 0,
      tabHeight: 0
    };
  },
  methods: {
    /**
     * 事件方法
     */
    tabClick(index) {
      if (index === 0) {
        this.currentType = "pop";
      } else if (index === 1) {
        this.currentType = "new";
      } else {
        this.currentType = "sell";
      }
      this.$refs.tabcontrol.currentIndex = index
      this.$refs.tabcontrol1.currentIndex = index
    },

    /* backTop() {
      // this.$refs.scroll.scroll.scrollTo(0,0, 500) 第一个scroll是组件，第二个scroll是组件中的data
      this.$refs.scroll.scrollTo(0, 0, 500);
    }, */

    scrollPosition(position) {
      this.scrollY = Math.abs(position.y);
    },

    loadMore() {
      this.getGoodsList(this.currentType);
    },

    loadedImg: debounce(function(){
      // 监听tabs的高度
      this.tabHeight = this.$refs.tabcontrol.$el.offsetTop - 44
    },500),

    /**
     * 接口数据
     */
    async getHomeData() {
      const result = await reqHomeData();
      if (result.returnCode === "SUCCESS") {
        this.banner = result.data.banner.list;
        this.recommend = result.data.recommend.list;
      }
      // console.log(result)
    },

    async getGoodsList(type) {
      // 在不同的类型上页码值随着滑动而增加
      const page = this.goods[type].page + 1;
      const res = await reqHomeGoodsList(type, page);

      if (res.success) {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      }
    }
  },
  created() {
    // 获取轮播图和推荐列表数据
    this.getHomeData();

    // 获取不同的商品列表数据
    this.getGoodsList("pop");
    this.getGoodsList("new");
    this.getGoodsList("sell");
  },
  mounted() {
    // 监听图片是否加载完成
    this.$bus.$on("homeImageLoad", () => {
      // 前面一个是解决路由切换后不能refresh的bug
      this.$refs.scroll && this.$refs.scroll.refresh();
    })
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
    isShowTab() {
      if (this.scrollY > this.tabHeight) {
        return true;
      } else {
        return false;
      }
    },
  },
  activated() {
    // 进入的时候设置会原来的高度
    // this.$refs.scroll.scrollTo(0, this.scrollY, 0)
    // this.$refs.scroll.refresh()
  },
  deactivated() {
    // 离开的时候记录当前的高度
    // this.saveY = this.$refs.scroll && this.scrollY
  },
};
</script>
<style lang="less" scoped>
.home {
  height: 100vh;
  position: relative;

  .navbar {
    background-color: var(--color-tint);
    color: #fff;
  }

  img {
    width: 100%;
  }

  /* .wrapper{
    margin-top: 44px;
  } */

  .tab_control1 {
    position: relative;
    z-index: 9;
  }

  .content {
    height: calc(100% - 93px); 
    overflow: hidden;
  }

  /* .fixed {
    position: fixed;
    top: 44px;
    left: 0;
  } */
}
</style>
