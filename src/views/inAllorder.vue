<template>
    <div>
        
    <!-- 商品列表 -->
      <div class="card-goods__item" v-for="(item,i) in goods" :key="i" :name="item.id" style="margin:10px auto;text-align:left">
        <van-card
          :title="item.title"
          :price="formatPrice(item.price)"
          :thumb="item.thumb"
        >
        </van-card>
      </div>
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
    };
  },
  computed: {
    ...mapState({
      goods: state => state.Cart.orderlists
    }),
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
    formatPrice(price) {
      return price;
    },
  }
    }
</script>

<style lang="scss" scoped>
.card-goods__item {
  border-bottom: 1px solid #ccc;
  .time {
    display: block;
    width: 100%;
  }

}
</style>