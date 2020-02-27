<template>
  <div id="app">
    <router-view />
    <!-- 底部导航 -->
    <van-tabbar v-model="active" v-show="showactiove" active-color="#BC272E">
      <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/channel" icon="cashier-o">频道</van-tabbar-item>
      <van-tabbar-item to="/cars" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 底部导航end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      showactiove: false
    };
  },
  created() {
    // 首次进入，都进入首页
    this.$router.push("/");
  },
  watch: {
    "$route.path": function(newValue) {
      switch (newValue) {
        case "/home":
          this.active = 0;
          break;
        case "/category":
          this.active = 1;
          break;
        case "/channel":
          this.active = 2;
          break;
        case "/cars":
          this.active = 3;
          break;
        case "/my":
          this.active = 4;
          break;
      }

      if (
        newValue == "/Leadingpage" ||
        newValue == "/Advertise" ||
        newValue == "/Productdetail" ||
        newValue == "/pay" ||
        newValue == "/Tosearch" 
      ) {
        this.showactiove = false;
      } else {
        this.showactiove = true;
      }
    }
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0px;
  padding: 0px;
  width: 100%;
}

.van-icon::before {
  font-size: 26px;
}
</style>
