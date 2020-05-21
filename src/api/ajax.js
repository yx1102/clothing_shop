import axios from 'axios'

// 默认请求的基础地址
const request = axios.create({
  baseURL: 'http://152.136.185.210:8000/api/n3',
  timeout: 5000
})


/* axios.defaults.baseURL = 'http://152.136.185.210:8000/api/n3';
axios.defaults.timeout = 5000; */


request.interceptors.request.use(function (config) {
   // 得到请求方式和请求体数据
   const {method, data} = config
  /*  // 处理post请求, 将data对象转换成query参数格式字符串
   if (method.toLowerCase() === 'post' && typeof data==='object') {
     config.data = qs.stringify(data) // username=admin&password=admin
   } */
   return config
})


// 响应拦截器，直接输出数据信息，并且直接在拦截器中实现请求失败
request.interceptors.response.use(function (response) {
    // 直接获取到data数据对象
    return response.data;
  }, function (error) {
    console.log('请求出错' + error.msg)
    return new Promise(() => {})
  });

  export default request