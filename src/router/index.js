import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Leadingpage from "../views/Leadingpage.vue";
import Advertise from "../views/Advertise.vue";
import Category from "../views/Category.vue";
import Cars from "../views/Cars.vue";
import My from "../views/My.vue";
import Channel from "../views/Channel.vue";
import Productdetail from "../views/Productdetail.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Pay from "../views/Pay.vue";
import Tosearch from "../views/Tosearch.vue";
import Allorders from "../views/Allorders.vue";
import Myquestion from "../views/Myquestion.vue";
import inAllorder from "../views/inAllorder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "引导页",
    component: Leadingpage
  },
  {
    path: "/advertise",
    name: "广告",
    component: Advertise
  },
  {
    path: "/Home",
    name: "首页",
    component: Home
  },
  {
    path: "/category",
    name: "分类",
    component: Category
  },
  {
    path: "/channel",
    name: "频道",
    component: Channel
  },
  {
    path: "/cars",
    name: "购物车",
    component: Cars
  },
  {
    path: "/my",
    name: "我的",
    component: My
  },
  {
    path: "/productdetail",
    name: "商品详情",
    component: Productdetail
  },
  {
    path: "/login",
    name: "登录",
    component: Login
  },
  {
    path: "/register",
    name: "注册",
    component: Register
  },
  {
    path: "/pay",
    name: "订单",
    component: Pay
  },
  {
    path: "/tosearch",
    name: "搜索",
    component: Tosearch
  },
  {
    path: "/allorders",
    name: "全部订单",
    component: Allorders
  },
  {
    path: "/myquestion",
    name: "我的订单",
    component: Myquestion
  },
  {
    path: "/inAllorder",
    name: "订单页",
    component: inAllorder
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
