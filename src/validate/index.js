import { ALLOWED_TYPES } from "@/constants";

const validateFileType = (file) => {
  return new Promise((resolve) => {
    const fileType = file.type;
    if (!ALLOWED_TYPES.includes(fileType)) {
      return resolve({ valid: false });
    }
    return resolve({ valid: true });
  });
};

export { validateFileType };
