<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useSelectedRoute } from "@/stores/selectedRoute";

const props = defineProps({
  invert: Boolean,
  route: { type: String, required: false },
});

const router = useRouter();
const SelectedRoute = useSelectedRoute();

function changeRoute(route: string) {
  route = "/" + route;

  router.push(route);

  SelectedRoute.change(route);
}
</script>

<template>
  <button
    v-if="props.invert"
    type="button"
    class="text-themePurple border border-themePurple font-semibold rounded-full text-base xl:px-12 md:px-4 py-0.5 text-center mx-3"
    @click="props.route ? changeRoute(props.route) : ''"
  >
    <slot></slot>
  </button>
  <button
    v-else
    type="button"
    class="text-white bg-themePurple font-semibold rounded-full text-base xl:px-10 md:px-4 py-0.5 text-center md:mr-0"
    @click="props.route ? changeRoute(props.route) : ''"
  >
    <slot />
  </button>
</template>
