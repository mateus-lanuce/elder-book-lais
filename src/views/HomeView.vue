<script setup lang="ts">
import { useSelectedRoute } from '@/stores/selectedRoute.js';
import Carousel from '../components/Carousel.vue';
import api from '@/utils/api';

const selectedRoute = useSelectedRoute();

async function test () {
  const teste = await api.get("cursos", { params: { _limit: 5, _page: 2 }});

  console.log(teste.data);
}

test();

</script>

<template>
  <div class="flex flex-col flex-nowrap -mt-12">
    
    <div class="flex-1">
      <Carousel />
    </div>

    <!-- main cards -->
    <div class=" bg-themeWhite flex flex-col items-center justify-around">

      <!-- modules education container cards -->
      <div class="flex flex-col items-center justify-around pt-20 w-3/4">

        <p class="text-themeGreen text-3xl font-semibold">Módulos Educacionais</p>

        <!-- container cards -->
        <div class="container pt-7">
          
          <!-- orders buttons -->
          <ul class="flex flex-row space-x-7 text-themeGray-dark font-semibold text-xl">
            <li class="pb-1 cursor-pointer border-b-4 border-themeWhite hover:border-themePurple rounded transition duration-75 ease-in-out delay-75">Mais populares</li>
            <li class="pb-1 cursor-pointer border-b-4 border-themeWhite hover:border-themePurple rounded transition duration-75 ease-in-out delay-75">Mais bem avaliados</li>
            <li class="pb-1 cursor-pointer border-b-4 border-themeWhite hover:border-themePurple rounded transition duration-75 ease-in-out delay-75">Mais recentes</li>
          </ul>


        </div>

        <button>Ver Mais</button>

      </div>

      <!-- parterns -->
      <div>
        <p>parceiros</p>
        <p>parceiros</p><p>parceiros</p>
      </div>
    </div>

  </div>
</template>
