<script setup lang="ts">
import { useSelectedRoute } from '@/stores/selectedRoute.js';


const selectedRoute = useSelectedRoute();

</script>

<template>
  <div class="h-full">
    <p class="my-96 text-center text-black-500" >{{ selectedRoute.Selected }}</p>
  </div>
</template>
