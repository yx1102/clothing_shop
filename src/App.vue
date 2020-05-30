<template>
  <div id="app">
    <keep-alive exclude="detail,cartPage">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar v-if="$route.meta.showTabBar"></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from 'components/content/MainTabBar'
export default {
  name: 'app',
  components:{
    MainTabBar,
  }
}
</script>
<style lang="less">
@import "./assets/css/base.css";
</style>
