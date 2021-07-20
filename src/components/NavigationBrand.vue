<template>
  <div class="flex flex-col pt-24">
    <div class="w-32 h-20 text-center mx-auto">
      <img :src="Logo" alt="logo" class="w-full h-auto object-cover" />
    </div>
    <div class="text-center mt-3">
      <h1 class="font-bold text-xl text-dark">
        Best way to saving Your Money!
      </h1>
    </div>
  </div>
</template>
<script>
import Logo from "@/assets/Logo.svg";
export default {
  name: "NavigationBrand",
  setup() {
    return { Logo };
  },
};
</script>
<style lang=""></style>
