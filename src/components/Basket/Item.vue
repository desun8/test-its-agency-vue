<template lang="pug">
  article.card(:class="{'is-delete': isDelete}")
    div.card__container-image.ratio-container
      picture
        source(type="image/webp" :srcset="imgWebp")
        img.ratio-container__image(:srcset="imgWebp" :alt="imgAria" width="96" height="96" loading="lazy")

    h2.card__name {{name}}

    span.card__price {{formatedPrice}}

    div.count-controllers
      button.count-controllers__btn.count-controllers__btn--decrease(@click="onDecrease" type="button" aria-label="Уменьшить количество товара на 1.")
      span.count-controllers__text(aria-label="Количество товара.") {{count}}
      button.count-controllers__btn.count-controllers__btn--increase(@click="onIncrease" type="button" aria-label="Увеличить количество товара на 1.")

    button.card__restore(v-if="isDelete" @click="onRestore" type="button" aria-label="Вернуть в корзину.")
    button.card__delete(v-else @click="onDelete" type="button" aria-label="Удалить из корзины.")
</template>

<script>
import toString from "@/utils/toString";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    images: {
      type: Object,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    isDelete: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    imgWebp() {
      let srcset = "";
      const arr = [...this.images.webp];
      arr.reverse();
      const size = arr.length;

      arr.forEach((element, index) => {
        let mod = "";
        if (index + 1 !== size) {
          mod = `${size - index}x,`;
        }

        srcset += `${element} ${mod}`;
      });

      return srcset;
    },

    imgPng() {
      let srcset = "";
      const arr = [...this.images.png];
      arr.reverse();
      const size = arr.length;

      arr.forEach((element, index) => {
        let mod = "";
        if (index + 1 !== size) {
          mod = `${size - index}x,`;
        }

        srcset += `${element} ${mod}`;
      });

      return srcset;
    },

    imgAria() {
      return `Описание изображения товара ${this.name}.`;
    },

    formatedPrice() {
      return toString(this.totalPrice);
    },
  },

  methods: {
    createItem() {
      return {
        id: this.id,
        name: this.name,
        images: this.images,
        count: 1,
        price: this.price,
        totalPrice: this.price,
      };
    },

    onDelete() {
      this.$root.deleteItem(this.id);
    },

    onRestore() {
      this.$root.restoreItem(this.id);
    },

    onIncrease() {
      this.$root.changeBasketItemCount(this.id, "add");
    },

    onDecrease() {
      this.$root.changeBasketItemCount(this.id, "remove");
    },
  },
};
</script>

<style lang="scss" scoped>
/* aspect-ratio hack */
.ratio-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
  overflow: hidden;
}

.ratio-container__image {
  position: absolute;
  top: 0;
  width: 100%;
}

.card {
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  grid-template-areas:
    "images name button"
    "images price button"
    "images controllers button";
  gap: 16px 12px;
  align-items: start;
  padding: 16px 0;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: rgba(#000, 0.1);
}

.card.is-delete:before,
.card.is-delete *:not(.card__restore) {
  opacity: 0.4;
}

.card__container-image {
  grid-area: images;
  align-self: center;
  width: 96px;
}

.card__name {
  grid-area: name;
  font-size: 16px;
  line-height: 1.12;
  font-weight: 300;
  letter-spacing: $ls-wide;
}

.card__price {
  grid-area: price;
  font-weight: 600;
}

.card__delete,
.card__restore {
  grid-area: button;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.card__delete {
  background-image: url("~@/assets/images/icon-cross.svg");
  opacity: 0.2;
  transition: opacity 0.3s;
}

.card__delete:hover {
  opacity: 1;
}

.card__restore {
  background-image: url("~@/assets/images/icon-restore.svg");
}

.count-controllers {
  grid-area: controllers;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 116px;
  width: fit-content;
}

.count-controllers__text {
  min-width: 26px;
  padding: 0 5px;
  text-align: center;
}

.count-controllers__btn {
  width: 40px;
  height: 24px;
  background: $c-gray url("~@/assets/images/icon-plus.svg") no-repeat
    center/16px;
  border-radius: 4px;
}

.count-controllers__btn--decrease {
  background-image: url("~@/assets/images/icon-minus.svg");
}
</style>
