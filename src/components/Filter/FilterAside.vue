<template lang="pug">
  div.container
    portal-target(name="filter-aside")
</template>

<style lang="scss" scoped>
.container {
  display: none;
  position: sticky;
  top: 50px;

  @media (min-width: 64em) {
    display: block;
  }
}
</style>
