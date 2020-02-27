<template>
  <div>
    <div class="sKill_head">
      <div class="sKill_head_left">
        <van-icon name="underway-o" tag="i" />
        <span class="head_txt_title">每日秒杀</span>
        <span class="head_txt_session">| 10点场</span>
      </div>
      <div class="sKill_head_right">
        <span>距离结束 </span>
        <span class="time"> 00</span> :
        <span class="time">00</span> :
        <span class="time">00</span>
      </div>
    </div>
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" @click="to(i)" v-for="(images,i) in secKillimages" :key="i">
          <img :src="images.url" />
          <div class="price">
              <span>充值后<br />&yen;{{images.newprice}}</span>
              <del>{{images.oldprice}}</del>
          </div>
        </div>
      </div>
    </div>
    <!-- Swiper end -->
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
    data(){
        return {
            secKillimages:[
                {url:require("../../assets/images/seckill01.jpg"),oldprice:"798",newprice:"99"},
                {url:require("../../assets/images/seckill02.jpg"),oldprice:"398",newprice:"139"},
                {url:require("../../assets/images/seckill03.jpg"),oldprice:"398",newprice:"99"},
                {url:require("../../assets/images/seckill04.jpg"),oldprice:"398",newprice:"68"},
                {url:require("../../assets/images/seckill05.jpg"),oldprice:"198",newprice:"69"},
                {url:require("../../assets/images/seckill06.jpg"),oldprice:"298",newprice:"59"},
                {url:require("../../assets/images/seckill07.jpg"),oldprice:"198",newprice:"69"},
                {url:require("../../assets/images/seckill08.jpg"),oldprice:"358",newprice:"79"},
                {url:require("../../assets/images/seckill09.jpg"),oldprice:"258",newprice:"89"},
                {url:require("../../assets/images/seckill10.jpg"),oldprice:"58",newprice:"19"},
            ]
        }
    },
    methods:{
      to(i){
        this.$router.push({
          path:`/Productdetail?id=${i}`
        })
      }
    },
    mounted() {
        new Swiper(".swiper-container", {
        slidesPerView: 3.5,
        spaceBetween: 6,
        });
  }
};
</script>

<style lang="scss" scoped>
.sKill_head {
  padding: 12px;
  display: flex;
  font-size: 16px;
  line-height: 20px;
  background-color: #fafafa;
  justify-content: space-between;
  .van-icon-underway-o:before {
    font-size: 16px;
    color: rgb(188, 39, 46);
    transform: translateY(2px);
    margin-right: 6px;
  }
  .head_txt_session {
    font-size: 14px;
    color: #adadad;
  }
  .sKill_head_right {
    font-size: 12px;
    color: #000;
    span {
      color: #adadad;
    }
    .time {
      background-color: rgb(188, 39, 46);
      color: #fff;
      font-weight: bold;
      border-radius: 2px;
      padding: 0 2px;
    }
  }
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
    img {
        width: 100%;
    }
    .price {
        margin: 6px 0;
        display: flex;
        font-size: 12px;
        font-weight: normal;
        justify-content: space-between;
        span {
            color: rgb(188, 39, 46);
        }
        del {
            color: #adadad;
            line-height: 32px;
        }
    }
}
</style>