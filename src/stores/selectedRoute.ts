import { defineStore } from "pinia";

export const useSelectedRoute = defineStore({
  id: "SelectedRoute",
  state: () => ({
    Selected: "/"
  }),
  actions: {
    change(Route: string) {
      this.Selected = Route;
    }
  }
  });
