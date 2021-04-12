<template lang="pug">
  button.cart(@click="onOpen" type="button")
    span.cart__text {{count}}
</template>

<script>
export default {
  computed: {
    count() {
      return this.$root.totalItems;
    },
  },

  methods: {
    onOpen() {
      this.$root.setIsBasketModalOpen(true);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: $c-green;
  border-radius: 50%;
}

.cart__text {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: $ls-wider;
}
</style>
