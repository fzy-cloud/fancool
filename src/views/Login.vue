<template>
  <div>
    <van-nav-bar :title="$route.name" />
    <div class="logo">
      <img src="../assets/images/logo.jpg" alt />
    </div>
    <van-cell-group>
      <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <div class="register">
      <span class="register_go" @click="registerGo">免费注册</span>
    </div>
    <div class="btm">
      <van-button type="primary" size="large" @click="getlogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    registerGo() {
      this.$router.push("/register");
    },
    getlogin() {
      // ajax请求后台登录API功能
      this.$axios
        .get("/login", {
          params: {
            username: this.username,
            password: this.password
          }
        })
        .then(response => {
          // 1.把token存储cookie或localStorage
          let token = response.data.result.token;
          localStorage.login = token;

          if (response.data.code == 201) {
            Dialog.alert({
              message: "账号或密码错误！"
            }).then(() => {
              // on close
            });
          } else {
            this.$router.push("/my");
          }
        })
        .catch(error => {
          window.console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>

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
  box-sizing: border-box;
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
</style>