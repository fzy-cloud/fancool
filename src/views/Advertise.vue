<template>
  
    <div class="content">
      <img src="../assets/images/Ad.jpg" alt />
      <h4>广告时间还有:{{num}}s</h4>
    </div>

</template>

<script>
export default {
  data() {
    return {
      num: 3,
      cleardata: null
    };
  },
  created() {
    this.cleardata = setInterval(() => {
      if (this.num == 0) {
        this.$router.push("/home");
      } else {
        this.num--;
      }
    }, 1000);
  },
  beforeDestroy() {
    //  页面跳转先销毁在跳转
    clearInterval(this.cleardata);
  }
};
</script>

<style lang="scss" scoped>

.content {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    background-color: #BABCB7;
    img {
        width: 100%;
    }
    h4{
        color: #fff;
        position: absolute;
        top: 0;
        right: 10px
    }
}
</style>