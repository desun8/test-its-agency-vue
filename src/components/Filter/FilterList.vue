<template lang="pug">
  ul.list
    li.list__item
      label.toggle(:for="`toggle-new${idPrefix}`")
        input.toggle__input(
          v-model="modelNew"
          :id="`toggle-new${idPrefix}`"
          @change="onToggle"
          type="checkbox"
          value="new"
        )
        span.toggle__mark
        span.toggle__name Новинки
    li.list__item
      label.toggle(:for="`toggle-stock${idPrefix}`")
        input.toggle__input(
          v-model="modelStock"
          :id="`toggle-stock${idPrefix}`"
          @change="onToggle"
          type="checkbox"
          value="stock"
        )
        span.toggle__mark
        span.toggle__name Есть в наличии
    li.list__item
      label.toggle(:for="`toggle-contracts${idPrefix}`")
        input.toggle__input(
          v-model="modelContracts"
          :id="`toggle-contracts${idPrefix}`"
          @change="onToggle"
          type="checkbox"
          value="contracts"
        )
        span.toggle__mark
        span.toggle__name Контрактные
    li.list__item
      label.toggle(:for="`toggle-exclusive${idPrefix}`")
        input.toggle__input(
          v-model="modelExclusive"
          :id="`toggle-exclusive${idPrefix}`"
          @change="onToggle"
          type="checkbox"
          value="exclusive"
        )
        span.toggle__mark
        span.toggle__name Эксклюзивные
    li.list__item
      label.toggle(:for="`toggle-sale${idPrefix}`")
        input.toggle__input(
          v-model="modelSale"
          :id="`toggle-sale${idPrefix}`"
          @change="onToggle"
          type="checkbox"
          value="sale"
        )
        span.toggle__mark
        span.toggle__name Распродажа
</template>

<script>
export default {
  props: {
    type: String,
  },

  computed: {
    modelNew: {
      get() {
        return this.$root.filter.some(item => item === 'new');
      },

      set() {}
    },

    modelStock: {
      get() {
        return this.$root.filter.some(item => item === 'stock');
      },

      set() {}
    },

    modelContracts: {
      get() {
        return this.$root.filter.some(item => item === 'contracts');
      },

      set() {}
    },

    modelExclusive: {
      get() {
        return this.$root.filter.some(item => item === 'exclusive');
      },

      set() {}
    },

    modelSale: {
      get() {
        return this.$root.filter.some(item => item === 'sale');
      },

      set() {}
    },

    idPrefix() {
      if (this.type) {
        return `--${this.type}`;
      }

      return '';
    },
  },

  methods: {
    onToggle(event) {
      let { value, checked } = event.target;

      if (checked) {
        this.$root.addToFilter(value);
      } else {
        this.$root.removeFromFilter(value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  gap: 10px;
}

.list__item {
}

.toggle {
  display: grid;
  grid-auto-flow: column;
  gap: 12px;
  align-items: center;
  width: fit-content;
  cursor: pointer;
}

.toggle__input {
  @extend .visually-hidden;
}

.toggle__mark {
  position: relative;
  width: 36px;
  height: 22px;

  background-color: $c-gray;
  border-radius: 40px;
  transition: background-color 0.3s;

  .toggle__input:checked + & {
    background-color: $c-green;
  }
}

.toggle__mark::after {
  content: "";
  position: absolute;
  top: calc(50% - (8px / 2));
  left: 7px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: $c-black;
  transform: translateX(0);
  transition: transform 0.3s;

  .toggle__input:checked + & {
    transform: translateX(14px);
  }
}

.toggle__name {
  font-size: 12px;
  line-height: 1;
  letter-spacing: $ls-wider;
  text-transform: uppercase;
}
</style>
