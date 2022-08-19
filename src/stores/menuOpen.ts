import { defineStore } from "pinia";

export const useMenuOpenStore = defineStore({
  id: "menuOpen",
  state: () => ({
    open: false,
  }),
  actions: {
    change() {
        this.open = !this.open;
    },
    close() {
      this.open = false;
    }
  }
})