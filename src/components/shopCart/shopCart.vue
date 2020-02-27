<template>
  <div>
      
    <van-card
      :num="count"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    >
      <div slot="footer">
        <van-button size="mini" @click="subtract">-</van-button>
        <van-button size="mini" @click="add">+</van-button>
      </div>
    </van-card>
  </div>
</template>

<script>
export default {
    data(){
        return {
            count:"1"
        }
    },
    methods:{
        subtract(){
            this.count--;
            if(this.count < 1){
                this.count = 0;
            }
        },
        add(){
            this.count++;
        }
    }
};
</script>

<style lang="scss" scoped>
.van-card {
    background-color: #fff;
}
</style>