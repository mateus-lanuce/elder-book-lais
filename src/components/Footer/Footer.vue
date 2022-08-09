<script lang="ts" setup>
import LogoLais from "../icons/logo-lais.vue";
import LogoUfrn from "../icons/logo-ufrn.vue";
import { useRouter } from "vue-router";
import { useSelectedRoute } from "@/stores/selectedRoute";
import LogoFacebook from "../icons/logo-facebook.vue";
import LogoTwitter from "../icons/logo-twitter.vue";
import LogoInstagram from "../icons/logo-instagram.vue";

const SelectedRoute = useSelectedRoute();
const router = useRouter();

function changeRoute(route: string) {
  route = "/" + route;

  router.push(route);

  SelectedRoute.change(route);
}
</script>

<template>
  <div class="h-80 relative">
    <!-- green bar -->
    <div class="static bottom-0 w-full h-52 bg-themeGreen">
      <div class="h-full flex flex-col items-center justify-around py-6">
        <p class="text-2xl text-white font-semibold">Realização</p>

        <div class="flex flex-row items-center justify-between space-x-20">
          <LogoLais class="h-12" />
          <LogoUfrn class="h-12" />
        </div>
      </div>
    </div>

    <!-- gray bar -->
    <div class="static bottom-0 w-full h-80 bg-themeGray-dark">
      <div class="h-full w-full flex flex-col items-center justify-around">
        
        <!-- informations -->
        <div class="grid grid-cols-5 gap-4 justify-items-center mt-auto">
          <div></div>
          <div class="flex flex-col h-full items-center ">
            <LogoLais class="h-9" />
            <p class="pt-4 text-sm align-middle text-center text-white font-light w-3/4">
              Laboratório de Inovação Tecnológica em Saúde.
            </p>
          </div>

          <div class="text-white w-100 flex flex-col items-center">
            <p class="text-xl font-bold text-center">Links Úteis</p>
            <ul class="font-light text-sm flex flex-col items-center justify-around space-y-2 pt-2">
              <li>
                <button
                  @click="changeRoute(``)"
                  aria-current="page"
                >
                  Início
                </button>
              </li>
              <li>
                <button @click="changeRoute(``)">Sobre Nós</button>
              </li>
              <li>
                <button @click="changeRoute(`cursos`)">Cursos</button>
              </li>
              <li>
                <button @click="changeRoute(`parceiros`)">Parceiros</button>
              </li>
              <li>
                <button
                  @click="changeRoute(`transparencia`)"
                >
                  Transparência
                </button>
              </li>
            </ul>
          </div>

          <div class="">
            <p class="text-xl text-white font-bold">Redes sociais</p>
            <ul class="font-light text-sm flex flex-row items-center justify-around pt-3">
              <li>
                <LogoFacebook />
              </li>
              <li>
                <LogoTwitter />
              </li>
              <li>
                <LogoInstagram />
              </li>
            </ul>
          </div>
        </div>

        <!-- text -->
        <div class="mt-auto mb-3">
          <p class="text-white font-light">
            2022 © LAIS (HUOL). Todos os direitos reservados
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
