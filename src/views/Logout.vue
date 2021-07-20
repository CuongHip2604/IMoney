<template lang="js">
<div></div>;
</template>
<script>
import { useLogout } from "@/composables/useLogout";
import { useRouter } from "vue-router";
export default {
  name: "Logout",
  setup() {
    const { logout, error } = useLogout();
    const router = useRouter();
    const onLogout = async () => {
      await logout();
      if (!error.value) {
        router.push("/login");
      }
    };
    onLogout();
    return { error };
  },
};
</script>
<style lang=""></style>
