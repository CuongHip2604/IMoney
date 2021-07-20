<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { PUBLIC_LAYOUT } from "./constants";
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    return {
      layout: computed(() => `${route.meta.layout || PUBLIC_LAYOUT}-layout`),
    };
  },
};
</script>
