<template>
  <div>
    <van-nav-bar :title="$route.name" />
    <!-- 商品列表 -->
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <div  ref="checkboxes" class="card-goods__item acard" v-for="(item,i) in goods" :key="i" :name="item.id">
        <van-card
          :title="item.title"
          :num="item.num"
          :price="formatPrice(item.price)"
          :thumb="item.thumb"
        > 
          <div slot="tags" class="del">
            <van-tag plain type="danger" @click="dellist(i)">删除</van-tag>
          </div>
          <div slot="footer" class="btn">
            <van-button size="mini" @click.prevent="sub(item)">-1</van-button>
            <van-button size="mini" @click.prevent="add(item)">+1</van-button>
          </div>
        </van-card>
      </div>
    </van-checkbox-group>

    <!-- 底部导航 -->
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
      style="bottom: 50px "
    />
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar } from "vant";
import { mapState } from "vuex";
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      checkedGoods: this.$store.state.Cart.checkedGoods,
    };
  },
  computed: {
    ...mapState({
      goods: state => state.Cart.goodslists
    }),
    submitBarText() {
      // var count = this.checkedGoods.length;
      // return "结算" + (count ? `(${count})` : "");
      return "结算" ;
    },
    totalPrice() {
      return this.goods.reduce(
        (total, item) =>
          total +
          (this.checkedGoods.indexOf(item.id) !== -1
            ? item.price * item.num * 100
            : 0),
        0
      );
    }
  },
  // created() {
  //   if(!localStorage.login){
  //     this.$router.push("/login");
  //   }else{

  //     this.$axios.get("/getdata",{
  //       params:{
  //         token:localStorage.login
  //       }
  //     }).then((req)=>{
  //       this.info = req.data.result
  //     })

  //   }
  // },
  methods: {
    sub(i){
      i.num <= 1 ? 1 : i.num--;
    },
    add(i){
      i.num++
    },
    dellist(i) {
      this.goods.splice(i,1)
      this.$store.commit("sub",i)
      // console.log(this.checkedGoods)
      // this.checkedGoods = false;
    },
    formatPrice(price) {
      return price;
    },
    onSubmit() {
      this.$router.push("/pay")
    }
  }
};
</script>

<style lang="scss">
.van-nav-bar {
  background-color: #b81c22 !important;
}
.van-nav-bar__title {
  color: #fff !important;
}
.card-goods {
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
.btn {
  position: absolute;
  bottom: 10px;
  left: 30%;
}
.van-submit-bar {
  bottom: 50px ;
}
.del {
  position: absolute;
  bottom: 0px;
  right: -16px;
  .van-icon-close:before {
    font-size: 16px;
  }
}
.acard {
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
