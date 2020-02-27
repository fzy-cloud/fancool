<template>
  <div>
    <van-col span="24" class="search">
      <van-nav-bar left-arrow :title="$route.name" @click-left="onClickLeft" />
    </van-col>
    <!-- 联系人卡片 -->
    <van-contact-card
      :type="cardType"
      :name="currentContact.name"
      :tel="currentContact.tel"
      :location="currentContact.location"
      @click="showList = true"
    />

    <!-- 联系人列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-contact-list
        v-model="chosenContactId"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
      />
    </van-popup>

    <!-- 联系人编辑 -->
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
    <!-- 商品列表 -->
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <div class="card-goods__item" v-for="(item,i) in goods" :key="i" :name="item.id">
        <van-card
          :title="item.title"
          :num="item.num"
          :price="formatPrice(item.price)"
          :thumb="item.thumb"
        ></van-card>
      </div>
    </van-checkbox-group>

    <!-- 底部导航 -->
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
      style="bottom: 0"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Toast } from "vant";
export default {
  data() {
    return {
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      checkedGoods: this.$store.state.Cart.checkedGoods,
      list: [
        {
          name: "张三",
          tel: "13000000000",
          id: 0
        }
      ]
    };
  },
  computed: {
    cardType() {
      return this.chosenContactId !== null ? "edit" : "add";
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    },
    ...mapState({
      goods: state => state.Cart.goodslists
    }),
    submitBarText() {
      return "提交订单";
    },
    totalPrice() {
      return this.goods.reduce(
        (total, item) =>
          total +
          (this.checkedGoods.indexOf(item.id) !== -1
            ? item.price * item.num * 100
            : 0),
        0
      );
    }
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 添加联系人
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },

    // 编辑联系人
    onEdit(item) {
      this.isEdit = true;
      this.showEdit = true;
      this.editingContact = item;
    },

    // 选中联系人
    onSelect() {
      this.showList = false;
    },

    // 保存联系人
    onSave(info) {
      this.showEdit = false;
      this.showList = false;

      if (this.isEdit) {
        this.list = this.list.map(item => (item.id === info.id ? info : item));
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    // 删除联系人
    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter(item => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
    },
    formatPrice(price) {
      return price;
    },
    onSubmit() {
      Toast.success("成功提交订单");
      this.$store.commit("addorder");
      this.$router.push("/my");
    }
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar .van-icon {
  color: #fff;
}
.van-nav-bar {
  background-color: #b81c22 !important;
}
.van-nav-bar__title {
  color: #fff !important;
}
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
// .van-submit-bar {
//   bottom: 50px !important;
// }
.del {
  position: absolute;
  top: -8px;
  right: -16px;
  .van-icon-close:before {
    font-size: 16px;
  }
}
</style>