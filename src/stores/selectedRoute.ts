import { defineStore } from "pinia";

export const useSelectedRoute = defineStore({
  id: "SelectedRoute",
  state: () => ({
    Selected: "/",
  }),
  actions: {
    /**
     * Modifica e salva a rota que está
     * @param Route
     */
    change(Route: string) {
      this.Selected = Route;
    },
  },
});
