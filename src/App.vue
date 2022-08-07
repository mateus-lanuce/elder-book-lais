<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar/NavBar.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<template>

  <header>
    <NavBar /> 
  </header>

  <main class="h-full">
    <RouterView />
  </main>
  
  <footer>
    <Footer />
  </footer>
</template>
