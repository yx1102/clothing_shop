import ajax from './ajax'

// 登录
export const reqHomeData = () => {
  return ajax({
    url: '/home/multidata',
    method: 'get',
  })
}