<template>
  <div>
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="animated zoomIn" v-show="flag" src="../assets/images/leading02.jpg" alt /></div>
        <div class="swiper-slide">
          <img class="animated zoomIn" v-show="flag" src="../assets/images/leading03.jpg" alt /></div>
        <div class="swiper-slide">
          <img class="animated zoomIn" v-show="flag" src="../assets/images/leading01.jpg" alt /><button @click="go" class="animated fadeInUp delay-1s" v-show="flag">立即体验</button>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      flag: true
    };
  },
  methods: {
    go() {
      localStorage.one = true;
      this.$router.push("/Home");
    }
  },
  created() {
    // 判断是否执行引导页
    if (localStorage.one) {
      this.$router.push("/Advertise");
    } else {
      localStorage.one = true;
    }
  },
  mounted() {
    let _this = this;
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      },
      on: {
        slideChangeTransitionStart: function() {
          _this.flag = false;
        },
        slideChangeTransitionEnd: function() {
          _this.flag = true;
          // alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  display: block;
  img {
    width: 100%;
  }
  .leadinglogo {
    width: 220px;
    height: 120px;
  }
  p {
    color: #808080;
    font-size: 14px;
  }
}
button {
  width: 200px;
  height: 45px;
  line-height: 45px;
  border: 1px solid #c8efd4;
  background: #fff;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 30px;
  margin: 0 auto;
}
</style>