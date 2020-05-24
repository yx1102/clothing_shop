import ajax from './ajax'

// 获取首页轮播图和推荐列表
export const reqGoodDetail = (iid) => {
  return ajax({
    url: '/detail',
    method: 'get',
    params:{
      iid
    }
  })
}

// 获取商品信息
export class Good {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
  }
}

// 获取商家信息
export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

// 获取店铺信息
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

// 获取推荐图文
export const reqComment = () => {
  return ajax({
    url: '/recommend',
    method: 'get'
  })
}