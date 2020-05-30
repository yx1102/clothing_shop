<template>
  <section class="registerContainer">
    <div class="registerInner">
      <div class="register_header">
        <h2 class="register_logo">会员注册</h2>
      </div>
      <div class="register_content">
        <form>
          <div>
            <section>
              <section class="register_message">
                <input type="text" maxlength="11" placeholder="账号" v-model.trim="name"/>
              </section>
              <section class="register_message">
                <input type="text" maxlength="11" placeholder="用户名" v-model.trim="username"/>
              </section>
              <section class="register_verification">
                <input type="password" placeholder="密码" v-model.trim="password" min="6" max="18"/>
              </section>
              <section class="register_verification">
                <input type="password" placeholder="确认密码" v-model.trim="confirmPwd" @blur="checkedPwd"/>
                <div class="switch_button off">
                  <div class="switch_circle"></div>
                  <span class="switch_text">...</span>
                </div>
              </section>
            </section>
          </div>
          <button class="register_submit" @click.prevent="handelRegister">注册</button>
        </form>
        <a class="register_now" @click="$router.push('/login')">拥有账号直接登录</a>
      </div>
      <a href="javascript:" class="go_back">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </section>
</template>

<script>
import {reqRegister} from '../../api/login'
export default {
  data() {
    return {
      name: 'kkkkk',
      username: 'kkkkk',
      password:'123456',
      confirmPwd:'123456',
    };
  },
  methods: {
    // 校验密码是否一致
    checkedPwd(){
      if(!this.confirmPwd){
        this.$toast.show('请输入确认密码')
      }else if(this.confirmPwd !== this.password){
        this.$toast.show('密码不一致')
      }
    },
    // 注册请求
    async handelRegister(){
      if(!this.name || !this.username){
        return this.$toast.show('用户名不能为空')
      }
      // 密码的正则
      const regex = new RegExp('^[0-9A-Za-z]{6,18}$')
      if(!regex.test(this.password)){
        return this.$toast.show('密码不符合规范')
      }

      if(this.confirmPwd !== this.password){
        return this.$toast.show('密码不一致')
      }
      const result = await reqRegister(this.name, this.username, this.password)
        console.log(result);
      if(result.code === 200){
        this.$toast.show(result.msg)
        this.$router.push('/login')
      }else{
        this.$toast.show(result.msg)
      }
    }
  }
};
</script>
<style lang='less' scoped>
.registerContainer {
  width: 100%;
  height: 100%;
  background: #fff;

  .registerInner {
    padding-top: 60px;
    width: 80%;
    margin: 0 auto;

    .register_header {
      .register_logo {
        font-size: 40px;
        font-weight: bold;
        color: #02a774;
        text-align: center;
      }
    }

    .register_content {
      > form {
        margin-top: 60px;
        > div {
          input {
            width: 100%;
            height: 100%;
            padding-left: 10px;
            box-sizing: border-box;
            border: 1px solid #ddd;
            border-radius: 4px;
            outline: 0;
            font: 400 14px Arial;

            &:focus {
              border: 1px solid #02a774;
            }
          }

          .register_message {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .get_verification {
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              border: 0;
              color: #ccc;
              font-size: 14px;
              background: transparent;
            }
          }

          .register_verification {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .switch_button {
              font-size: 12px;
              border: 1px solid #ddd;
              border-radius: 8px;
              transition: background-color 0.3s, border-color 0.3s;
              padding: 0 6px;
              width: 30px;
              height: 16px;
              line-height: 16px;
              color: #fff;
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);

              &.off {
                background: #fff;

                .switch_text {
                  float: right;
                  color: #ddd;
                }
              }

              &.on {
                background: #02a774;
              }

              > .switch_circle {
                position: absolute;
                top: -1px;
                left: -1px;
                width: 16px;
                height: 16px;
                border: 1px solid #ddd;
                border-radius: 50%;
                background: #fff;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
                transition: transform 0.3s;
              }
            }
          }

          .register_hint {
            margin-top: 12px;
            color: #999;
            font-size: 14px;
            line-height: 20px;

            > a {
              color: #02a774;
            }
          }
        }

        .register_submit {
          display: block;
          width: 100%;
          height: 42px;
          margin-top: 20px;
          border-radius: 4px;
          background: #4cd96f;
          color: #fff;
          text-align: center;
          font-size: 16px;
          line-height: 42px;
          border: 0;
        }
      }

      .about_us {
        display: block;
        font-size: 12px;
        margin-top: 20px;
        text-align: center;
        color: #999;
      }
    }

    .register_now{
      display: block;
      margin-top: 40px;
      text-align: center;
      font-size: 13px;
      color: red;
      font-weight: bolder;
    }

    .go_back {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 30px;
      height: 30px;

      > .iconfont {
        font-size: 20px;
        color: #999;
      }
    }
  }
}
</style>