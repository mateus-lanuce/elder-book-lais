<script lang="ts" setup>
import { useSelectedRoute } from "@/stores/selectedRoute.js";
import Carousel from "../components/Carousel.vue";
import api from "@/utils/api";
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

const selectedRoute = useSelectedRoute();
const courses = ref([]);

// async function getModulesValues () {
//   const course = await api.get("cursos", { params: { _limit: 3, _page: 1 }});

//   courses.value = course.data;
// }

// getModulesValues();

watchEffect(async () => {
  const response = await await api.get("cursos", {
    params: { _limit: 3, _page: 2 },
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
      <div class="flex flex-col items-center justify-around pt-20 w-3/4">
        <p class="text-themeGreen text-3xl font-semibold">
          Módulos Educacionais
        </p>

        <!-- container cards -->
        <div class="container pt-7">
          <!-- orders buttons -->
          <ul
            class="flex flex-row space-x-7 text-themeGray-dark font-semibold text-xl"
          >
            <li
              class="pb-1 cursor-pointer border-b-4 border-themeWhite hover:border-themePurple rounded transition duration-75 ease-in-out delay-75"
            >
              Mais populares
            </li>
            <li
              class="pb-1 cursor-pointer border-b-4 border-themeWhite hover:border-themePurple rounded transition duration-75 ease-in-out delay-75"
            >
              Mais bem avaliados
            </li>
            <li
              class="cursor-pointer border-b-4 border-themeWhite hover:border-themePurple rounded transition duration-75 ease-in-out delay-75"
            >
              Mais recentes
            </li>
          </ul>

          <!-- cards -->
          <div
            v-for="course of courses"
            :key="course.id"
            class="flex items-center justify-around bg-cardGray my-5 p-5 rounded-lg"
          >
            <!-- image and text -->
            <div class="flex flex-row items-center space-x-4">
              <img
                v-bind:src="course.capa"
                v-bind:alt="course.titulo"
                class="h-32 w-32 object-cover rounded-lg"
              />
              <div class="space-y-6 w-96">
                <p class="text-themeGray-dark font-semibold text-xl">
                  {{ course.titulo }}
                </p>
                <p class="text-themeGreen font-semibold text-xs w-3/4">
                  {{ course.parceiros }}
                </p>
              </div>
            </div>

            <!-- informations -->
            <div class="flex flex-col xl:flex-row items-center justify-evenly w-1/2 lg:space-y-2 xl:space-y-0">
              <div class="flex items-center space-x-1">
                <PersonIcon />
                <p>{{ formatNumber(course["matriculados"]) }}</p>
              </div>
              <div class="flex items-center space-x-2">
                <WatchIcon />
                <p>{{ course["duracao"] }}</p>
              </div>
              <div class="flex items-center space-x-1">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <p>{{ formatNumber(parseFloat(course["avaliacao"]).toFixed(1)) }}</p>
              </div>

              <!-- button -->

              <ButtonComponent class="w-fit xl:px-6" >Ver Módulo</ButtonComponent>
            </div>
          </div>
        </div>

        <ButtonComponent>Ver Mais</ButtonComponent>
      </div>

      <!-- parterns -->
      <div>
        <p>parceiros</p>
        <p>parceiros</p>
        <p>parceiros</p>
      </div>
    </div>
  </div>
</template>
