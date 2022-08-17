<script lang="ts" setup>
import { Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";
import { computed, onMounted, ref, watchEffect, type PropType } from "vue";
import api from "@/utils/api";
import type { TChartData } from "vue-chartjs/dist/types";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

type usuarios_por_curso = {
  curso: string;
  usuarios: number;
};

const Data = ref<TChartData<"pie", number[], unknown>>({
      datasets: [
        {
          data: [1 ,2,3,4],
        },
      ],
    });

const loaded = ref(false);

const chartId = "pie_chart";

const width = 400;

const height = 400;

const cssClasses = "py-5";

onMounted(async () => {
  const response = await await api.get("transparecia");

  let formated = response.data.usuarios_por_curso;

  formated = {
    labels: formated.map((userCurse: usuarios_por_curso) => userCurse.curso),
    datasets: [
      {
        backgroundColor: ["#FFFFFF", "#7DC143", "#D16FFF", "#2F2E41"],
        data: formated.map(
          (userCurse: usuarios_por_curso) => userCurse.usuarios
        ),
      },
    ],
  };

  Data.value = formated;

  loaded.value = true;

  console.log(formated);
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};
</script>

<template>
  <div>
    <Pie
      v-if="loaded"
      :chart-data="Data"
      :chart-options="chartOptions"
      :chart-id="chartId"
      :width="width"
      :height="height"
      :css-classes="cssClasses"
    />
  </div>
</template>
