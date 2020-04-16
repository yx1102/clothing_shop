<template>
        <div class="tabbar-item" @click="itemClick">
          <div v-if="!this.isActive"><slot name="icon-img"></slot></div>
          <div v-else><slot name="icon-img-active"></slot></div>
          <div :style="activeStyle"><slot name="icon-text"></slot></div>
      </div>
</template>
<script>
export default {
    name: 'TabBarItem',
    props:{
      path:{
        type:String
      },
      activeColor:{
        type: String,
        default: 'red'
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    }
}
</script>
<style lang="less">
    .tabbar-item{
      flex: 1;
      text-align: center;
      font-size: 14px;

      .icon{
          width: 24px;
          height: 24px;
          display: block;
          margin: 0 auto;
          margin-top: 3px;
      }
    }
</style>