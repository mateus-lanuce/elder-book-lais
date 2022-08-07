<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useSelectedRoute }from "../../stores/selectedRoute"

const router = useRouter()
const SelectedRoute = useSelectedRoute()

console.log(SelectedRoute.Selected)

function changeRoute(route: string) {

  route = "/" + route;

  router.push(route);

  SelectedRoute.change(route);

}
</script>

<template>
  <ul class="flex space-x-4 xl:space-x-10 md:text-sm xl:text-md font-bold">
    <li>
      <button
        @click="changeRoute(``)"
        class="text-themeGray-dark md:bg-transparent md:hover:text-themePurple md:p-0"
        aria-current="page"
        :class="SelectedRoute"
      >
        Início
      </button>
    </li>
    <li>
      <button
        @click="changeRoute(``)"
        class="text-themeGray-dark md:hover:bg-transparent md:hover:text-themePurple md:p-0"
      >
        Sobre Nós
      </button>
    </li>
    <li>
      <button
        @click="changeRoute(`cursos`)"
        class="text-themeGray-dark rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-themePurple md:p-0"
      >
        Cursos
      </button>
    </li>
    <li>
      <button
        @click="changeRoute(`parceiros`)"
        class="text-themeGray-dark rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-themePurple md:p-0"
      >
        Parceiros
      </button>
    </li>
    <li>
      <button
        @click="changeRoute(`transparencia`)"
        class="text-themeGray-dark rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-themePurple md:p-0"
      >
        Transparência
      </button>
    </li>
    <li>
      <button
        @click="changeRoute(``)"
        class="text-themeGray-dark rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-themePurple md:p-0"
      >
        Contato
      </button>
    </li>
  </ul>
</template>
