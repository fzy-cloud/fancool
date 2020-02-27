<template>
  <div>
    <div class="headsearch">
      <!-- 搜索 -->
      <van-col span="4" @click="back">
        <van-icon style="margin-left:10px;" name="arrow-left" />
      </van-col>
      <van-col span="16" class="search">
        <van-icon name="search" class="icon" />
        <input type="text" class="name" placeholder="搜索商品名称" />
      </van-col>
      <van-col span="4">
        <span class="txt">搜索</span>
      </van-col>
    </div>
    <!-- 搜索end -->
    <div class="hotSearch">
      <div class="hotsHeader">热门搜索：</div>
      <div class="hotsContent">
        <span v-for="(item,i) in texts" :key="i">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      texts:[
      "智能家装品类日",
      "我想吃火锅",
      "自动吸尘器",
      "衣服烘干机",
      "折叠床",
      "七度空间卫生巾",
      "移动书架",
      "洗碗机家用"
    ]
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.van-row {
  height: 48px;
  text-align: center;
  box-sizing: border-box;
  padding: 12px;
}
.headsearch {
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  padding: 10px 0;
  background: linear-gradient(rgba(209, 207, 207, 1), rgba(209, 207, 207, 0.2));
  background: -webkit-linear-gradient(
    rgba(209, 207, 207, 1),
    rgba(209, 207, 207, 0.2)
  );

  z-index: 1000;
}
.search {
  height: 28px;

  position: relative;
  .icon {
    position: absolute;
    top: 1px;
    left: 10px;
  }
  .name {
    border: 1px solid #cccccc;
    background: #fff;
    border-radius: 28px;
    font-size: 12px;
    padding: 0;
    margin: 0;
    padding-left: 38px;
    box-sizing: border-box;
    width: 100%;
    height: 28px;
    line-height: 26px;
    display: block;
    text-align: left;
  }
}
.txt {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 28px;
}
.van-col {
  height: 28px;
}
.van-icon-search:before {
  font-size: 22px;
  color: #aaa;
  margin-top: 3px;
}
.hotSearch {
  width: 100%;
  padding: 12px;
  background-color: #fff;
  box-sizing: border-box;
    font-size: 14px;
  .hotsHeader {
    color: #e4393c;
    padding-bottom: 12px;
  }
  .hotsContent {
    width: 100%;
    overflow: hidden;
    >span {
      float: left;
      height: 24px;
      text-align: center;
      font-size: 12px;
      line-height: 24px;
      padding: 5px 10px;
      border-radius: 10px;
      margin: 0 10px 10px 0;
      overflow: hidden;
      color: #666;
      background-color: #F0F2F5;
    }
  }
}
</style>
