import { projectAuth } from "@/configs/firebase";
import { ref } from "vue";

const error = ref(null);
const pendding = ref(false);

async function signIn({ email, password }) {
  try {
    pendding.value = true;
    error.value = null;
    const response = await projectAuth.signInWithEmailAndPassword(
      email,
      password
    );
    return response;
  } catch (err) {
    error.value = err.message;
    return error;
  } finally {
    pendding.value = false;
  }
}

export function useSignIn() {
  return { signIn, error, pendding };
}
