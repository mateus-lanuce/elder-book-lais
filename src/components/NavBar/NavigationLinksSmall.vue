<script lang="ts" setup>
import { useMenuOpenStore } from '@/stores/menuOpen';
import { useSelectedRoute } from '@/stores/selectedRoute';
import navbarLinks from '@/utils/navbarLinks';
import { useRouter } from 'vue-router';
import ButtonComponent from '../ButtonComponent.vue';


const useMenuOpen = useMenuOpenStore();

const router = useRouter();
const SelectedRoute = useSelectedRoute();

function changeRoute(route: string) {
  const path = "/" + route;

  router.push(path);

  SelectedRoute.change(route);
  useMenuOpen.close();
}

</script>

<template>
    <ul 
        class="-z-10 w-full absolute bg-white my-4 px-7
            transition-all ease-in duration-500 shadow
            text-center md:text-end"
        :class="useMenuOpen.open ? ' left-0 opacity-100' : 'left-full opacity-0' "
        >
        <li v-for="link in navbarLinks" :key="link.name" class="mx-4 my-5 cursor-pointer">
            <button
                @click="changeRoute(link.link)"
                class="font-semibold text-sm md:text-base"
                aria-current="page"
                :class="((SelectedRoute.Selected === link.link) && (link.name !== 'Contato') && (link.name !== 'Sobre Nós')) ? 'text-themePurple' : 'text-themeGray-dark'"
            >
                {{ link.name }}
            </button>
        </li>
        <li class="pb-4 w-full flex items-center justify-evenly md:hidden">
            <ButtonComponent invert class="w-full">Entrar</ButtonComponent>
            <ButtonComponent class="w-full">Cadastrar</ButtonComponent>
        </li>
    </ul>
</template>