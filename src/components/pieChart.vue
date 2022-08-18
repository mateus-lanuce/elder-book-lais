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
import { computed, onMounted, onUnmounted, ref, watchEffect, type PropType } from "vue";
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

//resize
const windowWidth = ref(window.innerWidth)

const onWidthChange = () => windowWidth.value = window.innerWidth
onMounted(() => window.addEventListener('resize', onWidthChange))
onUnmounted(() => window.removeEventListener('resize', onWidthChange))

const width = computed(() => {
  if (windowWidth.value < 550) return 350
  if (windowWidth.value >= 550 && windowWidth.value < 1200) return 400
  if (windowWidth.value >= 1200) return 400
  return 400; // This is an unreachable line, simply to keep eslint happy.
})


const loaded = ref(false);

const chartId = "pie_chart";

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
  maintainAspectRatio: true,
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
