import { projectAuth } from "@/configs/firebase";
import { ref } from "vue";

const error = ref(null);

async function logout() {
  try {
    error.value = null;
    const response = await projectAuth.signOut();
    return response;
  } catch (err) {
    error.value = err.message;
    return error;
  }
}

export function useLogout() {
  return { logout, error };
}
