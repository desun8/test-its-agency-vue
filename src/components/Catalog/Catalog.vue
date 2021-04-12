<template lang="pug">
  section.wrapper
    div.wrapper__header
      Header
    div.wrapper__topbar
      Topbar
    div.wrapper__filter
      FilterAside
    div.wrapper__list
      List
</template>

<script>
import Header from "./CatalogHeader";
import Topbar from "./CatalogTopbar";
import List from "./CatalogList";
import FilterAside from "@/components/Filter/FilterAside";

export default {
  components: {
    Header,
    Topbar,
    List,
    FilterAside,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-bottom: 64px;

  @media (min-width: 64em) {
    display: grid;
    grid-template-columns: auto minmax(0, 1486px);
    grid-template-areas: "header header" "filter topbar" "filter list";
    column-gap: 100px;
  }

  @media (min-width: 90em) {
    margin-bottom: 140px;
  }
}
.wrapper__header {
  @media (min-width: 64em) {
    grid-area: header;
  }
}
.wrapper__topbar {
  @media (min-width: 64em) {
    grid-area: topbar;
  }
}
.wrapper__filter {
  @media (min-width: 64em) {
    grid-area: filter;
    max-width: 250px;
  }
}
.wrapper__list {
  @media (min-width: 64em) {
    grid-area: list;
  }
}
</style>
