<script lang="ts" setup>
import LogoLais from "../icons/logo-lais.vue";
import LogoUfrn from "../icons/logo-ufrn.vue";
</script>

<template>
  <div class="h-80">
    <!-- green bar -->
    <div class="static bottom-0 w-full h-52 bg-themeGreen">
      <div class="h-full flex flex-col items-center justify-around py-6">
        <p class="text-2xl text-white font-semibold">Realização</p>

        <div class="flex flex-row items-center justify-between space-x-20">
          <LogoLais class="h-10" />
          <LogoUfrn class="h-10" />
        </div>
      </div>
    </div>

    <!-- gray bar -->
    <div class="static bottom-0 w-full h-72 bg-themeGray-dark">
      <div class="h-full w-full flex flex-col items-center justify-around">
        <!-- informations -->
        <div class="flex w-full items-start justify-evenly space-x-20 mt-auto">
          
          <div class="flex flex-col h-full items-center justify-between">
            <LogoLais class="h-10" />
            <p class="align-middle text-center text-white font-light w-3/4">
              Laboratório de Inovação Tecnológica em Saúde.
            </p>
          </div>

          <div>
            <p class="text-2xl text-white font-bold">Links Úteis</p>
          </div>

          <div>
            <p class="text-2xl text-white font-bold">Redes sociais</p>
            <ul>
              <li>facebook</li>
              <li>twitter</li>
              <li>instagram</li>
            </ul>
          </div>
        </div>

        <!-- text -->
        <div class="mt-auto mb-3">
          <p class="text-white font-light" >2022 © LAIS (HUOL). Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  </div>
</template>
