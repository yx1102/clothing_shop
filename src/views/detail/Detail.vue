<template>
  <div class="detail">
    <nav-bar class="navbar">
      <div
        slot="left"
        class="iconfont icon-fenxiang"
        @click="$router.back()"
      ></div>
      <div slot="center">
        <TabControl :title="title" class="tabs" @tabClick="tabClick" ref="tabnav"></TabControl>
      </div>
    </nav-bar>
    <Scroll class="scroll" ref="scroll" :probeType="1" @scrollEndPosition="scrollEndPosition">
      <!-- 轮播图 -->
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <!-- 商家基础信息 -->
      <DetailBaseInfo :DetailBaseInfo="DetailBaseInfo" />
      <!-- 商家好评信息 -->
      <DetailShopInfo :shop="shop" />
      <!-- 商品详情 -->
      <DetailGoodsInfo :detailInfo="detailInfo" @detailLoadImg="detailLoadImg"/>
      <!-- 商品规格 -->
      <DetailParamInfo :paramInfo="paramInfo" ref="params"/>
      <!-- 商品评价 -->
      <DetailCommentInfo :commentInfo="commentInfo" ref="comment"/>
      <!-- 热门推荐 -->
      <DetailRecommendInfo :recommentList="recommentList" ref="recommend"/>
    </Scroll>

    <BackTop @click.native="backTop" v-show="scrollY > 1000"></BackTop>
    <DetailBottomBar :goodObj="goodObj"/>
  </div>
</template>

<script>
import { backTopMixin } from '../../utils/mixin'

import NavBar from "common/navbar/NavBar";
import TabControl from "../../components/content/tabcontrol/TabControl";
import Scroll from "../../components/content/scroll/Scroll";
import BackTop from "components/common/backtop/BackTop";

import DetailSwiper from "./subcomponent/DetailSwiper";
import DetailBaseInfo from "./subcomponent/DetailBaseInfo";
import DetailShopInfo from "./subcomponent/DetailShopInfo";
import DetailGoodsInfo from "./subcomponent/DetailGoodsInfo";
import DetailParamInfo from "./subcomponent/DetailParamInfo";
import DetailCommentInfo from "./subcomponent/DetailCommentInfo";
import DetailRecommendInfo from "./subcomponent/DetailRecommendInfo";
import DetailBottomBar from "./subcomponent/DetailBottomBar";

import { reqGoodDetail, Good, GoodsParam, Shop, reqComment } from "../../api/detail"
import debounce from 'lodash/debounce'
export default {
  name: "detail",
  mixins: [backTopMixin],
  data() {
    return {
      goodId: "",
      title: ["商品", "参数", "评论", "推荐"],
      topImages: [],
      DetailBaseInfo: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo:{},
      recommentList:[],
      topsHeight: [],
      scrollY: 0,
      goodObj:{}
    };
  },
  components: {
    NavBar,
    Scroll,
    TabControl,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar,
    BackTop
  },
  created() {
    // 1. 保存id
    this.goodId = this.$route.params.iid;

    // 2. 发送请求
    this.getGoodDetail();
    this.getComment()
  },
  mounted() {
    // 监听推荐列表图片是否加载完成
    this.$bus.$on("detailImageLoad", debounce( () => {
      // 前面一个是解决路由切换后不能refresh的bug
      this.$refs.scroll && this.$refs.scroll.refresh()
    }, 500))

    this.detailLoadImg()
  },
  methods: {
    /**
     * 事件
     */
    detailLoadImg: debounce(function(){
      // 监听详情图片请求完成后再重置滚动条的高度
      this.$refs.scroll && this.$refs.scroll.refresh()
      this.getTabsHeight()
    }, 500),

    tabClick(index){
      this.$refs.scroll.scrollTo(0, -this.topsHeight[index], 500)
    },

    // 获取tab页的不同高度
    getTabsHeight(){
      let tops = []
      // tops.push(0,this.$refs.params.$el.offsetTop-44,this.$refs.comment.$el.offsetTop-44,this.$refs.recommend.$el.offsetTop-44,Number.MAX_VALUE)
      tops.push(0,this.$refs.params.$el.offsetTop-44,this.$refs.comment.$el.offsetTop-44,this.$refs.recommend.$el.offsetTop-44,(this.$refs.recommend.$el.offsetTop-44)*2)
      this.topsHeight = tops
    },

    scrollEndPosition(position){
      this.scrollY = Math.abs(position.y)
      this.$refs.tabnav.currentIndex = this.currentIndex
    },

    /**
     * 请求
     */
    async getGoodDetail() {
      // 2.1 发送请求
      const result = await reqGoodDetail(this.goodId);
      // 2.2 轮播图的数据
      this.topImages = result.result.itemInfo.topImages;
      // 2.3 商品数据
      this.DetailBaseInfo = new Good(
        result.result.itemInfo,
        result.result.columns,
        result.result.shopInfo.services
      );
      // 2.4.获取店铺信息
      this.shop = new Shop(result.result.shopInfo);
      // 2.5.获取商品信息
      this.detailInfo = result.result.detailInfo;
      // 2.6.获取参数信息
      this.paramInfo = new GoodsParam(
        result.result.itemParams.info,
        result.result.itemParams.rule
      )
      
      // 2.7.获取评论信息
      if (result.result.rate.list) {
        this.commentInfo = result.result.rate.list[0];
      }

      this.goodObj = {
        iid : this.goodId,
        imgURL : this.topImages[0],
        title : this.DetailBaseInfo.title,
        desc : this.DetailBaseInfo.desc,
        newPrice : this.DetailBaseInfo.nowPrice
      }
    },

    // 推荐列表图文
    async getComment(){
      const result = await reqComment()
      this.recommentList = result.data.list
    }
  },
  computed: {
    currentIndex(){
      const index = this.topsHeight.findIndex((item,index) => this.scrollY >= item && this.scrollY < this.topsHeight[index+1])
      // 右侧滑动，左侧的样式还会发生改变，显示根据下标的改变来知道样式的改变
      if(index !== this.index && this.$refs.scroll){
        this.index = index
      }
      return index
    }
  },
}
</script>
<style lang="less" scoped>
.detail {
  height: 100vh;
  .navbar {
    color: #666;
    position: relative;
    .tabs {
      line-height: 44px;
      font-size: 14px;
    }
  }
  .scroll{
    height: calc(100% - 44px);
    overflow: hidden;
  }
}
</style>
