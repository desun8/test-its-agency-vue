<template lang="pug">
  div.container(v-if="items")
    Card(
      v-for="item in filteredItems"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :price="item.price"
      :images="item.images")
</template>

<script>
import Card from "@/components/Card/Card";

export default {
  components: {
    Card,
  },

  data() {
    return {
      items: null,
    };
  },

  computed: {
    filteredItems() {
      const filter = this.$root.filter;
      const sortType = this.$root.sort;

      let filtered = this.items;

      if (filter.length) {
        let isStock = false;

        filtered = this.items.filter((item) => {
          return filter.every((value) => {
            switch (value) {
              case "stock":
                isStock = true;
                return item.stock;
              default:
                if (isStock) {
                  return item.stock && value === item.type;
                }

                return value === item.type;
            }
          });
        });
      }

      const sorted = filtered.sort((a, b) => {
        switch (sortType) {
          case "hight-price":
            return b.price - a.price;
          case "low-price":
            return a.price - b.price;
          case "popular":
            return b.rate - a.rate;
          case "new":
            return new Date(b.created) - new Date(a.created);
          default:
            return a;
        }
      });

      this.$root.setShowItems(sorted.length);

      return sorted;
    },
  },

  created() {
    fetch("/api/productItems")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }

        return response.json();
      })
      .then((json) => {
        this.items = JSON.parse(json.results);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.container {
  --cols: 2;

  display: grid;
  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  column-gap: 15px;
  row-gap: 60px;
  overflow: hidden;

  @media (min-width: 48em) {
    --cols: 3;

    column-gap: 24px;
    row-gap: 33px;
  }

  // 1440px
  @media (min-width: 90em) {
    --cols: 4;
  }

  // 1760px
  @media (min-width: 110em) {
    --cols: 5;
  }
}
</style>
