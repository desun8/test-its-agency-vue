<template lang="pug">
  a.link(href="#profile" aria-label="Личный кабинет.")  
</template>

<style lang="scss" scoped>
.link {
  width: 22px;
  height: 22px;
  background-color: $c-black;
  -webkit-mask: url("~@/assets/images/icon-profile.svg") no-repeat center/
    contain;
  transition: background-color 0.3s;
}

.link:hover {
  background-color: $c-green;
}
</style>
