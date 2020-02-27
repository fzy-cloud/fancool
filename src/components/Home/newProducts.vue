<template>
  <div>
    <h3>
      <van-icon name="qr" tag="i" />新品上新
    </h3>
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(images,i) in newimages" :key="i" @click="to">
          <img :src="images" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      newimages: [
        require("../../assets/images/newproduct01.jpg"),
        require("../../assets/images/newproduct02.jpg"),
        require("../../assets/images/newproduct03.jpg"),
        require("../../assets/images/newproduct04.jpg"),
        require("../../assets/images/newproduct05.jpg"),
        require("../../assets/images/newproduct06.jpg"),
        require("../../assets/images/newproduct07.jpg"),
        require("../../assets/images/newproduct08.jpg"),
        require("../../assets/images/newproduct09.jpg"),
        require("../../assets/images/newproduct010.jpg"),
        require("../../assets/images/newproduct011.jpg")
      ]
    };
  },
  methods:{
    to(){
      this.$router.push("/Productdetail?id=0")
    }
  },
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: 2.5,
      spaceBetween: 6,
    });
  }
};
</script>

<style lang="scss" scoped>
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  img {
      width: 100%;
  }
}
h3 {
  padding: 12px;
  margin: 0;
  font-size: 16px;
  line-height: 16px;
  font-weight: normal;
  background-color: #fafafa;
  .van-icon-qr:before {
    transform: translateY(3px);
    margin-right: 6px;
    font-size: 18px;
    color: rgb(188, 39, 46);
  }
}
</style>