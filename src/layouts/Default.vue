<template>
  <NavigationHeader />
  <slot />
  <NavigationBottom v-if="showNavigateBottom" />
</template>
<script>
import NavigationBottom from "@/components/NavigationBottom.vue";
import NavigationHeader from "@/components/NavigationHeader.vue";
import { useRoute } from "vue-router";
import { computed } from "@vue/runtime-core";
export default {
  components: {
    NavigationBottom,
    NavigationHeader,
  },
  setup() {
    const route = useRoute();
    return {
      showNavigateBottom: computed(() => route.meta.showNavigateBottom),
    };
  },
};
</script>
