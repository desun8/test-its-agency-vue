<template lang="pug">
  div
    .sort
      label.sort__field(for="sort-select") {{options[selected]}}
    
      select#sort-select.sort__select(v-model="selected")
        option(v-for="(value, key) in options" :value="key") {{value}}
    
      span.sort__icon

    Dropdown(
      id="sort"
      :optionsItems="options"
      name="sort"
    )
</template>

<script>
import Dropdown from "./Dropdown";

export default {
  components: {
    Dropdown,
  },

  data() {
    return {
      options: {
        "hight-price": "Сначала дорогие",
        "low-price": "Сначала недорогие",
        popular: "Сначала популярные",
        new: "Сначала новые",
      },
      selected: this.$root.sort,
    };
  },

  watch: {
    selected(currValue, prevValue) {
      if (currValue !== prevValue) {
        this.$root.setSort(currValue);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sort {
  position: relative;
  display: flex;
  align-items: center;

  @media (min-width: 64em) {
    display: none;
  }
}

.sort__field {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: $ls-wider;
  text-transform: uppercase;
  text-align: right;
}

.sort__select {
  // @extend .visually-hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
}

.sort__select option {
  text-align: right;
}

.sort__icon {
  display: block;
  width: 10px;
  height: 10px;
  margin-left: 4px;
  background: url("~@/assets/images/icon-select.svg") no-repeat center/contain;
}
</style>
