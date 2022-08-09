<script lang="ts" setup>
defineProps({
  invert: Boolean,
});

</script>

<template>
  <button
    v-if="invert"
    type="button"
    class="text-themePurple border border-themePurple font-semibold rounded-full text-base xl:px-12 md:px-4 py-0.5 text-center mx-3"
  >
    <slot></slot>
  </button>
  <button
    v-else
    type="button"
    class="text-white bg-themePurple font-semibold rounded-full text-base xl:px-10 md:px-4 py-0.5 text-center md:mr-0"
  >
    <slot />
  </button>
</template>
