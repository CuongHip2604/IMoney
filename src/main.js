import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/style.scss";
import { registerGlobalCompoonent } from "./utils/import";
import { projectAuth } from "./configs/firebase";
import mixin from "@/mixins";
import "./plugins/vee-validate";

let app = null;

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    registerGlobalCompoonent(app);

    app.use(router);
    app.mixin(mixin);

    app.mount("#app");
  }
});
