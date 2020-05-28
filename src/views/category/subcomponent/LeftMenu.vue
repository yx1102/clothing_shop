<template>
  <scroll ref="leftScroll" class="left_scroll" >
    <ul>
      <li class="menu-item" v-for="(item, index) in menu" :key="index" @click="changeIndex(index)" :class="index === currentIndex ? 'current' : ''">
        <span class="text">{{ item.title }}</span>
      </li>
    </ul>
  </scroll>
</template>

<script>
import Scroll from "components/content/scroll/Scroll";
export default {
  name: "",
  data() {
    return {
      currentIndex: 0
    };
  },
  computed: {
  },
  methods: {
    changeIndex(index){
      this.currentIndex = index
      this.$emit('changeTab', index)
    }
  },
  mounted() {
    this.$refs.leftScroll && this.$refs.leftScroll.refresh();
  },
  props: {
    menu: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Scroll
  }
};
</script>
<style lang="less" scoped>
.left_scroll {
  height: calc(100vh - 44px - 49px);
  flex: 0 0 80px;
  width: 100px;
  background: #f3f5f7;
  overflow: hidden;
}
.menu-item {
  display: table;
  height: 54px;
  width: 100%;
  padding: 0 10px;
  line-height: 14px;

  &.current {
    border-left: 2px solid #02a774;
    position: relative;
    z-index: 10;
    margin-top: -1px;
    background: #fff;
    color: #02a774;
    font-weight: bolder;
  }

  .icon {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 2px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
  }

  .text {
    display: table-cell;
    width: 56px;
    vertical-align: middle;
    font-size: 14px;
  }
}
</style>
