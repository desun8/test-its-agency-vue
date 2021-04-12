<template lang="pug">
  footer.footer
</template>

<style lang="scss" scoped>
.footer {
  height: 204px;
  margin: 0 ($gap-x * -1);
  background-color: #000;

  @media (min-width: 64em) {
    margin: 0 ($gap-md-x * -1);
  }
}
</style>
