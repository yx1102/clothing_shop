import ajax from './instance'

// 注册
export const reqRegister = (name,username,pwd) => {
  return ajax({
    url: '/register',
    method: 'post',
    data:{
      name,
      username,
      pwd
    }
  })
}

// 登录
export const reqLogin = (username,password) => {
  return ajax({
    url: '/login',
    method: 'post',
    data:{
      username,
      password
    }
  })
}

// 验证码
