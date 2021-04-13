<template lang="pug">
  div.container
    h1.title Краски
    span.describe Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!
</template>

<style lang="scss" scoped>
.container {
  margin-bottom: 48px;

  @media (min-width: 64em) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;

    display: grid;
    justify-content: center;
    max-width: 472px;
    margin-bottom: 0;
    color: #fff;
    text-align: center;
  }
}

.title {
  font-size: 36px;
  line-height: 0.88;
  font-weight: 400;
  letter-spacing: $ls-tight;

  @media (min-width: 64em) {
    margin-bottom: 24px;
    font-size: 72px;
    letter-spacing: $ls-pre-tight;
  }
}

.describe {
  display: none;

  @media (min-width: 64em) {
    display: inline;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.3;
    letter-spacing: $ls-wide;
  }
}
</style>
