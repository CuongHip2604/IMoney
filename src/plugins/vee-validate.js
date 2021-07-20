import { defineRule, configure } from "vee-validate";
import rules from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import en from "@vee-validate/i18n/dist/locale/en.json";
import vi from "@vee-validate/i18n/dist/locale/vi.json";

Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule]);
});

const config = {
  classes: {
    valid: "is-valid",
    invalid: "is-invalid",
  },
  generateMessage: localize({
    en,
    vi,
  }),
};

const locale =
  window.localStorage.getItem("locale") ||
  process.env.VUE_APP_I18N_LOCALE ||
  "vi";

function setLocation() {
  switch (locale) {
    case "vi":
      return vi;

    default:
      return en;
  }
}

localize(locale, setLocation());

configure(config);
