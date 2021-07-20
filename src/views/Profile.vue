<template>
  <!-- info -->
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/vi/b/b0/Avatar-Teaser-Poster.jpg"
            class="w-full h-auto object-cover"
            alt="User Profile Avatar"
            size="xs"
          />
        </div>
        <template v-if="user">
          <div class="font-bold text-2xl text-primary mt-3">
            {{ user.displayName }}
          </div>
          <div class="font-semibold text-gray-400 mt-1">
            {{ user.email }}
          </div>
        </template>
      </div>
    </div>
  </div>

  <!-- menu -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">General</h3>
        </div>
        <div class="col-span-1">
          <ul>
            <li v-for="(link, index) in profileOptions" :key="index">
              <router-link
                :to="link.to"
                class="flex items-center justify-between py-3"
              >
                <div
                  class="flex items-center text-left"
                  :class="{ 'text-red': index === profileOptions.length - 1 }"
                >
                  <i class="t2ico text-2xl" :class="link.icon"></i>
                  <h5 class="font-semibold ml-3">{{ link.name }}</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div></div>
</template>
<script>
import { reactive } from "@vue/reactivity";
import { PROFILE_OPTIONS } from "@/constants";
import { useUser } from "@/composables/useUser";
export default {
  name: "Profile",
  setup() {
    const profileOptions = reactive(PROFILE_OPTIONS);
    const { getUserInfo } = useUser();
    const { user } = getUserInfo();
    return { profileOptions, user };
  },
};
</script>
<style lang=""></style>
