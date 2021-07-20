import { projectFireStore } from "@/configs/firebase";
import { ref } from "vue";

function useCollection(name) {
  const error = ref(null);
  async function addRecord(record) {
    try {
      error.value = null;
      const response = await projectFireStore.collection(name).add(record);
      return response;
    } catch (err) {
      error.value = err.message;
      return error;
    }
  }
  return { addRecord, error };
}

export default useCollection;
