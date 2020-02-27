<template>
  <div>
    <!-- <van-col span="24" class="search">
      <van-nav-bar left-arrow :title="$route.name" @click-left="onClickLeft" />
    </van-col> -->
    <div class="nav">
      <van-tabs left-arrow v-model="active" style="width:100%">
      <van-tab title="全部订单"><inAllorder></inAllorder></van-tab>
      <van-tab title="配送中">暂时没有查到相应的订单</van-tab>
      <van-tab title="已完成">暂时没有查到相应的订单</van-tab>
      <van-tab title="待评价">暂时没有查到相应的订单</van-tab>
      <van-tab title="无效订单">暂时没有查到相应的订单</van-tab>
    </van-tabs>
    </div>
  </div>
</template>

<script>
import inAllorder from "@/views/inAllorder"
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  components:{
    inAllorder
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar .van-icon {
  color: #fff;
}
.van-tab__pane {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
</style>