<script setup lang="ts">
import { useSelectedRoute } from "@/stores/selectedRoute.js";
import api from "@/utils/api";
import { ref, watchEffect } from "vue";
import PersonIcon from "../components/icons/person-icon.vue";
import WatchIcon from "../components/icons/watch-icon.vue";
import StarIcon from "../components/icons/star-icon.vue";

import NoBgStartIcon from "../components/icons/noBgStart-icon.vue";
import HalfStarIcon from "../components/icons/halfStar-icon.vue";

import formatNumber from "@/utils/formatNumber";
import orderStars from "../utils/orderStars";
import ButtonComponent from "../components/ButtonComponent.vue";

const selectedRoute = useSelectedRoute();
const courses = ref([]);
const selectOrder = ref("Covid 19");

watchEffect(async () => {
  const response = await await api.get("cursos", {
    params: { _limit: 6, cateroria: selectOrder.value, _order: "desc" },
  });
  courses.value = response.data;
  console.log("coursses", courses.value);
});
</script>

<template>
  <div class="flex flex-col items-center flex-nowrap mt-5">
    <!-- modules education container cards -->
    <div class="flex flex-col items-center justify-around">
      <!-- p routes -->
      <div class="container">
        <p>rotas</p>
      </div>

      <p class="text-themeGreen text-3xl font-semibold">Módulos Educacionais</p>

      <!-- container cards -->
      <div class="container pt-4">
        <!-- orders buttons -->
        <ul
          class="flex flex-row space-x-7 text-themeGray-dark font-semibold text-lg"
        >
          <li
            class="pb-1 cursor-pointer border-b-4 hover:border-themePurple rounded transition duration-75 ease-in-out delay-75"
            :class="
              selectOrder === 'Covid 19'
                ? 'border-themePurple text-themePurple'
                : 'border-themeWhite '
            "
            @click="selectOrder = 'Covid 19'"
          >
            Covid 19
          </li>
          <li
            class="pb-1 cursor-pointer border-b-4 hover:border-themePurple rounded transition duration-75 ease-in-out delay-75"
            :class="
              selectOrder === 'Síflis e outras ist'
                ? 'border-themePurple text-themePurple'
                : 'border-themeWhite'
            "
            @click="selectOrder = 'Síflis e outras ist'"
          >
            Sífilis e outras Ist’s
          </li>
          <li
            class="cursor-pointer border-b-4 hover:border-themePurple rounded transition duration-75 ease-in-out delay-75"
            :class="
              selectOrder === 'Preceptoria'
                ? 'border-themePurple text-themePurple'
                : 'border-themeWhite'
            "
            @click="selectOrder = 'Preceptoria'"
          >
            Preceptoria
          </li>
          <li
            class="cursor-pointer border-b-4 hover:border-themePurple rounded transition duration-75 ease-in-out delay-75"
            :class="
              selectOrder === 'Doenças raras'
                ? 'border-themePurple text-themePurple'
                : 'border-themeWhite'
            "
            @click="selectOrder = 'Doenças raras'"
          >
            Doenças raras
          </li>
          <li
            class="cursor-pointer border-b-4 hover:border-themePurple rounded transition duration-75 ease-in-out delay-75"
            :class="
              selectOrder === 'WebPalestras'
                ? 'border-themePurple text-themePurple'
                : 'border-themeWhite'
            "
            @click="selectOrder = 'WebPalestras'"
          >
            Web Palestras
          </li>
          <li
            class="cursor-pointer border-b-4 hover:border-themePurple rounded transition duration-75 ease-in-out delay-75"
            :class="
              selectOrder === 'Sistema prisional'
                ? 'border-themePurple text-themePurple'
                : 'border-themeWhite'
            "
            @click="selectOrder = 'Sistema prisional'"
          >
            Sistema prisional
          </li>
          <li
            class="cursor-pointer border-b-4 hover:border-themePurple rounded transition duration-75 ease-in-out delay-75"
            :class="
              selectOrder === 'OPAS'
                ? 'border-themePurple text-themePurple'
                : 'border-themeWhite'
            "
            @click="selectOrder = 'OPAS'"
          >
            OPAS
          </li>
        </ul>

        <p class="py-5 text-base font-normal italic">6 de 20 resultados</p>

        <!-- cards -->

        <div class="grid grid-cols-3 gap-6">
          <div v-for="course of courses" :key="course['id']" class="flex flex-col justify-between">
            <!-- image and text -->
            <div class="w-80 flex flex-col space-y-2">
              <img
                v-bind:src="course['capa']"
                v-bind:alt="course['titulo']"
                v-bind:title="course['titulo']"
                class="h-52 w-80 object-cover rounded-lg"
              />
              <div class="flex flex-col space-y-1">
                <p class="text-themeGray-dark font-semibold text-xl line-clamp-2" v-bind:title="course['titulo']">
                  {{ course["titulo"] }}
                </p>
                <p class="text-themeGreen font-semibold text-xs truncate">
                  {{ course["parceiros"] }}
                </p>
              </div>
            </div>

            <!-- informations -->
            <div class="pt-3">
              <!-- course information icons -->
              <div class="flex items-center justify-between">
                <div class="flex flex-row space-x-3">
                  <div class="flex items-center space-x-1">
                    <PersonIcon class="h-6 w-5" />
                    <p>{{ formatNumber(course["matriculados"]) }}</p>
                  </div>
                  <div class="flex items-center space-x-1">
                    <WatchIcon class="h-4 w-4" />
                    <p>{{ course["duracao"] }}</p>
                  </div>
                </div>

                <div class="flex items-center space-x-1">
                  <template v-for="index in 5" :key="index">
                    <StarIcon
                      class="w-5 h-5"
                      v-if="orderStars(course['avaliacao'], index) === 0"
                    />
                    <NoBgStartIcon
                      class="w-5 h-5"
                      v-else-if="orderStars(course['avaliacao'], index) === 1"
                    />
                    <HalfStarIcon class="w-5 h-5" v-else />
                  </template>

                  <p class="px-1">
                    {{
                      formatNumber(parseFloat(course["avaliacao"]).toFixed(1))
                    }}
                  </p>
                </div>
              </div>

              <!-- description -->
              <p 
              class="w-80 text-base font-medium line-clamp-4"
              
              >{{ course["resumo"] }}</p>

            </div>

              <!-- button -->
              <div class="text-end">
                <button class="font-semibold text-lg text-themePurple">Ver curso</button>
              </div>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
