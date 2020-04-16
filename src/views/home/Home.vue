<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav-bar>
      <span slot="center">购物商店</span>
    </nav-bar>

    <!-- 轮播图 -->
    
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
export default {
  name: 'home',
  components:{
    NavBar
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