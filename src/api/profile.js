 import ajax from './instance'
 import store from '../store'

 // 注册
export const reqUserInfo = (id) => {
  return ajax({
    url: `/user/${id}`,
    method: 'get',
    headers:{
      "Authorization": JSON.parse(localStorage.getItem("token") || '[]')
    }
  })
}