<template lang="pug">
  div.swiper-container(ref="container")
    div.swiper-wrapper
      div.swiper-slide.img-1
        slot
      div.swiper-slide.img-2
        slot
      div.swiper-slide.img-3
        slot

    div.swiper-pagination(ref="pagination")

    div.swiper-button-prev(ref="prev")
    div.swiper-button-next(ref="next")
</template>

<script>
// Import Swiper Vue.js components
import Swiper, { Pagination, Navigation } from "swiper";
Swiper.use([Pagination, Navigation]);

// Import Swiper styles
import "swiper/swiper.scss";
export default {
  data() {
    return {
      swiperInstance: null,
    };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },

  mounted() {
    // const pagination = this.$refs.pagination;

    if (this.swiperInstance === null) {
      this.swiperInstance = new Swiper(this.$refs.container, {
        slidesPerView: 1,
        allowTouchMove: false,

        pagination: {
          el: this.$refs.pagination,
          clickable: true,
        },

        navigation: {
          nextEl: this.$refs.next,
          prevEl: this.$refs.prev,
        },
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  display: none;

  @media (min-width: 64em) {
    display: block;
    padding-top: (560 / (1920 - (64 * 2)) * 100%);
    margin: 0 ($gap-md-x * -1);
  }
}

.swiper-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.swiper-slide {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.swiper-pagination {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  display: grid;
  grid-auto-flow: column;
  gap: 8px;

  padding: 13px 24px;
  background-color: rgba(#000, 0.4);
  border-radius: 16px;
  z-index: 2;

  @media (min-width: 80em) {
    bottom: 40px;
  }
}

.swiper-pagination::v-deep .swiper-pagination-bullet {
  width: 6px;
  height: 6px;
  background-color: rgba(#fff, 0.2);
  border-radius: 50%;
}

.swiper-pagination::v-deep .swiper-pagination-bullet-active {
  background-color: rgba(#fff, 1);
}

$btn-pos-x: 20.313%;

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  bottom: 26.072%;
  z-index: 5;

  width: 80px;
  height: 80px;
  background-color: #fff;
  -webkit-mask: url("~@/assets/images/icon-chevron.svg") no-repeat
    center/contain;
}

.swiper-button-prev {
  left: $btn-pos-x;
  transform: rotate(-180deg);
}

.swiper-button-next {
  right: $btn-pos-x;
}

.swiper-button-disabled {
  opacity: 0;
  visibility: hidden;
}

.img-1 {
  background-image: url("~@/assets/images/carousel-1.jpg");
}
.img-2 {
  background-image: url("~@/assets/images/carousel-1.jpg");
}
.img-3 {
  background-image: url("~@/assets/images/carousel-1.jpg");
}
</style>
