<template lang="pug">
  div.modal(
    ref="modal"
    @click.self="onClose"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    :class="{'is-open': isOpen}"
  )
    div.container
      button.close(ref="btnClose" @click="onClose" aria-label="Закрыть модальное окно")
        span.close__icon(ref="btnCloseIcon")

      div.container__body(data-scroll-lock-scrollable)
        slot
</template>

<script>
export default {
  props: {
    type: String,
  },

  data() {
    return {
      touchStart: 0,
      touchEnd: 0,
      validTarget: false,
    };
  },

  computed: {
    isOpen() {
      switch (this.type) {
        case 'basket':
          return this.$root.isBasketModalOpen;
        case 'filter':
          return this.$root.isFilterModalOpen;
        default:
          return false;
      }
    },
  },

  methods: {
    onClose() {
      if (this.type === 'basket') {
        this.$root.setIsBasketModalOpen(false);
      } else {
        this.$root.setIsFilterModalOpen(false);
      }
    },

    swipe() {
      if (this.validTarget) {
        this.validTarget = false;

        const diff = this.touchStart - this.touchEnd;

        if (diff < -50) {
          this.onClose();
        }
      }
    },

    handleTouchStart(event) {
      this.touchStart = event.changedTouches[0].clientY;

      if (
          event.target === this.$refs.modal ||
          event.target === this.$refs.btnClose ||
          event.target === this.$refs.btnCloseIcon
      ) {
        this.validTarget = true;
      }
    },

    handleTouchEnd(event) {
      this.touchEnd = event.changedTouches[0].clientY;

      this.swipe();
    },
  },
};
</script>

<style lang="scss" scoped>
$modal-dur: 0.2s;
$container-dur: 0.4s;

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;

  padding-top: 50px;
  background-color: rgba(#000, 0.7);
  opacity: 0;
  transform: translateY(100%);

  transition: transform 0s $container-dur, opacity $container-dur $modal-dur;

  @media (min-height: 650px) {
    padding-top: 80px;
  }

  @media (min-height: 800px) {
    padding-top: 160px;
  }

  @media (min-width: 48em) {
    padding-top: 0;
  }
}

.modal.is-open {
  opacity: 1;
  transform: translateY(0);
  transition: transform 0s 0s, opacity $modal-dur 0s;
}

.container {
  position: relative;
  height: 100%;
  padding-top: 54px;
  background-color: #fff;
  border-radius: 24px 24px 0 0;
  transform: translateY(100%);
  transition: transform $container-dur;

  @media (min-width: 48em) {
    width: 100%;
    max-width: 600px;
    margin-left: auto;
    padding-top: 0;
    border-radius: 0;
    transform: translateX(100%);
  }
}

.modal.is-open .container {
  transform: translateY(0);
  transition-delay: $modal-dur;

  @media (min-width: 48em) {
    transform: translateX(0);
  }
}

.container__body {
  height: 100%;
  padding-left: $gap-x;
  padding-right: $gap-x;
  overflow: auto;

  @media (min-width: 48em) {
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
  }
}

.close {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 28px;

  @media (min-width: 48em) {
    top: 32px;
    left: auto;
    right: 40px;

    width: 48px;
    height: 48px;
    border: 1px solid rgba(#000, 0.1);
    border-radius: 50%;
    transform: none;
    transition: border-color 0.3s;
  }
}

.close:hover {
  @media (min-width: 48em) {
    border-color: rgba(#000, 1);
  }
}

.close__icon {
  width: 28px;
  height: 4px;
  background-color: rgba($c-black, 0.6);
  border-radius: 40px;

  @media (min-width: 48em) {
    width: 24px;
    height: 24px;
    background: url("~@/assets/images/icon-cross.svg") no-repeat center/ contain;
    border-radius: 0;
  }
}
</style>
