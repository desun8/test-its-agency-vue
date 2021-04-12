<template lang="pug">
  article.card
    div.card__container-image.ratio-container
      picture
        source(type="image/webp" :srcset="imgWebp")
        img.ratio-container__image(:srcset="imgPng" :alt="imgAria" width="156" height="156" loading="lazy")
    
    h2.card__name {{name}}
    
    div.card__container-price
      span.card__price {{formatedPrice}}
      button.card__add(@click="addToCart" type="button")
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
    images: {
      type: Object,
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
      return toString(this.price);
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
        isDelete: false,
      };
    },

    addToCart() {
      const item = this.createItem();
      this.$root.addItemToBasket(item);
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
  grid-template-rows: auto 1fr auto;
}

.card::after {
  content: "";
  position: absolute;
  bottom: -34px;
  left: 0;
  right: 0;
  height: 1px;
  background-color: rgba(#000, 0.1);

  @media (min-width: 48em) {
    bottom: -16px;
  }
}

.card__container-image {
  margin-bottom: 16px;
}

.card__name {
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.12;
  font-weight: 300;
  letter-spacing: $ls-wide;

  @media (min-width: 64em) {
    margin-bottom: 16px;
  }
}

.card__container-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__price {
  font-weight: 600;
}

.card__add {
  width: 40px;
  height: 24px;
  background: $c-gray url("~@/assets/images/icon-plus.svg") no-repeat
    center/16px;
  border-radius: 6px;

  transition: opacity 0.3s, background-color 0.3s;

  @media (min-width: 64em) {
    html:not(.js-pointer-touch) & {
      opacity: 0;
      visibility: hidden;
    }
  }
}

.card:hover .card__add {
  @media (min-width: 64em) {
    opacity: 1;
    visibility: visible;
  }
}

.card__add:hover {
  @media (min-width: 64em) {
    background-color: $c-green;
  }
}
</style>
