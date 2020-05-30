import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://112.74.99.5:3000/web/api',
  timeout: 5000
})


instance.interceptors.request.use(function (config) {
   const {method, data} = config
   return config
})


// 响应拦截器，直接输出数据信息，并且直接在拦截器中实现请求失败
instance.interceptors.response.use(function (response) {
    // 直接获取到data数据对象
    return response.data;
  }, function (error) {
    console.log('请求出错' + error.msg)
    return new Promise(() => {})
  });

  export default instance