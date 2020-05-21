<template>
    <div class="tabbar">
      <slot></slot>
    </div>
</template>
<script>
export default {
  name: "tabbar"
}
</script>
<style lang="less">
  .tabbar{
    display: flex;
    height: 49px;
    background-color: #eee;

    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;

    box-shadow: 0 -1px 1px #ddd;
  }
</style>