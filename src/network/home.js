import {request} from "./request";

//首页轮播图网络请求封装
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

//首页商品的网络请求封装
export function  getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
