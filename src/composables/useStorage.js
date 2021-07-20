import { projectStorage } from "@/configs/firebase";
import { ref } from "vue";
import { useUser } from "./useUser";

const { getUserInfo } = useUser();
const { user } = getUserInfo();

function useStorage(name) {
  const error = ref(null);
  const filePath = ref(null);
  const url = ref(null);
  async function uploadFile(file) {
    error.value = null;
    filePath.value = `${name}/${user.value.uid}/${file.name}`;
    const fileRef = projectStorage.ref(filePath.value);

    try {
      const response = await fileRef.put(file);

      url.value = await response.ref.getDownloadURL();
      return url.value;
    } catch (err) {
      error.value = err.message;
      return error;
    }
  }
  return { uploadFile, error, filePath, url };
}

export default useStorage;
