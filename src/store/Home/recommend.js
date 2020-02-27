import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists1: [
      {
        bigpic: require("../../assets/images/bigpic01.jpg"),
        list: [
          {
            url: require("../../assets/images/listspic01.jpg"),
            oldprice: "398",
            newprice: "199",
            name: "极地中长款鹅绒服 男款 黑色"
          },
          {
            url: require("../../assets/images/listspic02.jpg"),
            oldprice: "398",
            newprice: "199",
            name: "羽绒服 无缝锁温智能发热鹅绒服 黑色"
          },
          {
            url: require("../../assets/images/listspic03.jpg"),
            oldprice: "398",
            newprice: "199",
            name: "羽绒服 无缝锁温智能发热鹅绒服 藏蓝色"
          },
          {
            url: require("../../assets/images/listspic04.jpg"),
            oldprice: "398",
            newprice: "199",
            name: "凡客轻暖便携连帽羽绒服 黑色"
          },
          {
            url: require("../../assets/images/listspic05.jpg"),
            oldprice: "398",
            newprice: "199",
            name: "凡客轻暖便携连帽羽绒服 深蓝色"
          },
          {
            url: require("../../assets/images/listspic06.jpg"),
            oldprice: "398",
            newprice: "199",
            name: "凡客轻暖便携连帽羽绒服 橄榄绿"
          }
        ]
      }
    ],
    lists2: [
      {
        bigpic: require("../../assets/images/bigpic02.jpg"),
        list: [
          {
            url: require("../../assets/images/listschen01.jpg"),
            oldprice: "398",
            newprice: "199",
            name: "凡客日式免烫衬衫温莎领 藏蓝底细白条纹"
          },
          {
            url: require("../../assets/images/listschen02.jpg"),
            oldprice: "398",
            newprice: "199",
            name: "凡客日式免烫衬衫温莎领 浅紫"
          },
          {
            url: require("../../assets/images/listschen03.jpg"),
            oldprice: "398",
            newprice: "199",
            name: "凡客日式宽松免烫衬衫 小方领 深蓝色"
          },
          {
            url: require("../../assets/images/listschen04.jpg"),
            oldprice: "398",
            newprice: "199",
            name: "凡客日式宽松免烫衬衫 小方领 深蓝色"
          },
          {
            url: require("../../assets/images/listschen05.jpg"),
            oldprice: "398",
            newprice: "199",
            name: "凡客日式宽松免烫衬衫 小方领 深蓝色"
          },
          {
            url: require("../../assets/images/listschen06.jpg"),
            oldprice: "398",
            newprice: "199",
            name: "凡客日式宽松免烫衬衫 小方领 深蓝色"
          }
        ]
      }
    ],
    lists3: [
      {
        bigpic: require("../../assets/images/bigpic03.jpg"),
        list: [
          {
            url: require("../../assets/images/listwei01.jpg"),
            oldprice: "298",
            newprice: "149",
            name: "袋鼠袋时尚连帽卫衣 白色"
          },
          {
            url: require("../../assets/images/listwei02.jpg"),
            oldprice: "298",
            newprice: "149",
            name: "袋鼠袋时尚连帽卫衣 白色"
          },
          {
            url: require("../../assets/images/listwei03.jpg"),
            oldprice: "298",
            newprice: "149",
            name: "袋鼠袋时尚连帽卫衣 白色"
          },
          {
            url: require("../../assets/images/listwei04.jpg"),
            oldprice: "298",
            newprice: "149",
            name: "袋鼠袋时尚连帽卫衣 白色"
          },
          {
            url: require("../../assets/images/listwei05.jpg"),
            oldprice: "298",
            newprice: "149",
            name: "袋鼠袋时尚连帽卫衣 白色"
          },
          {
            url: require("../../assets/images/listwei06.jpg"),
            oldprice: "298",
            newprice: "149",
            name: "袋鼠袋时尚连帽卫衣 白色"
          }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
