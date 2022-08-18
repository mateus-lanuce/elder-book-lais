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
import PaginationComponent from "../components/PaginationComponent.vue";
import { usePaginationStore } from "@/stores/paginationStore";
import { useRouter } from "vue-router";
import type { Courses } from "@/utils/types";

const selectedRoute = useSelectedRoute();
const paginationStore = usePaginationStore();
const courses = ref<Courses | null>();
const selectOrder = ref("Covid 19");
const router = useRouter();

//altera os valores dos cursos exibidos na tela
watchEffect(async () => {
  const response = await api.get("cursos", {
    params: {
      _limit: 6,
      cateroria: selectOrder.value,
      _order: "desc",
      _page: paginationStore.current_page,
    },
  });
  courses.value = response.data;
  paginationStore.courses = response.data;
  paginationStore.displayedLenth = response.data.length;
});

//executa quando o tipo de curso é mudado
watchEffect(async () => {
  const response = await await api.get("cursos", {
    params: { cateroria: selectOrder.value, _order: "desc" },
  });
  paginationStore.paginationLength = response.data.length;
  paginationStore.current_page = 1;
});

async function clickCourse(id: number) {
  router.push(`/cursos/modulos/${id}`);
}
</script>

<template>
  <div class="flex flex-col items-center flex-nowrap mt-5">
    <!-- modules education container cards -->
    <div class="flex flex-col items-center justify-around space-y-6">
      <!-- p routes -->
      <div class="container px-10 md:px-0">
        <div
          class="flex flex-row text-sm font-semibold text-[#808080] leading-4"
        >
          Início / Cursos /
          <div class="text-black">Módulos</div>
        </div>
      </div>

      <p class="text-themeGreen text-3xl font-semibold">Módulos Educacionais</p>

      <!-- container cards -->
      <div class="container pt-4 w-3/4 md:w-11/12 lg:w-full">
        <!-- orders buttons -->
        <ul
          class="flex flex-row flex-wrap gap-3 lg:gap-0 lg:space-x-7 items-center justify-evenly text-themeGray-dark font-semibold text-lg"
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

        <PaginationComponent>
          <!-- cards -->

          <div class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
            <div
              v-for="course of courses"
              :key="course.id"
              class="flex flex-col justify-between w-fit mx-auto"
            >
              <!-- image and text -->
              <div class="w-80 flex flex-col space-y-2">
                <img
                  v-bind:src="course.capa"
                  v-bind:alt="course.titulo"
                  v-bind:title="course.titulo"
                  class="h-52 w-80 object-cover rounded-lg cursor-pointer"
                  @click="clickCourse(course.id)"
                />
                <div class="flex flex-col space-y-1">
                  <p
                    class="text-themeGray-dark font-semibold text-xl line-clamp-2"
                    v-bind:title="course.titulo"
                  >
                    {{ course.titulo }}
                  </p>
                  <p class="text-themeGreen font-semibold text-xs truncate">
                    {{ course.parceiros }}
                  </p>
                </div>
              </div>

              <!-- informations -->
              <div class="flex flex-col w-fit pt-3">
                <!-- course information icons -->
                <div class="flex items-center justify-between">
                  <div class="flex flex-row space-x-3">
                    <div class="flex items-center space-x-1">
                      <PersonIcon class="h-6 w-5" />
                      <p class="text-themeGray-dark">
                        {{ formatNumber(course.matriculados) }}
                      </p>
                    </div>
                    <div class="flex items-center space-x-1">
                      <WatchIcon class="h-4 w-4" />
                      <p>{{ course.duracao }}</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-1">
                    <template v-for="index in 5" :key="index">
                      <StarIcon
                        class="w-5 h-5"
                        v-if="orderStars(parseFloat(course.avaliacao), index) === 0"
                      />
                      <NoBgStartIcon
                        class="w-5 h-5"
                        v-else-if="orderStars(parseFloat(course.avaliacao), index) === 1"
                      />
                      <HalfStarIcon class="w-5 h-5" v-else />
                    </template>

                    <p class="px-1 text-themeGray-dark">
                      {{
                        formatNumber(parseFloat(course.avaliacao).toFixed(1))
                      }}
                    </p>
                  </div>
                </div>

                <!-- description -->
                <p
                  class="w-80 text-base font-medium text-themeGray-dark line-clamp-4"
                >
                  {{ course.resumo }}
                </p>
              </div>

              <!-- button -->
              <div class="text-end">
                <button
                  class="font-semibold text-lg text-themePurple"
                  @click="clickCourse(course.id)"
                >
                  Ver curso
                </button>
              </div>
            </div>
          </div>
        </PaginationComponent>
      </div>
    </div>
  </div>
</template>
