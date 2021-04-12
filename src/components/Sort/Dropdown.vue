<template>
  <div
    ref="container"
    class="dropdown-wrapper"
    :class="{ 'is-active': isActive }"
    @click="openDropdown"
    @keydown="handleKeydown"
  >
    <button
      ref="input"
      :id="id"
      :class="{ 'is-active': isActive }"
      :name="name"
      type="button"
    >
      {{ selected }}
    </button>
    <ul ref="dropdown" class="dropdown" v-show="isActive">
      <li
        class="dropdown__item"
        v-for="(val, key) in optionsItems"
        :key="key"
        @click="handleClick"
        :data-value="key"
        tabindex="-1"
      >
        {{ val }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    optionsItems: {
      type: Object,
      required: true,
    },
    id: String,
    name: String,
    placeholder: String,
  },
  data() {
    return {
      value: "",
      selected: "Сначала популярные",
      isActive: false,
      currentFocus: 0,
    };
  },

  methods: {
    closeDropdown() {
      this.isActive = false;
    },

    openDropdown() {
      this.isActive = true;
    },

    updateValue(newVal) {
      this.value = newVal.trim();
      this.$root.setSort(this.value);
    },

    updateSelected(newVal) {
      this.selected = newVal.trim();
    },

    handleClick(event) {
      this.updateValue(event.currentTarget.dataset.value);
      this.updateSelected(event.currentTarget.textContent);
    },

    /**
     * Навигация с помощью клавиатуры
     */
    handleKeydown(event) {
      const input = this.$refs.input;
      const dropdownItems = this.$refs.dropdown.children;

      let nextActiveElement = null;
      switch (event.key) {
        case "ArrowDown":
          if (dropdownItems.length) {
            event.preventDefault();
            this.currentFocus =
              this.currentFocus < dropdownItems.length
                ? this.currentFocus + 1
                : this.currentFocus;

            nextActiveElement = dropdownItems[this.currentFocus - 1];

            nextActiveElement.focus();
          }
          break;
        case "ArrowUp":
          if (dropdownItems.length) {
            event.preventDefault();

            this.currentFocus =
              this.currentFocus !== 0 ? this.currentFocus - 1 : 0;

            nextActiveElement =
              this.currentFocus === 0
                ? input
                : dropdownItems[this.currentFocus - 1];

            nextActiveElement.focus();
          }
          break;
        case "Enter":
          if (document.activeElement?.classList.contains("dropdown__item")) {
            event.preventDefault();

            this.updateValue(document.activeElement.dataset.value);
            this.updateSelected(event.currentTarget.textContent);

            this.closeDropdown();
            this.currentFocus = 0;
          }
          break;
        case "Escape":
        case "Tab":
          this.closeDropdown();
          this.currentFocus = 0;
          break;
        default:
          break;
      }
    },
  },

  mounted() {
    document.addEventListener("click", (event) => {
      if (this.isActive) {
        if (event.target !== this.$refs.input) {
          this.closeDropdown();
        }
      }
    });
  },
};
</script>

<style lang="scss" scoped>
$modal-dur: 0.2s;
$container-dur: 0.4s;

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: $ls-wider;
  text-transform: uppercase;
  text-align: right;
}
button.is-active {
  outline: var(--c-blue) auto 2px;
  border-color: var(--c-blue);
}

.dropdown-wrapper {
  display: none;
  position: relative;
  min-width: 280px;
  padding-right: 14px;

  font-size: 12px;
  font-weight: 500;
  letter-spacing: $ls-wider;
  text-transform: uppercase;
  text-align: right;

  @media (min-width: 64em) {
    display: block;
  }
}

.dropdown-wrapper::after {
  content: "";
  position: absolute;
  top: calc(50% - 5px);
  right: 0;
  display: block;
  width: 10px;
  height: 10px;
  background: url("~@/assets/images/icon-select.svg") no-repeat center/contain;
  cursor: pointer;
}

.dropdown-wrapper::before {
  content: "";
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(#000, 0.7);
  z-index: 1;

  opacity: 0;
  transform: translateY(100%);

  transition: transform 0s $container-dur, opacity $container-dur;
}

.dropdown-wrapper.is-active::before {
  opacity: 1;
  transform: translateY(0);
  transition: transform 0s 0s, opacity $modal-dur 0s;
}

.dropdown {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  z-index: 10;
}

.dropdown__item {
  padding: 17px 24px;
  text-align: left;
  transition: background-color 0.2s;
  cursor: pointer;
}

.dropdown__item:hover,
.dropdown__item:focus {
  background-color: $c-green;
}

.dropdown__item:focus {
  outline: 0;
}
</style>
