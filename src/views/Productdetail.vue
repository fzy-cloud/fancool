<template>
  <div>
    <van-button class="roundbtn" icon="arrow-left" type="default" hairline round @click="pathgo" />
    <div class="goods">
      <van-swipe class="goods-swipe">
        <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
          <img :src="thumb" />
        </van-swipe-item>
      </van-swipe>

      <van-cell-group>
        <van-cell>
          <div class="goods-title">{{ goods.title }}</div>
          <div class="goods-price">{{ formatPrice(goods.price) }}</div>
        </van-cell>
        <van-cell class="goods-express">
          <van-col span="10">运费：{{ goods.express }}</van-col>
          <van-col span="10" class="yuex">月销量：{{ goods.remain }}</van-col>
          <van-col span="10" class="adress">{{ goods.adress }}</van-col>
        </van-cell>
      </van-cell-group>

      <div class="prom">
        <div class="prom_content">
          <span>促销</span>购买可得10积分
        </div>
        <div class="serve">
          <span>服务</span>假一赔四、急速退款、退货运费险
        </div>
      </div>

      <van-tabs v-model="active">
        <van-tab title="商品详情"><productDetail></productDetail></van-tab>
        <van-tab title="商品评论"><productReview></productReview></van-tab>
      </van-tabs>

      <van-goods-action>
        <van-goods-action-icon title icon="cart-o" @click="onClickCart"></van-goods-action-icon>
        <van-goods-action-button type="warning" @click="addCar">加入购物车</van-goods-action-button>
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import productReview  from "@/components/Product/productReview.vue";
import productDetail  from "@/components/Product/productDetail.vue";
import { Toast } from 'vant';
export default {
  data() {
    return {
      active: 2,
      goods: {},
      ajaxgoodslists: [
        {
          thumb: [
            require("../assets/images/pdpic01.jpg"),
            require("../assets/images/pdpic02.jpg"),
            require("../assets/images/pdpic03.jpg")
          ],
          express: "免运费",
          price: "199",
          remain: 1977,
          title: "袋鼠袋时尚连帽卫衣",
          adress: "广东深圳"
        },
        {
          thumb: [
            require("../assets/images/pdpic04.jpg"),
            require("../assets/images/pdpic05.jpg"),
            require("../assets/images/pdpic06.jpg")
          ],
          express: "免运费",
          price: "258",
          remain: 100,
          title: "凡客日式免烫衬衫温莎领 粉底细白条纹",
          adress: "广东广州"
        },
        {
          thumb: [
            require("../assets/images/pdpic04.jpg"),
            require("../assets/images/pdpic05.jpg"),
            require("../assets/images/pdpic06.jpg")
          ],
          express: "免运费",
          price: "258",
          remain: 510,
          title: "凡客日式免烫衬衫温莎领 粉底细白条纹",
          adress: "河南廊坊"
        },
        {
          thumb: [
            require("../assets/images/pdpic01.jpg"),
            require("../assets/images/pdpic02.jpg"),
            require("../assets/images/pdpic03.jpg")
          ],
          express: "免运费",
          price: "199",
          remain: 189,
          title: "袋鼠袋时尚连帽卫衣",
          adress: "福建泉州"
        }
      ]
    };
  },
  methods: { 
    formatPrice() {
      return "¥" + (this.goods.price / 100) * (100).toFixed(2);
    },
    onClickCart() {
      this.$router.push("cars");
    },
    sorry() {},
    addCar() { 
      this.$store.commit("add", {
        id: this.$route.query.id,
        title: this.goods.title,
        price: this.goods.price,
        num: 1,
        thumb: this.goods.thumb[0]
      });
      Toast('成功加入购物车');
    },
    pathgo() {
      this.$router.go(-1); //返回上一级
    }
  },
  components:{
    productReview,
    productDetail
  },
  created() {
    //   ajax请求数据
    this.goods = this.ajaxgoodslists[this.$route.query.id];
  }
};
</script>
<style lang="scss" scoped >
.van-button--hairline.roundbtn {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 999;
  border: none;
  background-color: transparent;
}
[class*="van-hairline"]::after {
  border: none;
}
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
.van-goods-action {
  z-index: 999;
}
.goods-express .van-cell__value--alone {
  display: flex;
  justify-content: space-between;
  .yuex {
    text-align: center;
  }
  .adress {
    text-align: right;
  }
}
.prom {
  width: 100%;
  font-size: 12px;
  background-color: #fff;
  .prom_content,
  .serve {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 12px;
    > span {
      color: #999;
      margin-right: 10px;
    }
  }
}
</style>