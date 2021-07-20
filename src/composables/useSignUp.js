import { projectAuth } from "@/configs/firebase";
import { ref } from "vue";

const error = ref(null);
const pendding = ref(false);

async function signUp({ email, password, fullname }) {
  try {
    pendding.value = true;
    error.value = null;
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    await response.user.updateProfile({ displayName: fullname });
    return response;
  } catch (err) {
    error.value = err.message;
    return error;
  } finally {
    pendding.value = false;
  }
}

export function useSignUp() {
  return { signUp, error, pendding };
}
