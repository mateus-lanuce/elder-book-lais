<script setup lang="ts">
import api from "@/utils/api";
import { onBeforeMount, ref, watchEffect } from "vue";
import PaginationComponent from "../components/PaginationComponent.vue";
import PersonIcon from "../components/icons/person-icon.vue";
import formatNumber from "@/utils/formatNumber";
import PieChart from "../components/pieChart.vue";

const transparency = ref({});

const circleColors = ["bg-white", "bg-themeGreen", "bg-themePurple", "bg-themeGray-dark"];

onBeforeMount(async () => {
  const response = await await api.get("transparecia");

  transparency.value = response.data;

  console.log(response.data);
});
</script>

<template>
  <div class="flex flex-col items-center flex-nowrap mt-5">
    <!-- modules education container cards -->
    <div class="flex flex-col items-center justify-around space-y-6 w-3/4">
      <!-- p routes -->
      <div class="container">
        <div
          class="flex flex-row text-sm font-semibold text-[#808080] leading-4"
        >
          Início /
          <div class="text-black">Transparência</div>
        </div>
      </div>

      <p class="text-themeGreen text-3xl font-semibold">Transparência</p>

      <!-- container grid -->
      <div
        class="grid grid-cols-2 gap-8 justify-items-center w-full py-10"
      >
        <!-- informations -->
        <div class="col-span-2 w-full bg-cardGray rounded-lg py-7 shadow-lg">
          <p class="text-themeGreen font-semibold text-2xl text-center pb-5">
            Dados Gerais
          </p>
          <div class="flex flex-col justify-around space-y-6">
            <div class="flex flex-row justify-evenly">
              <div class="flex flex-col items-center space-y-2">
                <div class="flex flex-row space-x-2">
                  <PersonIcon class="h-6 w-6" />
                  <p class="text-themeGray-dark font-bold text-base">
                    Total de usuários registrados
                  </p>
                </div>
                <p class="text-3xl text-themeGreen font-semibold">
                  {{
                    formatNumber(
                      transparency.dados_gerais["usuarios_registrados"]
                    )
                  }}
                </p>
              </div>

              <div class="flex flex-col items-center space-y-2">
                <div class="flex flex-row space-x-2">
                  <PersonIcon class="h-6 w-6" />
                  <p class="text-themeGray-dark font-bold text-base">
                    Inscrições realizadas
                  </p>
                </div>
                <p class="text-3xl text-themeGreen font-semibold">
                  {{
                    formatNumber(
                      transparency.dados_gerais["incricoes_realizadas"]
                    )
                  }}
                </p>
              </div>

              <div class="flex flex-col items-center space-y-2">
                <div class="flex flex-row space-x-2">
                  <PersonIcon class="h-6 w-6" />
                  <p class="text-themeGray-dark font-bold text-base">
                    Cursos ativos
                  </p>
                </div>
                <p class="text-3xl text-themeGreen font-semibold">
                  {{ formatNumber(transparency.dados_gerais["cursos_ativos"]) }}
                </p>
              </div>

              <div class="flex flex-col items-center space-y-2">
                <div class="flex flex-row space-x-2">
                  <PersonIcon class="h-6 w-6" />
                  <p class="text-themeGray-dark font-bold text-base">
                    Direito à Certificação
                  </p>
                </div>
                <p class="text-3xl text-themeGreen font-semibold">
                  {{
                    formatNumber(
                      transparency.dados_gerais["direito_certificacao"]
                    )
                  }}
                </p>
              </div>
            </div>

            <div class="flex flex-row justify-evenly">
              <div class="flex flex-col items-center space-y-2">
                <div class="flex flex-row space-x-2">
                  <PersonIcon class="h-6 w-6" />
                  <p class="text-themeGray-dark font-bold text-base">
                    Investimento médio por curso
                  </p>
                </div>
                <p class="text-3xl text-themeGreen font-semibold">
                  {{ transparency.dados_gerais["investimento_medio_curso"] }}
                </p>
              </div>

              <div class="flex flex-col items-center space-y-2">
                <div class="flex flex-row space-x-2">
                  <PersonIcon class="h-6 w-6" />
                  <p class="text-themeGray-dark font-bold text-base">
                    Investimento médio por aluno
                  </p>
                </div>
                <p class="text-3xl text-themeGreen font-semibold">
                  {{ transparency.dados_gerais["investimento_medio_aluno"] }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- grafic -->
        <div class="flex flex-col items-center justify-around bg-cardGray w-full rounded-lg shadow-lg p-5">

          <div class="flex flex-col items-center">
            <p class="text-themeGreen text-2xl font-semibold">Usuários por curso</p>
            <PieChart />
          </div>

          <!-- legend -->
          <div class="flex flex-col items-start space-y-2">
            <div v-for="(usersCurse, index) in transparency.usuarios_por_curso" :key="index" class="flex flex-row items-center space-x-2">
              <div class="h-5 w-5 rounded-full" :class="circleColors[index]"/>
              <p class="text-themeGray-dark font-bold text-base">
                {{ usersCurse["curso"] }}: {{ formatNumber(usersCurse["usuarios"]) }} 
              </p>
            </div>
          </div>
        </div>

        <!-- map -->
        <div class="flex flex-col items-center justify-around bg-cardGray w-full rounded-lg shadow-lg">

          <div class="flex flex-col items-center">
            <p class="text-themeGreen text-2xl font-semibold">Usuários por Estado</p>
            <PieChart />
          </div>

          <!-- legend -->
          <div class="flex flex-col items-start space-y-2">
            <div v-for="(usersCurse, index) in transparency.usuarios_por_curso" :key="index" class="flex flex-row items-center space-x-2">
              <div class="h-5 w-5 rounded-full" :class="circleColors[index]"/>
              <p class="text-themeGray-dark font-bold text-base">
                {{ usersCurse["curso"] }}: {{ formatNumber(usersCurse["usuarios"]) }} 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
