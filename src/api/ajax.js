import axios from 'axios'

// 默认请求的基础地质
axios.defaults.baseURL = 'http://152.136.185.210:8000/api/h8';
axios.defaults.timeout = 5000;


axios.interceptors.request.use(function (config) {
   // 得到请求方式和请求体数据
   const {method, data} = config
  /*  // 处理post请求, 将data对象转换成query参数格式字符串
   if (method.toLowerCase() === 'post' && typeof data==='object') {
     config.data = qs.stringify(data) // username=admin&password=admin
   } */
   return config
})


// 响应拦截器，直接输出数据信息，并且直接在拦截器中实现请求失败
axios.interceptors.response.use(function (response) {
    // 直接获取到data数据对象
    return response.data;
  }, function (error) {
    this.$message.error('请求出错' + error.msg)
    return new Promise(() => {})
  });

  export default axios