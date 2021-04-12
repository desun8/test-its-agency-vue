<template lang="pug">
  header.header
    Hamburger
    Logo
    Menu
    Phone
    div.btn-group
      Search
      Profile
      Wishlist
      Cart
</template>

<script>
import Menu from "@/components/Menu/Menu";
import Hamburger from "./Hamburger";
import Logo from "./Logo/Logo";
import Phone from "./Phone";
import Cart from "./Btns/Cart";
import Search from "./Btns/Search";
import Profile from "./Btns/Profile";
import Wishlist from "./Btns/Wishlist";

export default {
  name: "Header",
  components: { Hamburger, Logo, Cart, Menu, Phone, Search, Profile, Wishlist },
};
</script>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 22px 0;
  border-bottom: 1px solid rgba($c-black, 0.06);

  @media (min-width: 64em) {
    margin-bottom: 0;
    padding: 38px 0;
    border-bottom: 0;
  }

  @media (min-width: 100em) {
    grid-template-columns: auto minmax(0, 1fr) repeat(2, auto);
  }
}

.btn-group {
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}
</style>
