<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav-bar>
      <span slot="center">购物商店</span>
    </nav-bar>

    <!-- 轮播图 -->
    <home-swipe :banner="banner"></home-swipe>
  </div>
</template>

<script>
// 导航栏
import NavBar from 'common/navbar/NavBar'
// 轮播图
import HomeSwipe from 'views/home/childComponent/HomeSwipe'
import {reqHomeData} from 'api/index'
export default {
  name: 'home',
  components:{
    NavBar,
    HomeSwipe
  },
  data(){
    return {
      banner:[]
    }
  },
  methods:{
    async getHomeData(){
      const result = await reqHomeData()
      if(result.returnCode === "SUCCESS"){
        this.banner = result.data.banner.list
      }
      console.log(this.banner)
    }
  },
  created(){
    this.getHomeData()
  }
}
</script>
<style lang="less" scoped>
.home{
  .navbar{
    background-color: var(--color-tint);
    color: #fff;
  }
}
</style>