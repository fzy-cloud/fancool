import Vue from "vue";
import Vuex from "vuex";
import recommend from "./Home/recommend.js";
import category from "./Category/category.js";
import Cart from "./modules/Cart.js";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    recommend,
    category,
    Cart
  }
});
