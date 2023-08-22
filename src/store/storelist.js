import { defineStore } from "pinia";

export const useSchoolStore = defineStore("storelist", {
  state: () => ({ stores: [] }),

  actions: {
    addStore(store) {
      this.stores.push(store);
    },
  },
});
