
display: none;<template lang="pug">
  button.link(type="button" aria-label="Поиск")
</template>

<style lang="scss" scoped>
.link {
  display: none;
  width: 20px;
  height: 20px;
  background-color: $c-black;
  -webkit-mask: url("~@/assets/images/icon-search.svg") no-repeat center/
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
