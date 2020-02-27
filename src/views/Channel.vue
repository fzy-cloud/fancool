<template>
  <div>
    <div class="topTitle">
      <!-- <van-icon name="arrow-left" /> -->
      <!-- <span class="title">分类</span> -->
      <van-nav-bar :title="$route.name" />
    </div>
    <div class="topPic">
      <div class="channelImg" v-for="(images,i) in Channelimages" :key="i">
        <img :src="images" @click="to">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      Channelimages:[
        require("../assets/images/channel01.jpg"),
        require("../assets/images/channel02.jpg"),
        require("../assets/images/channel03.jpg"),
        require("../assets/images/channel04.jpg"),
        require("../assets/images/channel05.jpg"),
        require("../assets/images/channel06.jpg"),
        require("../assets/images/channel07.jpg"),
        require("../assets/images/channel08.jpg"),
        require("../assets/images/channel09.jpg"),
        require("../assets/images/channel010.jpg"),
        require("../assets/images/channel011.jpg"),
        require("../assets/images/channel012.jpg")
      ]
    }
  },
  methods:{
    to() {
      this.$router.push("/Productdetail?id=0")
    }
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar__title {
  width: 100%;
  max-width: 100%;
  background-color: #b81c22;
  color: #fff;
}
.topPic {
  width: 100%;
  margin-bottom: 50px;
  .channelImg {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>