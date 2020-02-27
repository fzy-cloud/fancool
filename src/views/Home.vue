<template>
  <div style="margin-bottom:50px">
    <logoSearch />
    <!-- 轮播 -->
    <van-swipe :autoplay="3000" class="swiper">
      <van-swipe-item v-for="(swipeimage, index) in Swipeimages" :key="index">
        <img :src="swipeimage" />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播end -->
     <!-- 导航 -->
    <div class="Vancl_nav">
      <img src="../assets/images/navbanner.jpg" alt />
      <van-row type="flex" justify="space-between">
        <van-col span="6" v-for="(navimages, i) in Navimages" :key="i" @click="go">
          <img :src="navimages.url" />
          <span>{{navimages.txt}}</span>
        </van-col>
      </van-row>
    </div>
    <!-- 导航end -->
    <!-- 新品上新 -->
    <newProducts />
    <!-- 新品上新end -->
    <!-- 每日秒杀 -->
    <secKill />
    <!-- 每日秒杀end -->
    <!-- 推荐 -->
    <h3 class="recommend">
      <van-icon name="hot-o" tag="i" />优选推荐
    </h3>
    <recommend :lis="a"/>
    <recommend :lis="b"/>
    <recommend :lis="c"/>
    <!-- 推荐end -->
    <p class="loading">加载完成...</p>

    <div class="totop">
      <a href="#">返回顶部</a><van-icon name="arrow-up" />
    </div>

    <div class="login">
      <span @click="tologin">登录</span>
      <span @click="toreg">注册</span>
    </div>

    <footer>
      <ul>
        <li v-for="(img, i) in Footerimages" :key=i>
          <img :src="img" />
        </li>
      </ul>
      <p>京ICP证100557号</p>
    </footer>

  </div>
</template>

<script>
import logoSearch from "@/components/Home/logoSearch.vue";
import newProducts from "@/components/Home/newProducts.vue";
import secKill  from "@/components/Home/secKill.vue";
import recommend  from "@/components/Home/recommend.vue";
import { mapState} from "vuex"
export default {
  data() {
    return {
      Swipeimages: [
        require("../assets/images/swipe01.jpg"),
        require("../assets/images/swipe02.jpg"),
        require("../assets/images/swipe03.jpg"),
        require("../assets/images/swipe04.jpg"),
        require("../assets/images/swipe05.jpg"),
        require("../assets/images/swipe06.jpg"),
        require("../assets/images/swipe07.jpg")
      ],
      Navimages: [
        { url: require("../assets/images/vanclnav01.jpg"), txt: "新品" },
        { url: require("../assets/images/vanclnav02.jpg"), txt: "特惠" },
        { url: require("../assets/images/vanclnav03.jpg"), txt: "衬衫" },
        { url: require("../assets/images/vanclnav04.jpg"), txt: "外套" },
        { url: require("../assets/images/vanclnav05.jpg"), txt: "卫衣" }
      ],
      Footerimages: [
        require("../assets/images/help.jpg"),
        require("../assets/images/d2.jpg"),
        require("../assets/images/weixin.jpg"),
        require("../assets/images/pcsite.jpg"),
      ]
    };
  },
  mounted(){
    // console.log(a)
  },
  methods:{
    tologin(){
      this.$router.push("/login")
    },
    toreg(){
      this.$router.push("/register")
    },
    go(){
      this.$router.push("/category")
    }
  },
  computed:{
    ...mapState({
      a: state => state.recommend.lists1[0],
      b: state => state.recommend.lists2[0],
      c: state => state.recommend.lists3[0]
    })
  },
  components: {
    logoSearch,
    newProducts,
    secKill,
    recommend
  }
};
</script>

<style lang="scss">
body {
  background-color: #fafafa;
}
a:visited, a {
  color: #000;
}
// 轮播
.swiper {
  width: 100%;
  img {
    width: 100%;
  }
  .van-swipe__indicators {
    .van-swipe__indicator {
      width: 8px;
      height: 8px;
    }
    .van-swipe__indicator--active {
      background-color: rgb(188, 39, 46);
    }
  }
}
// 导航
.Vancl_nav {
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  img {
    width: 100%;
    margin-bottom: 12px;
  }
  .van-col {
    img {
      display: block;
      width: 33.5px;
      height: 33.5px;
      margin: 0 auto;
      margin-bottom: 6px;
    }
    span {
      display: block;
      width: 100%;
      text-align: center;
      font-size: 12px;
      color: #666;
    }
  }
}
.recommend {
  padding: 12px;
  margin: 0;
  font-size: 16px;
  line-height: 16px;
  font-weight: normal;
  .van-icon-hot-o:before {
    transform: translateY(3px);
    margin-right: 6px;
    font-size: 18px;
    color: rgb(188, 39, 46);
  }
}
.van-loading {
  margin: 24px 0;
  display: flex;
  justify-content: center;
}
.loading {
  text-align: center;
  color: #ccc;
}
.totop {
  text-align: center;
  background-color: #fff;
  line-height: 30px;
  margin-bottom: 20px;
  .van-icon-arrow-up:before {
    transform: translateY(8px)
  }
}
.login {
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    padding:8px 36px;
    background-color: #fff;
  }
}
footer {
  width: 100%;
  margin: 20px 0 70px;
  ul {
    margin: 0 24px;
    padding: 12px 0;
    display: flex;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    justify-content: space-around;
    li {
      width: 42px;
      img {
        width: 100%;
      }
    }
  }
  p {
    width: 100%;
    text-align: center;
    color: #4c4c4c;
  }
}
</style>