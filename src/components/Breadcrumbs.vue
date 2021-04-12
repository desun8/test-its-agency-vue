<template lang="pug">
  ol.breadcrumbs
    each val in ["Главная", "Продукты", "Краски"]
      li.breadcrumbs__item
        a.breadcrumbs__link(href="#")= val
</template>

<style lang="scss" scoped>
.breadcrumbs {
  margin-bottom: 48px;

  font-size: 10px;
  line-height: 1;
  letter-spacing: $ls-wider;
  text-transform: uppercase;

  @media (min-width: 64em) {
    position: absolute;
    top: 32px;
    left: 0;
    z-index: 10;
    margin-bottom: 0;
  }
}

.breadcrumbs__item {
  position: relative;
  display: inline-block;
  margin-left: 20px;
}

.breadcrumbs__item:first-child {
  margin-left: 0;
}

.breadcrumbs__item:not(:first-child)::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -12px;
  transform: translateY(-50%);

  width: 3px;
  height: 3px;
  background: #fff;
  border-radius: 50%;
  opacity: 0.3;
}

.breadcrumbs__link {
  color: rgba($c-black, 0.3);
  transition: color 0.3s;

  @media (min-width: 64em) {
    color: rgba(#fff, 0.3);
  }
}

.breadcrumbs__link:hover {
  color: rgba($c-black, 1);

  @media (min-width: 64em) {
    color: rgba(#fff, 0.3);
  }
}
</style>
