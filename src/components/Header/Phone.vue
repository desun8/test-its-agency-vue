<template lang="pug">
  a.tel(href="tel:+70000000000")
    span.tel__number +7 (495) 221-77-69
    span.tel__text Заказать звонок
</template>

<style lang="scss" scoped>
.tel {
  display: none;
  flex-direction: column;
  line-height: 1;

  /* 1280px */
  @media (min-width: 80em) {
    display: inline-flex;
  }

  @media (min-width: 100em) {
    margin-right: 116px;
  }
}

.tel__number {
  margin-bottom: 2px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: $ls-pre-tight;
}

.tel__text {
  font-size: 14px;
  opacity: 0.3;
}
</style>
