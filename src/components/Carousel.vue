<script lang="ts" setup>
import ButtonComponent from "./ButtonComponent.vue";
</script>

<template>
  <div class="bg-themeGray-light h-screen sm:hidden md:block">
    <div
      id="default-carousel"
      class="relative z-10 h-full"
      data-carousel="static"
    >
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-full">
        <!-- Item 1 -->
        <div
          class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
          data-carousel-item=""
        >
          <span
            class="absolute flex flex-col items-center space-y-4 font-semibold w-full -translate-x-1/2 -translate-y-1/2 top-1/4 left-1/2 sm:text-3xl dark:text-gray-800"
          >
            <p
              class="text-center xl:text-5xl md:text-3xl xl:pt-5 md:pt-10 text-themeGreen"
            >
              Especialização PEPSUS
            </p>
            <p
              class="inline-block align-bottom pb-5 w-full xl:text-2xl md:text-2xl text-center text-themeGray-dark"
            >
              Conheça o curso de Especialização em Saúde da Família
            </p>
            <ButtonComponent class="text-3xl">Acesse</ButtonComponent>
          </span>
          <img
            src="../assets/hover-image.svg"
            class="absolute block 2xl:w-4/6 xl:w-7/12 md:w-3/4 xl:pt-20 -translate-x-1/2 -translate-y-3/4 top-3/4 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <!-- Slider indicators -->
      <div
        class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
      >
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-themePurple"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-[#D3D3D3] hover:bg-white"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-[#D3D3D3] hover:bg-white"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 xl:left-48 lg:left-20 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev=""
      >
        <span
          class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-themeGreen sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 xl:right-48 lg:right-20 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next=""
      >
        <span
          class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-themeGreen sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>
</template>
