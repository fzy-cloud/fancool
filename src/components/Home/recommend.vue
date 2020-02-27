<template>
  <div class="content">
    
    <div class="bigpic">
      <img :src="lis.bigpic" @click="to" />
      <span></span>
    </div>
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(images,i) in lis.list" :key="i" @click="to">
          <img :src="images.url" />
          <p class="product_name">{{images.name}}</p>
          <span class="old">售价： &yen;{{images.oldprice}}</span>
          <span class="new">充值后: <i>&yen;{{images.newprice}}</i></span>
        </div>
      </div>
    </div>
    <!-- Swiper end -->
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  methods:{
    to(){
      this.$router.push("/Productdetail?id=0")
    }
  },
  mounted() {
      new Swiper(".swiper-container", {
      slidesPerView: 2.8,
      spaceBetween: 6,
    });
  },
  props: ["lis"]
};
</script>

<style lang="scss" scoped>
.content {
  background-color: #fafafa;
}

img {
  width: 100%;
}
.bigpic {
  position: relative;
  span {
    display: block;
    width: 18px;
    height: 18px;
    background-color: #fafafa;
    overflow: hidden;
    transform: rotate(45deg);
    position: absolute;
    bottom: -5px;
    left: 20px;
  }
}
.swiper-wrapper {
    box-sizing: border-box;
    padding: 12px;
  .swiper-slide {
      font-size: 12px;
      color: #565656;
    img {
      border-radius: 5px;
    }
    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 6px 0;
    }
    span {
        display: block;
    }
    .old{
        color: #ccc;
        margin-bottom: 6px;
    }
    .new {
        i{
            font-style: normal;
            color: #b81c22;
        }
    }
  }
}
</style>