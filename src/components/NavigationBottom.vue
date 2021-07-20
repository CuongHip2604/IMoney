<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white pt-4 pb-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between items-center h-full">
        <li v-for="(navItem, index) in navItems" :key="index">
          <router-link :to="navItem.to" exact-active-class="">
            <i class="t2ico text-2xl" :class="navItem.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>

    <div
      data-btn-plus
      class="top-0 absolute bg-base left-1/2 transform -translate-x-1/2"
    >
      <div
        class="
          bg-primary
          flex
          items-center
          justify-center
          w-12
          h-12
          text-white
          cursor-pointer
          -top-6
          rounded-full
          left-1/2
          transform
          -translate-x-1/2
          absolute
        "
        @click="onCreate"
      >
        <i class="t2ico t2ico-plus"></i>
      </div>
    </div>
  </footer>
</template>
<script>
import { reactive } from "@vue/reactivity";
import { NAVS_BOTTOM } from "@/constants";
import { useRouter } from "vue-router";
export default {
  setup() {
    const navItems = reactive(NAVS_BOTTOM);
    const router = useRouter();

    const onCreate = () => {
      router.push("/create-transaction");
    };

    return { navItems, onCreate };
  },
};
</script>
<style lang="scss" scope>
#footer {
  data[data-btn-plus] {
    width: 60px;
    height: 30px;
    border-bottom-right-radius: 60px;
    border-bottom-left-radius: 60px;
  }

  ul {
    li:nth-child(2) {
      margin-right: 10%;
    }
    li:nth-child(3) {
      margin-left: 10%;
    }

    li .router-link-active {
      @apply text-primary;
    }
  }
}
</style>
