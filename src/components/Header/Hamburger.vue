<template lang="pug">
  button.hamburger(type="button")
    span.line.line--top
    span.line.line--middle
    span.line.line--bottom
</template>

<style lang="scss" scoped>
.hamburger {
  position: relative;
  width: 24px;
  height: 14px;

  @media (min-width: 64em) {
    display: none;
  }
}

.line {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: $c-black;
}

.line--top {
  top: 0;
}

.line--middle {
  top: calc(50% - 1px);
}

.line--bottom {
  bottom: 0;
}
</style>
