import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// ui框架
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);
import "animate.css"; //动画插件
import "swiper/dist/css/swiper.css";

// 数据请求
import axios from "axios";
axios.defaults.baseURL = "http://192.168.54.14:3000";
// axios.defaults.baseURL = "http://192.168.43.228:3000";
Vue.prototype.$axios = axios;
import VueJsonp from "vue-jsonp";
Vue.use(VueJsonp);

//阿里矢量图
import "./assets/font/iconfont.css";
import Router from "vue-router";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
