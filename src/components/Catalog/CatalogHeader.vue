<template lang="pug">
  header.catalog-header
    Breadcrumbs
    div.sm
      Title
    div.lg
    Carousel
      Title
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs";
import Title from "@/components/Title";
import Carousel from "@/components/Carousel";
export default {
  components: {
    Breadcrumbs,
    Title,
    Carousel,
  },
};
</script>

<style lang="scss" scoped>
.catalog-header {
  position: relative;

  @media (min-width: 64em) {
    margin-bottom: 72px;
  }
}

.sm {
  @media (min-width: 64em) {
    display: none;
  }
}

.lg {
  display: none;

  @media (min-width: 64em) {
    display: block;
  }
}
</style>
