<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav-bar>
      <div slot="center">购物商店</div>
    </nav-bar>

    <!-- 轮播图 -->
    <home-swipe :banner="banner" class="home_swiper"></home-swipe>

    <!-- 推荐列表 -->
    <home-recommend :recommend="recommend"></home-recommend>

    <!-- 本周流行 -->
    <div>
      <img src="../../assets/img/home/recommend_bg.jpg" alt="">
    </div>

    <!-- 选项卡 -->
     <tab-control :title="title" class="tab_control"></tab-control>

     <!-- 商品列表 -->
     <goods-list :goods="goods['new'].list"></goods-list>

     <ul>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
     </ul>
  </div>
</template>

<script>
// 导航栏
import NavBar from 'common/navbar/NavBar'
// 轮播图
import HomeSwipe from 'views/home/childComponent/HomeSwipe'
// 推荐列表
import HomeRecommend from 'views/home/childComponent/HomereRommend'
// 选项卡
import TabControl from 'components/content/tabcontrol/TabControl'
// 商品列表
import GoodsList from 'components/content/goods/GoodsList'
import {reqHomeData, reqHomeGoodsList} from 'api/index'
export default {
  name: 'home',
  components:{
    NavBar,
    HomeSwipe,
    HomeRecommend,
    TabControl,
    GoodsList
  },
  data(){
    return {
      // 轮播图
      banner:[],
      // 推荐
      recommend:[],
      // 选项卡标题
      title:['流行','新歌','精选'],
      // 商品列表数据
      goods:{
        'pop':{page: 0, data: []},
        'new':{page: 0, data: []},
        'sell':{page: 0, data: []},
      },
      // 当前选中的项目
      currentType: 'pop'
    }
  },
  methods:{
    // 获取轮播图和推荐列表数据
    async getHomeData(){
      const result = await reqHomeData()
      if(result.returnCode === "SUCCESS"){
        this.banner = result.data.banner.list
        this.recommend = result.data.recommend.list
      }
      // console.log(result)
    },

    // 获取商品列表数据
    async getGoodsList(type){
      // 在不同的类型上页码值随着滑动而增加
      const page = this.goods[type].page + 1
      const result = await reqHomeGoodsList(type, page)
      if(result.returnCode === "1001"){
          this.goods[type].list = result.data.list

          
        }
        if(this.goods[type]===0){
            this.currentType = 'pop'
          }else if(this.goods[type]===1){
            this.currentType = 'new'
          }else{
            this.currentType = 'sell'
          }
        console.log(this.currentType)
      // console.log(this.goods[type])
      // console.log(result)
    }
  },
  created(){
    // 获取轮播图和推荐列表数据
    this.getHomeData()

    // 获取不同的商品列表数据
    this.getGoodsList('pop')
    this.getGoodsList('new')
    this.getGoodsList('sell')
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  .navbar{
    background-color: var(--color-tint);
    color: #fff;
    padding-bottom: 44px;
  }

  .home_swiper{
    padding-top: 44px;
  }

  img{
    width: 100%;
  }

  .tab_control{
    position: sticky;
    top: 44px;
    background-color: #fff;
  }
}
</style>