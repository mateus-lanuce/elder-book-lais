<script setup lang="ts">
import { useSelectedRoute } from "@/stores/selectedRoute.js";
import api from "@/utils/api";
import { onBeforeMount, ref, watchEffect } from "vue";
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

const selectedRoute = useSelectedRoute();
const paginationStore = usePaginationStore();
const partners = ref([]);
const selectOrder = ref("Covid 19");
const router = useRouter();

//altera os valores dos cursos exibidos na tela
watchEffect(async () => {
  const response = await api.get("parceiros", {
    params: { _limit: 6, _page: paginationStore.current_page },
  });
  partners.value = response.data;
});

onBeforeMount(async () => {
  const response = await await api.get("parceiros", {
    params: { _order: "desc" },
  });
  paginationStore.paginationLength = response.data.length;
  paginationStore.current_page = 1;
});
</script>

<template>
  <div class="flex flex-col items-center flex-nowrap mt-5">
    <!-- modules education container cards -->
    <div class="flex flex-col items-start justify-around space-y-6 w-3/4 md:w-11/12 xl:w-3/4">
      <!-- p routes -->
      <div class="container">
        <div
          class="flex flex-row text-sm font-semibold text-[#808080] leading-4"
        >
          Início /
          <div class="text-black">Parceiros</div>
        </div>
      </div>

      <p class="text-themeGreen text-3xl font-semibold">Nossos parceiros</p>

      <!-- container cards -->
      <div class="container">
        <!-- pagination -->
        <PaginationComponent>
          <!-- cards -->

          <div class="grid md:grid-cols-2  lg:grid-cols-3 gap-6">
            <div
              v-for="partner of partners"
              :key="partner['id']"
              class="flex flex-col justify-between w-fit mx-auto"
            >
              <!-- image and text -->
              <div class="w-80 lg:w-72 xl:w-80 flex flex-col space-y-2">
                <img
                  v-bind:src="partner['capa']"
                  v-bind:alt="partner['titulo']"
                  v-bind:title="partner['titulo']"
                  class="h-52 w-80 object-scale-down rounded-lg"
                />
                <div
                  class="flex flex-col space-y-1 border-t-4 border-themeGreen"
                >
                  <p
                    class="pt-4 text-themeGray-dark font-semibold text-xl text-center line-clamp-3"
                    v-bind:title="partner['titulo']"
                  >
                    {{ partner["titulo"] }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PaginationComponent>
      </div>
    </div>
  </div>
</template>
