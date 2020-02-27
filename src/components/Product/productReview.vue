<template>
  <div class="content">
    <van-skeleton title avatar :row="3" :loading="loading" v-for="(item,i) in review" :key="i">
      <div class="demo-preview">
        <img :src="item.path" />
        <div class="demo-content">
          <span>来自{{item.username}}的评价：</span>
          <p>{{item.content}}</p>
          <span style="float:right">{{item.time}}</span>
        </div>
      </div>
    </van-skeleton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      review:[
          {path:require("../../assets/images/H5-V0.jpg"),username:"匿名用户",time:"2019-10-11",content:"质量很好，就是尺寸不是太满意。"},
          {path:require("../../assets/images/H5-V0.jpg"),username:"匿名用户",time:"2019-10-15",content:"一如既往的满意。材质佳，做工好，款式经典又有创新。"},
          {path:require("../../assets/images/H5-V0.jpg"),username:"匿名用户",time:"2019-11-11",content:"藏蓝色有点接近黑色，羊毛感觉质地一般，但是穿上后外观效果很不错哇"},
          {path:require("../../assets/images/H5-V0.jpg"),username:"匿名用户",time:"2019-11-18",content:"衣服很厚实不错，赶脚码数偏大一点"},
      ]
    };
  },
  mounted() {
    this.loading = false;
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin-bottom: 50px;
  .demo-preview {
    display: flex;
    padding: 10px 16px 10px;
    background-color: #fff;
    margin-top: 5px;
    border-bottom: 1px solid #ccc;
    img {
      flex-shrink: 0;
      width: 22px;
      height: 22px;
      border-radius: 50%;
    }
    .demo-content {
        width: 100%;
    }
    span {
      margin: 0;
      padding-left: 5px;
      font-size: 14px;
      line-height: 20px;
      color: #ccc;
    }
    p {
    margin: 13px 0 0;
    font-size: 14px;
    line-height: 20px;
}
  }
}
</style>