<template lang="pug">
  article.basket
    h2.basket__title Корзина

    div.basket__topbar
      span.basket__total-items {{totalItemsText}}
      button.basket__delete(@click="clearBasket" type="button") Очистить список

    ul.basket__items
      li(v-for="item in basketItems" :key="item.id")
        Item(
          :id="item.id"
          :name="item.name"
          :images="item.images"
          :count="item.count"
          :price="item.price"
          :totalPrice="item.totalPrice"
          :isDelete="item.isDelete"
        )

    div.basket__bottombar
      div.basket__total
        span.total-title Итого
        span.total-price {{totalPrice}}
      a.basket__order(href="#") Оформить заказ
</template>

<script>
import Item from "@/components/Basket/Item";
import toString from "@/utils/toString";

export default {
  components: { Item },

  computed: {
    basketItems() {
      return this.$root.basketItems;
    },

    totalItems() {
      return this.$root.totalItems;
    },

    totalPrice() {
      return toString(this.$root.totalPrice, true);
    },

    totalItemsText() {
      const count = this.totalItems;

      switch (count) {
        case 0:
          return "Пустая корзина";
        case 1:
          return `${count} товар`;
        default:
          return `${count} товара`;
      }
    },
  },

  methods: {
    clearBasket() {
      this.$root.clearBasket();
    },
  },
};
</script>

<style lang="scss" scoped>
.basket {
  padding-bottom: 90px; /* bottombar */

  @media (min-width: 48em) {
    padding-bottom: 140px;
  }
}

.basket__title {
  margin-bottom: 46px;
  font-size: 36px;
  line-height: 0.88;
  font-weight: 400;
  letter-spacing: $ls-tight;

  @media (min-width: 64em) {
    margin-bottom: 94px;
    font-size: 30px;
  }
}

.basket__topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  font-size: 14px;
}

.basket__total-items {
}

.basket__delete {
  font-weight: 300;
  text-transform: uppercase;
  opacity: 0.4;
  transition: opacity 0.3s;
}

.basket__delete:hover {
  opacity: 1;
}

.basket__bottombar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  padding: $gap-x;
  background-color: #fff;

  @media (min-width: 48em) {
    right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    padding-right: 20px;
  }
}

.basket__total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  line-height: 1;

  @media (min-width: 48em) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 0;
  }
}

.total-title {
  @media (min-width: 48em) {
    margin-bottom: 6px;
  }
}

.total-price {
  font-size: 30px;
  font-weight: 500;
  letter-spacing: $ls-pre-tight;
}

.basket__order {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 19px;
  background-color: $c-green;

  font-size: 12px;
  font-weight: 500;
  letter-spacing: $ls-wider;
  text-transform: uppercase;

  border-radius: 4px;
  transition: background-color 0.3s;

  @media (min-width: 48em) {
    min-width: 240px;
  }
}

.basket__order:hover {
  background-color: darken($c-green, 10%);
}
</style>
