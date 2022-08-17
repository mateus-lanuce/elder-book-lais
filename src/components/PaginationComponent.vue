<script lang="ts" setup>
import { usePaginationStore } from "@/stores/paginationStore";
import { computed, watchEffect } from "vue";

const paginationStore = usePaginationStore();
</script>

<template>
  <div>
    <p class="py-6 text-base font-normal italic text-themeGray-dark">
      {{ paginationStore.displayedLenth }} de
      {{ paginationStore.paginationLength }} resultados
    </p>

    <slot />

    <!-- navigations on pagination -->
    <div class="flex flex-col items-center pb-12 pt-7 space-y-2">
      <!-- balls -->
      <div>
        <ul class="flex flex-row items-center space-x-3">
          <li v-for="i in paginationStore.splitPages(6)" :key="i">
            <button
              type="button"
              class="w-3 h-3 rounded-full transition duration-500 ease-in-out"
              :class="
                paginationStore.current_page == i
                  ? 'w-10 bg-themePurple'
                  : 'bg-[#c4c4c4]/75'
              "
              @click="paginationStore.changePage(i)"
            />
          </li>
        </ul>
      </div>

      <p class="font-normal text-base text-themeGray-dark">
        página {{ paginationStore.current_page }} de
        {{ paginationStore.splitPages(6) }}
      </p>
    </div>
  </div>
</template>
