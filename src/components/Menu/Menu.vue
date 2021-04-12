<template lang="pug">
  nav.menu
    ul.menu__list
      each val in ["Продукты", "Цвета", "Вдохновение", "Советы", "Найти магазин"]
        li
          a.menu__link(href="#")= val
</template>

<style lang="scss" scoped>
.menu {
  display: none;
  font-size: 14px;
  line-height: 1;
  letter-spacing: $ls-wider;
  text-transform: uppercase;

  @media (min-width: 64em) {
    display: block;
  }

  @media (min-width: 100em) {
    justify-self: start;
    margin-left: 172px;
    margin-right: 172px;
  }
}

.menu__list {
  display: grid;
  grid-auto-flow: column;
  gap: 24px;
}

.menu__link {
  transition: color 0.3s;
}

.menu__link:hover {
  color: $c-green;
}
</style>
