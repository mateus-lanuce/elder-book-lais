<script lang="ts" setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSelectedRoute } from "../../stores/selectedRoute";
import Links from '../../utils/navbarLinks';

const router = useRouter();
const route = useRoute();
const SelectedRoute = useSelectedRoute();

function changeRoute(route: string) {
  const path = "/" + route;

  router.push(path);

  SelectedRoute.change(route);
  console.log(SelectedRoute.Selected)
}

</script>

<template>
  <ul class="flex space-x-4 2xl:space-x-10 xl:space-x-5 md:text-sm xl:text-md font-bold">
    <li v-for="link in Links" :key="link.name">
      <button
        @click="changeRoute(link.link)"
        class=" md:bg-transparent md:hover:text-themePurple md:p-0 my-2 lg:my-0"
        aria-current="page"
        :class="((SelectedRoute.Selected === link.link) && (link.name !== 'Contato') && (link.name !== 'Sobre Nós')) ? 'text-themePurple' : 'text-themeGray-dark'"
      >
        {{ link.name }}
      </button>
    </li>
  </ul>
</template>
