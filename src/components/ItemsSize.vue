<template lang="pug">
  span.items-size {{showItems}} товаров
</template>

<script>
export default {
  computed: {
    showItems() {
      return this.$root.showItems;
    },
  },
};
</script>

<style lang="scss" scoped>
.items-size {
  display: none;

  @media (min-width: 64em) {
    display: inline;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: $ls-wider;
    text-transform: uppercase;
  }
}
</style>
