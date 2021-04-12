<template lang="pug">
  a.link(href="#wishlist" aria-label="Список желаемого.")
</template>

<style lang="scss" scoped>
.link {
  display: none;
  width: 22px;
  height: 22px;
  background-color: $c-black;
  -webkit-mask: url("~@/assets/images/icon-wishlist.svg") no-repeat center/
    contain;
  transition: background-color 0.3s;

  @media (min-width: 64em) {
    display: block;
  }
}

.link:hover {
  background-color: $c-green;
}
</style>
