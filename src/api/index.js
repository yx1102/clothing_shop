import ajax from './ajax'

// 获取首页轮播图和推荐列表
export const reqHomeData = () => {
  return ajax({
    url: '/home/multidata',
    method: 'get',
  })
}

// 获取首页的商品列表数据
export const reqHomeGoodsList = (type, page) => {
  return ajax({
    url: '/home/data',
    method: 'get',
    params:{
      type,
      page
    }
  })
}