<template lang="pug">
  div#app
    Header
    Main
    Footer
    ModalFilter
    ModalBasket
</template>

<script>
import detectPointerType from "@/utils/detectPointerType";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import ModalFilter from "@/components/Filter/FilterModal";
import ModalBasket from "@/components/Basket/ModalBasket";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Main,
    ModalFilter,
    ModalBasket,
  },
  mounted() {
    detectPointerType();
  },
};
</script>

<style lang="scss">
#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;

  padding: 0 $gap-x;
  color: $c-black;
  font-family: "Inter", Avenir, Helvetica, Arial, sans-serif;

  @media (min-width: 64em) {
    padding: 0 $gap-md-x;
  }
}
</style>
