<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">会员登录</h2>
      </div>
      <div class="login_content">
        <form>
          <div>
            <section>
              <section class="login_message">
                <input
                  type="text"
                  maxlength="11"
                  placeholder="用户名"
                  v-model.trim="username"
                />
              </section>
              <section class="login_verification">
                <input
                  type="password"
                  placeholder="密码"
                  v-model.trim="password"
                  min="6"
                  max="18"
                />
              </section>
            </section>
          </div>
          <div class="login_remember">
            <div class="remember_left">
              <label><input type="checkbox" /><span>记住密码</span></label>
            </div>
            <div class="remember_right">
              忘记密码?
            </div>
          </div>
          <button class="login_submit" @click.prevent="handelLogin">
            登录
          </button>
        </form>
        <p class="go_regester">
          您现在还不是会员?<span
            class="regester_now"
            @click="$router.push('/register')"
            >立即注册</span
          >
        </p>
      </div>
      <a href="javascript:" class="go_back">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </section>
</template>

<script>
import { reqLogin } from "../../api/login";
export default {
  data() {
    return {
      username: "admin12",
      password: "admin"
    };
  },
  methods: {
    async handelLogin() {
      if (!this.username || !this.password) {
        return this.$toast.show("请输入相关信息");
      }
      const result = await reqLogin(this.username, this.password);
      if (result.code === 200) {
        const obj = result;
        this.$store.dispatch("saveToken", obj);
        this.$toast.show(result.msg);
        if (this.$route.query.redirect) {
          //如果存在参数
          let redirect = this.$route.query.redirect;
          this.$router.replace(redirect); //则跳转至进入登录页前的路由
        } else {
          this.$router.replace("/"); //否则跳转至首页
        }
      } else {
        this.$toast.show(result.msg);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;

  .loginInner {
    padding-top: 60px;
    width: 80%;
    margin: 0 auto;

    .login_header {
      .login_logo {
        font-size: 40px;
        font-weight: bold;
        color: #02a774;
        text-align: center;
      }
    }

    .login_content {
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

          .login_message {
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

          .login_verification {
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

          .login_hint {
            margin-top: 12px;
            color: #999;
            font-size: 14px;
            line-height: 20px;

            > a {
              color: #02a774;
            }
          }
        }

        .login_remember {
          display: flex;
          justify-content: space-between;
          margin-top: 15px;
          height: 30px;
          line-height: 30px;
          font-weight: bolder;

          .remember_left {
            input {
              width: 15px;
              height: 100%;
              float: left;
              margin-right: 10px;
            }
            span {
              float: left;
            }
          }
        }

        .login_submit {
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

    .go_regester {
      margin-top: 40px;
      text-align: center;
      font-size: 13px;
      .regester_now {
        color: red;
        font-weight: bolder;
        margin-left: 15px;
      }
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
