<template>
  <form @submit.prevent="onSubmit">
    <div class="row mt-8">
      <!-- main form -->
      <div class="bg-white rounded-lg my-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="
                    inline-block
                    px-1
                    text-dark
                    border border-dark
                    rounded
                    text-sm
                    font-bold
                  "
                  >USD</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="text-xs font-semibold text-dark">Total</span>
                <input
                  id="total"
                  v-model.number="formSubmit.total"
                  type="text"
                  placeholder="0"
                  class="text-4xl text-dark w-full outline-none mt-1"
                  autofocus
                  inputmode="numeric"
                  @keydown="checkValidNumber($event)"
                />
              </div>
            </label>
            <span class="text-red text-sm mt-2">{{ errors.total }}</span>
          </div>
          <div class="row">
            <label for="category" class="flex items-center">
              <div class="flex flex-none items-center w-10 text-right mr-4">
                <div
                  class="
                    rounded-full
                    inline-block
                    ml-auto
                    bg-yellow-300
                    w-8
                    h-8
                  "
                ></div>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  id="category"
                  v-model.number="formSubmit.category"
                  type="text"
                  placeholder="Select a category"
                  class="text-xl text-dark w-full outline-none"
                  autofocus
                />
              </div>
            </label>
            <span class="text-red text-sm mt-2">{{ errors.category }}</span>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div class="w-10 text-right mr-4">
                <i class="t2ico t2ico-document text-2xl"></i>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  id="note"
                  v-model.number="formSubmit.note"
                  type="text"
                  placeholder="Note"
                  class="text-dark w-full outline-none"
                  autofocus
                />
              </div>
            </label>
            <span class="text-red text-sm mt-2">{{ errors.note }}</span>
          </div>
          <div class="row">
            <label for="time" class="flex items-center">
              <div class="w-10 text-right mr-4">
                <i class="t2ico t2ico-calendar text-2xl"></i>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <div class="text-dark w-full">{{ formSubmit.time }}</div>
              </div>
            </label>
          </div>
          <div class="row">
            <label for="wallet" class="flex items-center">
              <div class="w-10 text-right mr-4">
                <i class="t2ico t2ico-wallet text-2xl"></i>
              </div>
              <div class="flex-1 py-3">
                <div class="text-dark w-full">My wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div v-if="!showMoreDetail" class="row mt-8">
        <button
          class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
          @click="showMoreDetail = true"
        >
          More Detail
        </button>
      </div>

      <!-- advand form -->
      <template v-if="showMoreDetail">
        <div class="bg-white rounded-lg my-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div class="w-10 text-right mr-4">
                  <i class="t2ico t2ico-location text-2xl"></i>
                </div>
                <div class="flex-1 border-b border-gray-100 py-3">
                  <input
                    id="location"
                    v-model.trim="formSubmit.location"
                    type="text"
                    placeholder="Select a location"
                    class="text-dark w-full outline-none"
                    autofocus
                  />
                </div>
              </label>
            </div>
            <div class="row">
              <label for="withPerson" class="flex items-center">
                <div class="w-10 text-right mr-4">
                  <i class="t2ico t2ico-users text-2xl"></i>
                </div>
                <div class="flex-1 border-b border-gray-100 py-3">
                  <input
                    id="withPerson"
                    v-model.trim="formSubmit.person"
                    type="text"
                    placeholder="With person"
                    class="text-dark w-full outline-none"
                    autofocus
                  />
                </div>
              </label>
            </div>
          </div>
        </div>

        <!-- upload -->
        <div class="bg-white rounded-lg my-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="uploadFile" class="flex items-center text-primary">
                <div class="w-10 text-right mr-4">
                  <i class="t2ico t2ico-camera text-2xl"></i>
                </div>
                <div class="flex-1 py-3">
                  <div class="w-full cursor-pointer font-semibold">
                    Upload photos
                  </div>
                  <input
                    id="uploadFile"
                    ref="fileRef"
                    type="file"
                    name="file"
                    class="hidden"
                    :accept="getTypeImage"
                    @change="onChangeFiles"
                  />
                </div>
              </label>
              <span v-if="!isValidFile" class="text-red text-sm mt-2"
                >Please select file type with format JPG, JPEG, PNG</span
              >
            </div>
            <div v-if="formSubmit.thumbnail" class="row">
              <div
                class="
                  w-40
                  h-40
                  mx-auto
                  overflow-hidden
                  rounded-lg
                  my-4
                  relative
                "
              >
                <img
                  :src="formSubmit.thumbnail"
                  alt=""
                  class="w-full h-full object-cover bg-gray-300"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="
                    h-6
                    w-6
                    absolute
                    right-2
                    top-2
                    cursor-pointer
                    text-white
                  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  @click="removeFile"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </template>

      <div v-if="showMoreDetail" class="row mt-8">
        <button
          class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
          @click="showMoreDetail = false"
        >
          Hidden Detail
        </button>
      </div>
      <div class="row mt-8">
        <button
          class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
          type="submit"
        >
          Add
        </button>
      </div>
    </div>
  </form>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
import { useUser } from "@/composables/useUser";
import useCollection from "@/composables/useCollection";
import { computed } from "@vue/runtime-core";
import { validateFileType } from "@/validate";
import * as yup from "yup";
import useStorage from "@/composables/useStorage";
import { useField, useForm } from "vee-validate";
export default {
  name: "CreateTransaction",
  setup() {
    const showMoreDetail = ref(false);
    const { getUserInfo } = useUser();
    const { addRecord, error } = useCollection("transaction");
    const fileRef = ref(null);
    const isValidFile = ref(true);
    const fileUpload = ref(null);
    let formSubmit = reactive({
      total: "0",
      category: "",
      note: "",
      time: new Date().toDateString(),
      thumbnail: null,
      location: "",
      person: "",
    });

    const getTypeImage = computed(() => ".jpg, .png, .jpeg");

    const schema = yup.object({
      total: yup.string().required(),
      category: yup.string().required(),
      note: yup.string().required(),
      location: yup.string(),
      person: yup.string(),
    });

    // Create a form context with the validation schema
    const { errors, handleSubmit } = useForm({
      validationSchema: schema,
      initialValues: formSubmit,
    });

    formSubmit.total = useField("total").value;
    formSubmit.category = useField("category").value;
    formSubmit.note = useField("note").value;

    const onChangeFiles = async (e) => {
      const file = e.target.files[0];
      const { valid } = await validateFileType(file);

      isValidFile.value = valid;

      if (!valid) {
        return (fileRef.value.value = null);
      }

      formSubmit.thumbnail = URL.createObjectURL(file);
      fileUpload.value = file;
      fileRef.value.value = null;
    };

    const removeFile = () => {
      formSubmit.thumbnail = null;
      fileUpload.value = null;
    };

    const onSubmit = handleSubmit(async () => {
      //upload file

      if (fileUpload.value) {
        const { uploadFile, url } = await useStorage("transaction");

        await uploadFile(fileUpload.value);

        if (url.value) {
          formSubmit.thumbnail = url.value;
        }
      }

      const { user } = getUserInfo();

      formSubmit = {
        ...formSubmit,
        userId: user.value.uid,
      };
      const res = await addRecord(formSubmit);
      console.log("success", res, error);
    });
    return {
      onSubmit,
      showMoreDetail,
      formSubmit,
      onChangeFiles,
      getTypeImage,
      removeFile,
      fileRef,
      isValidFile,
      errors,
    };
  },
};
</script>
<style lang=""></style>
