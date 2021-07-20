<template>
  <div class="home">
    <div v-if="user" class="mt-6">{{ user.displayName }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useUser } from "@/composables/useUser";
export default {
  name: "Home",
  setup() {
    const { getUserInfo } = useUser();
    const { user } = getUserInfo();
    return { user };
  },
};
</script>
