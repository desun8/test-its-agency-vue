<template lang="pug">
  section.filter
    button.filter__open(@click="onOpen" type="button") Фильтр

    portal(to="filter-modal")
      FilterList(type="modal")
    portal(to="filter-aside")
      FilterList(type="aside")

</template>

<script>
import FilterList from "./FilterList";
export default {
  components: {
    FilterList,
  },
  methods: {
    onOpen() {
      this.$root.setIsFilterModalOpen(true);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  @media (min-width: 64em) {
    display: none;
  }
}

.filter__open {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: $ls-wider;
  text-transform: uppercase;
}
</style>
