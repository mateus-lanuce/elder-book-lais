<script lang="ts" setup>
import LogoElder from "../icons/logo-elder.vue";
import Search from "./Search.vue";
import NavigationLinks from "./NavigationLinks.vue";
import NavButton from "./NavButton.vue";
</script>

<template>
  <nav
    class="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200"
  >
    <div class="flex items-center justify-between">
      <!-- logo -->
      <div class="mx-6">
        <LogoElder />
      </div>

      <!-- nagivation links -->
      <div class="flex items-center lg:justify-end xl:justify-between">
        <div class="flex pr-4">
          <NavigationLinks />
        </div>

        <!-- buttons and search-->
        <div class="flex">
          <!-- search -->
          <Search />

          <NavButton invert> Entrar </NavButton>

          <NavButton> Cadastrar </NavButton>
        </div>
      </div>
    </div>
  </nav>
</template>
