// 共用的部分【使用的时候调用即可】
export const backTopMixin = {
  data: () => {},
  methods: {
    backTop: function () {
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
}