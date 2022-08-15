import { defineStore } from "pinia";

export const usePaginationStore = defineStore({
  id: "PaginationDatas",
  state: () => ({
    //objeto com os cursos
    courses: [{}],
    //tamanho total de toda a requisição na api
    paginationLength: 1,
    displayedLenth: 1,
    //pagina atual exibida
    current_page: 1,
    //dados da pagina atual exibida
    page_data: [{}],
  }),
  actions: {
    //divide a quantidade de paginas possiveis de acordo com um valor passado.
    splitPages(splitValue: number): number {
      return Math.round(this.paginationLength / splitValue);
    },
    changePage(page: number) {
        this.current_page = page;
    }
  },
});
