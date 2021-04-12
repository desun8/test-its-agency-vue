<template lang="pug">
  div.container
    FilterBlock
    ItemsSize
    Sort
</template>

<script>
import Filter from "@/components/Filter/Filter";
import Sort from "@/components/Sort/Sort";
import ItemsSize from "@/components/ItemsSize";

export default {
  components: {
    FilterBlock: Filter,
    Sort,
    ItemsSize,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (min-width: 64em) {
    margin-bottom: 44px;
  }
}
</style>
