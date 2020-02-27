<template>
  <div>
    <van-grid :column-num="3" icon-size="60px">
      <van-grid-item
        :icon="value.path"
        :text="value.tip"
        v-for="(value,i) in list.listData"
        :key="i"
        to="/Productdetail?id=0"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  props: ["list"]
};
</script>

<style lang="scss" scoped>
</style>