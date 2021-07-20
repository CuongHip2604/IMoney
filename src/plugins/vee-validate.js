import { defineRule } from "vee-validate";
import { max, min, required, email } from "@vee-validate/rules";

defineRule("email", (value) => {
  if (email(value)) {
    return true;
  }
  return "The email is not valid";
});

defineRule("required", (value, target, { field }) => {
  console.log(11, field, value, target);
  if (required(value)) {
    return true;
  }
  return `The ${field} is required`;
});

defineRule("password", (value) => {
  if (
    required(value) &&
    min(value, { length: 6 }) &&
    max(value, { length: 30 })
  ) {
    return true;
  }
  return "The password be between 6 and 30 characters";
});
