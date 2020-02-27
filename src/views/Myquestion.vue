<template>
  <div>
    <!-- <van-col span="24" class="search">
      <van-nav-bar left-arrow :title="$route.name" @click-left="onClickLeft" />
    </van-col> -->
    <div class="nav">
      <van-tabs left-arrow v-model="active" style="width:100%">
      <van-tab title="我的评论">暂时没有查到您的评论</van-tab>
      <van-tab title="我的提问">暂时没有查到您的提问</van-tab>
      <van-tab title="退换货记录">暂时没有查到相应的订单</van-tab>
      <van-tab title="我的优惠券">暂时没有优惠券</van-tab>
    </van-tabs>
    </div>
  </div>
</template>

<script>
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
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar .van-icon {
  color: #fff;
}
.van-tab__pane {
  width: 100%;
  margin: 50px auto;
  text-align: center;
}
</style>