<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="fullname">
            <span class="font-semibold">Full Name</span>
            <input
              id="fullname"
              v-model.trim="formSubmit.fullname"
              type="text"
              placeholder="iMoney..."
              class="px-4 py-3 rounded-lg border-gray-200 mt-1 border"
            />
            <span class="text-red text-sm mt-2">{{ errors.fullname }}</span>
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email address</span>
            <input
              id="email"
              v-model.trim="formSubmit.email"
              type="text"
              placeholder="Email..."
              class="px-4 py-3 rounded-lg border-gray-200 mt-1 border"
              autocomplete="username"
            />
            <span class="text-red text-sm mt-2">{{ errors.email }}</span>
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              v-model.trim="formSubmit.password"
              type="password"
              placeholder="Password..."
              class="px-4 py-3 rounded-lg border-gray-200 mt-1 border"
              autocomplete="current-password"
            />
            <span class="text-red text-sm mt-2">{{ errors.password }}</span>
          </label>
        </div>
        <div class="row">
          <button
            type="submit"
            class="
              py-3
              text-center
              bg-primary
              text-white
              w-full
              rounded-lg
              font-bold
              flex
              justify-center
            "
            :class="{
              'cursor-not-allowed': pendding,
              'opacity-50': pendding,
            }"
            :disabled="pendding"
          >
            <svg
              v-if="pendding"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 animate-spin mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <template v-else> Sign Up </template>
          </button>
        </div>
      </form>
      <div v-if="error" class="text-left text-red mt-4 text-sm">
        <span>{{ error }}</span>
      </div>
      <div class="text-center w-full mt-6 font-semibold">
        <span>I'm a already a member.</span>
        <span class="ml-1 text-primary hover:underline font-bold">
          <router-link to="/login">Sign In</router-link>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { reactive } from "@vue/reactivity";
import { useSignUp } from "@/composables/useSignUp";
import { useRouter } from "vue-router";
export default {
  setup() {
    const formSubmit = reactive({
      fullname: "",
      email: "",
      password: "",
    });

    const { signUp, error, pendding } = useSignUp();
    const router = useRouter();

    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
      fullname: yup.string().required(),
    });

    // Create a form context with the validation schema
    const { errors, handleSubmit } = useForm({
      validationSchema: schema,
      initialValues: formSubmit,
    });

    formSubmit.email = useField("email").value;
    formSubmit.password = useField("password").value;
    formSubmit.fullname = useField("fullname").value;

    const onSubmit = handleSubmit(async () => {
      const res = await signUp(formSubmit);
      console.log(111, res);
      if (!error.value) {
        router.push("/profile");
      }
    });

    return { onSubmit, formSubmit, error, pendding, errors };
  },
};
</script>
<style lang=""></style>
