<template>
  <div>
    <van-nav-bar :title="$route.name" />
    <div class="wrapper">
      <div class="profile">
        <div class="userpic">
          <img src="../assets/images/H5-V0.jpg" alt />
        </div>
        <p class="profile_username">用户:lisi</p>
        <ul class="profile_list">
          <li>积分:0</li>
          <li>余额:0</li>
          <li>成长值:0</li>
        </ul>
      </div>
      <div class="order">
        <p class="order_head" @click="toAll">
          全部订单
          <span class="order_head_icon">
            <van-icon name="arrow" />
          </span>
        </p>
        <ul class="order_list">
          <li v-for="(item, i) in ordertxt" :key="i" @click="toAll">
            <span class="order_icon" :style="{backgroundPositionY: -(i+1)*23+'px'}"></span>
            <span class="order_txt">{{item.txt}}</span>
          </li>
        </ul>
      </div>
      <div class="section">
        <ul class="section_list">
          <li v-for="(item, i) in sectiontxt" :key="i" section_list_li @click="toQuestion">
            <span class="section_icon" :style="{backgroundPositionY: -i*36+'px'}"></span>
            <span class="section_txt">{{item.txt}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ordertxt: [
        { txt: "进行中" },
        { txt: "已完成" },
        { txt: "无效" },
        { txt: "待评价" }
      ],
      sectiontxt: [
        { txt: "我的评论" },
        { txt: "我的提问" },
        { txt: "退换货记录" },
        { txt: "我的优惠券" }
      ]
    };
  },
  methods:{
    toAll(){
      this.$router.push("/allorders")
    },
    toQuestion(){
      this.$router.push("/myquestion")
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
  // }
};
</script>

<style lang="scss" scoped>
.van-nav-bar__title {
  width: 100%;
  max-width: 100%;
  background-color: #b81c22;
  color: #fff;
}
.wrapper {
    margin-bottom: 60px;
}
.profile {
  width: 100%;
  height: 11.5rem;
  padding-top: 1.25rem;
  font-size: 0.75rem;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
  background-image: url("../assets/images/uc-topbgd.png");
  .userpic {
    width: 4.5rem;
    height: 4.5rem;
    margin: 0 auto;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .profile_username {
    margin: 1rem 0;
  }
  .profile_list {
    display: flex;
    justify-content: space-around;
  }
}
[class*=van-hairline]::after {
  border: none;
}
.order {
  width: 100%;
  margin: 0.75rem 0;
  background-color: #fff;
  .order_head {
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    margin: 0;
    padding: 0;
    padding-left: 0.375rem;
    box-sizing: border-box;
    border-bottom: 1px solid #f0eff5;
    .order_head_icon {
      display: block;
      width: 1.625rem;
      height: 1.625rem;
      color: #a5a5a5;
      float: right;
      position: relative;
      .van-icon-arrow {
        position: absolute;
        top: 0.4375rem;
        right: 0;
      }
    }
  }
  .order_list {
    width: 100%;
    height: 4.375rem;
    font-size: 12px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    > li {
      padding: 0.75rem 0;
      .order_icon {
        display: block;
        width: 1.3125rem;
        height: 1.5rem;
        margin: 0 auto;
        margin-bottom: 6px;
        background: url("../assets/images/uc-order-icon.png") no-repeat;
        background-size: 100%;
        background-position-x: 0px;
      }
      .order_txt {
        margin: 0 auto;
      }
    }
  }
}
.section {
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  .section_list {
    display: flex;
    > li {
      flex: 1;
      padding: 1rem 0;
      border: 1px solid #f0eff5;
      .section_icon {
        display: block;
        width: 2.25rem;
        height: 2.25rem;
        margin: 0 auto;
        margin-bottom: 6px;
        background: url("../assets/images/uc-section-icon.png") no-repeat;
        background-size: 100%;
        background-position-x: 0px;
      }
      .section_txt {
          display: block;
          width: 100%;
          text-align: center;
          font-size: 12px;
      }
    }
  }
}
</style>