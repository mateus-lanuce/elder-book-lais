<script setup lang="ts">
import api from "@/utils/api";
import formatNumber from "@/utils/formatNumber";
import orderStars from "@/utils/orderStars";
import { onBeforeMount, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import WatchIcon from "../components/icons/watch-icon.vue";
import PersonIcon from "../components/icons/person-icon.vue";
import StarIcon from "../components/icons/star-icon.vue";
import NoBgStartIcon from "../components/icons/noBgStart-icon.vue";
import HalfStarIcon from "../components/icons/halfStar-icon.vue";
import CalendarIcon from "../components/icons/calendar-icon.vue";

const route = useRoute();
const course = ref([]);

onBeforeMount(async () => {
  const response = await api.get("cursos", {
    params: { id: route.params.id },
  });

  course.value = response.data[0];
  console.log(response.data[0]);
});
</script>

<template>
  <div class="flex flex-col items-center flex-nowrap">
    <!-- image and name of course -->
    <div class="w-full h-64 bg-cover relative" :style="`background-image: url(${course['capa']});`">
        <div class="bg-themeGreen w-full absolute h-full mix-blend-multiply "></div>
        <div class="flex flex-col w-3/4 mx-auto justify-evenly h-full absolute left-1 right-1">
            <p class="flex flex-row flex-nowrap text-base font-semibold text-[#E0E0E0]">Início / Cursos / Módulos / <div class="text-white truncate">{{ course['titulo'] }}</div></p>
            <p class="text-white text-4xl text-start font-bold">
                {{ course['titulo'] }}
            </p>
            <p class="text-white text-2xl text-start font-semibold">
                {{ course['parceiros'] }}
            </p>
        </div>
    </div>

    <!-- main container -->
    <div class="container flex flex-col items-center space-y-5 w-3/4 py-10">
      <p class="text-themeGreen text-3xl font-semibold">
        Informações Gerais do Curso
      </p>

      <!-- info icons -->
      <div class="w-full">
        <!-- course information icons -->
        <div class="flex flex-row items-center justify-evenly">
          <div class="flex items-center space-x-3">
            <WatchIcon class="h-6 w-5" />
            <p class="text-themeGray-dark font-bold">
              {{ String(course["duracao"]).split("h")[0] }} Horas
            </p>
          </div>

          <div class="flex items-center space-x-3">
            <CalendarIcon class="h-6 w-5" />
            <p class="text-themeGray-dark font-bold">
              Desde {{ course["criado_em"] }}
            </p>
          </div>

          <div class="flex items-center space-x-3">
            <PersonIcon class="h-6 w-6" />
            <p class="text-themeGray-dark font-bold">
              {{ formatNumber(course["matriculados"]) }} alunos matriculados
            </p>
          </div>

          <div class="flex items-center space-x-2">
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

            <p class="text-themeGray-dark font-bold">
              {{ formatNumber(parseFloat(course["avaliacao"]).toFixed(1)) }}
              ({{ course["numero_avaliacoes"] }} avaliações)
            </p>
          </div>
        </div>
      </div>

      <!-- about infos -->
      <p class="text-themeGreen text-2xl font-semibold">Sobre o curso</p>

      <article class="text-base font-normal">
        {{ course["sobre"] }}
      </article>

      <p class="text-themeGreen text-2xl font-semibold">Objetivos</p>

      <div v-if="course['objetivo_geral']" class="container">
        <p class="font-bold">Objetivo Geral</p>
        <p class="text-base font-normal p-2">{{ course["objetivo_geral"] }}</p>
      </div>
      <div v-if="course['objetivo_especifico']" class="container">
        <p class="font-bold">Objetivo Especifico</p>
        <p class="text-base font-normal p-2">
          {{ course["objetivo_especifico"] }}
        </p>
      </div>

      <p v-if="course['recursos_educacionais']" class="text-themeGreen text-2xl font-semibold">Recursos educacionais</p>
      <article v-if="course['recursos_educacionais']" class="text-base font-normal">
        {{ course["recursos_educacionais"] }}
      </article>

      <!-- partners -->
      <p class="text-themeGreen text-2xl font-semibold">Créditos</p>

      <div class="grid grid-cols-4">
        <div v-for="(partner, index) in course['creditos']" :key="index">
            <img :src="partner['capa']" :alt="partner['titulo']" :title="partner['titulo']">
        </div>
      </div>

    </div>
  </div>
</template>
