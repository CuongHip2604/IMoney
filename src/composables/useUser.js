import { projectAuth } from "@/configs/firebase";
import { ref } from "vue";

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((_user) => {
  if (_user) {
    user.value = _user;
  }
});

function getUserInfo() {
  return { user };
}

export function useUser() {
  return { getUserInfo };
}
