<script lang="ts" setup>
import { useSelectedRoute } from "@/stores/selectedRoute.js";
import Carousel from "../components/Carousel.vue";
import api from "@/utils/api";
import orderStars from "../utils/orderStars";
import ButtonComponent from "../components/ButtonComponent.vue";
import {
  computed,
  onBeforeMount,
  onMounted,
  ref,
  watch,
  watchEffect,
} from "vue";
import PersonIcon from "../components/icons/person-icon.vue";
import WatchIcon from "../components/icons/watch-icon.vue";
import StarIcon from "../components/icons/star-icon.vue";

import formatNumber from "@/utils/formatNumber";
import NoBgStartIcon from "../components/icons/noBgStart-icon.vue";
import HalfStarIcon from "../components/icons/halfStar-icon.vue";

const selectedRoute = useSelectedRoute();
const courses = ref([]);
const selectOrder = ref("matriculados")

watchEffect(async () => {
  const response = await await api.get("cursos", {
    params: { _limit: 3, _sort:  selectOrder.value, _order: "desc"},
  });
  courses.value = response.data;
  console.log("coursses", courses.value);

});
</script>

<template>
  <div class="flex flex-col flex-nowrap -mt-12">
    <div class="flex-1">
      <Carousel />
    </div>

    <!-- main cards -->
    <div class="bg-white flex flex-col items-center justify-around">
      
      <!-- modules education container cards -->
      <div class="flex flex-col items-center justify-around pt-10 w-3/4">
        <p class="text-themeGreen text-3xl font-semibold">
          Módulos Educacionais
        </p>

        <!-- container cards -->
        <div class="container pt-4">
          <!-- orders buttons -->
          <ul
            class="flex flex-row space-x-7 text-themeGray-dark font-semibold text-lg"
          >
            <li
              class="pb-1 cursor-pointer border-b-4 hover:border-themePurple rounded transition duration-75 ease-in-out delay-75"
              :class="selectOrder === 'matriculados' ? 'border-themePurple': 'border-themeWhite '"
              @click="selectOrder = 'matriculados'"
            >
              Mais populares
            </li>
            <li
              class="pb-1 cursor-pointer border-b-4 hover:border-themePurple rounded transition duration-75 ease-in-out delay-75"
              :class="selectOrder === 'avaliacao' ? 'border-themePurple': 'border-themeWhite'"
              @click="selectOrder = 'avaliacao'"
            >
              Mais bem avaliados
            </li>
            <li
              class="cursor-pointer border-b-4 hover:border-themePurple rounded transition duration-75 ease-in-out delay-75"
              :class="selectOrder === 'criado_em' ? 'border-themePurple': 'border-themeWhite'"
              @click="selectOrder = 'criado_em'"
            >
              Mais recentes
            </li>
          </ul>

          <!-- cards -->
          <div
            v-for="course of courses"
            :key="course['id']"
            class="flex items-center justify-around bg-cardGray my-5 rounded-lg"
          >
            <!-- image and text -->
            <div class="flex flex-row items-center space-x-3 p-3">
              <img
                v-bind:src="course['capa']"
                v-bind:alt="course['titulo']"
                class="h-28 w-32 object-cover rounded-lg"
              />
              <div class="space-y-4 w-96">
                <p class="text-themeGray-dark font-semibold text-xl">
                  {{ course['titulo'] }}
                </p>
                <p class="text-themeGreen font-semibold text-xs w-3/4">
                  {{ course['parceiros'] }}
                </p>
              </div>
            </div>

            <!-- informations -->
            <div class="flex flex-col xl:flex-row xl:items-start lg:items-center justify-evenly w-1/2 h-full lg:space-y-2 xl:space-y-0">
              <div class="flex items-center space-x-2">
                <PersonIcon class="h-6 w-6"/>
                <p>{{ formatNumber(course["matriculados"]) }}</p>
              </div>
              <div class="flex items-center space-x-2">
                <WatchIcon class="h-5 w-5"/>
                <p>{{ course["duracao"] }}</p>
              </div>
              <div class="flex items-center space-x-1">

                <template v-for="index in 5" :key="index">
                  <StarIcon class="w-5 h-5" v-if="orderStars(course['avaliacao'], index) === 0"/>
                  <NoBgStartIcon class="w-5 h-5" v-else-if="orderStars(course['avaliacao'], index) === 1"/>
                  <HalfStarIcon class="w-5 h-5" v-else/>
                </template>
                
                <p class="px-1">{{ formatNumber(parseFloat(course["avaliacao"]).toFixed(1)) }}</p>
              </div>

              <!-- button -->

              <ButtonComponent class="w-fit xl:px-6" >Ver Módulo</ButtonComponent>
            </div>
          </div>
        </div>

        <ButtonComponent class="my-5 w-64 h-10 text-xl" route="cursos">Ver Mais</ButtonComponent>
      </div>

      <!-- parterns -->
      <div class="w-3/4">
        <p class="text-themeGreen text-3xl font-semibold mt-10 text-center">
          Parceiros
        </p>

        <div class="flex items-start justify-around bg-cardGray my-10 rounded-lg space-x-4 p-4">
          <div class="flex flex-col items-center justify-evenly h-full w-1/4">
            <p class="text-2xl font-semibold">Governo do RN</p>
            <p class="text-xl font-semibold">Governo do Estado do Rio Grande do Norte.</p>
          </div>
          <div class="flex flex-col items-center justify-evenly h-full w-1/4">
            <p class="text-2xl font-semibold">SESAP</p>
            <p class="text-xl font-semibold">Secretaria de Saúde Pública do Estado do Rio Grande do Norte.</p>
          </div>
          <div class="flex flex-col items-center justify-evenly h-full w-1/4">
            <p class="text-2xl font-semibold">UFRN</p>
            <p class="text-xl font-semibold">Universidade Federal do Rio Grande do Norte.</p>
          </div>
          <div class="flex flex-col items-center justify-evenly h-full w-1/4">
            <p class="text-2xl font-semibold">HUOL</p>
            <p class="text-xl font-semibold">Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade Federal do Rio Grande do Norte).</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
