<script lang="ts" setup>
import LogoElder from "../icons/logo-elder.vue";
import Search from "./Search.vue";
import NavigationLinks from "./NavigationLinksLarge.vue";
import NavButton from "./NavButton.vue";
import { computed, onMounted, onUnmounted, ref } from "vue";
import NavigationLinksSmall from "./NavigationLinksSmall.vue";
import IconMenu from "../icons/icon-menu.vue";
import IconClose from "../icons/icon-close.vue";
import { useMenuOpenStore } from "@/stores/menuOpen";

//resize
const windowWidth = ref(window.innerWidth)
const openMenu = useMenuOpenStore();

const onWidthChange = () => windowWidth.value = window.innerWidth
onMounted(() => window.addEventListener('resize', onWidthChange))
onUnmounted(() => window.removeEventListener('resize', onWidthChange))

const width = computed(() => {
  if (windowWidth.value < 550) return false
  if (windowWidth.value >= 550 && windowWidth.value < 1024) return false
  if (windowWidth.value >= 1200) return true
  return true; // This is an unreachable line, simply to keep eslint happy.
})

</script>

<template>
  <nav
    class="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow"
  >
    <div class="flex items-center justify-between">
      <!-- logo -->
      <div class="mx-6">
        <LogoElder />
      </div>

      

      <span class="flex items-center gap-5 ml-auto mr-4 cursor-pointer block lg:hidden" @click="openMenu.change()">
        <div class="hidden md:inline-block py-1">
          <NavButton invert > Entrar </NavButton>
          <NavButton> Cadastrar </NavButton>
        </div>
        <IconMenu v-if="!openMenu.open" class="w-5 md:w-7" />
        <IconClose v-else class="w-5 md:w-7" />
      </span>

      <!-- nagivation links -->
      <div v-if="width" class="lg:flex flex-col lg:flex-row items-center lg:justify-end xl:justify-between">
        <div class="flex pr-4">
          <NavigationLinks />
        </div>

        <!-- buttons and search-->
        <div class="flex flex-row items-center">
          <!-- search -->
          <Search />

          <NavButton invert> Entrar </NavButton>

          <NavButton> Cadastrar </NavButton>
        </div>
      </div>
      <div v-else>
        <!-- use pinia statement for changes -->

          <NavigationLinksSmall/>
      </div>
    </div>
  </nav>
</template>
