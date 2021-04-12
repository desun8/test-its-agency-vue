import Vue from "vue";
import PortalVue from "portal-vue";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import App from "./App.vue";
import { worker } from "./mocks/browser.js";
import "./index.css";

Vue.config.productionTip = false;

Vue.use(PortalVue);
worker.start();

new Vue({
  data: {
    basketItems: [],
    filter: [],
    sort: "popular",
    showItems: 0,
    isFilterModalOpen: false,
    isBasketModalOpen: false,
  },

  computed: {
    itemsPrice() {
      return this.basketItems.reduce((accum, currVal) => {
        if (currVal.isDelete) return 0;

        return accum + currVal.totalPrice;
      }, 0);
    },

    totalItems() {
      return this.basketItems.reduce((accum, currVal) => {
        if (currVal.isDelete) return 0;

        return accum + currVal.count;
      }, 0);
    },

    totalPrice() {
      return this.itemsPrice;
    },

    isModalOpen() {
      return this.isFilterModalOpen || this.isBasketModalOpen;
    },
  },

  methods: {
    addItemToBasket(newItem) {
      const isExist = this.basketItems.some((item) => item.id === newItem.id);

      if (isExist) {
        this.changeBasketItemCount(newItem.id, "add");
      } else {
        this.basketItems = [...this.basketItems, newItem];
      }
    },

    deleteItem(id) {
      this.basketItems = this.basketItems.map((item) => {
        if (item.id === id) {
          item.isDelete = true;
        }

        return item;
      });
    },

    restoreItem(id) {
      this.basketItems = this.basketItems.map((item) => {
        if (item.id === id) {
          item.isDelete = false;
        }

        return item;
      });
    },

    removeBasketItems() {
      this.basketItems = this.basketItems.filter(
        (item) => item.isDelete === false
      );
    },

    changeBasketItemCount(id, type) {
      switch (type) {
        case "add":
          this.basketItems = this.basketItems.map((item) => {
            if (item.id === id) {
              item.count += 1;
              item.totalPrice = item.price * item.count;
            }

            return item;
          });
          break;
        case "remove":
          this.basketItems = this.basketItems.map((item) => {
            if (item.id === id && item.count > 1) {
              item.count -= 1;
              item.totalPrice = item.price * item.count;
            }

            return item;
          });
          break;
      }
    },

    clearBasket() {
      this.basketItems = [];
    },

    addToFilter(value) {
      this.filter.push(value);
    },

    removeFromFilter(value) {
      this.filter = this.filter.filter((val) => val !== value);
    },

    setSort(value) {
      this.sort = value;
    },

    setShowItems(value) {
      this.showItems = value;
    },

    setIsFilterModalOpen(newValue) {
      this.isFilterModalOpen = newValue;
    },

    setIsBasketModalOpen(newValue) {
      this.isBasketModalOpen = newValue;
    },
  },

  watch: {
    isModalOpen(currValue) {
      if (currValue) {
        disablePageScroll();
      } else {
        enablePageScroll();
      }
    },

    isBasketModalOpen(currValue) {
      if (currValue === false) {
        this.removeBasketItems();
      }
    },
  },
  render: (h) => h(App),
}).$mount("#app");
