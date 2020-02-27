<template>
  <div class="headsearch">
    <!-- 搜索 -->
    <van-row @click="toSearch">
        <img src="../../assets/images/logo.jpg" alt="">

      <van-col span="20" class="search">
        <van-icon name="search" class="icon" />
        <span class="name">搜索商品名称</span>
      </van-col>
    </van-row>
    <!-- 搜索end -->
  </div>
</template>

<script>
export default {
  methods:{
    toSearch(){
      this.$router.push("/Tosearch")
    }
  }
};
</script>

<style lang="scss" scoped>
.van-row {
  height: 48px;
  text-align: center;
  box-sizing: border-box;
  padding: 10px 12px;
}
.headsearch {
  width: 100%;
  padding-left: 48px;
  box-sizing: border-box;
  background: linear-gradient(rgba(209, 207, 207, 1), rgba(209, 207, 207, 0.2));
  background: -webkit-linear-gradient(
    rgba(209, 207, 207, 1),
    rgba(209, 207, 207, 0.2)
  );
  position: fixed;
  top: 0;
  z-index: 1000;
  img {
    position: absolute;
    top: 5px;
    left: 10px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }
}
.search {
  width: 100%;
  height: 28px;
  border: 1px solid #cccccc;
  background: #fff;
  border-radius: 28px;
  position: relative;
  color: #ccc;
  font-size: 12px;
  .icon {
    position: absolute;
    top: 1px;
    left: 10px;
  }
  .name {
    margin-left: 38px;
    height: 28px;
    line-height: 26px;
    color: #757575;
    display: block;
    text-align: left;
  }
}
.van-col {
  height: 28px;
}
.van-icon-comment-o:before{
  font-size: 24px;
  color: #aaa;
  margin-top: 2px;
}
</style>
