<template>
  <div>
    <van-nav-bar :title="$route.name"></van-nav-bar>
    <div class="logo">
      <img src="../assets/images/logo.jpg" alt />
    </div>
    <van-cell-group>
      <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
      <van-field v-model="password1" type="password" label="确认密码" placeholder="确认密码" required />
    </van-cell-group>
    <div class="register">
      <span class="register_go" @click="registerGo">已有账号？立即登录</span>
    </div>
    <div class="btm">
      <van-button type="primary" size="large" @click="getdata">立即注册</van-button>
    </div>
    <div class="agree">
      <span>注册账号即表示您同意《服务条款》</span>
    </div>
  </div>
</template>

<script>
import { Notify } from "vant";
export default {
  data() {
    return {
      username: null,
      password: null,
      password1: null,
      iphone: null,
      sms: null
    };
  },
  methods: {
      registerGo(){
          this.$router.push("/login")
      },
    getdata() {
      if (this.password == this.password1) {
        this.$axios
          .get("/register", {
            params: {
              username: this.username,
              password: this.password,
              iphone: this.iphone
            }
          })
          .then(data => {
            window.console.log(data);
            if (data.data.code == 200) {
              Notify({
                message: "注册成功",
                type: "success",
                duration: 2000,
                onOpened: () => {
                  this.$router.push("/login");
                }
              });
            }
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar__left {
  width: 46px;
  height: 46px;
  z-index: 1000;
}
.logo {
  width: 100%;
  height: 100px;
  img {
    display: block;
    width: 4.25rem;
    height: 4.25rem;
    border-radius: 50%;
    margin: 30px auto;
  }
}
.btm {
  width: 100%;
  margin-top: 20px;
  .van-button--large {
    width: 80%;
    margin: 0 10%;
  }
}
.van-button--primary {
  background-color: #b81c22;
  border: none;
}
.register {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px;
  overflow: hidden;
  .register_go {
    font-size: 12px;
    color: #555;
    float: right;
  }
}
.agree {
  width: 100%;
  margin-top: 20px;
  > span {
    display: block;
    font-size: 12px;
    text-align: center;
    color: #555;
    margin: 0 auto;
  }
}
</style>