<template>
  <div>
    <div class="topTitle">
      <!-- <van-icon name="arrow-left" /> -->
      <van-nav-bar :title="$route.name" />
      <!-- <span class="title">分类</span> -->
    </div>
    <van-tree-select height="100%" :items="items" :main-active-index.sync="activeIndex">
      <template slot="content">
        <category v-if="activeIndex === 0" :list="list1"></category>
        <category v-if="activeIndex === 1" :list="list2"></category>
        <category v-if="activeIndex === 2" :list="list3"></category>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import category from "@/components/Category/category.vue";
import {mapState} from 'vuex'
export default {
  data() {
    return {
      activeId: 1, 
      activeIndex: 0,
      items: [
        { text: "推荐" },
        { text: "男装" },
        { text: "女装" }
        // { text: "男鞋" },
        // { text: "女鞋" },
        // { text: "袜品" },
        // { text: "家居" },
        // { text: "童装" },
        // { text: "内衣" }
      ]
    };
  },
  components: {
    category
  },
  computed:{
      ...mapState({
        list1 : state => state.category.lists[0],
        list2 : state => state.category.lists[1],
        list3 : state => state.category.lists[2],
      })
    },
};
</script>

<style lang="scss" scoped>
.van-nav-bar__title {
  width: 100%;
  max-width: 100%;
  background-color: #b81c22;
  color: #fff;
}
.van-tree-select__content {
  flex: 3;
}
</style>