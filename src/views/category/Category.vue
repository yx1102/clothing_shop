<template>
  <div class="category">
    <!-- 导航栏 -->
    <nav-bar class="navbar">
      <div slot="center">购物商店</div>
    </nav-bar>
    <div class="good">
      <left-menu :menu="leftMenuList" @changeTab="changeTab"></left-menu>
      
      <scroll ref="rightScroll" class="right_scroll">
        <!-- 商品列表 -->
        <ProductList :goods="goods" @loadImg="loadImg"></ProductList>
      </scroll>
    </div>
  </div>
</template>
<script>
import NavBar from "common/navbar/NavBar";
import Scroll from "components/content/scroll/Scroll";

import LeftMenu from './subcomponent/LeftMenu'
import ProductList from './subcomponent/ProductList'

import { reqCategoryMenu, reqCategoryInfo } from "../../api/category";
export default {
  data() {
    return {
      leftMenuList: [],
      goods:{},
      changeIndex: 0
    }
  },
  created() {
    this.getCategoryMenu()
  },
  mounted() {
    this.$refs.rightScroll && this.$refs.rightScroll.refresh();
  },
  methods: {
    /**
     * 方法
     */
    changeTab(index){
      this.changeIndex = index
      this.getCategoryInfo()
      this.$refs.rightScroll.scrollTo(0,0,0)
    },

    loadImg(){
      this.$refs.rightScroll && this.$refs.rightScroll.refresh()
    },

    /**
     * 请求网络数据
     */
    async getCategoryMenu() {
      const result = await reqCategoryMenu();
      if (result.returnCode === "SUCCESS") {
        this.leftMenuList = result.data.category.list;
      }

      this.getCategoryInfo()
    },

    async getCategoryInfo(){
      const maitKey = this.leftMenuList[this.changeIndex].maitKey
      const result = await reqCategoryInfo(maitKey)
      if (result.returnCode === "SUCCESS") {
        this.goods = result.data
      }
    }
  },
  components: {
    NavBar,
    LeftMenu,
    ProductList,
    Scroll
  }
};
</script>
<style lang="less" scoped>
.category {
  height: 100vh;

  .right_scroll{
    height: calc(100vh - 44px - 49px);
  }

  .navbar {
    background-color: var(--color-tint);
    color: #fff;
  }

  .good {
    display: flex;
    width: 100%;
    background: #fff;
    overflow: hidden;

    .foods-wrapper {
      flex: 1;

      .title {
        padding-left: 14px;
        height: 26px;
        line-height: 26px;
        border-left: 2px solid #d9dde1;
        font-size: 12px;
        color: rgb(147, 153, 159);
        background: #f3f5f7;
      }

      .food-item {
        display: flex;
        margin: 18px;
        padding-bottom: 18px;

        &:last-child {
          margin-bottom: 0;
        }

        .icon {
          flex: 0 0 57px;
          margin-right: 10px;
        }

        .content {
          flex: 1;
          position: relative;

          .name {
            margin: 2px 0 8px 0;
            height: 14px;
            line-height: 14px;
            font-size: 14px;
            color: rgb(7, 17, 27);
          }

          .desc,
          .extra {
            line-height: 10px;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }

          .desc {
            line-height: 12px;
            margin-bottom: 8px;
          }

          .extra {
            .count {
              margin-right: 12px;
            }
          }

          .price {
            font-weight: 700;
            line-height: 24px;

            .now {
              margin-right: 8px;
              font-size: 14px;
              color: rgb(240, 20, 20);
            }

            .old {
              text-decoration: line-through;
              font-size: 10px;
              color: rgb(147, 153, 159);
            }
          }

          .cartcontrol-wrapper {
            position: absolute;
            right: 0;
            bottom: -5px;
          }
        }
      }
    }
  }
}
</style>
